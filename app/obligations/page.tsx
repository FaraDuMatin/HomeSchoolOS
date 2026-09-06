import Link from "next/link";
import { prisma } from "../lib/db";
import {
  complianceForStudent,
  schoolYearOf,
  summarize,
  type ObligationRow,
} from "../lib/compliance";
import { toggleObligationAction } from "./actions";

export const dynamic = "force-dynamic";

const fmt = new Intl.DateTimeFormat("fr-CA", { day: "numeric", month: "short" });

function countdown(row: ObligationRow): string {
  if (row.status === "fait") return row.completedAt ? `Fait ${fmt.format(row.completedAt)}` : "Fait";
  if (row.days < 0) return `${Math.abs(row.days)} j de retard`;
  if (row.days === 0) return "Aujourd'hui";
  return `Dans ${row.days} j`;
}

const TONE: Record<ObligationRow["status"], string> = {
  fait: "text-green-700 dark:text-green-400",
  "en-retard": "text-red-700 dark:text-red-400",
  bientot: "text-amber-700 dark:text-amber-500",
  "a-venir": "text-neutral-500",
};

const BORDER: Record<ObligationRow["status"], string> = {
  fait: "border-green-600",
  "en-retard": "border-red-600",
  bientot: "border-amber-500",
  "a-venir": "border-neutral-200 dark:border-neutral-800",
};

export default async function ObligationsPage(props: {
  searchParams: Promise<{ e?: string }>;
}) {
  const { e } = await props.searchParams;
  const schoolYear = schoolYearOf();

  const students = await prisma.user.findMany({
    where: { role: "STUDENT" },
    orderBy: { name: "asc" },
  });
  // Sans choix explicite, on ouvre sur l'enfant qui a un retard. Une page qui
  // s'ouvre sur un calendrier tout vert ne dit rien à personne.
  let fallback = students[0];
  if (!e) {
    for (const st of students) {
      const rows = await complianceForStudent(st.id, schoolYear);
      if (rows.some((r) => r.status === "en-retard")) {
        fallback = st;
        break;
      }
    }
  }
  const current = students.find((s) => s.id === e) ?? fallback;

  if (!current) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24">
        <p className="text-neutral-500">Aucun élève. Relancez le seed.</p>
      </main>
    );
  }

  const rows = await complianceForStudent(current.id, schoolYear);
  const s = summarize(rows);

  // La prochaine chose à faire. C'est la seule ligne qui mérite d'être
  // développée : les sept autres n'ont besoin que d'une date et d'un statut.
  const next = rows.find((r) => r.status !== "fait");

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-6 border-b-2 border-neutral-900 pb-5 dark:border-neutral-100">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          HomeSchoolOs · Échéances {schoolYear}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">
          Huit dates, deux organismes, aucune reprise
        </h1>
      </header>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        {students.map((st) => (
          <Link
            key={st.id}
            href={`/obligations?e=${st.id}`}
            className={
              st.id === current.id
                ? "rounded bg-neutral-900 px-3 py-1.5 text-sm text-white dark:bg-white dark:text-neutral-900"
                : "rounded border border-neutral-300 px-3 py-1.5 text-sm hover:border-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-100"
            }
          >
            {st.name}
          </Link>
        ))}
        <span className="ml-auto font-mono text-xs tabular-nums text-neutral-500">
          {s.done}/{s.total} envoyés
          {s.late > 0 && (
            <span className="ml-2 text-red-700 dark:text-red-400">{s.late} en retard</span>
          )}
        </span>
      </div>

      <ul className="grid gap-1">
        {rows.map((row) => {
          const done = row.status === "fait";
          const isNext = row.key === next?.key;
          return (
            <li key={row.key} className={`border-l-2 ${BORDER[row.status]} py-2.5 pl-4`}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="w-28 shrink-0 font-mono text-xs text-neutral-500">
                  {row.legalDate}
                </span>
                <span className={`flex-1 ${done ? "text-neutral-500 line-through" : ""}`}>
                  {row.label}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  {row.to === "Centre de services scolaire" ? "CSS" : "DEM"}
                </span>
                <span className={`w-28 text-right font-mono text-xs tabular-nums ${TONE[row.status]}`}>
                  {countdown(row)}
                </span>
                <form action={toggleObligationAction}>
                  <input type="hidden" name="studentId" value={current.id} />
                  <input type="hidden" name="key" value={row.key} />
                  <input type="hidden" name="schoolYear" value={schoolYear} />
                  <input type="hidden" name="done" value={done ? "false" : "true"} />
                  <button
                    type="submit"
                    className="rounded border border-neutral-300 px-2 py-0.5 text-xs text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
                  >
                    {done ? "Annuler" : "Envoyé"}
                  </button>
                </form>
              </div>

              {row.status === "en-retard" && row.consequence && (
                <p className="mt-1.5 max-w-prose text-sm text-red-700 dark:text-red-400">
                  {row.consequence}
                </p>
              )}
              {isNext && row.status !== "en-retard" && (
                <p className="mt-1.5 max-w-prose text-sm text-neutral-600 dark:text-neutral-400">
                  {row.what}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
