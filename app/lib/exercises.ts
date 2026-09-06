import { prisma } from "./db";
import { ALL_COMPETENCIES, SUBJECTS } from "./pfeq";

/**
 * Exercices et tentatives.
 *
 * Une tentative complétée est la plus petite unité de preuve du système : elle
 * porte un élève, une date, une séance et une compétence du programme. C'est ce
 * quadruplet qui devient une « trace datée » dans le bilan remis au ministère.
 */

export async function listExercisesForSubject(subjectKey: string) {
  const subject = SUBJECTS.find((s) => s.key === subjectKey);
  if (!subject) return [];
  const codes = subject.competencies.map((c) => c.code);
  return prisma.exercise.findMany({
    where: { competency: { in: codes } },
    orderBy: { competency: "asc" },
  });
}

export async function completeExercise(args: {
  exerciseId: string;
  studentId: string;
  sessionId: string;
  answer?: string;
}) {
  return prisma.exerciseAttempt.create({
    data: {
      exerciseId: args.exerciseId,
      studentId: args.studentId,
      sessionId: args.sessionId,
      answer: args.answer ?? null,
      completed: true,
      completedAt: new Date(),
    },
  });
}

/** Toutes les tentatives complétées d'un élève, les plus récentes en premier. */
export async function attemptsForStudent(studentId: string) {
  return prisma.exerciseAttempt.findMany({
    where: { studentId, completed: true },
    include: { exercise: true, session: true },
    orderBy: { completedAt: "desc" },
  });
}

export type CoverageRow = {
  code: string;
  label: string;
  subjectKey: string;
  subjectLabel: string;
  count: number;
};

/**
 * Couverture des compétences pour un élève.
 *
 * C'est l'écran qui dit au parent ce qui manque avant le 15 juin. La DEM attend
 * trois exemples par matière et le refus vient de l'absence de traces, pas de
 * leur qualité — donc compter suffit, et compter est vérifiable.
 */
export async function coverageForStudent(studentId: string): Promise<CoverageRow[]> {
  const attempts = await prisma.exerciseAttempt.findMany({
    where: { studentId, completed: true },
    include: { exercise: true },
  });

  const counts = new Map<string, number>();
  for (const a of attempts) {
    counts.set(a.exercise.competency, (counts.get(a.exercise.competency) ?? 0) + 1);
  }

  return ALL_COMPETENCIES.map((c) => {
    const subject = SUBJECTS.find((s) => s.competencies.some((x) => x.code === c.code))!;
    return {
      code: c.code,
      label: c.label,
      subjectKey: subject.key,
      subjectLabel: subject.label,
      count: counts.get(c.code) ?? 0,
    };
  });
}
