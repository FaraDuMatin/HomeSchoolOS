import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
  { href: "/cohorts", label: "Cohortes", role: "Gestionnaire" },
  { href: "/sessions", label: "Blocs", role: "Instructeur" },
  { href: "/supervisor", label: "Supervision", role: "Enseignant breveté" },
  { href: "/parent", label: "Espace parent", role: "Parent" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <nav className="border-b border-neutral-200 print:hidden dark:border-neutral-800">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-1 px-6 py-3">
            <Link href="/" className="font-mono text-xs uppercase tracking-widest">
              HomeSchoolOs
            </Link>
            <div className="ml-auto flex flex-wrap gap-x-5 gap-y-1">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="group text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  {n.label}
                  <span className="ml-1.5 font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                    {n.role}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
