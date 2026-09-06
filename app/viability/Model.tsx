"use client";

import { useMemo, useState } from "react";
import {
  BUILDING,
  breakEven,
  CREDIT,
  curve,
  hourlyMargin,
  money,
  mortgageAnnual,
  OCCUPANCY_LABEL,
  OFFER,
  ownedOccupancyCost,
  parentBill,
  path,
  plan,
  PRICES,
  rentCost,
  subletRevenue,
  type Occupancy,
} from "../lib/economics";

const SCENARIOS: Occupancy[] = ["partenaire", "marche", "achat"];

const TONE = (v: number) =>
  v >= 0 ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400";

function Ledger({ children, occupancy, yearOne }: { children: number; occupancy: Occupancy; yearOne: boolean }) {
  const p = plan(children, occupancy, yearOne);
  const ok = p.result >= 0;

  const lines: [string, number][] = [
    [`Enseignement, ${p.children} × ${PRICES.teaching} $`, p.revenue.teaching],
    [`Encadrement, ${p.children} × ${PRICES.care} $`, p.revenue.care],
    [`Activités, ${p.children} × ${PRICES.activities} $`, p.revenue.activities],
    ["Conformité", p.revenue.compliance],
    [`Instructeurs, ${p.instructors}`, -p.cost.instructors],
    [`Surveillants, ${p.instructors}`, -p.cost.monitors],
    [occupancy === "achat" ? "Immeuble, net de sous-location" : "Local", -p.cost.space],
    ["Matériel et activités", -p.cost.materials],
    ["Assurances et antécédents", -(p.cost.insurance + p.cost.screening)],
    ...(p.cost.legal ? ([["Frais légaux, an 1", -p.cost.legal]] as [string, number][]) : []),
    ...(p.cost.secretary ? ([["Secrétaire", -p.cost.secretary]] as [string, number][]) : []),
    ...(p.cost.coordinator ? ([["Coordonnateur", -p.cost.coordinator]] as [string, number][]) : []),
    ["Imprévus, 5 %", -p.cost.contingency],
  ];

  return (
    <div
      className={`rounded border p-5 ${
        ok ? "border-green-600/50" : "border-red-600/50"
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
        {OCCUPANCY_LABEL[occupancy]}
      </p>
      <p className={`mt-3 font-mono text-3xl tabular-nums ${TONE(p.result)}`}>{money(p.result)}</p>
      <p className="text-xs text-neutral-500">
        par an, {Math.abs(Math.round(p.margin * 100))} % du revenu
      </p>

      <dl className="mt-4 grid gap-0.5 text-sm">
        {lines.map(([label, value]) => (
          <div
            key={label}
            className="flex items-baseline justify-between gap-3 border-b border-neutral-200/70 py-1 dark:border-neutral-800"
          >
            <dt className="text-neutral-600 dark:text-neutral-400">{label}</dt>
            <dd className={`shrink-0 font-mono text-xs tabular-nums ${value < 0 ? "text-neutral-500" : ""}`}>
              {money(value)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Curve({ students, yearOne }: { students: number; yearOne: boolean }) {
  const W = 660;
  const H = 240;
  const PAD = { l: 66, r: 14, t: 14, b: 28 };

  const series = useMemo(
    () => SCENARIOS.map((k) => ({ key: k, points: curve(k, yearOne) })),
    [yearOne],
  );
  const all = series.flatMap((s) => s.points);
  const lo = Math.min(...all);
  const hi = Math.max(...all);

  const x = (n: number) => PAD.l + (n / 96) * (W - PAD.l - PAD.r);
  const y = (v: number) => PAD.t + ((hi - v) / (hi - lo)) * (H - PAD.t - PAD.b);
  const d = (pts: number[]) => pts.map((v, n) => `${n === 0 ? "M" : "L"}${x(n)},${y(v)}`).join(" ");

  const stroke: Record<Occupancy, string> = {
    achat: "stroke-green-600",
    partenaire: "stroke-sky-600",
    marche: "stroke-red-600",
    prete: "stroke-neutral-400",
  };
  const fill: Record<Occupancy, string> = {
    achat: "fill-green-600",
    partenaire: "fill-sky-600",
    marche: "fill-red-600",
    prete: "fill-neutral-400",
  };

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full min-w-[560px]"
        role="img"
        aria-label="Résultat annuel selon le nombre d'enfants, pour les trois façons d'occuper un local"
      >
        {[hi, 0, lo].map((v) => (
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
        {[0, 16, 48, 96].map((n) => (
          <text
            key={n}
            x={x(n)}
            y={H - 9}
            textAnchor="middle"
            className="fill-neutral-500 font-mono text-[10px] tabular-nums"
          >
            {n}
          </text>
        ))}
        {series.map((s) => (
          <path key={s.key} d={d(s.points)} fill="none" strokeWidth={2} className={stroke[s.key]} />
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
          <circle key={s.key} cx={x(students)} cy={y(s.points[students])} r={4} className={fill[s.key]} />
        ))}
      </svg>
    </div>
  );
}

export default function Model({ initialStudents }: { initialStudents: number }) {
  const [students, setStudents] = useState(Math.max(initialStudents, 16));
  const [yearOne, setYearOne] = useState(false);
  const [creditRate, setCreditRate] = useState(0.7);
  const [careEligible, setCareEligible] = useState(1);

  const h = hourlyMargin();
  const bill = parentBill(creditRate, careEligible);
  const steps = path();

  return (
    <>
      {/* 1. Le premier test : gagne-t-on sur chaque heure ? */}
      <section className="mb-8">
        <h2 className="mb-1 font-mono text-xs uppercase tracking-wider text-neutral-500">
          1 · La marge sur chaque heure travaillée
        </h2>
        <p className="mb-4 max-w-prose text-sm text-neutral-600 dark:text-neutral-400">
          Si une heure ne rapporte pas, aucune échelle ne sauve l&apos;entreprise. Elle accélère la
          perte.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Enseignement, 4 élèves", h.teaching],
            ["Encadrement, 4 élèves", h.care4],
            ["Encadrement, 8 élèves", h.care8],
          ].map(([label, m]) => {
            const v = m as { revenue: number; cost: number; margin: number };
            return (
              <div key={String(label)} className="border-l-2 border-neutral-300 pl-3 dark:border-neutral-700">
                <p className="text-xs text-neutral-500">{String(label)}</p>
                <p className={`font-mono text-xl tabular-nums ${TONE(v.margin)}`}>
                  +{v.margin.toFixed(2)} $/h
                </p>
                <p className="font-mono text-xs text-neutral-500">
                  {v.revenue.toFixed(2)} reçus − {v.cost.toFixed(2)} payés
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Ce que le parent paie vraiment. */}
      <section className="mb-8 rounded border border-neutral-200 p-5 dark:border-neutral-800">
        <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
          2 · Ce que le parent paie vraiment
        </h2>
        <p className="mt-1 max-w-prose text-sm text-neutral-600 dark:text-neutral-400">
          Deux journées complètes par semaine, {OFFER.weeks} semaines. Le crédit pour frais de garde
          rembourse de {Math.round(CREDIT.care.low * 100)} % à {Math.round(CREDIT.care.high * 100)} %
          selon le revenu, jusqu&apos;à {money(CREDIT.care.ceiling)} par enfant de 7 à 13 ans.
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <dt className="text-xs text-neutral-500">Facturé</dt>
            <dd className="font-mono text-xl tabular-nums">{money(bill.billed)}</dd>
          </div>
          <div>
            <dt className="text-xs text-neutral-500">Crédit garde</dt>
            <dd className="font-mono text-xl tabular-nums text-green-700 dark:text-green-400">
              −{money(bill.creditCare)}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-neutral-500">Crédit activités</dt>
            <dd className="font-mono text-xl tabular-nums text-green-700 dark:text-green-400">
              −{money(bill.creditActivities)}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-neutral-500">Coût net</dt>
            <dd className="font-mono text-xl font-bold tabular-nums">{money(bill.net)}</dd>
          </div>
        </dl>

        <p className="mt-3 font-mono text-sm">
          {bill.netPerDay.toFixed(0)} $ par journée
          <span className="ml-3 text-xs text-neutral-500">
            un camp de jour privé est autour de 50 $ et n&apos;enseigne rien
          </span>
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <label className="text-xs">
            <span className="text-neutral-500">Taux du crédit</span>
            <select
              value={creditRate}
              onChange={(e) => setCreditRate(Number(e.target.value))}
              className="ml-2 rounded border border-neutral-300 bg-transparent px-2 py-1 font-mono dark:border-neutral-700"
            >
              <option value={0.67}>67 % (revenu élevé)</option>
              <option value={0.7}>70 %</option>
              <option value={0.78}>78 % (revenu bas)</option>
            </select>
          </label>
          <label className="text-xs">
            <span className="text-neutral-500">Encadrement admissible au RL-24</span>
            <select
              value={careEligible}
              onChange={(e) => setCareEligible(Number(e.target.value))}
              className="ml-2 rounded border border-neutral-300 bg-transparent px-2 py-1 font-mono dark:border-neutral-700"
            >
              <option value={1}>oui, en entier</option>
              <option value={0.5}>la moitié</option>
              <option value={0}>pas du tout</option>
            </select>
          </label>
        </div>
        <p className="mt-2 text-xs text-neutral-500">
          L&apos;admissibilité au relevé 24 n&apos;est pas confirmée. Mettez-la à zéro : le parent
          paie {money(parentBill(creditRate, 0).net)} et le modèle tient quand même, parce que nos
          coûts ne changent pas.
        </p>
      </section>

      {/* 3. Louer ou acheter. */}
      <section className="mb-8">
        <h2 className="mb-1 font-mono text-xs uppercase tracking-wider text-neutral-500">
          3 · Louer ou acheter
        </h2>
        <p className="mb-4 max-w-prose text-sm text-neutral-600 dark:text-neutral-400">
          Un loyer monte avec chaque instructeur et ne s&apos;arrête jamais. Une hypothèque est fixe.
          Et notre programme occupe le bâtiment aux heures dont personne ne veut : le soir et la fin
          de semaine se louent.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-400 text-left text-xs uppercase tracking-wider text-neutral-500 dark:border-neutral-600">
                <th className="py-2 pr-4 font-normal">Enfants</th>
                <th className="py-2 pr-4 text-right font-normal">Tarif partenaire</th>
                <th className="py-2 pr-4 text-right font-normal">Tarif du marché</th>
                <th className="py-2 text-right font-normal">Immeuble acheté</th>
              </tr>
            </thead>
            <tbody>
              {[16, 48, 96].map((n) => {
                const i = Math.ceil(n / 16);
                return (
                  <tr key={n} className="border-b border-neutral-200 dark:border-neutral-800">
                    <td className="py-2 pr-4 font-mono tabular-nums">{n}</td>
                    <td className="py-2 pr-4 text-right font-mono tabular-nums">
                      {money(rentCost(i, "partenaire"))}
                    </td>
                    <td className="py-2 pr-4 text-right font-mono tabular-nums text-red-700 dark:text-red-400">
                      {money(rentCost(i, "marche"))}
                    </td>
                    <td className="py-2 text-right font-mono tabular-nums text-green-700 dark:text-green-400">
                      {money(rentCost(i, "achat"))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 max-w-prose text-xs text-neutral-500">
          Immeuble à {money(BUILDING.price)} [annonces courantes à Gatineau, 349 900 $ à 595 000 $],
          mise de fonds de {Math.round(BUILDING.downPayment * 100)} % soit{" "}
          {money(BUILDING.price * BUILDING.downPayment)}, {Math.round(BUILDING.rate * 100)} % sur{" "}
          {BUILDING.years} ans [taux commerciaux de 6 % à 8 % fin 2025]. Hypothèque{" "}
          {money(mortgageAnnual())}, taxes, assurance et entretien {money(BUILDING.taxes + BUILDING.insurance + BUILDING.upkeep)},
          moins {money(subletRevenue())} de sous-location le soir et la fin de semaine. Net{" "}
          {money(ownedOccupancyCost())}, et ce chiffre ne bouge pas avec le nombre d&apos;enfants.
        </p>
      </section>

      {/* 4. Le curseur. */}
      <div className="mb-6 rounded border border-neutral-200 p-5 dark:border-neutral-800">
        <label htmlFor="students" className="flex flex-wrap items-baseline justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
            4 · Enfants inscrits
          </span>
          <span className="font-mono text-2xl tabular-nums">
            {students}
            <span className="text-sm text-neutral-500"> / 96</span>
          </span>
        </label>
        <input
          id="students"
          type="range"
          min={0}
          max={96}
          value={students}
          onChange={(e) => setStudents(Number(e.target.value))}
          className="mt-3 w-full accent-neutral-900 dark:accent-neutral-100"
        />
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {[16, 48, 96].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setStudents(n)}
              className="rounded border border-neutral-300 px-2.5 py-1 font-mono text-xs hover:border-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-100"
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setYearOne(!yearOne)}
            className="ml-auto rounded border border-neutral-300 px-2.5 py-1 font-mono text-xs hover:border-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-100"
          >
            {yearOne ? "An 1, frais légaux inclus" : "Régime de croisière"}
          </button>
        </div>
      </div>

      <div className="mb-8 grid gap-4 lg:grid-cols-3">
        {SCENARIOS.map((s) => (
          <Ledger key={s} children={students} occupancy={s} yearOne={yearOne} />
        ))}
      </div>

      <section className="mb-8 rounded border border-neutral-200 p-5 dark:border-neutral-800">
        <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
          Résultat annuel selon le remplissage
        </h2>
        <p className="mt-1 text-xs text-neutral-500">
          Les dents de scie sont les embauches : un instructeur arrive avant les enfants qui le
          paient. D&apos;où la règle, on embauche quand la cohorte suivante est remplie.
        </p>
        <div className="mt-3">
          <Curve students={students} yearOne={yearOne} />
        </div>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-neutral-500">
          <span className="flex items-center gap-2"><span className="inline-block h-0.5 w-5 bg-green-600" /> Acheté</span>
          <span className="flex items-center gap-2"><span className="inline-block h-0.5 w-5 bg-sky-600" /> Partenaire</span>
          <span className="flex items-center gap-2"><span className="inline-block h-0.5 w-5 bg-red-600" /> Marché</span>
        </div>
        <div className="mt-4 grid gap-2 text-sm sm:grid-cols-3">
          {SCENARIOS.map((s) => {
            const be = breakEven(s, yearOne);
            return (
              <p key={s} className="text-neutral-600 dark:text-neutral-400">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  {OCCUPANCY_LABEL[s]}
                </span>
                <br />
                {be.first === null
                  ? "jamais rentable"
                  : be.stable === null
                    ? `rentable de ${be.first} à quelques dizaines d'enfants, puis jamais : le loyer monte plus vite que les inscriptions`
                    : `rentable dès ${be.first}, solide à partir de ${be.stable}`}
              </p>
            );
          })}
        </div>
      </section>

      {/* 5. Le chemin. */}
      <section className="mb-8">
        <h2 className="mb-1 font-mono text-xs uppercase tracking-wider text-neutral-500">
          5 · Le chemin jusqu&apos;à l&apos;immeuble
        </h2>
        <p className="mb-4 max-w-prose text-sm text-neutral-600 dark:text-neutral-400">
          On loue tant qu&apos;on n&apos;a pas la mise de fonds, et on achète dès qu&apos;on
          l&apos;a. L&apos;année de l&apos;achat, {money(BUILDING.price * BUILDING.downPayment)}{" "}
          sortent de la caisse.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-400 text-left text-xs uppercase tracking-wider text-neutral-500 dark:border-neutral-600">
                <th className="py-2 pr-4 font-normal">An</th>
                <th className="py-2 pr-4 font-normal">Enfants</th>
                <th className="py-2 pr-4 font-normal">Local</th>
                <th className="py-2 pr-4 text-right font-normal">Résultat</th>
                <th className="py-2 text-right font-normal">Caisse</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((s) => (
                <tr key={s.year} className="border-b border-neutral-200 dark:border-neutral-800">
                  <td className="py-2 pr-4 font-mono tabular-nums">{s.year}</td>
                  <td className="py-2 pr-4 font-mono tabular-nums">{s.children}</td>
                  <td className="py-2 pr-4 text-xs">{OCCUPANCY_LABEL[s.occupancy]}</td>
                  <td className={`py-2 pr-4 text-right font-mono tabular-nums ${TONE(s.result)}`}>
                    {money(s.result)}
                  </td>
                  <td className={`py-2 text-right font-mono tabular-nums ${TONE(s.cash)}`}>
                    {money(s.cash)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 max-w-prose text-xs text-neutral-500">
          Sept ans en autofinancement pur. C&apos;est long, et c&apos;est le vrai chiffre. Trois
          leviers le raccourcissent : un financement d&apos;immeuble occupé par son propriétaire
          demande parfois moins de 25 % de mise de fonds, un organisme communautaire peut coinvestir
          contre des heures d&apos;usage, et un deuxième site loué en parallèle double le surplus
          annuel.
        </p>
      </section>
    </>
  );
}
