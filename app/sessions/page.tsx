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
      <header className="mb-8 border-b-2 border-ink pb-6">
        <p className="eyebrow">
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
                className="flex flex-wrap items-center justify-between gap-3 rounded border border-rule px-4 py-3 hover:border-ink dark:hover:border-rule"
              >
                <div>
                  <p className="text-sm font-medium">{s.subject}</p>
                  <p className="text-xs text-ink-2">
                    {s.cohort.name} ·{" "}
                    {s.plannedAt.toLocaleDateString("fr-CA", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-4 font-mono text-xs">
                  <span className="text-ink-2">{present} présents</span>
                  <span
                    className={
                      s.status === "LIVE"
                        ? "text-done"
                        : "text-ink-2"
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
          <li className="text-sm text-ink-2">Aucune séance. Relancez le seed.</li>
        )}
      </ul>
    </main>
  );
}
