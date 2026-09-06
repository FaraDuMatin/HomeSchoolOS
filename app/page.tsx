import Link from "next/link";

/**
 * L'accueil.
 *
 * Un seul écran, pas de défilement. C'est la première chose qu'un juge voit
 * quand il ouvre le lien après le pitch, et une page qui demande de faire
 * défiler pour comprendre a déjà perdu.
 *
 * Trois chiffres et trois portes. Le reste du produit se trouve par la barre du
 * haut ou par l'index, qui reste en pied de page.
 */

const STATS = [
  { value: "8 700", label: "enfants scolarisés à la maison au Québec" },
  { value: "4", label: "élèves par instructeur, la limite de la loi" },
  { value: "1 clic", label: "pour le bilan exigé par le ministère" },
];

const DOORS = [
  { href: "/horaire", label: "La semaine d'un enfant", what: "Le programme et le Coran dans la même grille." },
  { href: "/cohorts", label: "La limite légale", what: "Le cinquième élève est refusé par la base." },
  { href: "/deck", label: "Le pitch", what: "Quinze slides, cinq minutes." },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-6xl flex-col justify-center px-6 py-8">
      <div className="grid items-center gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="eyebrow">HomeSchoolOS &middot; MuslimHacks 2026 &middot; Défi 04</p>

          <h1 className="mt-4 text-5xl leading-[0.95] text-balance sm:text-6xl">
            Il n&apos;y a pas de cloche qui met fin à son quart de travail.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-ink-2">
            Un parent qui fait l&apos;école à la maison est l&apos;enseignant, le surveillant et
            l&apos;archiviste. On prend les heures qu&apos;il ne peut pas donner, et on lui rend la
            preuve que ça a eu lieu.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-6 border-t-2 border-ink pt-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <dd className="stat text-4xl sm:text-5xl">{s.value}</dd>
                <dt className="mt-2 text-xs text-ink-2">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Une seule image, et c'est la scène que tout le reste décrit : quatre
            enfants, un instructeur, une salle prêtée. */}
        <div className="hidden lg:col-span-2 lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/deck/cohorte.png"
            alt="Quatre enfants autour d'une table avec un instructeur"
            className="aspect-[3/4] w-full rounded-lg border-2 border-rule object-cover"
          />
        </div>
      </div>

      <nav className="mt-10 grid gap-3 sm:grid-cols-3">
        {DOORS.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="card px-5 py-4 hover:border-accent"
          >
            <span className="font-semibold">{d.label}</span>
            <span className="mt-1 block text-sm text-ink-2">{d.what}</span>
          </Link>
        ))}
      </nav>

      <footer className="mt-8 flex flex-wrap items-baseline justify-between gap-4 border-t border-rule pt-4 text-xs text-ink-2">
        <p>
          Écrit pendant la fin de semaine, sans code réutilisé. Base locale, aucun réseau.
          L&apos;enregistrement des séances n&apos;est pas branché.
        </p>
        <Link href="/routes" className="underline">
          Index de toutes les pages
        </Link>
      </footer>
    </main>
  );
}
