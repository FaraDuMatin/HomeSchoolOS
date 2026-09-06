import { getSession } from "../../lib/session";
import { endSessionAction, markAttendanceAction, startSessionAction } from "../actions";
import { Elapsed } from "./Elapsed";

export const dynamic = "force-dynamic";

const STATUS_LABEL: Record<string, string> = {
  SCHEDULED: "Prévue",
  LIVE: "En cours",
  ENDED: "Terminée",
};

export default async function SessionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getSession(id);

  const attendanceByStudent = new Map(session.attendance.map((a) => [a.studentId, a]));
  const live = session.status === "LIVE";
  const ended = session.status === "ENDED";

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8 border-b-2 border-neutral-900 pb-6 dark:border-neutral-100">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          {session.cohort.name} · {session.subject}
        </p>
        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-3">
          <h1 className="text-3xl font-bold tracking-tight">Bloc du jour</h1>
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
            {STATUS_LABEL[session.status]}
          </span>
        </div>
        <p className="mt-2 text-sm text-neutral-500">
          Instructeur {session.cohort.instructor.name} · {session.cohort.members.length} élèves
        </p>
      </header>

      <section className="mb-8 rounded border border-neutral-200 p-6 dark:border-neutral-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
              Temps écoulé
            </p>
            {live && session.startedAt ? (
              <Elapsed startedAtIso={session.startedAt.toISOString()} />
            ) : (
              <span className="font-mono text-2xl tabular-nums text-neutral-400">
                {ended && session.durationSeconds != null
                  ? `${String(Math.floor(session.durationSeconds / 60)).padStart(2, "0")}:${String(
                      session.durationSeconds % 60,
                    ).padStart(2, "0")}`
                  : "00:00"}
              </span>
            )}
          </div>

          <form action={live ? endSessionAction : startSessionAction}>
            <input type="hidden" name="sessionId" value={session.id} />
            <button
              type="submit"
              disabled={ended}
              className="rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 dark:bg-white dark:text-neutral-900"
            >
              {ended ? "Séance terminée" : live ? "Terminer la séance" : "Ouvrir la séance"}
            </button>
          </form>
        </div>

        <p className="mt-4 border-l-2 border-neutral-300 pl-3 text-xs text-neutral-500 dark:border-neutral-700">
          La durée affichée ici n&apos;est qu&apos;un indicateur. Celle qui sera écrite au dossier est
          calculée au serveur, à partir des événements d&apos;ouverture et de fermeture.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-neutral-500">
          Présences
        </h2>
        <ul className="grid gap-2">
          {session.cohort.members.map(({ student }) => {
            const record = attendanceByStudent.get(student.id);
            const present = record?.present ?? false;
            return (
              <li
                key={student.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded border border-neutral-200 px-4 py-3 dark:border-neutral-800"
              >
                <span className="text-sm">{student.name}</span>
                <div className="flex items-center gap-3">
                  {ended && record?.present && (
                    <span className="font-mono text-xs tabular-nums text-neutral-500">
                      {record.minutes} min
                    </span>
                  )}
                  <form action={markAttendanceAction}>
                    <input type="hidden" name="sessionId" value={session.id} />
                    <input type="hidden" name="studentId" value={student.id} />
                    <input type="hidden" name="present" value={present ? "false" : "true"} />
                    <button
                      type="submit"
                      disabled={ended}
                      className={`rounded border px-3 py-1 text-xs font-medium disabled:opacity-40 ${
                        present
                          ? "border-green-600 bg-green-50 text-green-800 dark:bg-green-950/40 dark:text-green-300"
                          : "border-neutral-300 text-neutral-500 dark:border-neutral-700"
                      }`}
                    >
                      {present ? "Présent" : "Absent"}
                    </button>
                  </form>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-neutral-500">
          Journal de la séance
        </h2>
        <p className="mb-3 max-w-prose text-sm text-neutral-600 dark:text-neutral-400">
          Chaque ligne est écrite une fois et n&apos;est jamais modifiée. C&apos;est ce journal, et
          non la parole de l&apos;instructeur, qui alimentera le bilan remis au ministère.
        </p>
        <ol className="grid gap-1">
          {session.events.map((e) => (
            <li
              key={e.id}
              className="flex items-baseline gap-3 border-b border-neutral-200 py-1.5 font-mono text-xs dark:border-neutral-800"
            >
              <span className="tabular-nums text-neutral-400">
                {e.occurredAt.toLocaleTimeString("fr-CA", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </span>
              <span>{e.type}</span>
              {e.actorId && (
                <span className="text-neutral-400">
                  {session.cohort.members.find((m) => m.studentId === e.actorId)?.student.name ??
                    e.actorId}
                </span>
              )}
            </li>
          ))}
          {session.events.length === 0 && (
            <li className="py-2 text-sm text-neutral-400">Rien encore. Ouvrez la séance.</li>
          )}
        </ol>
      </section>
    </main>
  );
}
