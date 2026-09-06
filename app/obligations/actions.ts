"use server";

import { revalidatePath } from "next/cache";
import { setObligationDone } from "../lib/compliance";

/**
 * Le parent coche lui-même.
 *
 * Le système ne peut pas savoir qu'une lettre a été postée à la DEM, donc il ne
 * fait pas semblant de le savoir. Ce que le produit apporte, ce n'est pas la
 * détection automatique, c'est que la date limite arrive avant l'oubli plutôt
 * qu'après.
 */
export async function toggleObligationAction(formData: FormData) {
  const studentId = String(formData.get("studentId"));
  const key = String(formData.get("key"));
  const schoolYear = String(formData.get("schoolYear"));
  const done = formData.get("done") === "true";

  await setObligationDone(studentId, key, schoolYear, done);
  revalidatePath("/obligations");
  revalidatePath("/parent");
}
