import { prisma } from "../lib/db";
import { LEGAL_COHORT_CAP, listCohorts } from "../lib/cohort";
import { AddStudentForm } from "./AddStudentForm";

export const dynamic = "force-dynamic";

export default async function CohortsPage() {
  const cohorts = await listCohorts();

  // Les élèves qui n'appartiennent encore à aucune cohorte. Le seed en laisse
  // un exprès : il sert à déclencher le refus pendant la démo.
  const unassigned = await prisma.user.findMany({
    where: { role: "STUDENT", memberships: { none: {} } },
    orderBy: { name: "asc" },
  });

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-10 border-b-2 border-ink pb-6 dark:border-ink">
        <p className="eyebrow">
          HomeSchoolOs · Cohortes
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Quatre élèves, jamais cinq
        </h1>
        <p className="mt-3 max-w-prose text-ink-2 dark:text-ink-2">
          La Loi sur l&apos;enseignement privé exempte de permis une personne qui enseigne seule à
          moins de cinq élèves à la fois. Ce plafond n&apos;est pas une politique interne, il est
          appliqué par le code à chaque inscription.
        </p>
      </header>

      {cohorts.map((cohort) => {
        const size = cohort.members.length;
        const full = size >= LEGAL_COHORT_CAP;

        return (
          <section
            key={cohort.id}
            className="mb-8 rounded border border-rule bg-surface p-6 dark:border-rule dark:bg-ink"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-xl font-semibold">{cohort.name}</h2>
              <span
                className={`font-mono text-sm tabular-nums ${
                  full ? "text-late" : "text-ink-2"
                }`}
              >
                {size} / {LEGAL_COHORT_CAP}
              </span>
            </div>

            <p className="mt-1 text-sm text-ink-2">
              {cohort.gradeBand} · Instructeur {cohort.instructor.name}
              {cohort.supervisor && ` · Supervision ${cohort.supervisor.name}`}
            </p>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {cohort.members.map((m) => (
                <li
                  key={m.id}
                  className="rounded border border-rule px-3 py-2 text-sm dark:border-rule"
                >
                  {m.student.name}
                </li>
              ))}
              {Array.from({ length: LEGAL_COHORT_CAP - size }).map((_, i) => (
                <li
                  key={`empty-${i}`}
                  className="rounded border border-dashed border-rule px-3 py-2 text-sm text-ink-2 dark:border-rule"
                >
                  Place libre
                </li>
              ))}
            </ul>

            <AddStudentForm
              cohortId={cohort.id}
              candidates={unassigned.map((u) => ({ id: u.id, name: u.name }))}
              full={full}
            />
          </section>
        );
      })}
    </main>
  );
}
