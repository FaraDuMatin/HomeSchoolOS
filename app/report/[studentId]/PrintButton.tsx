"use client";

/**
 * L'impression du navigateur plutôt qu'une librairie PDF.
 *
 * Le parent veut un fichier à joindre à son dépôt. « Imprimer, puis Enregistrer
 * en PDF » lui en donne un, sans une dépendance de plus à installer et à
 * déboguer un samedi soir.
 */
export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-neutral-900"
    >
      Imprimer ou enregistrer en PDF
    </button>
  );
}
