import { prisma } from "./db";

/**
 * Le consentement, la conservation et l'effacement.
 *
 * On enregistre la voix d'enfants. Au Québec, la Loi 25 encadre ça de trois
 * façons qui touchent directement le produit :
 *
 * 1. Le consentement doit être libre, éclairé, donné pour une finalité précise,
 *    et pour un enfant de moins de 14 ans il est donné par le titulaire de
 *    l'autorité parentale. Donc le défaut est NON, pas OUI. Un système où il
 *    faut décocher pour refuser n'a pas de consentement, il a une case cochée.
 * 2. La durée de conservation doit être déterminée et respectée. La loi
 *    n'impose pas un nombre de jours, elle impose d'en fixer un, de l'annoncer,
 *    et de détruire ensuite. Le nombre est donc une décision d'affaires que la
 *    famille peut resserrer.
 * 3. Le droit à l'effacement doit être réel. C'est pourquoi TranscriptSegment
 *    porte un studentId : sans lien entre une parole et l'enfant qui l'a dite,
 *    on ne peut pas honorer une demande de suppression, on peut seulement dire
 *    qu'on l'a honorée.
 *
 * Rien ici ne remplace un avis juridique. Ce module traduit une lecture des
 * obligations en comportement du logiciel.
 */

export const DEFAULT_RETENTION_DAYS = 90;

/** Les seuls choix offerts. Une liste courte force une décision consciente. */
export const RETENTION_CHOICES = [7, 30, 90, 180] as const;

/**
 * La finalité, écrite en une phrase.
 *
 * Un consentement « éclairé » suppose que le parent puisse dire à quoi il
 * consent. Cette phrase est affichée à côté du bouton, pas enterrée dans des
 * conditions d'utilisation.
 */
export const PURPOSE =
  "Transcrire ce qui se dit pendant le bloc pour produire les traces datées que la Direction de l'enseignement à la maison exige dans le bilan de progression.";

export type PrivacyView = {
  student: { id: string; name: string };
  granted: boolean;
  retentionDays: number;
  decidedAt: Date | null;
  /** Segments conservés en ce moment pour cet enfant. */
  segments: number;
  /** Segments qui ont dépassé la durée de conservation annoncée. */
  expired: number;
  oldest: Date | null;
  events: { id: string; type: string; detail: string | null; occurredAt: Date }[];
};

function cutoff(retentionDays: number): Date {
  return new Date(Date.now() - retentionDays * 86_400_000);
}

export async function privacyForParent(parentId: string): Promise<PrivacyView[]> {
  const children = await prisma.user.findMany({
    where: { parentId },
    orderBy: { name: "asc" },
  });

  return Promise.all(
    children.map(async (child) => {
      const consent = await prisma.recordingConsent.findUnique({
        where: { studentId: child.id },
      });
      const retentionDays = consent?.retentionDays ?? DEFAULT_RETENTION_DAYS;

      const segments = await prisma.transcriptSegment.count({
        where: { studentId: child.id },
      });
      const expired = await prisma.transcriptSegment.count({
        where: { studentId: child.id, createdAt: { lt: cutoff(retentionDays) } },
      });
      const oldestRow = await prisma.transcriptSegment.findFirst({
        where: { studentId: child.id },
        orderBy: { createdAt: "asc" },
        select: { createdAt: true },
      });
      const events = await prisma.privacyEvent.findMany({
        where: { studentId: child.id },
        orderBy: { occurredAt: "desc" },
        take: 12,
      });

      return {
        student: { id: child.id, name: child.name },
        granted: consent?.granted ?? false,
        retentionDays,
        decidedAt: consent?.decidedAt ?? null,
        segments,
        expired,
        oldest: oldestRow?.createdAt ?? null,
        events,
      };
    }),
  );
}

async function log(studentId: string, type: string, detail?: string) {
  return prisma.privacyEvent.create({ data: { studentId, type, detail: detail ?? null } });
}

/**
 * Accorde ou retire le consentement.
 *
 * Le retrait ne supprime rien de lui-même : la loi distingue « arrêtez de
 * collecter » de « effacez ce que vous avez ». Les confondre priverait le parent
 * du choix de garder les traces déjà produites pour son bilan tout en coupant
 * les enregistrements futurs. Le bouton de suppression est donc distinct, et
 * l'écran le dit.
 */
export async function setConsent(studentId: string, granted: boolean) {
  await prisma.recordingConsent.upsert({
    where: { studentId },
    create: { studentId, granted, decidedAt: new Date() },
    update: { granted, decidedAt: new Date() },
  });
  await log(studentId, granted ? "CONSENT_GRANTED" : "CONSENT_REVOKED", PURPOSE);
}

export async function setRetention(studentId: string, days: number) {
  await prisma.recordingConsent.upsert({
    where: { studentId },
    create: { studentId, granted: false, retentionDays: days },
    update: { retentionDays: days },
  });
  await log(studentId, "RETENTION_CHANGED", `Conservation fixée à ${days} jours.`);
}

/**
 * Supprime réellement les transcriptions d'un enfant.
 *
 * `deleteMany` détruit les lignes, il ne les marque pas. Un drapeau
 * « supprimé » laissé sur une ligne encore lisible en base ne satisfait pas un
 * droit à l'effacement, il satisfait un tableau de bord.
 *
 * Le journal de l'événement survit à la suppression, et c'est voulu : il ne
 * contient aucune parole de l'enfant, seulement la preuve que le geste a eu
 * lieu. Sans cette preuve, le parent doit croire le bouton sur parole.
 */
export async function deleteTranscripts(studentId: string) {
  const { count } = await prisma.transcriptSegment.deleteMany({ where: { studentId } });
  await log(
    studentId,
    "TRANSCRIPTS_DELETED",
    `${count} segments supprimés à la demande du parent.`,
  );
  return count;
}

/**
 * Applique la durée de conservation annoncée.
 *
 * En production, un travail planifié le ferait chaque nuit. Ici c'est un bouton,
 * parce qu'une politique de conservation qu'on ne peut pas voir s'exécuter est
 * indistinguable d'une politique qu'on n'applique pas.
 */
export async function purgeExpired(studentId: string) {
  const consent = await prisma.recordingConsent.findUnique({ where: { studentId } });
  const days = consent?.retentionDays ?? DEFAULT_RETENTION_DAYS;
  const { count } = await prisma.transcriptSegment.deleteMany({
    where: { studentId, createdAt: { lt: cutoff(days) } },
  });
  await log(studentId, "RETENTION_PURGE", `${count} segments au-delà de ${days} jours détruits.`);
  return count;
}

export const EVENT_LABEL: Record<string, string> = {
  CONSENT_GRANTED: "Consentement accordé",
  CONSENT_REVOKED: "Consentement retiré",
  RETENTION_CHANGED: "Durée de conservation modifiée",
  TRANSCRIPTS_DELETED: "Transcriptions supprimées",
  RETENTION_PURGE: "Purge automatique appliquée",
};
