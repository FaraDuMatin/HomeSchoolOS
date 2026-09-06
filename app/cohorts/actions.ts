"use server";

import { revalidatePath } from "next/cache";
import { addStudentToCohort, CohortCapExceededError } from "../lib/cohort";

export type AddStudentState = { ok: boolean; message: string; legal?: boolean };

export async function addStudentAction(
  _prev: AddStudentState,
  formData: FormData,
): Promise<AddStudentState> {
  const cohortId = String(formData.get("cohortId") ?? "");
  const studentId = String(formData.get("studentId") ?? "");

  if (!cohortId || !studentId) {
    return { ok: false, message: "Choisissez un élève." };
  }

  try {
    await addStudentToCohort(cohortId, studentId);
    revalidatePath("/cohorts");
    return { ok: true, message: "Élève ajouté." };
  } catch (e) {
    // Le refus légal n'est pas une erreur technique : c'est le produit qui fait
    // son travail. Il est distingué pour que l'interface puisse l'expliquer.
    if (e instanceof CohortCapExceededError) {
      return { ok: false, legal: true, message: e.message };
    }
    return { ok: false, message: "Impossible d'ajouter cet élève." };
  }
}
