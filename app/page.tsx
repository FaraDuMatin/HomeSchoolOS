import Link from "next/link";

/**
 * L'écran d'accueil.
 *
 * Volontairement minimal. Il existe pour une seule raison : un juge qui ouvre
 * localhost doit comprendre en dix secondes ce qu'est le produit et savoir où
 * cliquer. Le gabarit de Next.js qui était ici ne faisait ni l'un ni l'autre.
 *
 * L'apparence est celle du reste de l'application, c'est-à-dire nue. Elle se
 * reprend à la fin, quand tout le reste fonctionne.
 */

const ROLES = [
  {
    href: "/cohorts",
    role: "Gestionnaire",
    label: "Cohortes",
    what: "Quatre élèves par instructeur, refusé au cinquième. La loi est dans la base de données, pas dans une politique.",
  },
  {
    href: "/sessions",
    role: "Instructeur",
    label: "Blocs",
    what: "Ouvrir un bloc, pointer les présences, cocher les exercices. Chaque geste devient un événement horodaté.",
  },
  {
    href: "/supervisor",
    role: "Enseignant breveté",
    label: "Supervision",
    what: "Quatre instructeurs vus d'un coup. Des comptes, pas le jugement d'un modèle.",
  },
  {
    href: "/parent",
    role: "Parent",
    label: "Espace parent",
    what: "La progression de l'enfant, et le bouton qui génère le bilan exigé par le ministère.",
  },
  {
    href: "/obligations",
    role: "Parent",
    label: "Échéances",
    what: "Huit documents, deux organismes, huit dates. Rater une date annule la reconnaissance de l'année.",
  },
  {
    href: "/privacy",
    role: "Parent",
    label: "Confidentialité",
    what: "Consentement, durée de conservation, et une suppression qui supprime pour de vrai.",
  },
  {
    href: "/viability",
    role: "Direction",
    label: "Viabilité",
    what: "Le compte d'un site, recalculé en direct. Local prêté contre local loué.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-10 border-b-2 border-neutral-900 pb-6 dark:border-neutral-100">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          HomeSchoolOs · MuslimHacks 2026 · Défi 04
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">
          Une séance qui devient un document légal
        </h1>
        <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-400">
          Au Québec, 8 700 enfants sont scolarisés à la maison. Le parent reste responsable de
          l&apos;enseignement et doit déposer au ministère un bilan qui couvre toutes les compétences
          du programme. Beaucoup de parents ne peuvent pas enseigner et travaillent.
        </p>
        <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-400">
          Ici, quatre enfants apprennent ensemble avec un instructeur, dans une salle communautaire
          vide en semaine. Rien de ce qui finit dans le bilan n&apos;est saisi à la main : la présence
          et la progression sont calculées à partir de ce que le système a observé. Le parent reste
          l&apos;éducateur légal.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-neutral-500">
          Les écrans, par rôle
        </h2>
        <ul className="grid gap-1">
          {ROLES.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="block border-b border-neutral-200 py-3 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
              >
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-medium">{r.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                    {r.role}
                  </span>
                </div>
                <p className="mt-1 max-w-prose text-sm text-neutral-600 dark:text-neutral-400">
                  {r.what}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* L'ordre de la démo, pour ne pas avoir à s'en souvenir sur scène. */}
      <section className="mb-10 rounded border border-neutral-200 p-5 dark:border-neutral-800">
        <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
          Ordre de la démonstration
        </h2>
        <ol className="mt-3 grid gap-2 text-sm">
          {[
            ["Cohortes", "ajouter un cinquième élève, le système refuse"],
            ["Blocs", "ouvrir le bloc du jour, pointer, cocher un exercice"],
            ["Supervision", "les quatre indicateurs et le signal automatique"],
            ["Espace parent", "générer le bilan de progression"],
            ["Échéances", "la ligne rouge, 66 jours de retard"],
            ["Confidentialité", "supprimer, le compteur tombe à zéro"],
          ].map(([where, what], i) => (
            <li key={where} className="flex gap-3">
              <span className="font-mono text-xs tabular-nums text-neutral-400">{i + 1}</span>
              <span>
                <span className="font-medium">{where}</span>
                <span className="text-neutral-600 dark:text-neutral-400"> — {what}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <footer className="border-t border-neutral-200 pt-6 text-sm text-neutral-500 dark:border-neutral-800">
        <p className="max-w-prose">
          Écrit au complet pendant la fin de semaine, sans réutiliser de code existant. Base locale,
          aucun réseau requis. L&apos;enregistrement des séances n&apos;est pas branché : les segments
          de transcription présents dans la démonstration sont des données de test.
        </p>
      </footer>
    </main>
  );
}
