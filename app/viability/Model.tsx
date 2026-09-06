"use client";

import { useMemo, useState } from "react";
import {
  ACQUISITION,
  BUILDING,
  breakEven,
  CREDIT,
  curve,
  hourlyMargin,
  money,
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
import { HourlyBars, SpaceBars, Waterfall } from "./Charts";

const SCENARIOS: Occupancy[] = ["partenaire", "marche", "achat"];

const TONE = (v: number) =>
  v >= 0 ? "text-done" : "text-late";

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
        ok ? "border-done/50" : "border-late/50"
      }`}
    >
      <p className="eyebrow">
        {OCCUPANCY_LABEL[occupancy]}
      </p>
      <p className={`mt-3 font-mono text-3xl tabular-nums ${TONE(p.result)}`}>{money(p.result)}</p>
      <p className="text-xs text-ink-2">
        par an, {Math.abs(Math.round(p.margin * 100))} % du revenu
      </p>

      <dl className="mt-4 grid gap-0.5 text-sm">
        {lines.map(([label, value]) => (
          <div
            key={label}
            className="flex items-baseline justify-between gap-3 border-b border-rule/70 py-1 dark:border-rule"
          >
            <dt className="text-ink-2 dark:text-ink-2">{label}</dt>
            <dd className={`shrink-0 font-mono text-xs tabular-nums ${value < 0 ? "text-ink-2" : ""}`}>
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
    partenaire: "stroke-accent",
    marche: "stroke-red-600",
    prete: "stroke-rule",
  };
  const fill: Record<Occupancy, string> = {
    achat: "fill-done",
    partenaire: "fill-accent",
    marche: "fill-late",
    prete: "fill-ink-2",
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
              className={v === 0 ? "text-ink-2" : "text-ink-2 dark:text-ink"}
            />
            <text
              x={PAD.l - 8}
              y={y(v) + 4}
              textAnchor="end"
              className="fill-ink-2 font-mono text-[10px] tabular-nums"
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
            className="fill-ink-2 font-mono text-[10px] tabular-nums"
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
          className="stroke-rule"
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
        <h2 className="mb-1 eyebrow">
          1 · La marge sur chaque heure travaillée
        </h2>
        <p className="mb-4 max-w-prose text-sm text-ink-2 dark:text-ink-2">
          Si une heure ne rapporte pas, aucune échelle ne sauve l&apos;entreprise. Elle accélère la
          perte.
        </p>
        <HourlyBars
          rows={[
            { label: "Enseignement, 4 élèves", ...h.teaching },
            { label: "Encadrement, 4 élèves", ...h.care4 },
            { label: "Encadrement, 8 élèves", ...h.care8 },
          ]}
        />
      </section>

      {/* 2. Ce que le parent paie vraiment. */}
      <section className="mb-8 rounded border border-rule p-5 dark:border-rule">
        <h2 className="eyebrow">
          2 · Ce que le parent paie vraiment
        </h2>
        <p className="mt-1 max-w-prose text-sm text-ink-2 dark:text-ink-2">
          Deux journées complètes par semaine, {OFFER.weeks} semaines. Le crédit pour frais de garde
          rembourse de {Math.round(CREDIT.care.low * 100)} % à {Math.round(CREDIT.care.high * 100)} %
          selon le revenu, jusqu&apos;à {money(CREDIT.care.ceiling)} par enfant de 7 à 13 ans.
        </p>

        <div className="mt-4">
          <Waterfall
            billed={bill.billed}
            creditCare={bill.creditCare}
            creditActivities={bill.creditActivities}
            net={bill.net}
          />
        </div>

        <p className="mt-3 font-mono text-sm">
          {bill.netPerDay.toFixed(0)} $ par journée
          <span className="ml-3 text-xs text-ink-2">
            un camp de jour privé est autour de 50 $ et n&apos;enseigne rien
          </span>
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <label className="text-xs">
            <span className="text-ink-2">Taux du crédit</span>
            <select
              value={creditRate}
              onChange={(e) => setCreditRate(Number(e.target.value))}
              className="ml-2 rounded border border-rule bg-transparent px-2 py-1 font-mono dark:border-rule"
            >
              <option value={0.67}>67 % (revenu élevé)</option>
              <option value={0.7}>70 %</option>
              <option value={0.78}>78 % (revenu bas)</option>
            </select>
          </label>
          <label className="text-xs">
            <span className="text-ink-2">Encadrement admissible au RL-24</span>
            <select
              value={careEligible}
              onChange={(e) => setCareEligible(Number(e.target.value))}
              className="ml-2 rounded border border-rule bg-transparent px-2 py-1 font-mono dark:border-rule"
            >
              <option value={1}>oui, en entier</option>
              <option value={0.5}>la moitié</option>
              <option value={0}>pas du tout</option>
            </select>
          </label>
        </div>
        <p className="mt-2 text-xs text-ink-2">
          L&apos;admissibilité au relevé 24 n&apos;est pas confirmée. Mettez-la à zéro : le parent
          paie {money(parentBill(creditRate, 0).net)} et le modèle tient quand même, parce que nos
          coûts ne changent pas.
        </p>
      </section>

      {/* 3. Louer ou acheter. */}
      <section className="mb-8">
        <h2 className="mb-1 eyebrow">
          3 · Louer ou acheter
        </h2>
        <p className="mb-4 max-w-prose text-sm text-ink-2 dark:text-ink-2">
          Un loyer monte avec chaque instructeur et ne s&apos;arrête jamais. Une hypothèque est fixe.
          Et notre programme occupe le bâtiment aux heures dont personne ne veut : le soir et la fin
          de semaine se louent.
        </p>
        <SpaceBars
          data={[16, 48, 96].map((c) => {
            const i = Math.ceil(c / 16);
            return {
              children: c,
              marche: rentCost(i, "marche"),
              partenaire: rentCost(i, "partenaire"),
              achat: rentCost(i, "achat"),
            };
          })}
        />

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-rule text-left text-xs uppercase tracking-wider text-ink-2 dark:border-rule">
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
                  <tr key={n} className="border-b border-rule dark:border-rule">
                    <td className="py-2 pr-4 font-mono tabular-nums">{n}</td>
                    <td className="py-2 pr-4 text-right font-mono tabular-nums">
                      {money(rentCost(i, "partenaire"))}
                    </td>
                    <td className="py-2 pr-4 text-right font-mono tabular-nums text-late">
                      {money(rentCost(i, "marche"))}
                    </td>
                    <td className="py-2 text-right font-mono tabular-nums text-done">
                      {money(rentCost(i, "achat"))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 max-w-prose text-xs text-ink-2">
          Immeuble à {money(BUILDING.price)} [annonces à Montréal : à partir de 400 000 $, plex
          médian 880 000 $]. <strong>Aucune hypothèque, aucun financement par intérêt.</strong> Sans
          dette il ne reste que {money(BUILDING.taxes + BUILDING.insurance + BUILDING.upkeep)} de
          taxes, assurance et entretien, moins {money(subletRevenue())} de sous-location. Net{" "}
          {money(ownedOccupancyCost())} : le bâtiment ne coûte rien, il rapporte, et ce chiffre ne
          bouge pas avec le nombre d&apos;enfants.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {ACQUISITION.map((a) => (
            <div key={a.key} className="border-l-2 border-rule pl-3 dark:border-rule">
              <p className="text-sm font-medium">{a.label}</p>
              <p className="mt-1 text-xs text-ink-2">{a.what}</p>
              <p className="mt-1 font-mono text-xs text-ink-2">
                Capital requis : {a.capital === 0 ? "aucun" : money(a.capital)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Le curseur. */}
      <div className="mb-6 rounded border border-rule p-5 dark:border-rule">
        <label htmlFor="students" className="flex flex-wrap items-baseline justify-between gap-3">
          <span className="eyebrow">
            4 · Enfants inscrits
          </span>
          <span className="font-mono text-2xl tabular-nums">
            {students}
            <span className="text-sm text-ink-2"> / 96</span>
          </span>
        </label>
        <input
          id="students"
          type="range"
          min={0}
          max={96}
          value={students}
          onChange={(e) => setStudents(Number(e.target.value))}
          className="mt-3 w-full accent-ink dark:accent-ink"
        />
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {[16, 48, 96].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setStudents(n)}
              className="rounded border border-rule px-2.5 py-1 font-mono text-xs hover:border-ink dark:border-rule dark:hover:border-rule"
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setYearOne(!yearOne)}
            className="ml-auto rounded border border-rule px-2.5 py-1 font-mono text-xs hover:border-ink dark:border-rule dark:hover:border-rule"
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

      <section className="mb-8 rounded border border-rule p-5 dark:border-rule">
        <h2 className="eyebrow">
          Résultat annuel selon le remplissage
        </h2>
        <p className="mt-1 text-xs text-ink-2">
          Les dents de scie sont les embauches : un instructeur arrive avant les enfants qui le
          paient. D&apos;où la règle, on embauche quand la cohorte suivante est remplie.
        </p>
        <div className="mt-3">
          <Curve students={students} yearOne={yearOne} />
        </div>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink-2">
          <span className="flex items-center gap-2"><span className="inline-block h-0.5 w-5 bg-done" /> Acheté</span>
          <span className="flex items-center gap-2"><span className="inline-block h-0.5 w-5 bg-accent" /> Partenaire</span>
          <span className="flex items-center gap-2"><span className="inline-block h-0.5 w-5 bg-late" /> Marché</span>
        </div>
        <div className="mt-4 grid gap-2 text-sm sm:grid-cols-3">
          {SCENARIOS.map((s) => {
            const be = breakEven(s, yearOne);
            return (
              <p key={s} className="text-ink-2 dark:text-ink-2">
                <span className="eyebrow">
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
        <h2 className="mb-1 eyebrow">
          5 · Le chemin jusqu&apos;à l&apos;immeuble
        </h2>
        <p className="mb-4 max-w-prose text-sm text-ink-2 dark:text-ink-2">
          On reste au tarif partenaire tant que l&apos;immeuble n&apos;est pas acquis sans dette.
          Le surplus s&apos;accumule, il ne sert pas à rembourser un prêt.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-rule text-left text-xs uppercase tracking-wider text-ink-2 dark:border-rule">
                <th className="py-2 pr-4 font-normal">An</th>
                <th className="py-2 pr-4 font-normal">Enfants</th>
                <th className="py-2 pr-4 font-normal">Local</th>
                <th className="py-2 pr-4 text-right font-normal">Résultat</th>
                <th className="py-2 text-right font-normal">Caisse</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((s) => (
                <tr key={s.year} className="border-b border-rule dark:border-rule">
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
        <p className="mt-3 max-w-prose text-xs text-ink-2">
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
