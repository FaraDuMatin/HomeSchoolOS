import Link from "next/link";
import { prisma } from "../lib/db";
import { countFor, depositCounts } from "../lib/deposit";
import {
  DAYS,
  PRESENCE_DAYS,
  WEEK,
  isProgramCompetency,
  weeklyMinutes,
  type Block,
} from "../lib/schedule";

export const dynamic = "force-dynamic";

/**
 * La semaine, vue par l'élève.
 *
 * Une vraie grille de calendrier : un jour par colonne, les heures en axe. La
 * liste disait les mêmes heures mais ne montrait pas la forme de la journée,
 * qu'un bloc de Coran ouvre chaque matin et que le mardi et le jeudi sont
 * pleins pendant que le reste de la semaine est court. La forme est
 * l'argument, donc elle doit se voir sans lire.
 *
 * Le placement est calculé en minutes depuis 9 h, sur une trame de 5 minutes.
 * Aucune hauteur n'est écrite à la main : un bloc deux fois plus long est deux
 * fois plus haut, sinon la grille ment.
 */

const START = 9 * 60;
const END = 15 * 60;
const SLOT = 5;
const ROWS = (END - START) / SLOT;

function minutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** La ligne de départ et la ligne d'arrivée du bloc dans la trame. */
function span(b: Block) {
  const from = Math.max(0, (minutes(b.start) - START) / SLOT);
  const to = Math.min(ROWS, (minutes(b.end) - START) / SLOT);
  return { gridRow: `${from + 1} / ${to + 1}` };
}

const KIND_LABEL: Record<Block["kind"], string> = {
  programme: "Programme",
  religieux: "Religieux",
  activite: "Activité",
  pause: "Pause",
};

/* La couleur dit la famille du bloc. Le religieux prend l'accent, le programme
   l'encre, l'activité et les pauses restent discrets. */
const KIND_STYLE: Record<Block["kind"], string> = {
  programme: "border-l-ink bg-surface",
  religieux: "border-l-accent bg-accent-soft",
  activite: "border-l-ink-2 bg-surface",
  pause: "border-l-rule bg-transparent",
};

function hours(min: number) {
  return `${Math.floor(min / 60)} h ${String(min % 60).padStart(2, "0")}`;
}

export default async function HorairePage(props: { searchParams: Promise<{ e?: string }> }) {
  const { e } = await props.searchParams;

  const students = await prisma.user.findMany({
    where: { role: "STUDENT" },
    orderBy: { name: "asc" },
  });
  const current = students.find((s) => s.id === e) ?? students[0];

  if (!current) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-12">
        <p>
          Aucun élève. Lancer <span className="font-mono text-sm">npx tsx prisma/seed.ts</span>.
        </p>
      </main>
    );
  }

  const counts = await depositCounts(current.id);
  const week = weeklyMinutes();
  const firstProgram = WEEK.find((b) => b.competency && isProgramCompetency(b.competency));
  const hourMarks = Array.from({ length: (END - START) / 60 + 1 }, (_, i) => START + i * 60);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 border-b-2 border-ink pb-6">
        <p className="eyebrow">Élève</p>
        <h1 className="mt-3 text-3xl">Ma semaine</h1>

        {students.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {students.map((s) => (
              <Link
                key={s.id}
                href={`/horaire?e=${s.id}`}
                className={`rounded-full border px-3 py-1 text-sm ${
                  s.id === current.id ? "border-ink bg-ink text-bg" : "border-rule text-ink-2"
                }`}
              >
                {s.name}
              </Link>
            ))}
          </div>
        )}

        <dl className="mt-6 grid grid-cols-3 gap-4">
          <div>
            <dd className="stat text-3xl">{hours(week.programme)}</dd>
            <dt className="mt-1 text-xs text-ink-2">Programme, par semaine</dt>
          </div>
          <div>
            <dd className="stat text-3xl text-accent">{hours(week.religieux)}</dd>
            <dt className="mt-1 text-xs text-ink-2">Religieux, dont le Coran chaque jour</dt>
          </div>
          <div>
            <dd className="stat text-3xl">{hours(week.activite)}</dd>
            <dt className="mt-1 text-xs text-ink-2">Activité, admissible au crédit</dt>
          </div>
        </dl>
      </header>

      <div className="overflow-x-auto">
        <div className="min-w-[880px]">
          {/* En-tête des colonnes, hors de la grille pour qu'il ne bouge pas
              quand un bloc change de hauteur. */}
          <div
            className="grid gap-x-2 pb-2"
            style={{ gridTemplateColumns: "56px repeat(5, minmax(0, 1fr))" }}
          >
            <div />
            {DAYS.map((day) => (
              <div key={day} className="border-b-2 border-ink pb-2">
                <div className="text-lg font-bold capitalize">{day}</div>
                <div className="eyebrow text-[10px]">
                  {PRESENCE_DAYS.includes(day) ? "Au centre" : "À la maison"}
                </div>
              </div>
            ))}
          </div>

          <div
            className="grid gap-x-2"
            style={{
              gridTemplateColumns: "56px repeat(5, minmax(0, 1fr))",
              gridTemplateRows: `repeat(${ROWS}, 15px)`,
            }}
          >
            {/* L'axe des heures, et un filet par heure sur toute la largeur. */}
            {hourMarks.map((m) => {
              const row = (m - START) / SLOT + 1;
              return (
                <div key={m} className="contents">
                  <div
                    className="eyebrow -translate-y-2 text-[10px]"
                    style={{ gridColumn: 1, gridRow: `${row} / ${row + 1}` }}
                  >
                    {String(m / 60).padStart(2, "0")}:00
                  </div>
                  <div
                    className="border-t border-rule-soft"
                    style={{ gridColumn: "2 / 7", gridRow: `${row} / ${row + 1}` }}
                  />
                </div>
              );
            })}

            {DAYS.map((day, di) =>
              WEEK.filter((b) => b.day === day).map((b) => {
                const n = countFor(counts, b);
                const short = minutes(b.end) - minutes(b.start) <= 25;
                return (
                  <div
                    key={b.id}
                    className={`mb-1 overflow-hidden rounded-md border-l-4 px-2.5 py-1.5 ${KIND_STYLE[b.kind]}`}
                    style={{ gridColumn: di + 2, ...span(b) }}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-[11px] font-semibold tabular-nums text-ink-2">
                        {b.start}
                      </span>
                      <span
                        className={`truncate text-sm ${
                          b.kind === "pause" ? "text-ink-2" : "font-semibold"
                        }`}
                      >
                        {b.title}
                      </span>
                    </div>

                    {!short && <div className="eyebrow mt-0.5 text-[9px]">{KIND_LABEL[b.kind]}</div>}

                    {b.deposit && (
                      <div className="mt-1 flex items-center gap-2">
                        <Link
                          href={`/depot/${b.id}?e=${current.id}`}
                          className="rounded-sm border border-rule px-2 py-0.5 text-[11px] hover:bg-surface-2"
                        >
                          Déposer
                        </Link>
                        {n > 0 && <span className="text-[11px] tabular-nums text-done">{n}</span>}
                      </div>
                    )}
                  </div>
                );
              }),
            )}
          </div>
        </div>
      </div>

      <p className="mt-8 border-t border-rule pt-4 text-sm text-ink-2">
        Les blocs du programme portent un code du ministère ({firstProgram?.competency}...). Les
        blocs religieux portent un code qui n&apos;existe dans aucun programme, donc le bilan remis
        au ministère ne les lit pas. Ce que l&apos;enfant travaille de sa religion reste à la
        famille.
      </p>
    </main>
  );
}
