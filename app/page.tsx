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

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-10 border-b-2 border-ink pb-6 dark:border-ink">
        <p className="eyebrow">
          HomeSchoolOs · MuslimHacks 2026 · Défi 04
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">
          Une séance qui devient un document légal
        </h1>
        <p className="mt-3 max-w-prose text-ink-2 dark:text-ink-2">
          8 700 enfants scolarisés à la maison au Québec. Le parent doit déposer un bilan couvrant
          toutes les compétences du programme, et beaucoup ne peuvent pas enseigner.
        </p>
        <p className="mt-3 max-w-prose text-ink-2 dark:text-ink-2">
          Ici, quatre enfants et un instructeur dans une salle communautaire prêtée. Rien du bilan
          n&apos;est saisi à la main. Le parent reste l&apos;éducateur légal.
        </p>
      </header>

      {/* L'ordre de la démo, pour ne pas avoir à s'en souvenir sur scène. */}
      <section className="mb-10 rounded border border-rule p-5 dark:border-rule">
        <h2 className="eyebrow">
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
              <span className="font-mono text-xs tabular-nums text-ink-2">{i + 1}</span>
              <span>
                <span className="font-medium">{where}</span>
                <span className="text-ink-2 dark:text-ink-2"> — {what}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <footer className="border-t border-rule pt-6 text-sm text-ink-2 dark:border-rule">
        <p className="max-w-prose text-xs">
          Écrit pendant la fin de semaine, sans code réutilisé. Base locale, aucun réseau.
          L&apos;enregistrement des séances n&apos;est pas branché.
        </p>
        <p className="mt-3">
          <Link href="/routes" className="underline underline-offset-2">
            Index de toutes les pages
          </Link>
        </p>
      </footer>
    </main>
  );
}
