"use client";

import { useEffect, useState } from "react";

/**
 * Minuterie d'affichage seulement.
 *
 * Elle ne décide rien : la durée réelle est calculée au serveur à partir des
 * événements d'ouverture et de fermeture. Si l'onglet est fermé pendant la
 * séance, le compte reste juste — c'est tout l'intérêt de ne pas faire confiance
 * au navigateur.
 */
export function Elapsed({ startedAtIso }: { startedAtIso: string }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const seconds = Math.max(0, Math.floor((now - new Date(startedAtIso).getTime()) / 1000));
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <span className="font-mono text-2xl tabular-nums">
      {mm}:{ss}
    </span>
  );
}
