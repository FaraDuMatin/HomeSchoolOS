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
        <nav className="border-b border-rule print:hidden dark:border-rule">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-1 px-6 py-3">
            <Link href="/" className="eyebrow">
              HomeSchoolOs
            </Link>
            {/* Le rôle n'est affiché qu'une fois par groupe. Répété sur chacun
                des trois écrans du parent, il transformait la barre en mur de
                texte et on ne voyait plus les liens. */}
            <div className="ml-auto flex flex-wrap items-baseline gap-x-4 gap-y-1">
              {NAV.map((n, i) => (
                <span key={n.href} className="flex items-baseline gap-1.5">
                  {n.role !== NAV[i - 1]?.role && (
                    <span className="eyebrow text-[10px]">
                      {n.role}
                    </span>
                  )}
                  <Link
                    href={n.href}
                    className="text-sm text-ink-2 hover:text-ink dark:text-ink-2 dark:hover:text-ink-2"
                  >
                    {n.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
