import { PrismaClient } from "../app/generated/prisma";

const prisma = new PrismaClient();

// Une cohorte pleine (4 élèves) et un cinquième enfant qui attend une place.
// C'est ce cinquième qui sert la démo : essayer de l'ajouter fait apparaître le
// refus légal.
async function main() {
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
  const SUBJECTS = ["mathématiques", "français", "science et technologie", "univers social"];
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
      }
    }
  }

  const today = new Date();
  today.setHours(8, 30, 0, 0);
  const liveSession = await prisma.session.create({
    data: {
      cohortId: cohort.id,
      subject: "mathématiques",
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
