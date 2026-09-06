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
      ? "text-done"
      : tone === "warn"
        ? "text-soon"
        : "";
  return (
    <div className="border-l-2 border-rule pl-3 dark:border-rule">
      <p className="text-xs text-ink-2">{label}</p>
      <p className={`font-mono text-xl tabular-nums ${color}`}>{value}</p>
      {hint && <p className="mt-0.5 text-xs text-ink-2">{hint}</p>}
    </div>
  );
}

export default async function SupervisorPage() {
  const cohorts = await cohortQuality();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8 border-b-2 border-ink pb-6 dark:border-ink">
        <p className="eyebrow">
          HomeSchoolOs · Supervision
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Un breveté pour quatre instructeurs</h1>
        <p className="mt-3 max-w-prose text-ink-2 dark:text-ink-2">
          Un breveté coûte 61 602 $ par an. On en met un pour quatre instructeurs.
        </p>
      </header>

      {cohorts.map((c) => (
        <section
          key={c.id}
          className="mb-8 rounded border border-rule p-6 dark:border-rule"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-xl font-semibold">{c.name}</h2>
            <p className="text-sm text-ink-2">
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
            <p className="mb-2 eyebrow">
              Élèves
            </p>
            <ul className="grid gap-1">
              {c.students.map((s) => (
                <li
                  key={s.id}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-rule py-2 text-sm dark:border-rule"
                >
                  <span className="min-w-32 flex-1">{s.name}</span>
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      s.attendanceRate >= 0.8
                        ? "text-ink-2"
                        : "text-soon"
                    }`}
                  >
                    {s.attended}/{s.scheduled} blocs
                  </span>
                  <span className="font-mono text-xs tabular-nums text-ink-2">
                    {s.attempts} travaux
                  </span>
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      s.competenciesCovered === s.competenciesTotal
                        ? "text-done"
                        : "text-soon"
                    }`}
                  >
                    {s.competenciesCovered}/{s.competenciesTotal} compétences
                  </span>
                  <Link
                    href={`/report/${s.id}`}
                    className="text-xs text-ink-2 underline underline-offset-2 hover:text-ink dark:hover:text-ink-2"
                  >
                    bilan
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {c.flags.length > 0 ? (
            <div className="mt-6 border-l-2 border-soon pl-3">
              <p className="font-mono text-xs uppercase tracking-wider text-soon">
                À aborder avec l&apos;instructeur
              </p>
              <ul className="mt-2 grid gap-1 text-sm">
                {c.flags.map((f) => (
                  <li key={f} className="text-ink dark:text-ink-2">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mt-6 border-l-2 border-done pl-3 text-sm text-ink-2 dark:text-ink-2">
              Rien à signaler.
            </p>
          )}

          <p className="mt-5 font-mono text-xs text-ink-2">
            Seuils : bloc {PLANNED_BLOCK_MINUTES} min · assiduité 85 % · 1,5 travaux/élève/bloc
          </p>
        </section>
      ))}
    </main>
  );
}
