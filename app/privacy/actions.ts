"use server";

import { revalidatePath } from "next/cache";
import { deleteTranscripts, purgeExpired, setConsent, setRetention } from "../lib/privacy";

export async function setConsentAction(formData: FormData) {
  const studentId = String(formData.get("studentId"));
  const granted = formData.get("granted") === "true";
  await setConsent(studentId, granted);
  revalidatePath("/privacy");
}

export async function setRetentionAction(formData: FormData) {
  const studentId = String(formData.get("studentId"));
  const days = Number(formData.get("days"));
  if (!Number.isFinite(days) || days <= 0) return;
  await setRetention(studentId, days);
  revalidatePath("/privacy");
}

export async function deleteTranscriptsAction(formData: FormData) {
  const studentId = String(formData.get("studentId"));
  await deleteTranscripts(studentId);
  revalidatePath("/privacy");
}

export async function purgeExpiredAction(formData: FormData) {
  const studentId = String(formData.get("studentId"));
  await purgeExpired(studentId);
  revalidatePath("/privacy");
}
