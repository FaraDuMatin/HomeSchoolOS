import Link from "next/link";
import { prisma } from "../lib/db";
import { countFor, depositCounts } from "../lib/deposit";
import {
  DAYS,
  PRESENCE_DAYS,
  blocksOfDay,
  isProgramCompetency,
  labelOf,
  weeklyMinutes,
  type Block,
} from "../lib/schedule";

export const dynamic = "force-dynamic";

/**
 * La semaine, vue par l'élève.
 *
 * C'est le seul écran du système qui s'adresse à l'enfant. Il ne lui demande
 * donc pas de comprendre les compétences du programme ni les huit obligations :
 * il lui dit à quelle heure, quoi, et où déposer ce qu'il a fait.
 *
 * Les blocs religieux sont dans la même grille que les autres, pas dans un
 * encadré à côté. C'est la thèse : ce n'est pas un supplément du soir, c'est la
 * journée.
 */

const KIND_LABEL: Record<Block["kind"], string> = {
  programme: "Programme",
  religieux: "Religieux",
  activite: "Activité",
  pause: "Pause",
};

const KIND_STYLE: Record<Block["kind"], string> = {
  programme: "border-l-neutral-900 dark:border-l-neutral-100",
  religieux: "border-l-emerald-600",
  activite: "border-l-sky-600",
  pause: "border-l-neutral-200 dark:border-l-neutral-800",
};

const KIND_BADGE: Record<Block["kind"], string> = {
  programme: "text-neutral-500",
  religieux: "text-emerald-700 dark:text-emerald-400",
  activite: "text-sky-700 dark:text-sky-400",
  pause: "text-neutral-400",
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
        <p>Aucun élève. Lancer <span className="font-mono text-sm">npx tsx prisma/seed.ts</span>.</p>
      </main>
    );
  }

  const counts = await depositCounts(current.id);
  const week = weeklyMinutes();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8 border-b-2 border-neutral-900 pb-6 dark:border-neutral-100">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">Élève</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Ma semaine</h1>

        {students.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {students.map((s) => (
              <Link
                key={s.id}
                href={`/horaire?e=${s.id}`}
                className={`rounded-full border px-3 py-1 text-sm ${
                  s.id === current.id
                    ? "border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                    : "border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
                }`}
              >
                {s.name}
              </Link>
            ))}
          </div>
        )}

        <dl className="mt-6 grid grid-cols-3 gap-4">
          <div>
            <dd className="font-mono text-2xl tabular-nums">{hours(week.programme)}</dd>
            <dt className="text-xs text-neutral-500">Programme, par semaine</dt>
          </div>
          <div>
            <dd className="font-mono text-2xl tabular-nums text-emerald-700 dark:text-emerald-400">
              {hours(week.religieux)}
            </dd>
            <dt className="text-xs text-neutral-500">Religieux, dont le Coran chaque jour</dt>
          </div>
          <div>
            <dd className="font-mono text-2xl tabular-nums text-sky-700 dark:text-sky-400">
              {hours(week.activite)}
            </dd>
            <dt className="text-xs text-neutral-500">Activité, admissible au crédit</dt>
          </div>
        </dl>
      </header>

      <div className="grid gap-8">
        {DAYS.map((day) => {
          const blocks = blocksOfDay(day);
          const centre = PRESENCE_DAYS.includes(day);
          return (
            <section key={day}>
              <h2 className="mb-3 flex items-baseline gap-3">
                <span className="text-xl font-bold capitalize">{day}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  {centre ? "Au centre, 9 h à 15 h" : "À la maison"}
                </span>
              </h2>

              <ul className="grid gap-1">
                {blocks.map((b) => {
                  const n = countFor(counts, b);
                  return (
                    <li
                      key={b.id}
                      className={`flex flex-wrap items-center gap-x-4 gap-y-1 border-l-2 py-2.5 pl-4 ${KIND_STYLE[b.kind]}`}
                    >
                      <span className="w-24 shrink-0 font-mono text-sm tabular-nums text-neutral-500">
                        {b.start}
                      </span>
                      <span className={b.kind === "pause" ? "text-neutral-400" : "font-medium"}>
                        {b.title}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider ${KIND_BADGE[b.kind]}`}
                      >
                        {KIND_LABEL[b.kind]}
                      </span>

                      {b.deposit && (
                        <span className="ml-auto flex items-center gap-3">
                          {n > 0 && (
                            <span className="font-mono text-xs text-green-700 dark:text-green-400">
                              {n} déposé{n > 1 ? "s" : ""}
                            </span>
                          )}
                          <Link
                            href={`/depot/${b.id}?e=${current.id}`}
                            className="rounded border border-neutral-300 px-3 py-1 text-sm hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
                          >
                            Déposer
                          </Link>
                        </span>
                      )}

                      {b.competency && !b.deposit && (
                        <span className="ml-auto font-mono text-[10px] text-neutral-400">
                          {labelOf(b.competency)}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      <p className="mt-10 border-t border-neutral-200 pt-4 text-sm text-neutral-500 dark:border-neutral-800">
        Les blocs du programme portent un code du ministère
        {" ("}
        {blocksOfDay("mardi").find((b) => b.competency && isProgramCompetency(b.competency))
          ?.competency}
        {"...)"}. Les blocs religieux portent un code qui n&apos;existe dans aucun programme, donc
        le bilan remis au ministère ne les lit pas. Ce que l&apos;enfant travaille de sa religion
        reste à la famille.
      </p>
    </main>
  );
}
