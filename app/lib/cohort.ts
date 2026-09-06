import { prisma } from "./db";

/**
 * Le plafond légal d'une cohorte.
 *
 * La Loi sur l'enseignement privé (RLRQ c E-9.1) exempte de permis une personne
 * physique qui enseigne SEULE à MOINS DE CINQ élèves à la fois, pourvu que ces
 * élèves remplissent autrement leur obligation de fréquentation scolaire — ce
 * que fait l'enseignement à la maison.
 *
 * Quatre est donc le maximum, et ce n'est pas un choix pédagogique.
 */
export const LEGAL_COHORT_CAP = 4;

export class CohortCapExceededError extends Error {
  readonly code = "COHORT_LEGAL_CAP_EXCEEDED";
  readonly cap = LEGAL_COHORT_CAP;

  constructor(readonly cohortName: string, readonly currentSize: number) {
    super(
      `La cohorte « ${cohortName} » compte déjà ${currentSize} élèves. ` +
        `Une personne qui enseigne seule à moins de cinq élèves est exemptée de permis ` +
        `(Loi sur l'enseignement privé, E-9.1). Un cinquième élève ferait de ce centre ` +
        `un établissement d'enseignement privé : permis du ministère via ETAPE, ` +
        `inscription GDUNO, programme complet, et demande déposée au plus tard le ` +
        `1er septembre de l'année précédente.`,
    );
    this.name = "CohortCapExceededError";
  }
}

/**
 * Ajoute un élève à une cohorte.
 *
 * La vérification et l'insertion sont dans une seule transaction : sans ça, deux
 * inscriptions simultanées liraient toutes les deux « 4 élèves » et écriraient
 * toutes les deux, ce qui donnerait 6. SQLite sérialise les transactions en
 * écriture, donc le compte lu ici est celui qui vaut au moment de l'insertion.
 */
export async function addStudentToCohort(cohortId: string, studentId: string) {
  return prisma.$transaction(async (tx) => {
    const cohort = await tx.cohort.findUniqueOrThrow({
      where: { id: cohortId },
      include: { _count: { select: { members: true } } },
    });

    if (cohort._count.members >= LEGAL_COHORT_CAP) {
      throw new CohortCapExceededError(cohort.name, cohort._count.members);
    }

    return tx.cohortMember.create({ data: { cohortId, studentId } });
  });
}

export async function listCohorts() {
  return prisma.cohort.findMany({
    include: {
      instructor: true,
      supervisor: true,
      members: { include: { student: true } },
    },
    orderBy: { name: "asc" },
  });
}
