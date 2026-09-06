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
      className="rounded bg-ink px-4 py-2 text-sm font-medium text-bg"
    >
      Imprimer ou enregistrer en PDF
    </button>
  );
}

/**
 * L'export Word, sans librairie.
 *
 * Word ouvre un fichier HTML si l'extension est .doc. On enveloppe donc le
 * bilan déjà rendu et on le sert comme un blob. Le parent obtient un document
 * qu'il peut modifier avant de le déposer, ce qu'un PDF ne permet pas.
 */
export function WordButton({ filename }: { filename: string }) {
  function download() {
    const body = document.getElementById("bilan")?.innerHTML ?? "";
    const html =
      `<html xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8">` +
      `<style>body{font-family:Calibri,sans-serif;font-size:11pt}h1{font-size:18pt}h2{font-size:13pt}</style>` +
      `</head><body>${body}</body></html>`;

    const url = URL.createObjectURL(new Blob([html], { type: "application/msword" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.doc`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={download}
      className="rounded border border-rule px-4 py-2 text-sm"
    >
      Exporter en Word
    </button>
  );
}
