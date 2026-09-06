import Link from "next/link";

/**
 * L'accueil.
 *
 * Le nom, la phrase, trois portes. Un juge ouvre ce lien pendant ou juste
 * apres le pitch : tout ce qu'il doit y trouver, c'est de quoi on parle et par
 * ou entrer.
 *
 * Les icones sont dessinees ici, en SVG, plutot que tirees d'une librairie.
 * Trois traits ne valent pas une dependance de plus, et une dependance
 * installee la veille est une dependance qui casse le matin du pitch.
 *
 * La cloche est le symbole du produit : la mere citee dans le pitch dit qu'il
 * n'y a pas de cloche qui met fin a son quart de travail.
 */

function Bell({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 8a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6" />
      <path d="M10.5 18a1.8 1.8 0 0 0 3 0" />
    </svg>
  );
}

function Calendar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M7.5 14h3M13.5 14h3M7.5 17.5h3" />
    </svg>
  );
}

function Users({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16.5 5.5a3.2 3.2 0 0 1 0 5.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
    </svg>
  );
}

function Doc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 16.5h4" />
    </svg>
  );
}

const DOORS = [
  { href: "/horaire", label: "La semaine", Icon: Calendar },
  // { href: "/cohorts", label: "La limite légale", Icon: Users },
  { href: "/parent", label: "Le bilan", Icon: Doc },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-4xl flex-col items-center justify-center px-6 py-12 text-center">
      <Bell className="size-12 text-accent" />

      <h1 className="mt-6 text-6xl leading-none tracking-tight sm:text-8xl">HomeSchoolOS</h1>

      <p className="mt-7 max-w-2xl text-xl text-balance text-ink-2 sm:text-2xl">
        Le système complet qui aide les parents à donner à leurs enfants la meilleure éducation, à
        un prix abordable.
      </p>

      <nav className="mt-12 flex flex-wrap justify-center gap-3">
        {DOORS.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className="card flex items-center gap-2.5 px-5 py-3 text-sm font-semibold hover:border-accent"
          >
            <Icon className="size-5 text-accent" />
            {label}
          </Link>
        ))}
      </nav>

      <Link
        href="/routes"
        className="mt-14 text-xs text-ink-2 underline underline-offset-4 hover:text-ink"
      >
        Index de toutes les pages
      </Link>
    </main>
  );
}
