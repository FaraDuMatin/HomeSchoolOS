import { PrismaClient } from "../app/generated/prisma";

const prisma = new PrismaClient();

// Une cohorte pleine (4 élèves) et un cinquième enfant qui attend une place.
// C'est ce cinquième qui sert la démo : essayer de l'ajouter fait apparaître le
// refus légal.
async function main() {
  await prisma.privacyEvent.deleteMany();
  await prisma.recordingConsent.deleteMany();
  await prisma.complianceTask.deleteMany();
  await prisma.exerciseAttempt.deleteMany();
  await prisma.transcriptSegment.deleteMany();
  await prisma.sessionEvent.deleteMany();
  await prisma.attendance.deleteMany();
  await prisma.session.deleteMany();
  await prisma.exercise.deleteMany();
  await prisma.cohortMember.deleteMany();
  await prisma.cohort.deleteMany();
  await prisma.user.deleteMany();

  const supervisor = await prisma.user.create({
    data: { name: "Nadia Bouchard", email: "nadia@hsos.test", role: "SUPERVISOR" },
  });

  const instructor = await prisma.user.create({
    data: { name: "Karim Haddad", email: "karim@hsos.test", role: "INSTRUCTOR" },
  });

  await prisma.user.create({
    data: { name: "Sophie Tremblay", email: "sophie@hsos.test", role: "MANAGER" },
  });

  const parents = await Promise.all(
    ["Amina Sy", "Josée Lavoie", "David Okonkwo", "Marie-Pier Roy", "Hana Farouk"].map((name, i) =>
      prisma.user.create({
        data: { name, email: `parent${i + 1}@hsos.test`, role: "PARENT" },
      }),
    ),
  );

  const students = await Promise.all(
    [
      ["Yacine Sy", 0],
      ["Léa Lavoie", 1],
      ["Noah Okonkwo", 2],
      ["Camille Roy", 3],
      ["Sara Farouk", 4],
    ].map(([name, p]) =>
      prisma.user.create({
        data: {
          name: name as string,
          email: `${(name as string).split(" ")[0].toLowerCase()}@hsos.test`,
          role: "STUDENT",
          parentId: parents[p as number].id,
        },
      }),
    ),
  );

  const cohort = await prisma.cohort.create({
    data: {
      name: "Mardi matin, 3e-4e année",
      gradeBand: "Primaire 3-4",
      language: "FR",
      instructorId: instructor.id,
      supervisorId: supervisor.id,
    },
  });

  // Quatre élèves seulement. Le cinquième, Sara, reste sans cohorte : c'est le
  // cas de démonstration.
  for (const s of students.slice(0, 4)) {
    await prisma.cohortMember.create({ data: { cohortId: cohort.id, studentId: s.id } });
  }

  // Six semaines de blocs passés, plus un bloc du jour laissé à l'état prévu :
  // c'est celui que l'instructeur ouvre pendant la démo. Sans historique, le
  // bilan généré serait vide et la démo ne montrerait rien.
  // Une banque d'exercices, deux par compétence du programme. Deux suffisent :
  // ce qui compte pour le bilan, c'est qu'aucune compétence ne reste sans trace.
  const bank: Record<string, [string, string][]> = {
    "FR-C1": [["Lire un récit et repérer le problème", "Qui a un problème dans l'histoire, et lequel ?"], ["Lire une recette et en extraire l'ordre", "Écris les étapes dans le bon ordre."]],
    "FR-C2": [["Écrire une carte postale", "Raconte ta fin de semaine en cinq phrases."], ["Écrire la suite d'un récit", "Que se passe-t-il après le départ du personnage ?"]],
    "FR-C3": [["Présenter un objet au groupe", "Décris un objet sans le nommer, le groupe devine."], ["Raconter un souvenir", "Raconte un souvenir en respectant l'ordre des événements."]],
    "FR-C4": [["Comparer deux albums", "Lequel préfères-tu, et pourquoi ?"], ["Réagir à un poème", "Quelle image du poème te reste en tête ?"]],
    "EN-C1": [["Introduce yourself", "Say your name, your age and one thing you like."], ["Ask three questions", "Ask a classmate about their weekend."]],
    "EN-C2": [["Read a short comic", "What happens on the last panel?"], ["Follow written instructions", "Draw what the text describes."]],
    "EN-C3": [["Write a short note", "Write four sentences about your favourite animal."], ["Label a picture", "Write the words for what you see."]],
    "MA-C1": [["Partager une collation", "Vous êtes 4 et il y a 18 biscuits. Combien chacun, et combien reste-t-il ?"], ["Organiser une sortie", "Le trajet coûte 3 $ par personne. Combien pour la cohorte ?"]],
    "MA-C2": [["Suite de nombres", "Trouve la règle : 4, 8, 12, 16, ..."], ["Comparer des fractions", "Qu'est-ce qui est plus grand, 3/4 ou 2/3 ? Explique."]],
    "MA-C3": [["Expliquer sa démarche", "Explique comment tu as trouvé, en mots."], ["Lire un diagramme", "Que raconte ce diagramme à bandes ?"]],
    "ST-C1": [["Pourquoi ça flotte", "Propose une explication au fait que le bois flotte."], ["Faire pousser une plante", "Propose une façon de vérifier si la lumière est nécessaire."]],
    "ST-C2": [["Mesurer avec une règle", "Mesure trois objets et note les résultats."], ["Trier des matériaux", "Classe ces matériaux selon s'ils conduisent l'électricité."]],
    "ST-C3": [["Dessiner une observation", "Dessine ce que tu observes et annote ton dessin."], ["Écrire un compte rendu", "Raconte l'expérience en trois étapes."]],
    "US-C1": [["Lire une carte du quartier", "Où sont l'école, le parc et l'épicerie ?"], ["Décrire un territoire", "Comment le fleuve a-t-il influencé où les gens se sont installés ?"]],
    "US-C2": [["Avant et maintenant", "Qu'est-ce qui a changé dans les transports depuis 1900 ?"], ["Ligne du temps", "Place ces cinq événements dans l'ordre."]],
    "US-C3": [["Comparer deux sociétés", "Nomme une ressemblance et une différence."], ["Une fête ailleurs", "Décris une fête d'une autre société."]],
  };

  const exercises: { id: string; competency: string }[] = [];
  for (const [competency, items] of Object.entries(bank)) {
    const subjectKey =
      competency.startsWith("FR") ? "francais"
      : competency.startsWith("EN") ? "anglais"
      : competency.startsWith("MA") ? "mathematiques"
      : competency.startsWith("ST") ? "science"
      : "univers-social";
    for (const [title, prompt] of items) {
      const ex = await prisma.exercise.create({
        data: { title, prompt, competency, subject: subjectKey },
      });
      exercises.push({ id: ex.id, competency });
    }
  }

  const SUBJECTS = ["mathematiques", "francais", "science", "univers-social"];
  const enrolled = students.slice(0, 4);

  for (let week = 6; week >= 1; week--) {
    for (let day = 0; day < 2; day++) {
      const plannedAt = new Date();
      plannedAt.setDate(plannedAt.getDate() - week * 7 + day * 3);
      plannedAt.setHours(8, 30, 0, 0);

      const startedAt = new Date(plannedAt);
      const endedAt = new Date(startedAt.getTime() + 150 * 60 * 1000); // 2 h 30
      const durationSeconds = 150 * 60;

      const session = await prisma.session.create({
        data: {
          cohortId: cohort.id,
          subject: SUBJECTS[(week + day) % SUBJECTS.length],
          plannedAt,
          status: "ENDED",
          startedAt,
          endedAt,
          durationSeconds,
        },
      });

      await prisma.sessionEvent.createMany({
        data: [
          { sessionId: session.id, type: "SESSION_STARTED", occurredAt: startedAt },
          { sessionId: session.id, type: "SESSION_ENDED", occurredAt: endedAt },
        ],
      });

      for (const [i, s] of enrolled.entries()) {
        // Une absence de temps en temps, sinon les chiffres ont l'air inventés.
        const present = !(week === 3 && i === 1);
        await prisma.attendance.create({
          data: {
            sessionId: session.id,
            studentId: s.id,
            present,
            minutes: present ? durationSeconds / 60 : 0,
          },
        });
        await prisma.sessionEvent.create({
          data: {
            sessionId: session.id,
            type: present ? "STUDENT_PRESENT" : "STUDENT_ABSENT",
            actorId: s.id,
            occurredAt: startedAt,
          },
        });

        if (!present) continue;

        // Deux exercices complétés par élève et par bloc, tirés de la matière du
        // bloc. Six semaines de ce régime laissent chaque compétence avec des
        // traces, sauf une ou deux volontairement à zéro : le tableau de bord du
        // parent doit avoir quelque chose à signaler.
        const pool = exercises.filter((e) => {
          const key =
            e.competency.startsWith("FR") ? "francais"
            : e.competency.startsWith("EN") ? "anglais"
            : e.competency.startsWith("MA") ? "mathematiques"
            : e.competency.startsWith("ST") ? "science"
            : "univers-social";
          return key === session.subject && !e.competency.endsWith("C4");
        });

        for (let k = 0; k < 2 && pool.length > 0; k++) {
          const pick = pool[(week * 3 + day * 2 + i + k) % pool.length];
          await prisma.exerciseAttempt.create({
            data: {
              exerciseId: pick.id,
              studentId: s.id,
              sessionId: session.id,
              completed: true,
              answer: null,
              completedAt: new Date(startedAt.getTime() + (k + 1) * 30 * 60 * 1000),
            },
          });
        }
      }
    }
  }

  // --- Conformite -----------------------------------------------------------
  //
  // L'annee scolaire bascule au 1er juillet. On est donc apres l'avis et avant
  // le projet d'apprentissage. Trois familles ont envoye leur avis, une ne l'a
  // pas fait : sans ce retard, le calendrier serait tout vert et ne prouverait
  // rien. C'est le meme role que Sara dans la demo du plafond de 4.
  const now = new Date();
  const schoolYear = `${now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1}-${
    now.getMonth() >= 6 ? now.getFullYear() + 1 : now.getFullYear()
  }`;

  for (const [i, s] of students.entries()) {
    if (i === 2) continue; // Noah Okonkwo : avis jamais envoye, donc en retard.
    const sent = new Date(now.getFullYear(), 5, 20 + i); // fin juin, avant le 1er juillet
    await prisma.complianceTask.create({
      data: { studentId: s.id, key: "avis", schoolYear, completedAt: sent },
    });
  }

  // --- Loi 25 ---------------------------------------------------------------
  //
  // Le parent de demonstration a consenti, les autres non : le defaut du systeme
  // est le refus, et l'ecran doit pouvoir montrer les deux etats.
  //
  // Les segments de transcription ci-dessous sont des donnees de test. Le module
  // d'enregistrement n'existe pas encore. Ils sont la pour que le bouton de
  // suppression ait quelque chose de reel a detruire : un bouton qui supprime
  // zero ligne ne demontre rien. Deux d'entre eux sont dates d'il y a plus de
  // 90 jours pour que la purge de retention ait, elle aussi, du travail.
  await prisma.recordingConsent.create({
    data: { studentId: students[0].id, granted: true, retentionDays: 90 },
  });
  await prisma.privacyEvent.create({
    data: {
      studentId: students[0].id,
      type: "CONSENT_GRANTED",
      detail:
        "Transcrire ce qui se dit pendant le bloc pour produire les traces datees exigees dans le bilan.",
      occurredAt: new Date(now.getTime() - 120 * 86400000),
    },
  });

  const endedSessions = await prisma.session.findMany({
    where: { status: "ENDED" },
    orderBy: { plannedAt: "desc" },
    take: 6,
  });

  const lines: [string, string][] = [
    ["instructor", "On reprend la comparaison de fractions de la semaine derniere."],
    ["student", "Trois quarts c'est plus grand parce que le quart est plus petit que le tiers."],
    ["instructor", "Explique-moi comment tu le sais sans dessiner."],
    ["student", "Si je coupe la pizza en quatre les morceaux sont plus petits qu'en trois."],
    ["instructor", "Bien. Ecris ta demarche en mots dans ton cahier."],
    ["student", "Est-ce que je peux faire le dessin en plus des mots ?"],
  ];

  for (const [i, session] of endedSessions.entries()) {
    for (const [k, [speaker, text]] of lines.entries()) {
      const age = i < 2 ? 100 + i * 5 : 20 + i * 3; // deux blocs au-dela de 90 jours
      await prisma.transcriptSegment.create({
        data: {
          sessionId: session.id,
          speaker,
          text,
          studentId: speaker === "student" ? students[0].id : null,
          startsAtMs: k * 45_000,
          createdAt: new Date(now.getTime() - age * 86400000),
        },
      });
    }
  }

  const today = new Date();
  today.setHours(8, 30, 0, 0);
  const liveSession = await prisma.session.create({
    data: {
      cohortId: cohort.id,
      subject: "mathematiques",
      plannedAt: today,
      status: "SCHEDULED",
    },
  });

  console.log("Seed terminé.");
  console.log(`Cohorte « ${cohort.name} » : 4 élèves.`);
  console.log(`Élève sans cohorte, pour la démo : ${students[4].name}`);
  console.log(`Bloc à ouvrir pendant la démo : /sessions/${liveSession.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
