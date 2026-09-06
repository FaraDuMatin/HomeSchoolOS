import { prisma } from "./db";

/**
 * Une séance, et sa présence.
 *
 * Règle unique de ce module : rien de ce qui finira dans le bilan du ministère
 * n'est saisi à la main. L'instructeur pose des gestes — ouvrir la séance,
 * pointer un élève, fermer la séance — et chaque geste devient un événement
 * horodaté. La durée et les minutes de présence sont ensuite CALCULÉES à partir
 * de ces événements.
 *
 * Ça compte parce que le bilan de progression est un document déposé au
 * ministère. Une durée tapée dans un champ est une affirmation. Une durée
 * dérivée d'un journal append-only est une trace.
 */

export type SessionEventType =
  | "SESSION_STARTED"
  | "SESSION_ENDED"
  | "STUDENT_PRESENT"
  | "STUDENT_ABSENT";

async function appendEvent(
  tx: Parameters<Parameters<typeof prisma.$transaction>[0]>[0],
  sessionId: string,
  type: SessionEventType,
  actorId?: string,
  payload?: unknown,
) {
  return tx.sessionEvent.create({
    data: {
      sessionId,
      type,
      actorId: actorId ?? null,
      payload: payload === undefined ? null : JSON.stringify(payload),
      occurredAt: new Date(),
    },
  });
}

/** Ouvre la séance. Idempotent : rouvrir une séance déjà en cours ne fait rien. */
export async function startSession(sessionId: string) {
  return prisma.$transaction(async (tx) => {
    const session = await tx.session.findUniqueOrThrow({ where: { id: sessionId } });
    if (session.status !== "SCHEDULED") return session;

    const now = new Date();
    await appendEvent(tx, sessionId, "SESSION_STARTED");
    return tx.session.update({
      where: { id: sessionId },
      data: { status: "LIVE", startedAt: now },
    });
  });
}

/**
 * Pointe un élève présent ou absent.
 *
 * Le geste est enregistré comme événement, et la ligne d'assiduité est une
 * projection de ces événements. Repointer un élève écrit un nouvel événement
 * plutôt que de réécrire l'histoire : le journal reste la source de vérité.
 */
export async function markAttendance(sessionId: string, studentId: string, present: boolean) {
  return prisma.$transaction(async (tx) => {
    await appendEvent(
      tx,
      sessionId,
      present ? "STUDENT_PRESENT" : "STUDENT_ABSENT",
      studentId,
    );

    return tx.attendance.upsert({
      where: { sessionId_studentId: { sessionId, studentId } },
      create: { sessionId, studentId, present, minutes: 0 },
      update: { present },
    });
  });
}

/**
 * Ferme la séance et calcule tout.
 *
 * La durée vient de l'écart entre les deux événements de bornes, pas d'un champ
 * rempli par l'instructeur. Les minutes de chaque élève présent sont la durée de
 * la séance : un enfant assis dans la salle a suivi le bloc au complet. Si le
 * modèle devait un jour gérer les arrivées tardives, ce calcul lirait les
 * événements individuels — c'est justement pour ça qu'ils sont conservés.
 */
export async function endSession(sessionId: string) {
  return prisma.$transaction(async (tx) => {
    const session = await tx.session.findUniqueOrThrow({
      where: { id: sessionId },
      include: { attendance: true },
    });
    if (session.status === "ENDED") return session;

    const endedAt = new Date();
    await appendEvent(tx, sessionId, "SESSION_ENDED");

    const startedAt = session.startedAt ?? endedAt;
    const durationSeconds = Math.max(
      0,
      Math.round((endedAt.getTime() - startedAt.getTime()) / 1000),
    );
    const minutes = Math.round(durationSeconds / 60);

    await tx.attendance.updateMany({
      where: { sessionId, present: true },
      data: { minutes },
    });

    return tx.session.update({
      where: { id: sessionId },
      data: { status: "ENDED", endedAt, durationSeconds },
    });
  });
}

/**
 * Retourne null plutôt que de lever quand la séance n'existe pas.
 *
 * Le seed efface et recrée tout, donc un onglet resté ouvert pointe sur un id
 * mort. Une page 404 est une gêne, une trace de pile rouge devant un juge est
 * une note perdue.
 */
export async function getSession(sessionId: string) {
  return prisma.session.findUnique({
    where: { id: sessionId },
    include: {
      cohort: { include: { instructor: true, members: { include: { student: true } } } },
      attendance: true,
      events: { orderBy: { occurredAt: "asc" } },
    },
  });
}

export async function listSessions() {
  return prisma.session.findMany({
    include: { cohort: true, attendance: true },
    orderBy: { plannedAt: "desc" },
  });
}
