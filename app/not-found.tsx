import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <p className="eyebrow">
        Introuvable
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">Cette page n&apos;existe plus</h1>
      <p className="mt-3 text-ink-2">
        Le plus souvent, c&apos;est un lien gardé d&apos;avant un rechargement des données de
        démonstration : le seed efface et recrée tout, donc les identifiants changent.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/sessions"
          className="rounded bg-ink px-4 py-2 text-sm font-medium text-bg"
        >
          Voir les blocs
        </Link>
        <Link
          href="/cohorts"
          className="rounded border border-rule px-4 py-2 text-sm font-medium"
        >
          Voir les cohortes
        </Link>
      </div>
    </main>
  );
}
