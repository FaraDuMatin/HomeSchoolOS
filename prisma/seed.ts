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

  console.log("Seed terminé.");
  console.log(`Cohorte « ${cohort.name} » : 4 élèves.`);
  console.log(`Élève sans cohorte, pour la démo : ${students[4].name} (${students[4].id})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
