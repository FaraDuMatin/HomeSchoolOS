import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
        Introuvable
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">Cette page n&apos;existe plus</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        Le plus souvent, c&apos;est un lien gardé d&apos;avant un rechargement des données de
        démonstration : le seed efface et recrée tout, donc les identifiants changent.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/sessions"
          className="rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-neutral-900"
        >
          Voir les blocs
        </Link>
        <Link
          href="/cohorts"
          className="rounded border border-neutral-300 px-4 py-2 text-sm font-medium dark:border-neutral-700"
        >
          Voir les cohortes
        </Link>
      </div>
    </main>
  );
}
