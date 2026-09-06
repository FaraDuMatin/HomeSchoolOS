import { prisma } from "../lib/db";
import {
  complianceForStudent,
  schoolYearOf,
  summarize,
  type ObligationRow,
} from "../lib/compliance";
import { toggleObligationAction } from "./actions";

export const dynamic = "force-dynamic";

const fmt = new Intl.DateTimeFormat("fr-CA", { day: "numeric", month: "long", year: "numeric" });

/** Le compte à rebours, écrit comme un humain le dirait. */
function countdown(row: ObligationRow): string {
  if (row.status === "fait") {
    return row.completedAt ? `Fait le ${fmt.format(row.completedAt)}` : "Fait";
  }
  if (row.days < 0) {
    const d = Math.abs(row.days);
    return d === 1 ? "1 jour de retard" : `${d} jours de retard`;
  }
  if (row.days === 0) return "Aujourd'hui";
  if (row.days === 1) return "Demain";
  return `Dans ${row.days} jours`;
}

const TONE: Record<ObligationRow["status"], { dot: string; text: string; border: string }> = {
  fait: {
    dot: "bg-green-600",
    text: "text-green-700 dark:text-green-400",
    border: "border-green-600",
  },
  "en-retard": {
    dot: "bg-red-600",
    text: "text-red-700 dark:text-red-400",
    border: "border-red-600",
  },
  bientot: {
    dot: "bg-amber-500",
    text: "text-amber-700 dark:text-amber-500",
    border: "border-amber-500",
  },
  "a-venir": {
    dot: "bg-neutral-300 dark:bg-neutral-700",
    text: "text-neutral-500",
    border: "border-neutral-300 dark:border-neutral-700",
  },
};

function Row({
  row,
  studentId,
  schoolYear,
}: {
  row: ObligationRow;
  studentId: string;
  schoolYear: string;
}) {
  const tone = TONE[row.status];
  const done = row.status === "fait";

  return (
    <li className={`border-l-2 ${tone.border} py-4 pl-4`}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className={`inline-block size-2 shrink-0 translate-y-[-1px] rounded-full ${tone.dot}`} />
        <h3 className={`flex-1 font-medium ${done ? "text-neutral-500 line-through" : ""}`}>
          {row.label}
        </h3>
        <span className={`font-mono text-xs tabular-nums ${tone.text}`}>{countdown(row)}</span>
      </div>

      <div className="mt-1 flex flex-wrap gap-x-3 pl-5 font-mono text-xs text-neutral-500">
        <span>{row.legalDate}</span>
        <span>·</span>
        <span>{row.to}</span>
        {!row.exact && <span title="Fenêtre exprimée en mois dans le règlement">· fenêtre</span>}
      </div>

      <p className="mt-2 max-w-prose pl-5 text-sm text-neutral-600 dark:text-neutral-400">
        {row.what}
      </p>

      {row.consequence && row.status !== "fait" && (
        <p className="mt-2 max-w-prose pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
            Si c&apos;est raté :{" "}
          </span>
          {row.consequence}
        </p>
      )}

      <form action={toggleObligationAction} className="mt-3 pl-5">
        <input type="hidden" name="studentId" value={studentId} />
        <input type="hidden" name="key" value={row.key} />
        <input type="hidden" name="schoolYear" value={schoolYear} />
        <input type="hidden" name="done" value={done ? "false" : "true"} />
        <button
          type="submit"
          className={
            done
              ? "rounded border border-neutral-300 px-3 py-1 text-xs text-neutral-500 hover:text-neutral-900 dark:border-neutral-700 dark:hover:text-neutral-100"
              : "rounded bg-neutral-900 px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-neutral-900"
          }
        >
          {done ? "Annuler" : "Marquer comme envoyé"}
        </button>
      </form>
    </li>
  );
}

export default async function ObligationsPage() {
  const schoolYear = schoolYearOf();

  const parent = await prisma.user.findFirst({
    where: { role: "PARENT", children: { some: {} } },
    include: { children: { orderBy: { name: "asc" } } },
  });

  const students = parent?.children ?? [];

  // Le parent de démonstration n'a qu'un enfant. On montre aussi les autres
  // familles pour qu'un retard soit visible : un calendrier tout vert ne prouve
  // rien.
  const others = await prisma.user.findMany({
    where: { role: "STUDENT", id: { notIn: students.map((s) => s.id) } },
    orderBy: { name: "asc" },
  });

  const all = [...students, ...others];
  const timelines = await Promise.all(
    all.map(async (s) => ({ student: s, rows: await complianceForStudent(s.id, schoolYear) })),
  );

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8 border-b-2 border-neutral-900 pb-6 dark:border-neutral-100">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          HomeSchoolOs · Échéancier {schoolYear}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">
          Huit dates, deux organismes, aucune reprise
        </h1>
        <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-400">
          La loi ne demande pas au parent d&apos;être un bon pédagogue. Elle lui demande d&apos;envoyer
          huit documents à deux organismes différents à huit dates différentes. Rater une date
          n&apos;annule pas ce que l&apos;enfant a appris, ça annule sa reconnaissance.
        </p>
      </header>

      {timelines.map(({ student, rows }) => {
        const s = summarize(rows);
        return (
          <section key={student.id} className="mb-10">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-xl font-semibold">{student.name}</h2>
              <p className="font-mono text-xs tabular-nums text-neutral-500">
                {s.done}/{s.total} envoyés
                {s.late > 0 && (
                  <span className="ml-2 text-red-700 dark:text-red-400">
                    {s.late} en retard
                  </span>
                )}
              </p>
            </div>

            <ul className="grid gap-1">
              {rows.map((row) => (
                <Row key={row.key} row={row} studentId={student.id} schoolYear={schoolYear} />
              ))}
            </ul>
          </section>
        );
      })}

      <footer className="border-t border-neutral-200 pt-6 text-sm text-neutral-500 dark:border-neutral-800">
        <p className="max-w-prose">
          Sept de ces huit démarches vont à la Direction de l&apos;enseignement à la maison. La
          huitième, l&apos;inscription aux épreuves, va au centre de services scolaire. C&apos;est
          celle qui se perd, parce qu&apos;elle est la seule à ne pas être adressée au même endroit
          que les autres.
        </p>
        <p className="mt-3 max-w-prose">
          Les lignes marquées « fenêtre » correspondent à une échéance que le règlement exprime en
          mois plutôt qu&apos;en jour. Les bornes affichées sont notre lecture, à confirmer avec la
          DEM. Les autres dates sont celles du règlement.
        </p>
      </footer>
    </main>
  );
}
