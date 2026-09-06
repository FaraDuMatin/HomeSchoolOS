import Link from "next/link";
import { listSessions } from "../lib/session";

export const dynamic = "force-dynamic";

const STATUS_LABEL: Record<string, string> = {
  SCHEDULED: "Prévue",
  LIVE: "En cours",
  ENDED: "Terminée",
};

export default async function SessionsPage() {
  const sessions = await listSessions();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8 border-b-2 border-neutral-900 pb-6 dark:border-neutral-100">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          HomeSchoolOs · Séances
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Les blocs</h1>
      </header>

      <ul className="grid gap-2">
        {sessions.map((s) => {
          const present = s.attendance.filter((a) => a.present).length;
          return (
            <li key={s.id}>
              <Link
                href={`/sessions/${s.id}`}
                className="flex flex-wrap items-center justify-between gap-3 rounded border border-neutral-200 px-4 py-3 hover:border-neutral-900 dark:border-neutral-800 dark:hover:border-neutral-100"
              >
                <div>
                  <p className="text-sm font-medium">{s.subject}</p>
                  <p className="text-xs text-neutral-500">
                    {s.cohort.name} ·{" "}
                    {s.plannedAt.toLocaleDateString("fr-CA", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-4 font-mono text-xs">
                  <span className="text-neutral-500">{present} présents</span>
                  <span
                    className={
                      s.status === "LIVE"
                        ? "text-green-600 dark:text-green-400"
                        : "text-neutral-400"
                    }
                  >
                    {STATUS_LABEL[s.status]}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
        {sessions.length === 0 && (
          <li className="text-sm text-neutral-400">Aucune séance. Relancez le seed.</li>
        )}
      </ul>
    </main>
  );
}
