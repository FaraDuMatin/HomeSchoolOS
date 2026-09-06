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
    <form action={action} className="mt-4 border-t border-rule pt-4">
      <input type="hidden" name="cohortId" value={cohortId} />
      <div className="flex flex-wrap items-center gap-2">
        <select
          name="studentId"
          className="rounded border border-rule bg-surface px-3 py-2 text-sm dark:bg-surface-2"
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
          className="rounded bg-ink px-3 py-2 text-sm font-medium text-bg disabled:opacity-50"
        >
          {pending ? "Ajout…" : "Ajouter à la cohorte"}
        </button>
        {full && (
          <span className="text-xs text-soon">
            Cohorte pleine. Essayez quand même, c&apos;est le point.
          </span>
        )}
      </div>

      {state.message && (
        <p
          className={
            state.legal
              ? "mt-3 rounded border-l-4 border-late bg-late p-3 text-sm text-late bg-late/40"
              : state.ok
                ? "mt-3 text-sm text-done"
                : "mt-3 text-sm text-late"
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
