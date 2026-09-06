import Link from "next/link";
import { cohortQuality, PLANNED_BLOCK_MINUTES } from "../lib/quality";

export const dynamic = "force-dynamic";

const pct = (n: number) => `${Math.round(n * 100)} %`;

function Stat({
  label,
  value,
  hint,
  tone = "neutral",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "neutral" | "good" | "warn";
}) {
  const color =
    tone === "good"
      ? "text-green-700 dark:text-green-400"
      : tone === "warn"
        ? "text-amber-700 dark:text-amber-500"
        : "";
  return (
    <div className="border-l-2 border-neutral-300 pl-3 dark:border-neutral-700">
      <p className="text-xs text-neutral-500">{label}</p>
      <p className={`font-mono text-xl tabular-nums ${color}`}>{value}</p>
      {hint && <p className="mt-0.5 text-xs text-neutral-500">{hint}</p>}
    </div>
  );
}

export default async function SupervisorPage() {
  const cohorts = await cohortQuality();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8 border-b-2 border-neutral-900 pb-6 dark:border-neutral-100">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          HomeSchoolOs · Supervision
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Un breveté pour quatre instructeurs</h1>
        <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-400">
          Un breveté coûte 61 602 $ par an. On en met un pour quatre instructeurs.
        </p>
      </header>

      {cohorts.map((c) => (
        <section
          key={c.id}
          className="mb-8 rounded border border-neutral-200 p-6 dark:border-neutral-800"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-xl font-semibold">{c.name}</h2>
            <p className="text-sm text-neutral-500">
              {c.instructor}
              {c.supervisor && ` · supervisé par ${c.supervisor}`}
            </p>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="Blocs livrés" value={String(c.blocksDelivered)} />
            <Stat
              label="Temps livré"
              value={pct(c.deliveryRatio)}
              hint={`${c.minutesDelivered} min sur ${c.minutesPlanned}`}
              tone={c.deliveryRatio >= 0.9 ? "good" : "warn"}
            />
            <Stat
              label="Assiduité"
              value={pct(c.attendanceRate)}
              tone={c.attendanceRate >= 0.85 ? "good" : "warn"}
            />
            <Stat
              label="Travaux / élève / bloc"
              value={c.attemptsPerStudentPerBlock.toFixed(1)}
              tone={c.attemptsPerStudentPerBlock >= 1.5 ? "good" : "warn"}
            />
          </dl>

          <div className="mt-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-neutral-500">
              Élèves
            </p>
            <ul className="grid gap-1">
              {c.students.map((s) => (
                <li
                  key={s.id}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-neutral-200 py-2 text-sm dark:border-neutral-800"
                >
                  <span className="min-w-32 flex-1">{s.name}</span>
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      s.attendanceRate >= 0.8
                        ? "text-neutral-500"
                        : "text-amber-700 dark:text-amber-500"
                    }`}
                  >
                    {s.attended}/{s.scheduled} blocs
                  </span>
                  <span className="font-mono text-xs tabular-nums text-neutral-500">
                    {s.attempts} travaux
                  </span>
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      s.competenciesCovered === s.competenciesTotal
                        ? "text-green-700 dark:text-green-400"
                        : "text-amber-700 dark:text-amber-500"
                    }`}
                  >
                    {s.competenciesCovered}/{s.competenciesTotal} compétences
                  </span>
                  <Link
                    href={`/report/${s.id}`}
                    className="text-xs text-neutral-500 underline underline-offset-2 hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    bilan
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {c.flags.length > 0 ? (
            <div className="mt-6 border-l-2 border-amber-600 pl-3">
              <p className="font-mono text-xs uppercase tracking-wider text-amber-700 dark:text-amber-500">
                À aborder avec l&apos;instructeur
              </p>
              <ul className="mt-2 grid gap-1 text-sm">
                {c.flags.map((f) => (
                  <li key={f} className="text-neutral-700 dark:text-neutral-300">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mt-6 border-l-2 border-green-600 pl-3 text-sm text-neutral-600 dark:text-neutral-400">
              Rien à signaler.
            </p>
          )}

          <p className="mt-5 font-mono text-xs text-neutral-500">
            Seuils : bloc {PLANNED_BLOCK_MINUTES} min · assiduité 85 % · 1,5 travaux/élève/bloc
          </p>
        </section>
      ))}
    </main>
  );
}
