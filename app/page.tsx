import Link from "next/link";

/**
 * L'accueil.
 *
 * Le nom, la phrase, rien d'autre. Un juge ouvre ce lien pendant ou juste
 * apres le pitch : tout ce qu'il doit y trouver, c'est de quoi on parle. Le
 * produit se visite par la barre du haut, et l'index reste en pied de page
 * pour retrouver n'importe quelle route.
 */
export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-4xl flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-6xl leading-none tracking-tight sm:text-8xl">HomeSchoolOS</h1>

      <p className="mt-8 max-w-2xl text-xl text-ink-2 text-balance sm:text-2xl">
        Le système complet qui aide les parents à donner à leurs enfants la meilleure éducation, à
        un prix abordable.
      </p>

      <Link
        href="/routes"
        className="mt-16 text-xs text-ink-2 underline underline-offset-4 hover:text-ink"
      >
        Index de toutes les pages
      </Link>
    </main>
  );
}
