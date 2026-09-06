import { prisma } from "./db";

/**
 * Le calendrier des obligations d'une famille scolarisant à la maison.
 *
 * Pourquoi cet écran existe : la loi ne demande pas au parent d'être un bon
 * pédagogue, elle lui demande d'envoyer huit documents à deux organismes
 * différents à huit dates différentes. Rater une date n'annule pas
 * l'apprentissage, mais annule sa reconnaissance. Une famille rencontrée a raté
 * l'inscription aux épreuves du 1er mars : son fils a travaillé toute l'année et
 * n'a gagné aucune unité vers son diplôme.
 *
 * Les DATES ne sont pas dans la base de données. Elles sont réglementaires,
 * identiques pour toutes les familles du Québec, et se calculent à partir de
 * l'année scolaire. Les stocker par famille, ce serait accepter qu'elles
 * puissent diverger d'une famille à l'autre. La base ne retient que ce qui varie
 * réellement : est-ce que cette famille l'a fait, et quand.
 *
 * Sources des échéances : Règlement sur l'enseignement à la maison, tel que
 * résumé par l'AQED (aqed.qc.ca/obligations). L'inscription aux épreuves n'est
 * pas une des sept obligations envers la DEM : c'est une démarche distincte
 * auprès du centre de services scolaire, et c'est justement celle qui se perd.
 */

export type ObligationKey =
  | "avis"
  | "projet"
  | "etat-situation"
  | "suivi"
  | "bilan-mi"
  | "epreuves"
  | "bilan-final"
  | "evaluateur";

export type Obligation = {
  key: ObligationKey;
  label: string;
  /** À qui le document est envoyé. Deux organismes, et les familles les confondent. */
  to: "DEM" | "Centre de services scolaire" | "DEM et centre de services scolaire";
  /** Ce qu'il faut produire, en français de tous les jours. */
  what: string;
  /** L'échéance telle qu'elle est écrite dans la réglementation. */
  legalDate: string;
  /** La date limite calculée pour cette année scolaire. */
  due: Date;
  /** Début de la fenêtre, pour les échéances exprimées en mois plutôt qu'en jour. */
  windowStart?: Date;
  /**
   * Vrai si la date limite est un jour nommé dans le règlement, faux si c'est
   * notre lecture d'une fenêtre exprimée en mois. Le distinguer évite de faire
   * passer une interprétation pour une règle.
   */
  exact: boolean;
  /** Ce qui arrive concrètement si c'est raté. */
  consequence?: string;
};

/**
 * L'année scolaire d'une date, au format "2026-2027".
 *
 * Elle bascule au 1er juillet parce que c'est la date du premier document :
 * l'avis de scolarisation ouvre l'année, il ne la clôt pas.
 */
export function schoolYearOf(d: Date = new Date()): string {
  const y = d.getMonth() >= 6 ? d.getFullYear() : d.getFullYear() - 1;
  return `${y}-${y + 1}`;
}

function startYear(schoolYear: string): number {
  return Number(schoolYear.split("-")[0]);
}

const at = (y: number, m: number, d: number) => new Date(y, m, d, 23, 59, 59);

