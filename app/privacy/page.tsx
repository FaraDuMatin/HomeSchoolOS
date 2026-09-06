import { prisma } from "../lib/db";
import {
  EVENT_LABEL,
  privacyForParent,
  PURPOSE,
  RETENTION_CHOICES,
} from "../lib/privacy";
import {
  deleteTranscriptsAction,
  purgeExpiredAction,
  setConsentAction,
  setRetentionAction,
} from "./actions";

export const dynamic = "force-dynamic";

const stamp = new Intl.DateTimeFormat("fr-CA", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const day = new Intl.DateTimeFormat("fr-CA", { day: "numeric", month: "long", year: "numeric" });

export default async function PrivacyPage() {
  const parent = await prisma.user.findFirst({
    where: { role: "PARENT", children: { some: {} } },
    include: { children: true },
  });

  if (!parent) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24">
        <p className="text-neutral-500">Aucun parent dans les données. Relancez le seed.</p>
      </main>
    );
  }

  const views = await privacyForParent(parent.id);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8 border-b-2 border-neutral-900 pb-6 dark:border-neutral-100">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          HomeSchoolOs · Confidentialité
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">
          On enregistre la voix d&apos;un enfant
        </h1>
        <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-400">
          Au Québec, la Loi 25 demande trois choses quand on collecte ça : un consentement donné par
          le parent pour une finalité précise, une durée de conservation annoncée et respectée, et un
          effacement qui efface pour de vrai. Cette page est l&apos;endroit où les trois se règlent.
        </p>
        <p className="mt-3 max-w-prose rounded border border-neutral-200 p-3 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
            À quoi vous consentez :{" "}
          </span>
          {PURPOSE}
        </p>
      </header>

      {views.map((v) => (
        <section
          key={v.student.id}
          className="mb-8 rounded border border-neutral-200 p-6 dark:border-neutral-800"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-xl font-semibold">{v.student.name}</h2>
            <span
              className={`font-mono text-xs uppercase tracking-wider ${
                v.granted ? "text-green-700 dark:text-green-400" : "text-neutral-500"
              }`}
            >
              {v.granted ? "Enregistrement autorisé" : "Enregistrement interdit"}
            </span>
          </div>

          {/* 1. Consentement. Le défaut est non, et le bouton dit ce qui change. */}
          <div className="mt-5 border-l-2 border-neutral-300 pl-4 dark:border-neutral-700">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
              1 · Consentement
            </p>
            <p className="mt-2 max-w-prose text-sm text-neutral-600 dark:text-neutral-400">
              {v.granted
                ? "Les blocs de votre enfant peuvent être transcrits. Vous pouvez retirer ce consentement en tout temps, sans avoir à vous justifier."
                : "Aucun bloc de votre enfant ne peut être transcrit. C'est l'état par défaut : tant que vous n'avez rien accordé, rien n'est enregistré."}
            </p>
            {v.decidedAt && (
              <p className="mt-1 font-mono text-xs text-neutral-500">
                Dernière décision le {day.format(v.decidedAt)}
              </p>
            )}
            <form action={setConsentAction} className="mt-3">
              <input type="hidden" name="studentId" value={v.student.id} />
              <input type="hidden" name="granted" value={v.granted ? "false" : "true"} />
              <button
                type="submit"
                className={
                  v.granted
                    ? "rounded border border-neutral-400 px-3 py-1.5 text-sm dark:border-neutral-600"
                    : "rounded bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white dark:bg-white dark:text-neutral-900"
                }
              >
                {v.granted ? "Retirer mon consentement" : "J'autorise l'enregistrement"}
              </button>
            </form>
          </div>

          {/* 2. Conservation. Un nombre affiché, et modifiable vers le bas. */}
          <div className="mt-6 border-l-2 border-neutral-300 pl-4 dark:border-neutral-700">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
              2 · Durée de conservation
            </p>
            <p className="mt-2 max-w-prose text-sm text-neutral-600 dark:text-neutral-400">
              Les transcriptions sont détruites après{" "}
              <span className="font-mono tabular-nums">{v.retentionDays}</span> jours. La loi
              n&apos;impose pas ce nombre, elle impose de le fixer, de l&apos;annoncer et de le
              respecter.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {RETENTION_CHOICES.map((d) => (
                <form action={setRetentionAction} key={d}>
                  <input type="hidden" name="studentId" value={v.student.id} />
                  <input type="hidden" name="days" value={d} />
                  <button
                    type="submit"
                    disabled={d === v.retentionDays}
                    className={
                      d === v.retentionDays
                        ? "rounded bg-neutral-900 px-3 py-1 font-mono text-xs text-white dark:bg-white dark:text-neutral-900"
                        : "rounded border border-neutral-300 px-3 py-1 font-mono text-xs hover:border-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-100"
                    }
                  >
                    {d} j
                  </button>
                </form>
              ))}
            </div>
          </div>

          {/* 3. Ce qui est détenu, et les deux façons de le détruire. */}
          <div className="mt-6 border-l-2 border-neutral-300 pl-4 dark:border-neutral-700">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
              3 · Ce que nous détenons en ce moment
            </p>

            <dl className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-xs text-neutral-500">Segments conservés</dt>
                <dd className="font-mono text-xl tabular-nums">{v.segments}</dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-500">Au-delà de la durée</dt>
                <dd
                  className={`font-mono text-xl tabular-nums ${
                    v.expired > 0 ? "text-amber-700 dark:text-amber-500" : ""
                  }`}
                >
                  {v.expired}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-500">Plus ancien</dt>
                <dd className="font-mono text-sm tabular-nums">
                  {v.oldest ? day.format(v.oldest) : "—"}
                </dd>
              </div>
            </dl>

            <div className="mt-4 flex flex-wrap gap-3">
              <form action={purgeExpiredAction}>
                <input type="hidden" name="studentId" value={v.student.id} />
                <button
                  type="submit"
                  disabled={v.expired === 0}
                  className="rounded border border-neutral-400 px-3 py-1.5 text-sm disabled:opacity-40 dark:border-neutral-600"
                >
                  Appliquer la conservation maintenant
                </button>
              </form>

              {/* Deux clics pour un geste irréversible. Le premier ouvre, le
                  second exécute, et le texte dit ce qui disparaît. */}
              <details className="group">
                <summary className="cursor-pointer list-none rounded border border-red-600 px-3 py-1.5 text-sm text-red-700 dark:text-red-400">
                  Supprimer toutes les transcriptions
                </summary>
                <div className="mt-3 max-w-prose rounded border border-red-600 p-3">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Les {v.segments} segments de {v.student.name} seront détruits. Les présences, les
                    exercices et les bilans déjà produits ne sont pas touchés : ils ne contiennent
                    aucune parole. C&apos;est irréversible.
                  </p>
                  <form action={deleteTranscriptsAction} className="mt-3">
                    <input type="hidden" name="studentId" value={v.student.id} />
                    <button
                      type="submit"
                      className="rounded bg-red-700 px-3 py-1.5 text-sm font-medium text-white"
                    >
                      Oui, supprimer les {v.segments} segments
                    </button>
                  </form>
                </div>
              </details>
            </div>

            <p className="mt-3 max-w-prose text-xs text-neutral-500">
              Retirer le consentement arrête les enregistrements futurs. Ça ne supprime pas ce qui
              existe déjà, parce que certaines familles veulent garder les traces de l&apos;année en
              cours pour leur bilan tout en coupant la suite. Les deux gestes sont donc séparés.
            </p>
          </div>

          {/* 4. La preuve. Un bouton sans trace est invérifiable. */}
          <div className="mt-6 border-l-2 border-neutral-300 pl-4 dark:border-neutral-700">
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
              4 · Registre des gestes
            </p>
            {v.events.length === 0 ? (
              <p className="mt-2 text-sm text-neutral-500">Aucun geste enregistré.</p>
            ) : (
              <ul className="mt-2 grid gap-1">
                {v.events.map((e) => (
                  <li
                    key={e.id}
                    className="flex flex-wrap items-baseline gap-x-3 border-b border-neutral-200 py-1.5 text-sm dark:border-neutral-800"
                  >
                    <span className="font-mono text-xs tabular-nums text-neutral-500">
                      {stamp.format(e.occurredAt)}
                    </span>
                    <span className="font-medium">{EVENT_LABEL[e.type] ?? e.type}</span>
                    {e.detail && (
                      <span className="w-full text-xs text-neutral-500 sm:w-auto">{e.detail}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-3 max-w-prose text-xs text-neutral-500">
              Ce registre survit à la suppression des données qu&apos;il décrit. Il ne contient
              aucune parole d&apos;enfant, seulement la preuve que le geste a eu lieu.
            </p>
          </div>
        </section>
      ))}

      <footer className="border-t border-neutral-200 pt-6 text-sm text-neutral-500 dark:border-neutral-800">
        <p className="max-w-prose">
          Les segments présents dans cette démonstration proviennent du jeu de données de test. Le
          module d&apos;enregistrement n&apos;est pas branché : ce qui est démontré ici, c&apos;est
          que la suppression détruit réellement des lignes en base, pas qu&apos;un microphone les a
          produites.
        </p>
        <p className="mt-3 max-w-prose">
          Cette page traduit une lecture des obligations de la Loi 25 en comportement du logiciel.
          Elle ne remplace pas un avis juridique.
        </p>
      </footer>
    </main>
  );
}
