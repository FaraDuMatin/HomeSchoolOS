import Link from "next/link";
import { prisma } from "../lib/db";

export const dynamic = "force-dynamic";

/**
 * L'index de toutes les pages.
 *
 * Ce n'est pas un écran de démonstration, c'est un outil de développement. Il
 * existe parce que les routes dynamiques portent des identifiants qui changent
 * à chaque seed : sans cette page, retrouver le bilan d'un élève ou le bloc du
 * jour demande d'aller lire la sortie du script.
 *
 * Les liens vers les routes dynamiques sont donc résolus ici, en base, au
 * chargement.
 */

const STATIC_ROUTES = [
  {
    href: "/",
    label: "Accueil",
    role: "—",
    what: "Ce qu'est le produit, en deux paragraphes.",
  },
  {
    href: "/deck",
    label: "Deck",
    role: "Pitch",
    what: "Les 13 slides. Flèches pour avancer, N pour les notes, F pour le plein écran. Texte dans app/deck/slides.ts.",
  },
  {
    href: "/cohorts",
    label: "Cohortes",
    role: "Gestionnaire",
    what: "Quatre élèves par instructeur, refusé au cinquième. La loi est dans la base de données, pas dans une politique.",
  },
  {
    href: "/sessions",
    label: "Blocs",
    role: "Instructeur",
    what: "La liste des blocs, passés et à venir.",
  },
  {
    href: "/supervisor",
    label: "Supervision",
    role: "Enseignant breveté",
    what: "Quatre instructeurs vus d'un coup. Des comptes, pas le jugement d'un modèle.",
  },
  {
    href: "/horaire",
    label: "Ma semaine",
    role: "Élève",
    what: "L'horaire complet : les matières du programme et le religieux dans la même grille. Chaque bloc mène à son dépôt.",
  },
  {
    href: "/parent",
    label: "Espace parent",
    role: "Parent",
    what: "La progression de l'enfant, et le bouton qui génère le bilan.",
  },
  {
    href: "/obligations",
    label: "Échéances",
    role: "Parent",
    what: "Huit documents, deux organismes, huit dates.",
  },
  {
    href: "/privacy",
    label: "Confidentialité",
    role: "Parent",
    what: "Consentement, conservation, suppression réelle, registre.",
  },
  {
    href: "/viability",
    label: "Viabilité",
    role: "Direction",
    what: "Le compte d'un site, recalculé en direct. Local prêté contre local loué.",
  },
];

export default async function RoutesPage() {
  const [openSession, lastSession, students] = await Promise.all([
    prisma.session.findFirst({
      where: { status: { in: ["SCHEDULED", "LIVE"] } },
      orderBy: { plannedAt: "asc" },
    }),
    prisma.session.findFirst({ where: { status: "ENDED" }, orderBy: { plannedAt: "desc" } }),
    prisma.user.findMany({ where: { role: "STUDENT" }, orderBy: { name: "asc" } }),
  ]);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8 border-b-2 border-ink pb-6 dark:border-ink">
        <p className="eyebrow">
          HomeSchoolOs · Index
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Toutes les pages</h1>
        <p className="mt-3 max-w-prose text-ink-2 dark:text-ink-2">
          Page de développement, pas de démonstration. Les liens vers les routes dynamiques sont
          résolus en base, donc ils restent valides après chaque{" "}
          <span className="font-mono text-sm">npx tsx prisma/seed.ts</span>.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 eyebrow">
          Pages fixes
        </h2>
        <ul className="grid gap-1">
          {STATIC_ROUTES.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="block border-b border-rule py-3 hover:bg-surface-2 dark:border-rule dark:hover:bg-surface-2"
              >
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-sm">{r.href}</span>
                  <span className="font-medium">{r.label}</span>
                  <span className="ml-auto eyebrow text-[10px]">
                    {r.role}
                  </span>
                </div>
                <p className="mt-1 max-w-prose text-sm text-ink-2 dark:text-ink-2">
                  {r.what}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 eyebrow">
          Blocs
        </h2>
        <ul className="grid gap-1">
          {openSession && (
            <li>
              <Link
                href={`/sessions/${openSession.id}`}
                className="block border-b border-rule py-3 hover:bg-surface-2 dark:border-rule dark:hover:bg-surface-2"
              >
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-sm">/sessions/{openSession.id}</span>
                  <span className="font-medium">Le bloc à ouvrir en démo</span>
                  <span className="ml-auto eyebrow text-[10px] text-done">
                    {openSession.status}
                  </span>
                </div>
              </Link>
            </li>
          )}
          {lastSession && (
            <li>
              <Link
                href={`/sessions/${lastSession.id}`}
                className="block border-b border-rule py-3 hover:bg-surface-2 dark:border-rule dark:hover:bg-surface-2"
              >
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-sm">/sessions/{lastSession.id}</span>
                  <span className="font-medium">Le dernier bloc terminé</span>
                  <span className="ml-auto eyebrow text-[10px]">
                    {lastSession.status}
                  </span>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 eyebrow">
          Bilans de progression
        </h2>
        <ul className="grid gap-1">
          {students.map((s) => (
            <li key={s.id}>
              <Link
                href={`/report/${s.id}`}
                className="block border-b border-rule py-3 hover:bg-surface-2 dark:border-rule dark:hover:bg-surface-2"
              >
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-sm">/report/{s.id}</span>
                  <span className="font-medium">{s.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-ink-2">
          Sara Farouk n&apos;est dans aucune cohorte : son bilan est vide, et c&apos;est voulu.
          C&apos;est elle qu&apos;on essaie d&apos;ajouter pendant la démo pour déclencher le refus
          légal.
        </p>
      </section>
    </main>
  );
}
