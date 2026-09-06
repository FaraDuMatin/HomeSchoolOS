import Link from "next/link";
import { prisma } from "../lib/db";
import { PLANNED_BLOCK_MINUTES } from "../lib/quality";
import Model from "./Model";

export const dynamic = "force-dynamic";

export default async function ViabilityPage() {
  const cohorts = await prisma.cohort.findMany({
    include: {
      instructor: true,
      _count: { select: { members: true } },
      sessions: { where: { status: "ENDED" }, include: { attendance: true } },
    },
    orderBy: { name: "asc" },
  });

  const enrolled = cohorts.reduce((n, c) => n + c._count.members, 0);

  // Heures-élève réellement livrées contre heures-élève facturées.
  //
  // Une famille absente paie quand même son bloc, donc l'écart entre les deux
  // n'est pas une erreur de facturation : c'est la marge que l'assiduité fait
  // gagner ou perdre. C'est la seule ligne de cette page qui vienne des données
  // réelles plutôt que du modèle.
  let deliveredMinutes = 0;
  let contractedMinutes = 0;
  for (const c of cohorts) {
    for (const s of c.sessions) {
      deliveredMinutes += s.attendance.reduce((m, a) => m + a.minutes, 0);
      contractedMinutes += c._count.members * PLANNED_BLOCK_MINUTES;
    }
  }
  const deliveredHours = Math.round(deliveredMinutes / 60);
  const contractedHours = Math.round(contractedMinutes / 60);
  const deliveryRatio = contractedHours > 0 ? deliveredHours / contractedHours : 0;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8 border-b-2 border-neutral-900 pb-6 dark:border-neutral-100">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          HomeSchoolOs · Viabilité
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Est-ce que ça tient debout</h1>
        <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-400">
          Oui, à trois conditions : gagner sur chaque heure, vendre la journée et non
          l&apos;heure, et finir par acheter le local au lieu de le louer.
        </p>
      </header>

      {/* Ce qui vient de la base, séparé de ce qui vient du modèle. */}
      <section className="mb-8 rounded border border-neutral-200 p-5 dark:border-neutral-800">
        <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
          Ce que le système observe aujourd&apos;hui
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="border-l-2 border-neutral-300 pl-3 dark:border-neutral-700">
            <dt className="text-xs text-neutral-500">Enfants inscrits</dt>
            <dd className="font-mono text-xl tabular-nums">{enrolled}</dd>
          </div>
          <div className="border-l-2 border-neutral-300 pl-3 dark:border-neutral-700">
            <dt className="text-xs text-neutral-500">Cohortes ouvertes</dt>
            <dd className="font-mono text-xl tabular-nums">
              {cohorts.length}
              <span className="text-sm text-neutral-500"> / 24</span>
            </dd>
          </div>
          <div className="border-l-2 border-neutral-300 pl-3 dark:border-neutral-700">
            <dt className="text-xs text-neutral-500">Heures-élève livrées</dt>
            <dd className="font-mono text-xl tabular-nums">{deliveredHours}</dd>
          </div>
          <div className="border-l-2 border-neutral-300 pl-3 dark:border-neutral-700">
            <dt className="text-xs text-neutral-500">Sur facturées</dt>
            <dd
              className={`font-mono text-xl tabular-nums ${
                deliveryRatio >= 0.9 ? "text-green-700 dark:text-green-400" : "text-amber-700 dark:text-amber-500"
              }`}
            >
              {contractedHours}
            </dd>
          </div>
        </dl>
        <p className="mt-3 max-w-prose text-xs text-neutral-500">
          {contractedHours - deliveredHours} heures facturées non livrées, faute de présence. La
          famille paie quand même :{" "}
          <Link href="/supervisor" className="underline underline-offset-2">
            c&apos;est un enjeu de qualité
          </Link>
          , pas d&apos;argent.
        </p>
      </section>

      <Model initialStudents={Math.max(enrolled, 1)} />

      <footer className="border-t border-neutral-200 pt-6 text-xs text-neutral-500 dark:border-neutral-800">
        <p className="max-w-prose">
          Sourcé : crédits d&apos;impôt et plafonds [Revenu Québec 2025], 85 $ le bloc de 4 h
          [Centre St-Pierre], prix d&apos;immeuble [annonces Gatineau], conditions hypothécaires
          [Desjardins, LendCity]. Hypothèses : les taux horaires, l&apos;adhésion à la conformité,
          les charges fixes, la sous-location, et l&apos;admissibilité au relevé 24.
        </p>
      </footer>
    </main>
  );
}
