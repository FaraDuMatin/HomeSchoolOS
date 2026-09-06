"use client";

import { useActionState } from "react";
import { addStudentAction, type AddStudentState } from "./actions";

const initial: AddStudentState = { ok: false, message: "" };

export function AddStudentForm({
  cohortId,
  candidates,
  full,
}: {
  cohortId: string;
  candidates: { id: string; name: string }[];
  full: boolean;
}) {
  const [state, action, pending] = useActionState(addStudentAction, initial);

  return (
    <form action={action} className="mt-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
      <input type="hidden" name="cohortId" value={cohortId} />
      <div className="flex flex-wrap items-center gap-2">
        <select
          name="studentId"
          className="rounded border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          defaultValue=""
        >
          <option value="" disabled>
            Choisir un élève…
          </option>
          {candidates.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-neutral-900 px-3 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-white dark:text-neutral-900"
        >
          {pending ? "Ajout…" : "Ajouter à la cohorte"}
        </button>
        {full && (
          <span className="text-xs text-amber-700 dark:text-amber-500">
            Cohorte pleine. Essayez quand même, c&apos;est le point.
          </span>
        )}
      </div>

      {state.message && (
        <p
          className={
            state.legal
              ? "mt-3 rounded border-l-4 border-red-600 bg-red-50 p-3 text-sm text-red-900 dark:bg-red-950/40 dark:text-red-200"
              : state.ok
                ? "mt-3 text-sm text-green-700 dark:text-green-400"
                : "mt-3 text-sm text-red-700 dark:text-red-400"
          }
        >
          {state.legal && (
            <strong className="mb-1 block font-mono text-xs uppercase tracking-wider">
              Refus légal · COHORT_LEGAL_CAP_EXCEEDED
            </strong>
          )}
          {state.message}
        </p>
      )}
    </form>
  );
}
