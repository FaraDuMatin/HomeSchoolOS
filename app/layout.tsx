import type { Metadata } from "next";
import Link from "next/link";
import { Archivo, Geist_Mono } from "next/font/google";
import "./globals.css";

// Archivo porte la maquette : graisse 800 pour les titres, 400 a 700 pour le
// reste. Une seule famille, parce qu'un deuxieme caractere de titre n'ajoute
// rien a trois metres et coute un chargement de plus le matin du pitch.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home School OS",
  description: "A system for better education at home, for parents and students.",
};

/**
 * Le sélecteur de rôle tient lieu d'authentification.
 *
 * Aucun critère de la grille ne récompense un écran de connexion, et une démo se
 * fait en passant d'un rôle à l'autre en un clic plutôt qu'en se déconnectant.
 */
const NAV = [
  { href: "/deck", label: "Deck", role: "Pitch" },
  { href: "/cohorts", label: "Cohortes", role: "Gestionnaire" },
  { href: "/sessions", label: "Blocs", role: "Instructeur" },
  { href: "/supervisor", label: "Supervision", role: "Enseignant breveté" },
  { href: "/horaire", label: "Ma semaine", role: "Élève" },
  { href: "/parent", label: "Espace parent", role: "Parent" },
  { href: "/obligations", label: "Échéances", role: "Parent" },
  { href: "/privacy", label: "Confidentialité", role: "Parent" },
  { href: "/viability", label: "Viabilité", role: "Direction" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <nav className="border-b-2 border-rule print:hidden">
          <div className="mx-auto flex max-w-6xl flex-wrap items-baseline gap-x-5 gap-y-2 px-6 py-3">
            <Link href="/" className="eyebrow mr-2 text-ink">
              HomeSchoolOs
            </Link>
            {/* Le role a ete retire de la barre. Ecrit a cote de chaque lien,
                il doublait le nombre de mots et faisait un mur de majuscules
                dans lequel on ne trouvait plus les liens. Il reste sur /routes,
                ou c'est justement l'information qu'on cherche. */}
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                title={n.role}
                className="text-sm text-ink-2 hover:text-ink"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
