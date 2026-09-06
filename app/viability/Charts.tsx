"use client";

import { money } from "../lib/economics";

/**
 * Les graphiques du modèle financier.
 *
 * Trois chiffres dans une phrase se lisent. Douze chiffres dans un tableau ne
 * se lisent pas, ils se subissent, et un juge à trois mètres ne les voit pas du
 * tout. Chaque graphique ici remplace un tableau que personne n'aurait lu.
 *
 * SVG à la main plutôt qu'une librairie : trois formes suffisent, et une
 * dépendance de plus est une dépendance qui peut casser le matin du pitch.
 */

const GOOD = "fill-green-600";
const BAD = "fill-red-600";
const NEUTRAL = "fill-neutral-400 dark:fill-neutral-600";

/**
 * Barres appariées : ce qu'on reçoit contre ce qu'on paie, pour chaque heure.
 *
 * L'oeil compare deux hauteurs côte à côte bien plus vite qu'il ne soustrait
 * deux nombres. La marge est écrite au-dessus parce que c'est la conclusion.
 */
export function HourlyBars({
  rows,
}: {
  rows: { label: string; revenue: number; cost: number; margin: number }[];
}) {
  const W = 660;
  const H = 220;
  const PAD = { l: 8, r: 8, t: 34, b: 44 };
  const max = Math.max(...rows.map((r) => r.revenue)) * 1.1;
  const band = (W - PAD.l - PAD.r) / rows.length;
  const bw = band * 0.28;
  const plotH = H - PAD.t - PAD.b;
  const h = (v: number) => (v / max) * plotH;

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[520px]" role="img"
        aria-label="Revenu et coût de chaque heure travaillée">
        <line x1={PAD.l} x2={W - PAD.r} y1={H - PAD.b} y2={H - PAD.b}
          className="stroke-neutral-300 dark:stroke-neutral-700" strokeWidth={1} />

        {rows.map((r, i) => {
          const cx = PAD.l + band * i + band / 2;
          const yR = H - PAD.b - h(r.revenue);
          const yC = H - PAD.b - h(r.cost);
          return (
            <g key={r.label}>
              <rect x={cx - bw - 5} y={yR} width={bw} height={h(r.revenue)} className={GOOD} />
              <rect x={cx + 5} y={yC} width={bw} height={h(r.cost)} className={NEUTRAL} />

              <text x={cx} y={yR - 12} textAnchor="middle"
                className="fill-green-700 font-mono text-[15px] font-bold tabular-nums dark:fill-green-400">
                +{r.margin.toFixed(2)} $
              </text>
              <text x={cx - bw / 2 - 5} y={yR - 1} textAnchor="middle"
                className="fill-neutral-500 font-mono text-[10px] tabular-nums">
                {r.revenue.toFixed(0)}
              </text>
              <text x={cx + bw / 2 + 5} y={yC - 1} textAnchor="middle"
                className="fill-neutral-500 font-mono text-[10px] tabular-nums">
                {r.cost.toFixed(0)}
              </text>
              <text x={cx} y={H - PAD.b + 16} textAnchor="middle"
                className="fill-neutral-600 text-[11px] dark:fill-neutral-400">
                {r.label}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-1 flex flex-wrap justify-center gap-x-6 text-xs text-neutral-500">
        <span className="flex items-center gap-2"><span className="inline-block size-2.5 bg-green-600" /> reçu par heure</span>
        <span className="flex items-center gap-2"><span className="inline-block size-2.5 bg-neutral-400 dark:bg-neutral-600" /> payé par heure</span>
      </div>
    </div>
  );
}

/**
 * Cascade : du montant facturé au montant réellement payé par le parent.
 *
 * C'est la forme qui montre une soustraction. Un tableau de quatre lignes dit
 * les mêmes nombres sans montrer que les deux du milieu creusent le premier.
 */
export function Waterfall({
  billed,
  creditCare,
  creditActivities,
  net,
}: {
  billed: number;
  creditCare: number;
  creditActivities: number;
  net: number;
}) {
  const W = 660;
  const H = 210;
  const PAD = { l: 8, r: 8, t: 30, b: 40 };
  const plotH = H - PAD.t - PAD.b;
  const h = (v: number) => (v / billed) * plotH;
  const base = H - PAD.b;

  const steps = [
    { label: "Facturé", value: billed, top: base - h(billed), height: h(billed), cls: NEUTRAL, show: money(billed) },
    { label: "Crédit garde", value: creditCare, top: base - h(billed), height: h(creditCare), cls: GOOD, show: `−${money(creditCare)}` },
    { label: "Crédit activités", value: creditActivities, top: base - h(billed - creditCare), height: h(creditActivities), cls: GOOD, show: `−${money(creditActivities)}` },
    { label: "Payé par le parent", value: net, top: base - h(net), height: h(net), cls: "fill-neutral-900 dark:fill-neutral-100", show: money(net) },
  ];

  const band = (W - PAD.l - PAD.r) / steps.length;
  const bw = band * 0.5;

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[520px]" role="img"
        aria-label="Du montant facturé au montant payé par le parent, après crédits d'impôt">
        <line x1={PAD.l} x2={W - PAD.r} y1={base} y2={base}
          className="stroke-neutral-300 dark:stroke-neutral-700" strokeWidth={1} />
        {steps.map((s, i) => {
          const cx = PAD.l + band * i + band / 2;
          return (
            <g key={s.label}>
              <rect x={cx - bw / 2} y={s.top} width={bw} height={Math.max(s.height, 2)} className={s.cls} />
              <text x={cx} y={s.top - 8} textAnchor="middle"
                className="fill-neutral-800 font-mono text-[13px] font-bold tabular-nums dark:fill-neutral-100">
                {s.show}
              </text>
              <text x={cx} y={H - PAD.b + 16} textAnchor="middle"
                className="fill-neutral-600 text-[11px] dark:fill-neutral-400">
                {s.label}
              </text>
              {i < steps.length - 1 && (
                <line x1={cx + bw / 2} x2={cx + band - bw / 2} y1={s.top} y2={s.top}
                  strokeDasharray="3 3" strokeWidth={1}
                  className="stroke-neutral-400 dark:stroke-neutral-600" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/**
 * Barres groupées : le coût du local selon qu'on loue ou qu'on achète.
 *
 * Toute la thèse tient dans la forme. Deux séries montent avec le nombre
 * d'enfants, la troisième est plate. On n'a plus besoin de l'expliquer.
 */
export function SpaceBars({
  data,
}: {
  data: { children: number; marche: number; partenaire: number; achat: number }[];
}) {
  const W = 660;
  const H = 240;
  const PAD = { l: 8, r: 8, t: 26, b: 46 };
  const max = Math.max(...data.flatMap((d) => [d.marche, d.partenaire, d.achat])) * 1.15;
  const band = (W - PAD.l - PAD.r) / data.length;
  const bw = band * 0.2;
  const plotH = H - PAD.t - PAD.b;
  const h = (v: number) => (v / max) * plotH;
  const base = H - PAD.b;

  const series: { key: "marche" | "partenaire" | "achat"; cls: string; label: string }[] = [
    { key: "marche", cls: BAD, label: "Marché" },
    { key: "partenaire", cls: "fill-sky-600", label: "Partenaire" },
    { key: "achat", cls: GOOD, label: "Acheté" },
  ];

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[520px]" role="img"
        aria-label="Coût annuel du local selon le nombre d'enfants, pour trois façons de l'occuper">
        <line x1={PAD.l} x2={W - PAD.r} y1={base} y2={base}
          className="stroke-neutral-300 dark:stroke-neutral-700" strokeWidth={1} />
        {data.map((d, i) => {
          const cx = PAD.l + band * i + band / 2;
          return (
            <g key={d.children}>
              {series.map((s, k) => {
                const v = d[s.key];
                const x = cx + (k - 1) * (bw + 6) - bw / 2;
                return (
                  <g key={s.key}>
                    <rect x={x} y={base - h(v)} width={bw} height={h(v)} className={s.cls} />
                    <text x={x + bw / 2} y={base - h(v) - 5} textAnchor="middle"
                      className="fill-neutral-500 font-mono text-[9.5px] tabular-nums">
                      {Math.round(v / 1000)}k
                    </text>
                  </g>
                );
              })}
              <text x={cx} y={base + 17} textAnchor="middle"
                className="fill-neutral-600 text-[12px] font-medium dark:fill-neutral-400">
                {d.children} enfants
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-1 flex flex-wrap justify-center gap-x-6 text-xs text-neutral-500">
        {series.map((s) => (
          <span key={s.key} className="flex items-center gap-2">
            <span className={`inline-block size-2.5 ${s.cls.replace("fill-", "bg-")}`} />
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
