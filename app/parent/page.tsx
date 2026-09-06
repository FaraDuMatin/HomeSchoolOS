import Link from "next/link";
import { prisma } from "../lib/db";
import { buildReport } from "../lib/report";
import { complianceForStudent, summarize } from "../lib/compliance";

export const dynamic = "force-dynamic";


export default async function ParentPage() {
  // Le premier parent du jeu de données. L'authentification n'existe pas encore :
  // le sélecteur de rôle suffit pour une démonstration, et aucun critère de la
  // grille ne récompense un écran de connexion.
  const parent = await prisma.user.findFirst({
    where: { role: "PARENT", children: { some: {} } },
    include: { children: true },
  });

  if (!parent) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24">
        <p className="text-neutral-500">Aucun parent dans les données. Relancez le seed.</p>
      </main>
    );
  }

  const reports = await Promise.all(parent.children.map((c) => buildReport(c.id)));

  // Le resume des echeances du premier enfant, pour que la carte ne soit pas un
  // lien mort mais un chiffre qui change.
  const rows = await complianceForStudent(parent.children[0].id);
  const compliance = summarize(rows);
  const next = rows.find((r) => r.status !== "fait");
  const segments = await prisma.transcriptSegment.count({
    where: { studentId: { in: parent.children.map((c) => c.id) } },
  });

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-10 border-b-2 border-neutral-900 pb-6 dark:border-neutral-100">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          HomeSchoolOs · Espace parent
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">{parent.name}</h1>
        <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-400">
          Ce que les blocs ont produit. Vous restez l&apos;éducateur légal.
        </p>
      </header>

      {reports.map((r) => {
        if (!r) return null;
        const totalCovered = r.subjects.reduce((n, s) => n + s.covered, 0);
        const totalCompetencies = r.subjects.reduce((n, s) => n + s.total, 0);

        return (
          <section
            key={r.student.id}
            className="mb-8 rounded border border-neutral-200 p-6 dark:border-neutral-800"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-xl font-semibold">{r.student.name}</h2>
              <Link
                href={`/report/${r.student.id}`}
                className="rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-neutral-900"
              >
                Générer le bilan de progression
              </Link>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["Blocs suivis", `${r.sessionsAttended} / ${r.sessionsTotal}`],
                ["Heures", Math.round(r.minutesAttended / 60)],
                ["Travaux", r.attemptsTotal],
                ["Compétences", `${totalCovered} / ${totalCompetencies}`],
              ].map(([label, value]) => (
                <div
                  key={String(label)}
                  className="border-l-2 border-neutral-300 pl-3 dark:border-neutral-700"
                >
                  <dt className="text-xs text-neutral-500">{label}</dt>
                  <dd className="font-mono text-xl tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-neutral-500">
                Couverture par matière
              </p>
              <ul className="grid gap-1">
                {r.subjects.map((s) => {
                  const pct = Math.round((s.covered / s.total) * 100);
                  return (
                    <li key={s.subject.key} className="flex items-center gap-3 text-sm">
                      <span className="w-56 shrink-0 truncate">{s.subject.label}</span>
                      <span className="h-1.5 flex-1 overflow-hidden rounded bg-neutral-200 dark:bg-neutral-800">
                        <span
                          className={`block h-full ${
                            pct === 100 ? "bg-green-600" : pct === 0 ? "bg-amber-600" : "bg-neutral-500"
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </span>
                      <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-neutral-500">
                        {s.covered}/{s.total}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {r.gaps.length > 0 && (
              <p className="mt-5 border-l-2 border-amber-600 pl-3 text-sm text-amber-800 dark:text-amber-500">
                {r.gaps.length} compétences sans trace. Un bilan incomplet est renvoyé.
              </p>
            )}
          </section>
        );
      })}

      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/obligations"
          className="rounded border border-neutral-200 p-5 hover:border-neutral-900 dark:border-neutral-800 dark:hover:border-neutral-100"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
            Vos échéances
          </p>
          <p className="mt-2 font-mono text-2xl tabular-nums">
            {compliance.done}/{compliance.total}
            {compliance.late > 0 && (
              <span className="ml-3 text-base text-red-700 dark:text-red-400">
                {compliance.late} en retard
              </span>
            )}
          </p>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Prochaine : {next ? next.legalDate.toLowerCase() : "—"}.
          </p>
        </Link>

        <Link
          href="/privacy"
          className="rounded border border-neutral-200 p-5 hover:border-neutral-900 dark:border-neutral-800 dark:hover:border-neutral-100"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
            Confidentialité
          </p>
          <p className="mt-2 font-mono text-2xl tabular-nums">
            {segments}
            <span className="text-base text-neutral-500"> segments</span>
          </p>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Consentement, conservation, suppression.
          </p>
        </Link>
      </section>
    </main>
  );
}
