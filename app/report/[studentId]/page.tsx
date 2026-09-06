import { notFound } from "next/navigation";
import { buildReport } from "../../lib/report";
import { PrintButton } from "./PrintButton";

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
        <p className="text-sm text-neutral-500">
          Généré le {fmtDate(report.generatedAt)} à partir des séances, des présences et des
          exercices complétés. Aucun champ n&apos;a été rempli à la main.
        </p>
        <PrintButton />
      </div>

      <article className="border border-neutral-300 p-8 print:border-0 print:p-0 dark:border-neutral-700">
        <header className="border-b-2 border-neutral-900 pb-5 dark:border-neutral-100">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Enseignement à la maison · Québec
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Bilan de progression</h1>
          <dl className="mt-4 grid gap-x-8 gap-y-1 text-sm sm:grid-cols-2">
            <div className="flex gap-2">
              <dt className="text-neutral-500">Enfant</dt>
              <dd className="font-medium">{report.student.name}</dd>
            </div>
            {report.student.parentName && (
              <div className="flex gap-2">
                <dt className="text-neutral-500">Parent-éducateur</dt>
                <dd className="font-medium">{report.student.parentName}</dd>
              </div>
            )}
            <div className="flex gap-2">
              <dt className="text-neutral-500">Période</dt>
              <dd>
                {fmtDate(report.period.from)} au {fmtDate(report.period.to)}
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-neutral-500">Type d&apos;évaluation</dt>
              <dd>Portfolio de travaux datés</dd>
            </div>
          </dl>
        </header>

        <section className="mt-7">
          <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
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
              <div key={String(label)} className="border-l-2 border-neutral-300 pl-3 dark:border-neutral-700">
                <dt className="text-xs text-neutral-500">{label}</dt>
                <dd className="font-mono text-lg tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {report.subjects.map((s) => (
          <section
            key={s.subject.key}
            className="mt-7 break-inside-avoid border-t border-neutral-200 pt-5 dark:border-neutral-800"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold">{s.subject.label}</h2>
              <span
                className={`font-mono text-xs tabular-nums ${
                  s.covered === s.total ? "text-green-700 dark:text-green-400" : "text-amber-700 dark:text-amber-500"
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
                      c.count > 0 ? "text-green-700 dark:text-green-400" : "text-amber-700 dark:text-amber-500"
                    }`}
                  >
                    {c.count > 0 ? "✓" : "○"} {c.code}
                  </span>
                  <span className="flex-1">{c.label}</span>
                  <span className="font-mono text-xs tabular-nums text-neutral-500">
                    {c.count} trace{c.count > 1 ? "s" : ""}
                  </span>
                </li>
              ))}
            </ul>

            {s.traces.length > 0 && (
              <div className="mt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  Traces datées
                </p>
                <ol className="mt-2 grid gap-2">
                  {s.traces.map((t, i) => (
                    <li
                      key={i}
                      className="border-l-2 border-neutral-300 pl-3 text-sm dark:border-neutral-700"
                    >
                      <p>
                        <span className="font-mono text-xs tabular-nums text-neutral-500">
                          {t.date.toLocaleDateString("fr-CA")}
                        </span>{" "}
                        <span className="font-medium">{t.exerciseTitle}</span>
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400">
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
          <section className="mt-7 break-inside-avoid border-t-2 border-amber-600 pt-5">
            <h2 className="font-mono text-xs uppercase tracking-wider text-amber-700 dark:text-amber-500">
              À documenter avant le dépôt
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Ces compétences ne portent encore aucune trace. Un bilan qui ne couvre pas toutes les
              compétences d&apos;une matière peut être refusé ou renvoyé pour modification.
            </p>
            <ul className="mt-3 grid gap-1 text-sm">
              {report.gaps.map((g) => (
                <li key={g} className="text-amber-800 dark:text-amber-500">
                  ○ {g}
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="mt-8 border-t border-neutral-200 pt-4 text-xs text-neutral-500 dark:border-neutral-800">
          <p>
            Document produit automatiquement à partir du registre des séances. Chaque trace renvoie à
            un bloc réel, une date réelle et un exercice réel. Le parent-éducateur demeure
            responsable de l&apos;enseignement et du dépôt de ce bilan.
          </p>
        </footer>
      </article>
    </main>
  );
}
