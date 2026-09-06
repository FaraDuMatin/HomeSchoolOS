import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "../../lib/db";
import { depositsForBlock } from "../../lib/deposit";
import { blockById, isProgramCompetency, labelOf } from "../../lib/schedule";
import { depositAction } from "../actions";

export const dynamic = "force-dynamic";

const fmt = new Intl.DateTimeFormat("fr-CA", {
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
});

/**
 * Le dépôt d'un bloc.
 *
 * L'écran dit à l'élève ce qui est attendu, prend son travail, et lui montre
 * immédiatement où ce travail est allé. Cette dernière partie est la seule qui
 * compte vraiment : un enfant qui dépose dans le vide arrête de déposer.
 */
export default async function DepotPage(props: {
  params: Promise<{ blockId: string }>;
  searchParams: Promise<{ e?: string }>;
}) {
  const { blockId } = await props.params;
  const { e } = await props.searchParams;

  const block = blockById(blockId);
  if (!block || !block.deposit || !block.competency) notFound();

  const students = await prisma.user.findMany({
    where: { role: "STUDENT" },
    orderBy: { name: "asc" },
  });
  const current = students.find((s) => s.id === e) ?? students[0];
  if (!current) notFound();

  const deposits = await depositsForBlock(current.id, blockId);
  const auMinistere = isProgramCompetency(block.competency);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href={`/horaire?e=${current.id}`} className="font-mono text-sm text-ink-2">
        ← Ma semaine
      </Link>

      <header className="mt-6 mb-8 border-b-2 border-ink pb-6 dark:border-ink">
        <p className="eyebrow">
          {block.day} · {block.start} à {block.end} · {block.where === "centre" ? "au centre" : "à la maison"}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">{block.title}</h1>
        <p className="mt-3 text-lg text-ink-2 dark:text-ink-2">{block.deposit}</p>

        <p className="mt-4 font-mono text-xs text-ink-2">
          {block.competency} · {labelOf(block.competency)}
        </p>
        <p className="mt-1 text-sm text-ink-2">
          {auMinistere
            ? "Ce travail compte comme trace datée dans le bilan remis au ministère."
            : "Ce travail est consigné pour la famille. Le bilan remis au ministère ne le lit pas."}
        </p>
      </header>

      <form action={depositAction} className="grid gap-3">
        <input type="hidden" name="blockId" value={block.id} />
        <input type="hidden" name="studentId" value={current.id} />
        <label htmlFor="answer" className="font-medium">
          Ce que j&apos;ai fait
        </label>
        <textarea
          id="answer"
          name="answer"
          rows={5}
          required
          placeholder={block.deposit}
          className="w-full rounded border border-rule bg-transparent p-3 dark:border-rule"
        />
        <button
          type="submit"
          className="justify-self-start rounded bg-ink px-4 py-2 text-bg dark:bg-ink dark:text-bg"
        >
          Déposer
        </button>
      </form>

      <section className="mt-10">
        <h2 className="mb-3 eyebrow">
          Déjà déposé, {deposits.length}
        </h2>
        {deposits.length === 0 ? (
          <p className="text-ink-2">Rien encore pour ce bloc.</p>
        ) : (
          <ul className="grid gap-1">
            {deposits.map((d) => (
              <li key={d.id} className="border-b border-rule py-3 dark:border-rule">
                <p className="font-mono text-xs text-ink-2">{fmt.format(d.completedAt)}</p>
                <p className="mt-1 whitespace-pre-wrap">{d.answer}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <p className="mt-10 border-t border-rule pt-4 text-sm text-ink-2 dark:border-rule">
        {auMinistere ? (
          <>
            Le dépôt apparaît immédiatement dans{" "}
            <Link href={`/report/${current.id}`} className="underline">
              le bilan de {current.name}
            </Link>
            . Personne ne le ressaisit.
          </>
        ) : (
          <>
            Le dépôt n&apos;apparaît pas dans{" "}
            <Link href={`/report/${current.id}`} className="underline">
              le bilan de {current.name}
            </Link>
            , et c&apos;est voulu.
          </>
        )}
      </p>
    </main>
  );
}
