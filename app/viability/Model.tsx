"use client";

import { useMemo, useState } from "react";
import {
  breakEven,
  curve,
  hiringSteps,
  money,
  MODEL,
  siteEconomics,
  type Scenario,
} from "../lib/economics";

const SCENARIOS: { key: Scenario; label: string; sub: string }[] = [
  { key: "prete", label: "Local prêté", sub: "Mosquée, centre communautaire, bibliothèque" },
  { key: "loue", label: "Local loué", sub: "85 $ le bloc de 4 h, tarif communautaire" },
];

/** Le compte d'un scénario, ligne par ligne. */
function Ledger({ students, scenario }: { students: number; scenario: Scenario }) {
  const e = siteEconomics(students, scenario);
  const viable = e.result >= 0;

  const lines: [string, number, boolean?][] = [
    [`Cohortes, ${e.students} × ${MODEL.priceCohort} $`, e.revenueCohorts],
    [`Conformité, ${Math.round(MODEL.complianceAdoption * 100)} % × ${MODEL.priceCompliance} $`, e.revenueCompliance],
    [`Instructeurs, ${e.instructors} × 25 200 $`, -e.instructorCost],
    ["Coordonnateur et administration", -e.fixedCost],
    [scenario === "loue" ? `Local, ${e.rooms} salles × 15 300 $` : "Local, prêté", -e.spaceCost],
  ];

  return (
    <div
      className={`rounded border p-5 ${
        viable
          ? "border-green-600/50 bg-green-50/40 dark:bg-green-950/20"
          : "border-red-600/50 bg-red-50/40 dark:bg-red-950/20"
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
        {SCENARIOS.find((s) => s.key === scenario)!.label}
      </p>
      <p className="mt-0.5 text-xs text-neutral-500">
        {SCENARIOS.find((s) => s.key === scenario)!.sub}
      </p>

      <p
        className={`mt-4 font-mono text-3xl tabular-nums ${
          viable ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"
        }`}
      >
        {money(e.result)}
      </p>
      <p className="text-xs text-neutral-500">
        {viable ? "par an, marge de " : "par an, déficit de "}
        {Math.abs(Math.round(e.margin * 100))} % du revenu
      </p>

      <dl className="mt-4 grid gap-1 text-sm">
        {lines.map(([label, value]) => (
          <div
            key={label}
            className="flex items-baseline justify-between gap-3 border-b border-neutral-200/70 py-1 dark:border-neutral-800"
          >
            <dt className="text-neutral-600 dark:text-neutral-400">{label}</dt>
            <dd
              className={`shrink-0 font-mono text-xs tabular-nums ${
                value < 0 ? "text-neutral-500" : ""
              }`}
            >
              {money(value)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/**
 * Le graphique.
 *
 * Il existe pour une seule raison : les dents de scie. Un lecteur à qui on dit
 * « le point mort est à 63 » imagine une droite. La courbe montre que le
 * résultat retombe à chaque embauche, et c'est ce qui explique pourquoi on
 * n'embauche pas à la première inscription qui dépasse le palier.
 */
function Curve({ students }: { students: number }) {
  const W = 660;
  const H = 260;
  const PAD = { l: 62, r: 14, t: 14, b: 30 };

  const series = useMemo(
    () => SCENARIOS.map((s) => ({ ...s, points: curve(s.key).map((e) => e.result) })),
    [],
  );

  const all = series.flatMap((s) => s.points);
  const lo = Math.min(...all);
  const hi = Math.max(...all);

  const x = (n: number) => PAD.l + (n / MODEL.siteCapacity) * (W - PAD.l - PAD.r);
  const y = (v: number) => PAD.t + ((hi - v) / (hi - lo)) * (H - PAD.t - PAD.b);

  const path = (pts: number[]) => pts.map((v, n) => `${n === 0 ? "M" : "L"}${x(n)},${y(v)}`).join(" ");

  // Graduations : le zéro, et un repère de part et d'autre.
  const ticks = [hi, 0, lo].map((v) => Math.round(v / 1000) * 1000);

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full min-w-[560px]"
        role="img"
        aria-label="Résultat annuel du site selon le nombre d'enfants inscrits, dans les deux scénarios de local"
      >
        {ticks.map((v) => (
          <g key={v}>
            <line
              x1={PAD.l}
              x2={W - PAD.r}
              y1={y(v)}
              y2={y(v)}
              stroke="currentColor"
              strokeWidth={v === 0 ? 1.5 : 0.5}
              className={v === 0 ? "text-neutral-500" : "text-neutral-300 dark:text-neutral-700"}
            />
            <text
              x={PAD.l - 8}
              y={y(v) + 4}
              textAnchor="end"
              className="fill-neutral-500 font-mono text-[10px] tabular-nums"
            >
              {money(v)}
            </text>
          </g>
        ))}

        {[0, 24, 48, 72, 96].map((n) => (
          <text
            key={n}
            x={x(n)}
            y={H - 10}
            textAnchor="middle"
            className="fill-neutral-500 font-mono text-[10px] tabular-nums"
          >
            {n}
          </text>
        ))}

        {series.map((s) => (
          <path
            key={s.key}
            d={path(s.points)}
            fill="none"
            strokeWidth={2}
            className={
              s.key === "prete"
                ? "stroke-green-600"
                : "stroke-red-600"
            }
          />
        ))}

        <line
          x1={x(students)}
          x2={x(students)}
          y1={PAD.t}
          y2={H - PAD.b}
          strokeWidth={1}
          strokeDasharray="3 3"
          className="stroke-neutral-500"
        />
        {series.map((s) => (
          <circle
            key={s.key}
            cx={x(students)}
            cy={y(s.points[students])}
            r={4}
            className={s.key === "prete" ? "fill-green-600" : "fill-red-600"}
          />
        ))}
      </svg>
      <p className="mt-1 text-center text-xs text-neutral-500">Enfants inscrits sur le site</p>
    </div>
  );
}

export default function Model({ initialStudents }: { initialStudents: number }) {
  const [students, setStudents] = useState(initialStudents);

  const bePrete = breakEven("prete");
  const beLoue = breakEven("loue");
  const steps = hiringSteps("prete");

  return (
    <>
      <div className="mb-8 rounded border border-neutral-200 p-5 dark:border-neutral-800">
        <label
          htmlFor="students"
          className="flex flex-wrap items-baseline justify-between gap-3"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
            Enfants inscrits sur le site
          </span>
          <span className="font-mono text-2xl tabular-nums">
            {students}
            <span className="text-sm text-neutral-500"> / {MODEL.siteCapacity}</span>
            <span className="ml-3 text-sm text-neutral-500">
              {Math.round((students / MODEL.siteCapacity) * 100)} % de remplissage
            </span>
          </span>
        </label>
        <input
          id="students"
          type="range"
          min={0}
          max={MODEL.siteCapacity}
          value={students}
          onChange={(e) => setStudents(Number(e.target.value))}
          className="mt-3 w-full accent-neutral-900 dark:accent-neutral-100"
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {[initialStudents, bePrete.first ?? 0, bePrete.stable ?? 0, MODEL.siteCapacity].map(
            (n, i) => (
              <button
                key={`${n}-${i}`}
                type="button"
                onClick={() => setStudents(n)}
                className="rounded border border-neutral-300 px-2.5 py-1 font-mono text-xs hover:border-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-100"
              >
                {["inscrits aujourd'hui", "premier point mort", "point mort stable", "site plein"][i]}{" "}
                {n}
              </button>
            ),
          )}
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          {siteEconomics(students, "prete").instructors} instructeur
          {siteEconomics(students, "prete").instructors > 1 ? "s" : ""} et autant de salles à ce
          niveau. Un instructeur sert 4 cohortes de 4 enfants, donc 16 familles : le plafond légal
          limite la salle, pas la personne.
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <Ledger students={students} scenario="prete" />
        <Ledger students={students} scenario="loue" />
      </div>

      <section className="mb-8 rounded border border-neutral-200 p-5 dark:border-neutral-800">
        <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
          Résultat annuel selon le remplissage
        </h2>
        <div className="mt-4">
          <Curve students={students} />
        </div>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-neutral-500">
          <span className="flex items-center gap-2">
            <span className="inline-block h-0.5 w-5 bg-green-600" /> Local prêté
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-0.5 w-5 bg-red-600" /> Local loué
          </span>
        </div>
      </section>

      <section className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="border-l-2 border-neutral-900 pl-4 dark:border-neutral-100">
          <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
            Il y a deux points morts, pas un
          </p>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            Le site cesse de perdre de l&apos;argent à{" "}
            <span className="font-mono">{bePrete.first}</span> enfants. Mais il redevient
            déficitaire à {steps.find((s) => s.at > (bePrete.first ?? 0))?.at ?? "—"}, quand
            l&apos;instructeur suivant est embauché pour un enfant de plus, et il ne le reste plus
            à partir de <span className="font-mono">{bePrete.stable}</span>.
          </p>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            Ce que ça change en pratique : on n&apos;embauche pas à la première inscription qui
            dépasse le palier, on embauche quand la cohorte qu&apos;il va servir est remplie.
          </p>
        </div>

        <div className="border-l-2 border-red-600 pl-4">
          <p className="font-mono text-xs uppercase tracking-wider text-red-700 dark:text-red-400">
            Le local prêté n&apos;est pas un avantage
          </p>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            {beLoue.stable === null
              ? "Au tarif du marché, aucun niveau de remplissage ne rend le site viable. Même plein à 96 enfants, il perd de l'argent."
              : `Au tarif du marché, il faut ${beLoue.stable} enfants.`}{" "}
            Une salle louée coûte 15 300 $ par an et rapporte 700 $ de contribution par instructeur.
            Le partenariat communautaire est la condition d&apos;existence du modèle, pas une
            économie.
          </p>
        </div>
      </section>
    </>
  );
}
