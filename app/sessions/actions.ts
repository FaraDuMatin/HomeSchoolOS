"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";
import { completeExercise } from "../lib/exercises";
import { endSession, markAttendance, startSession } from "../lib/session";

/**
 * Bascule la complétion d'un exercice pour un élève dans ce bloc.
 *
 * Une bascule plutôt qu'un ajout : l'instructeur clique vite pendant qu'il
 * enseigne, et un clic de travers doit pouvoir se défaire sans qu'il ait à
 * chercher où.
 */
export async function toggleExerciseAction(formData: FormData) {
  const sessionId = String(formData.get("sessionId"));
  const exerciseId = String(formData.get("exerciseId"));
  const studentId = String(formData.get("studentId"));

  const existing = await prisma.exerciseAttempt.findFirst({
    where: { sessionId, exerciseId, studentId },
  });

  if (existing) {
    await prisma.exerciseAttempt.delete({ where: { id: existing.id } });
  } else {
    await completeExercise({ sessionId, exerciseId, studentId });
  }

  revalidatePath(`/sessions/${sessionId}`);
}

export async function startSessionAction(formData: FormData) {
  const id = String(formData.get("sessionId"));
  await startSession(id);
  revalidatePath(`/sessions/${id}`);
}

export async function endSessionAction(formData: FormData) {
  const id = String(formData.get("sessionId"));
  await endSession(id);
  revalidatePath(`/sessions/${id}`);
}

export async function markAttendanceAction(formData: FormData) {
  const id = String(formData.get("sessionId"));
  const studentId = String(formData.get("studentId"));
  const present = formData.get("present") === "true";
  await markAttendance(id, studentId, present);
  revalidatePath(`/sessions/${id}`);
}
