import { prisma } from "../../lib/db";
import { listExercisesForSubject } from "../../lib/exercises";
import { competencyLabel, SUBJECTS } from "../../lib/pfeq";
import { getSession } from "../../lib/session";
import {
  completeExerciseAction,
  endSessionAction,
  markAttendanceAction,
  startSessionAction,
} from "../actions";
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

  const subjectLabel =
    SUBJECTS.find((s) => s.key === session.subject)?.label ?? session.subject;
  const exercises = await listExercisesForSubject(session.subject);
  const presentStudents = session.cohort.members
    .map((m) => m.student)
    .filter((s) => attendanceByStudent.get(s.id)?.present);

  const doneThisSession = await prisma.exerciseAttempt.findMany({
    where: { sessionId: session.id, completed: true },
    include: { exercise: true, student: true },
    orderBy: { completedAt: "asc" },
  });

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8 border-b-2 border-neutral-900 pb-6 dark:border-neutral-100">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          {session.cohort.name} · {subjectLabel}
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

      <section className="mb-8">
        <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-neutral-500">
          Exercices
        </h2>
        <p className="mb-4 max-w-prose text-sm text-neutral-600 dark:text-neutral-400">
          Chaque exercice porte une compétence du programme. C&apos;est ce qui rend le bilan
          acceptable : la Direction de l&apos;enseignement à la maison renvoie les bilans qui ne
          couvrent pas toutes les compétences d&apos;une matière.
        </p>

        {!live && !ended && (
          <p className="text-sm text-neutral-400">Ouvrez la séance pour assigner des exercices.</p>
        )}

        {live && presentStudents.length === 0 && (
          <p className="text-sm text-neutral-400">
            Pointez au moins un élève présent avant d&apos;assigner un exercice.
          </p>
        )}

        {live &&
          presentStudents.length > 0 &&
          exercises.map((ex) => (
            <div
              key={ex.id}
              className="mb-2 rounded border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-sm font-medium">{ex.title}</p>
                <span className="font-mono text-xs text-neutral-500">
                  {ex.competency} · {competencyLabel(ex.competency)}
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{ex.prompt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {presentStudents.map((s) => (
                  <form key={s.id} action={completeExerciseAction}>
                    <input type="hidden" name="sessionId" value={session.id} />
                    <input type="hidden" name="exerciseId" value={ex.id} />
                    <input type="hidden" name="studentId" value={s.id} />
                    <button
                      type="submit"
                      className="rounded border border-neutral-300 px-3 py-1 text-xs hover:border-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-100"
                    >
                      ✓ {s.name.split(" ")[0]}
                    </button>
                  </form>
                ))}
              </div>
            </div>
          ))}

        {doneThisSession.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-neutral-500">
              Complétés dans ce bloc
            </p>
            <ul className="grid gap-1">
              {doneThisSession.map((a) => (
                <li
                  key={a.id}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-neutral-200 py-1.5 text-sm dark:border-neutral-800"
                >
                  <span>
                    {a.student.name} · {a.exercise.title}
                  </span>
                  <span className="font-mono text-xs text-neutral-500">
                    {a.exercise.competency}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
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
