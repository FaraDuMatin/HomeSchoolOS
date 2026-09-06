"use server";

import { revalidatePath } from "next/cache";
import { endSession, markAttendance, startSession } from "../lib/session";

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
