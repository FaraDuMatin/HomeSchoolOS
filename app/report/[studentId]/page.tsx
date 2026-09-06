import { notFound } from "next/navigation";
import { buildReport } from "../../lib/report";
import { PrintButton, WordButton } from "./PrintButton";

export const dynamic = "force-dynamic";

const fmtDate = (d: Date) =>
  d.toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric" });

export default async function ReportPage({
  params,
}: {
  params: Promise<{ studentId: string }>;
}) {
  const { studentId } = await params;
  const report = await buildReport(studentId);
  if (!report) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10 print:max-w-none print:px-0 print:py-0">
      {/* Barre d'action, absente de l'impression : le document remis au
          ministère ne doit contenir que le bilan. */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <p className="text-sm text-ink-2">Généré le {fmtDate(report.generatedAt)}.</p>
        <div className="flex flex-wrap gap-2">
          <WordButton filename={`Bilan-${report.student.name.replace(/\s+/g, "-")}`} />
          <PrintButton />
        </div>
      </div>

      <article
        id="bilan"
        className="border border-rule p-8 print:border-0 print:p-0 dark:border-rule"
      >
        <header className="border-b-2 border-ink pb-5 dark:border-ink">
          <p className="eyebrow">
            Enseignement à la maison · Québec
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Bilan de progression</h1>
          <dl className="mt-4 grid gap-x-8 gap-y-1 text-sm sm:grid-cols-2">
            <div className="flex gap-2">
              <dt className="text-ink-2">Enfant</dt>
              <dd className="font-medium">{report.student.name}</dd>
            </div>
            {report.student.parentName && (
              <div className="flex gap-2">
                <dt className="text-ink-2">Parent-éducateur</dt>
                <dd className="font-medium">{report.student.parentName}</dd>
              </div>
            )}
            <div className="flex gap-2">
              <dt className="text-ink-2">Période</dt>
              <dd>
                {fmtDate(report.period.from)} au {fmtDate(report.period.to)}
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-ink-2">Type d&apos;évaluation</dt>
              <dd>Portfolio de travaux datés</dd>
            </div>
          </dl>
        </header>

        <section className="mt-7">
          <h2 className="eyebrow">
            Commentaire général sur la progression
          </h2>
          <p className="mt-2 leading-relaxed">{report.overallComment}</p>

          <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Blocs suivis", `${report.sessionsAttended} / ${report.sessionsTotal}`],
              ["Heures d'enseignement", Math.round(report.minutesAttended / 60)],
              ["Travaux consignés", report.attemptsTotal],
              [
                "Compétences couvertes",
                `${report.subjects.reduce((n, s) => n + s.covered, 0)} / ${report.subjects.reduce(
                  (n, s) => n + s.total,
                  0,
                )}`,
              ],
            ].map(([label, value]) => (
              <div key={String(label)} className="border-l-2 border-rule pl-3 dark:border-rule">
                <dt className="text-xs text-ink-2">{label}</dt>
                <dd className="font-mono text-lg tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {report.subjects.map((s) => (
          <section
            key={s.subject.key}
            className="mt-7 break-inside-avoid border-t border-rule pt-5 dark:border-rule"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold">{s.subject.label}</h2>
              <span
                className={`font-mono text-xs tabular-nums ${
                  s.covered === s.total ? "text-done" : "text-soon"
                }`}
              >
                {s.covered} / {s.total} compétences
              </span>
            </div>

            <p className="mt-2 text-sm leading-relaxed">{s.comment}</p>

            <ul className="mt-3 grid gap-1">
              {s.competencies.map((c) => (
                <li key={c.code} className="flex items-baseline gap-3 text-sm">
                  <span
                    className={`font-mono text-xs ${
                      c.count > 0 ? "text-done" : "text-soon"
                    }`}
                  >
                    {c.count > 0 ? "✓" : "○"} {c.code}
                  </span>
                  <span className="flex-1">{c.label}</span>
                  <span className="font-mono text-xs tabular-nums text-ink-2">
                    {c.count} trace{c.count > 1 ? "s" : ""}
                  </span>
                </li>
              ))}
            </ul>

            {s.traces.length > 0 && (
              <div className="mt-4">
                <p className="eyebrow">
                  Traces datées
                </p>
                <ol className="mt-2 grid gap-2">
                  {s.traces.map((t, i) => (
                    <li
                      key={i}
                      className="border-l-2 border-rule pl-3 text-sm dark:border-rule"
                    >
                      <p>
                        <span className="font-mono text-xs tabular-nums text-ink-2">
                          {t.date.toLocaleDateString("fr-CA")}
                        </span>{" "}
                        <span className="font-medium">{t.exerciseTitle}</span>
                      </p>
                      <p className="text-ink-2 dark:text-ink-2">
                        Intention pédagogique : {t.intent}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </section>
        ))}

        {report.gaps.length > 0 && (
          <section className="mt-7 break-inside-avoid border-t-2 border-soon pt-5">
            <h2 className="font-mono text-xs uppercase tracking-wider text-soon">
              À documenter avant le dépôt
            </h2>
            <p className="mt-2 text-sm text-ink-2 dark:text-ink-2">
              Aucune trace. Un bilan incomplet est renvoyé pour modification.
            </p>
            <ul className="mt-3 grid gap-1 text-sm">
              {report.gaps.map((g) => (
                <li key={g} className="text-soon">
                  ○ {g}
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="mt-8 border-t border-rule pt-4 text-xs text-ink-2 dark:border-rule">
          <p>
            Produit à partir du registre des séances. Le parent-éducateur demeure responsable du
            dépôt.
          </p>
        </footer>
      </article>
    </main>
  );
}