export function obligationsFor(schoolYear: string): Obligation[] {
  const y = startYear(schoolYear);

  return [
    {
      key: "avis",
      label: "Avis de scolarisation à domicile",
      to: "DEM et centre de services scolaire",
      what: "Une lettre qui déclare que l'enfant sera scolarisé à la maison. Identité, code permanent, coordonnées des deux parents, centre de services applicable. C'est une déclaration, pas une demande de permission.",
      legalDate: "1er juillet",
      due: at(y, 6, 1),
      exact: true,
      consequence:
        "Sans avis, l'enfant est considéré comme absent de l'école plutôt que scolarisé à la maison.",
    },
    {
      key: "projet",
      label: "Projet d'apprentissage",
      to: "DEM",
      what: "Le plan de l'année : approche éducative, méthodes d'évaluation, horaire hebdomadaire, activités et ressources pour les cinq matières. Toutes les compétences du programme doivent y apparaître.",
      legalDate: "30 septembre",
      due: at(y, 8, 30),
      exact: true,
      consequence: "La DEM peut demander des corrections, avec 30 jours pour répondre.",
    },
    {
      key: "etat-situation",
      label: "État de situation",
      to: "DEM",
      what: "Où en est l'enfant à mi-chemin : changements au projet, avancement, activités et temps consacré par matière.",
      legalDate: "Entre le 3e et le 5e mois",
      windowStart: at(y, 10, 1),
      due: at(y + 1, 0, 31),
      exact: false,
    },
    {
      key: "suivi",
      label: "Rencontre de suivi avec la DEM",
      to: "DEM",
      what: "Un contact en cours d'année. C'est la DEM qui la convoque, mais c'est au parent de s'assurer qu'elle a lieu.",
      legalDate: "En cours d'année",
      windowStart: at(y, 10, 1),
      due: at(y + 1, 2, 31),
      exact: false,
    },
    {
      key: "bilan-mi",
      label: "Bilan de mi-parcours",
      to: "DEM",
      what: "Identification de l'enfant, type d'évaluation retenu, commentaire général et progression matière par matière.",
      legalDate: "3e au 5e mois",
      windowStart: at(y, 10, 1),
      due: at(y + 1, 0, 31),
      exact: false,
    },
    {
      key: "epreuves",
      label: "Inscription aux épreuves ministérielles",
      to: "Centre de services scolaire",
      what: "Inscrire l'enfant aux évaluations du ministère. C'est gratuit : la loi oblige le centre de services à évaluer l'enfant sans frais.",
      legalDate: "1er mars",
      due: at(y + 1, 2, 1),
      exact: true,
      consequence:
        "Raté, l'enfant ne passe aucune épreuve cette année-là et ne gagne aucune unité vers son diplôme. Il n'y a pas de reprise.",
    },
    {
      key: "bilan-final",
      label: "Bilan de fin d'année",
      to: "DEM",
      what: "Le même document que le bilan de mi-parcours, sur l'année complète. Un bilan qui ne couvre pas toutes les compétences d'une matière est renvoyé pour modification.",
      legalDate: "15 juin",
      due: at(y + 1, 5, 15),
      exact: true,
    },
    {
      key: "evaluateur",
      label: "Preuve de l'évaluateur",
      to: "DEM",
      what: "La confirmation, par la personne qui a évalué l'enfant, que l'évaluation annuelle a bien eu lieu. Une des cinq méthodes reconnues.",
      legalDate: "10 juillet",
      due: at(y + 1, 6, 10),
      exact: true,
    },
  ];
}

export type ObligationStatus = "fait" | "en-retard" | "bientot" | "a-venir";

export type ObligationRow = Obligation & {
  status: ObligationStatus;
  completedAt: Date | null;
  /** Jours restants, ou jours de retard si négatif. */
  days: number;
};

const DAY = 86_400_000;

/**
 * Le statut n'est jamais stocké.
 *
 * « En retard » est une fonction de la date d'aujourd'hui, donc une valeur
 * enregistrée serait fausse le lendemain. Le seul fait qui mérite d'être écrit
 * est la date à laquelle le parent a coché.
 */
export async function complianceForStudent(studentId: string, schoolYear = schoolYearOf()) {
  const rows = await prisma.complianceTask.findMany({ where: { studentId, schoolYear } });
  const byKey = new Map(rows.map((r) => [r.key, r]));
  const now = Date.now();

  return obligationsFor(schoolYear).map((o): ObligationRow => {
    const task = byKey.get(o.key);
    const days = Math.ceil((o.due.getTime() - now) / DAY);
    const status: ObligationStatus = task?.completedAt
      ? "fait"
      : days < 0
        ? "en-retard"
        : days <= 30
          ? "bientot"
          : "a-venir";
    return { ...o, status, completedAt: task?.completedAt ?? null, days };
  });
}

export function summarize(rows: ObligationRow[]) {
  return {
    done: rows.filter((r) => r.status === "fait").length,
    late: rows.filter((r) => r.status === "en-retard").length,
    soon: rows.filter((r) => r.status === "bientot").length,
    total: rows.length,
  };
}

/** Coche ou décoche une obligation. Idempotent, comme le pointage de présence. */
export async function setObligationDone(
  studentId: string,
  key: string,
  schoolYear: string,
  done: boolean,
) {
  return prisma.complianceTask.upsert({
    where: { studentId_key_schoolYear: { studentId, key, schoolYear } },
    create: { studentId, key, schoolYear, completedAt: done ? new Date() : null },
    update: { completedAt: done ? new Date() : null },
  });
}
