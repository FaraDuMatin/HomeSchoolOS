import { prisma } from "./db";
import { blockById, type Block } from "./schedule";

/**
 * Le dépôt de travail par l'élève.
 *
 * Un dépôt n'est pas une nouvelle sorte d'objet : c'est une tentative
 * d'exercice, exactement comme celle qu'un instructeur coche pendant un bloc.
 * Même table, même compteur, même bilan. Un élève qui dépose son travail depuis
 * la maison produit donc de la preuve recevable, sans que personne ait à la
 * ressaisir.
 *
 * `sessionId` est nul ici, et c'est la seule différence : le travail de la
 * maison n'appartient à aucun bloc surveillé. La présence, elle, continue de ne
 * venir que des séances : déposer un devoir ne fait pas de l'élève un présent.
 */

/**
 * L'exercice qui correspond à un bloc de l'horaire.
 *
 * Créé au premier dépôt plutôt que semé d'avance : l'horaire peut changer, et
 * une table pleine d'exercices que personne n'a faits ne prouve rien.
 */
async function exerciseForBlock(block: Block) {
  if (!block.competency) return null;

  const existing = await prisma.exercise.findFirst({
    where: { title: block.title, competency: block.competency },
  });
  if (existing) return existing;

  return prisma.exercise.create({
    data: {
      title: block.title,
      subject: block.title,
      competency: block.competency,
      prompt: block.deposit ?? "Travail déposé par l'élève.",
    },
  });
}

export async function depositWork(args: { blockId: string; studentId: string; answer: string }) {
  const block = blockById(args.blockId);
  if (!block) throw new Error(`Bloc inconnu : ${args.blockId}`);

  const exercise = await exerciseForBlock(block);
  if (!exercise) throw new Error(`Ce bloc n'accepte pas de dépôt : ${args.blockId}`);

  return prisma.exerciseAttempt.create({
    data: {
      exerciseId: exercise.id,
      studentId: args.studentId,
      completed: true,
      answer: args.answer,
      completedAt: new Date(),
    },
  });
}

/** Les dépôts d'un élève pour un bloc, les plus récents en premier. */
export async function depositsForBlock(studentId: string, blockId: string) {
  const block = blockById(blockId);
  if (!block?.competency) return [];

  return prisma.exerciseAttempt.findMany({
    where: {
      studentId,
      completed: true,
      exercise: { title: block.title, competency: block.competency },
    },
    orderBy: { completedAt: "desc" },
  });
}

/**
 * Combien de travaux l'élève a déposés pour chaque bloc de la semaine.
 *
 * Une seule requête pour tout l'horaire : la page en affiche vingt et un.
 */
export async function depositCounts(studentId: string): Promise<Map<string, number>> {
  const attempts = await prisma.exerciseAttempt.findMany({
    where: { studentId, completed: true },
    include: { exercise: { select: { title: true, competency: true } } },
  });

  const counts = new Map<string, number>();
  for (const a of attempts) {
    const key = `${a.exercise.title}::${a.exercise.competency}`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

export function countFor(counts: Map<string, number>, block: Block): number {
  if (!block.competency) return 0;
  return counts.get(`${block.title}::${block.competency}`) ?? 0;
}
