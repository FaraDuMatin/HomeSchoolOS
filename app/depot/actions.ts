"use server";

import { revalidatePath } from "next/cache";
import { depositWork } from "../lib/deposit";

/**
 * L'élève dépose son travail.
 *
 * Un champ de texte, pas un téléversement de fichier : ce qui compte pour le
 * bilan, c'est qu'il existe une trace datée rattachée à une compétence, et un
 * fichier stocké quelque part sans cette étiquette ne prouve rien de plus.
 */
export async function depositAction(formData: FormData) {
  const blockId = String(formData.get("blockId"));
  const studentId = String(formData.get("studentId"));
  const answer = String(formData.get("answer") ?? "").trim();

  if (!answer) return;

  await depositWork({ blockId, studentId, answer });

  revalidatePath(`/depot/${blockId}`);
  revalidatePath("/horaire");
  revalidatePath(`/report/${studentId}`);
}
