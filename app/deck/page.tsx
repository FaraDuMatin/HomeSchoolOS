"use client";

import { useCallback, useEffect, useState } from "react";
import { SLIDES } from "./slides";
import { HourlyBars, SpaceBars, Waterfall } from "../viability/Charts";
import { hourlyMargin, parentBill, rentCost } from "../lib/economics";

/**
 * Le deck, dans l'app.
 *
 * Un seul appareil et un seul navigateur le jour du pitch. Le deck et la démo
 * sont deux onglets, jamais deux applications : une bascule entre un PDF et un
 * navigateur est le moment où le projecteur change de résolution.
 *
 * Flèches ou espace pour avancer, N pour afficher les notes sur ton écran,
 * F pour le plein écran. Le texte vit dans slides.ts.
 */
export default function DeckPage() {
  const [i, setI] = useState(0);
  const [notes, setNotes] = useState(false);
  const s = SLIDES[i];

  const go = useCallback((d: number) => {
    setI((v) => Math.max(0, Math.min(SLIDES.length - 1, v + d)));
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key.toLowerCase() === "n") {
        setNotes((v) => !v);
      } else if (e.key.toLowerCase() === "f") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
      } else if (e.key === "Home") {
        setI(0);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const tone = (t?: "good" | "bad") =>
    t === "good"
      ? "text-green-700 dark:text-green-400"
      : t === "bad"
        ? "text-red-700 dark:text-red-400"
        : "";

  const full = s.image?.mode === "full";
  const side = s.image?.mode === "side";

  return (
    <div className="relative flex min-h-[calc(100vh-3rem)] flex-col">
      {/* Image plein cadre : le texte passe par-dessus, donc il faut un voile
          assez opaque pour rester lisible sur n'importe quelle photo. */}
      {full && s.image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/deck/${s.image.file}`} alt={s.image.alt}
            className="absolute inset-0 -z-20 size-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-white/80 dark:bg-neutral-950/80" />
        </>
      )}
      <div className={`mx-auto flex w-full max-w-5xl flex-1 px-8 py-8 ${side ? "gap-10" : ""}`}>
      <div className="flex flex-1 flex-col">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">{s.eyebrow}</p>

        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
          {s.title}
        </h1>

        {s.lede && (
          <p className="mt-4 max-w-3xl text-xl text-neutral-600 dark:text-neutral-400">{s.lede}</p>
        )}

        {s.stats && (
          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {s.stats.map((st) => (
              <div key={st.label} className="border-l-2 border-neutral-400 pl-4 dark:border-neutral-600">
                <dd className={`font-mono text-4xl tabular-nums ${tone(st.tone)}`}>{st.value}</dd>
                <dt className="mt-1 text-sm text-neutral-500">{st.label}</dt>
              </div>
            ))}
          </dl>
        )}

        {s.chart && (
          <div className="mt-8">
            {s.chart === "hourly" && (
              <HourlyBars
                rows={[
                  { label: "Enseignement, 4 élèves", ...hourlyMargin().teaching },
                  { label: "Encadrement, 4 élèves", ...hourlyMargin().care4 },
                  { label: "Encadrement, 8 élèves", ...hourlyMargin().care8 },
                ]}
              />
            )}
            {s.chart === "waterfall" && <Waterfall {...parentBill(0.7, 1)} />}
            {s.chart === "space" && (
              <SpaceBars
                data={[16, 48, 96].map((c) => {
                  const k = Math.ceil(c / 16);
                  return {
                    children: c,
                    marche: rentCost(k, "marche"),
                    partenaire: rentCost(k, "partenaire"),
                    achat: rentCost(k, "achat"),
                  };
                })}
              />
            )}
          </div>
        )}

        {s.table && (
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-neutral-900 dark:border-neutral-100">
                  {s.table.head.map((h) => (
                    <th
                      key={h}
                      className="py-2 pr-6 font-mono text-xs font-normal uppercase tracking-wider text-neutral-500 last:pr-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.table.rows.map((r) => (
                  <tr key={r.label} className="border-b border-neutral-200 dark:border-neutral-800">
                    <td className="py-2.5 pr-6 text-lg">{r.label}</td>
                    {r.values.map((v, k) => (
                      <td
                        key={k}
                        className={`py-2.5 pr-6 font-mono text-lg tabular-nums last:pr-0 ${
                          k === r.values.length - 1 ? tone(r.tone) : ""
                        }`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {s.bullets && (
          <ul className="mt-8 grid gap-3">
            {s.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-lg">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {s.demo && (
          <p className="mt-8 border-l-2 border-neutral-900 pl-4 font-mono text-sm uppercase tracking-wider dark:border-neutral-100">
            {s.demo}
          </p>
        )}

        <div className="flex-1" />

        {s.source && <p className="mt-8 max-w-3xl text-xs text-neutral-500">{s.source}</p>}
      </div>

      {side && s.image && (
        <div className="hidden w-2/5 shrink-0 lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/deck/${s.image.file}`} alt={s.image.alt}
            className="size-full rounded object-cover" />
        </div>
      )}
      </div>

      {/* Les notes ne sont visibles que si tu les ouvres. La salle voit le slide. */}
      {notes && (
        <div className="border-t-2 border-neutral-900 bg-neutral-100 px-8 py-4 dark:border-neutral-100 dark:bg-neutral-900">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">Ce que tu dis</p>
            <p className="mt-1 text-neutral-800 dark:text-neutral-200">{s.say}</p>
          </div>
        </div>
      )}

      <div className="border-t border-neutral-200 px-8 py-2 dark:border-neutral-800">
        <div className="mx-auto flex max-w-5xl items-center gap-4">
          <button
            onClick={() => go(-1)}
            disabled={i === 0}
            className="rounded border border-neutral-300 px-3 py-1 text-sm disabled:opacity-30 dark:border-neutral-700"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            disabled={i === SLIDES.length - 1}
            className="rounded border border-neutral-300 px-3 py-1 text-sm disabled:opacity-30 dark:border-neutral-700"
          >
            →
          </button>
          <span className="font-mono text-sm tabular-nums text-neutral-500">
            {i + 1} / {SLIDES.length}
          </span>
          <button
            onClick={() => setNotes(!notes)}
            className="ml-auto rounded border border-neutral-300 px-3 py-1 font-mono text-xs dark:border-neutral-700"
          >
            N · notes
          </button>
          <span className="font-mono text-xs text-neutral-500">F · plein écran</span>
        </div>
      </div>
    </div>
  );
}
