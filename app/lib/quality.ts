import { prisma } from "./db";
import { ALL_COMPETENCIES, SUBJECTS } from "./pfeq";

/**
 * La vue du superviseur.
 *
 * Le modèle d'affaires repose sur une pyramide : un enseignant breveté coûte
 * 61 602 $ par an, donc on ne peut pas en mettre un dans chaque salle. On en met
 * un pour quatre instructeurs. Cette page est ce qui rend cette phrase
 * défendable : sans elle, « supervisé par un enseignant breveté » n'est qu'une
 * affirmation sur un slide.
 *
 * Les indicateurs ci-dessous sont volontairement des COMPTES, pas des scores
 * produits par un modèle. Un superviseur doit pouvoir contester un chiffre en
 * ouvrant le bloc qui l'a produit, et un parent doit pouvoir comprendre ce
 * qu'on mesure. Un jugement de boîte noire sur la qualité d'un enseignant
 * n'aurait ni l'un ni l'autre.
 *
 * Les indicateurs tirés des transcriptions — ratio de parole, nombre de
 * questions posées — arrivent avec la transcription et ne sont pas ici.
 */

/** Durée prévue d'un bloc, en minutes. */
export const PLANNED_BLOCK_MINUTES = 150;

export type StudentQuality = {
  id: string;
  name: string;
  attended: number;
  scheduled: number;
  attendanceRate: number;
  attempts: number;
  competenciesCovered: number;
  competenciesTotal: number;
};

export type CohortQuality = {
  id: string;
  name: string;
  instructor: string;
  supervisor: string | null;
  blocksDelivered: number;
  minutesDelivered: number;
  minutesPlanned: number;
  /** Minutes livrées sur minutes prévues. Sous 0,9, le bloc est écourté. */
  deliveryRatio: number;
  attendanceRate: number;
  attemptsPerStudentPerBlock: number;
  subjectsTouched: number;
  subjectsTotal: number;
  students: StudentQuality[];
  flags: string[];
};

export async function cohortQuality(): Promise<CohortQuality[]> {
  const cohorts = await prisma.cohort.findMany({
    include: {
      instructor: true,
      supervisor: true,
      members: { include: { student: true } },
      sessions: { include: { attendance: true } },
    },
    orderBy: { name: "asc" },
  });

  return Promise.all(
    cohorts.map(async (c) => {
      const ended = c.sessions.filter((s) => s.status === "ENDED");
      const minutesDelivered = ended.reduce(
        (sum, s) => sum + Math.round((s.durationSeconds ?? 0) / 60),
        0,
      );
      const minutesPlanned = ended.length * PLANNED_BLOCK_MINUTES;

      const attendanceRows = ended.flatMap((s) => s.attendance);
      const presentRows = attendanceRows.filter((a) => a.present);
      const attendanceRate =
        attendanceRows.length > 0 ? presentRows.length / attendanceRows.length : 0;

      const sessionIds = ended.map((s) => s.id);
      const attempts = await prisma.exerciseAttempt.findMany({
        where: { sessionId: { in: sessionIds }, completed: true },
        include: { exercise: true },
      });

      const subjectsTouched = new Set(ended.map((s) => s.subject)).size;

      const students: StudentQuality[] = await Promise.all(
        c.members.map(async ({ student }) => {
          const mine = attendanceRows.filter((a) => a.studentId === student.id);
          const attended = mine.filter((a) => a.present).length;
          const myAttempts = await prisma.exerciseAttempt.findMany({
            where: { studentId: student.id, completed: true },
            include: { exercise: true },
          });
          const covered = new Set(myAttempts.map((a) => a.exercise.competency)).size;
          return {
            id: student.id,
            name: student.name,
            attended,
            scheduled: mine.length,
            attendanceRate: mine.length > 0 ? attended / mine.length : 0,
            attempts: myAttempts.length,
            competenciesCovered: covered,
            competenciesTotal: ALL_COMPETENCIES.length,
          };
        }),
      );

      const attemptsPerStudentPerBlock =
        presentRows.length > 0 ? attempts.length / presentRows.length : 0;

      // Les signaux qui méritent une conversation, pas une sanction. Chacun
      // renvoie à un chiffre visible juste au-dessus.
      const flags: string[] = [];
      const deliveryRatio = minutesPlanned > 0 ? minutesDelivered / minutesPlanned : 0;
      if (ended.length > 0 && deliveryRatio < 0.9) {
        flags.push(
          `Blocs écourtés : ${Math.round(deliveryRatio * 100)} % du temps prévu a été livré.`,
        );
      }
      if (attendanceRate > 0 && attendanceRate < 0.85) {
        flags.push(
          `Assiduité à ${Math.round(attendanceRate * 100)} %. Vérifier si l'horaire convient aux familles.`,
        );
      }
      if (ended.length > 0 && attemptsPerStudentPerBlock < 1.5) {
        flags.push(
          `${attemptsPerStudentPerBlock.toFixed(1)} travaux consignés par élève et par bloc. Sous deux, le bilan manquera de traces.`,
        );
      }
      if (subjectsTouched < SUBJECTS.length) {
        const missing = SUBJECTS.filter((s) => !ended.some((e) => e.subject === s.key)).map(
          (s) => s.label,
        );
        flags.push(`Aucun bloc en ${missing.join(", ").toLowerCase()}.`);
      }
      for (const s of students) {
        if (s.attendanceRate > 0 && s.attendanceRate < 0.8) {
          flags.push(`${s.name} a manqué ${s.scheduled - s.attended} blocs sur ${s.scheduled}.`);
        }
      }

      return {
        id: c.id,
        name: c.name,
        instructor: c.instructor.name,
        supervisor: c.supervisor?.name ?? null,
        blocksDelivered: ended.length,
        minutesDelivered,
        minutesPlanned,
        deliveryRatio,
        attendanceRate,
        attemptsPerStudentPerBlock,
        subjectsTouched,
        subjectsTotal: SUBJECTS.length,
        students,
        flags,
      };
    }),
  );
}
