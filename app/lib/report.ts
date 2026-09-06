import { prisma } from "./db";
import { competencyLabel, SUBJECTS, type Subject } from "./pfeq";

/**
 * Le bilan de progression.
 *
 * C'est le seul écran qui transforme des heures d'enseignement en un document
 * que le ministère accepte. Tout ce qu'il contient est LU depuis les séances,
 * les présences et les exercices complétés. Rien n'est rédigé à la main, et
 * aucun endpoint n'accepte de texte pour ce document.
 *
 * Le contenu suit ce que la Direction de l'enseignement à la maison attend :
 * identification de l'enfant, type d'évaluation, commentaire général sur la
 * progression, commentaire par matière, traces datées, trois exemples par
 * matière, intention pédagogique de chaque élément et jugement sur la
 * progression.
 *
 * L'AQED documente que les bilans qui ne couvrent pas toutes les compétences
 * d'une matière « se voyaient refusés ou devaient être modifiés ». C'est
 * pourquoi la couverture par compétence est calculée et affichée, y compris les
 * trous.
 */

/** La DEM attend trois exemples par matière. */
export const TRACES_PER_SUBJECT = 3;

export type Trace = {
  date: Date;
  exerciseTitle: string;
  competency: string;
  competencyLabel: string;
  /** L'intention pédagogique, exigée pour chaque élément du portfolio. */
  intent: string;
};

export type SubjectSection = {
  subject: Subject;
  /** Nombre de compétences de la matière qui portent au moins une trace. */
  covered: number;
  total: number;
  competencies: { code: string; label: string; count: number }[];
  traces: Trace[];
  attempts: number;
  comment: string;
};

export type Report = {
  student: { id: string; name: string; parentName: string | null };
  period: { from: Date; to: Date };
  sessionsAttended: number;
  sessionsTotal: number;
  minutesAttended: number;
  attemptsTotal: number;
  subjects: SubjectSection[];
  overallComment: string;
  gaps: string[];
  generatedAt: Date;
};

/**
 * Rédige le commentaire d'une matière.
 *
 * Volontairement mécanique : chaque phrase est vérifiable dans les données
 * au-dessus. Un texte plus fleuri se lirait mieux et vaudrait moins, parce que
 * le parent signe ce document et doit pouvoir en défendre chaque ligne.
 */
function subjectComment(s: Subject, covered: number, total: number, attempts: number): string {
  if (attempts === 0) {
    return `Aucun travail consigné en ${s.label.toLowerCase()} pour la période. Cette matière doit être documentée avant le dépôt du bilan.`;
  }
  const missing = total - covered;
  const base = `${attempts} travaux consignés, couvrant ${covered} des ${total} compétences du programme`;
  if (missing === 0) {
    return `${base}. Toutes les compétences de la matière portent au moins une trace datée.`;
  }
  return `${base}. ${missing} compétence${missing > 1 ? "s" : ""} reste${
    missing > 1 ? "nt" : ""
  } sans trace et doi${missing > 1 ? "vent" : "t"} être documentée${missing > 1 ? "s" : ""} avant le 15 juin.`;
}

export async function buildReport(studentId: string): Promise<Report | null> {
  const student = await prisma.user.findUnique({
    where: { id: studentId },
    include: { parent: true },
  });
  if (!student) return null;

  const attempts = await prisma.exerciseAttempt.findMany({
    where: { studentId, completed: true },
    include: { exercise: true, session: true },
    orderBy: { completedAt: "asc" },
  });

  const attendance = await prisma.attendance.findMany({
    where: { studentId },
    include: { session: true },
  });

  const attended = attendance.filter((a) => a.present);
  const minutesAttended = attended.reduce((sum, a) => sum + a.minutes, 0);

  const dates = [
    ...attempts.map((a) => a.completedAt),
    ...attended.map((a) => a.session.plannedAt),
  ].sort((a, b) => a.getTime() - b.getTime());

  const subjects: SubjectSection[] = SUBJECTS.map((s) => {
    const codes = s.competencies.map((c) => c.code);
    const forSubject = attempts.filter((a) => codes.includes(a.exercise.competency));

    const perCompetency = s.competencies.map((c) => ({
      code: c.code,
      label: c.label,
      count: forSubject.filter((a) => a.exercise.competency === c.code).length,
    }));

    const covered = perCompetency.filter((c) => c.count > 0).length;

    // Trois traces, et on prend les plus récentes de compétences différentes
    // quand c'est possible : trois exemples de la même compétence prouvent
    // moins qu'un exemple de trois compétences.
    const seen = new Set<string>();
    const spread = [...forSubject].reverse().filter((a) => {
      if (seen.has(a.exercise.competency)) return false;
      seen.add(a.exercise.competency);
      return true;
    });
    const chosen = [...spread, ...[...forSubject].reverse().filter((a) => !spread.includes(a))].slice(
      0,
      TRACES_PER_SUBJECT,
    );

    return {
      subject: s,
      covered,
      total: s.competencies.length,
      competencies: perCompetency,
      attempts: forSubject.length,
      traces: chosen.map((a) => ({
        date: a.completedAt,
        exerciseTitle: a.exercise.title,
        competency: a.exercise.competency,
        competencyLabel: competencyLabel(a.exercise.competency),
        intent: `Développer la compétence « ${competencyLabel(a.exercise.competency)} » en ${s.label.toLowerCase()}.`,
      })),
      comment: subjectComment(s, covered, s.competencies.length, forSubject.length),
    };
  });

  const gaps = subjects
    .flatMap((s) =>
      s.competencies
        .filter((c) => c.count === 0)
        .map((c) => `${s.subject.label} · ${c.code} ${c.label}`),
    );

  const totalCovered = subjects.reduce((n, s) => n + s.covered, 0);
  const totalCompetencies = subjects.reduce((n, s) => n + s.total, 0);

  const overallComment =
    `${student.name} a participé à ${attended.length} blocs d'enseignement pour un total de ` +
    `${Math.round(minutesAttended / 60)} heures, et a complété ${attempts.length} travaux. ` +
    `Ces travaux couvrent ${totalCovered} des ${totalCompetencies} compétences du programme. ` +
    (gaps.length === 0
      ? `Toutes les compétences portent au moins une trace datée.`
      : `${gaps.length} compétences restent sans trace et sont listées à la fin du présent bilan.`);

  return {
    student: {
      id: student.id,
      name: student.name,
      parentName: student.parent?.name ?? null,
    },
    period: {
      from: dates[0] ?? new Date(),
      to: dates[dates.length - 1] ?? new Date(),
    },
    sessionsAttended: attended.length,
    sessionsTotal: attendance.length,
    minutesAttended,
    attemptsTotal: attempts.length,
    subjects,
    overallComment,
    gaps,
    generatedAt: new Date(),
  };
}
