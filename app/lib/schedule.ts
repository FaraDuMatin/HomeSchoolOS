import { ALL_COMPETENCIES } from "./pfeq";

/**
 * L'horaire de la semaine.
 *
 * Ce que la loi impose, ce sont les MATIÈRES et le fait de pouvoir prouver
 * qu'elles ont été travaillées. Elle n'impose nulle part comment la journée est
 * remplie. C'est cet espace-là qui rend le religieux possible sans rien retirer
 * au programme : les blocs du programme sont posés en premier, et le Coran,
 * l'arabe et les études islamiques occupent le reste.
 *
 * Un peu de Coran chaque jour plutôt que trois heures le dimanche : c'est la
 * seule façon que la mémorisation tienne, et c'est ce que les familles font
 * déjà le soir sur un enfant déjà vidé. Ici c'est dans la journée, pas après.
 *
 * L'horaire n'est pas en base, comme les dates de conformité ne le sont pas. Il
 * est le même pour toute une cohorte, il se lit, il ne se saisit pas. Ce qui va
 * en base, c'est uniquement ce que l'élève dépose.
 *
 * DEUX FAMILLES DE CODES, ET C'EST VOLONTAIRE. Les blocs du programme portent
 * un code du PFEQ (FR-C2, MA-C1...). Les blocs religieux portent un code REL-*,
 * qui n'existe dans aucun programme du ministère. Le bilan ne lit que les codes
 * du PFEQ, donc le travail religieux est consigné pour la famille et sort tout
 * seul du document remis à l'État. Rien à filtrer à la main, rien à oublier.
 */

export type BlockKind = "programme" | "religieux" | "activite" | "pause";

export type Block = {
  /** Stable, lisible, et sert d'URL. */
  id: string;
  day: Day;
  start: string;
  end: string;
  title: string;
  kind: BlockKind;
  /** Code PFEQ pour le programme, code REL-* pour le reste. Absent : une pause. */
  competency?: string;
  where: "centre" | "maison";
  /** Ce que l'élève dépose à la fin du bloc. Absent : rien à déposer. */
  deposit?: string;
};

export type Day = "lundi" | "mardi" | "mercredi" | "jeudi" | "vendredi";

export const DAYS: Day[] = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];

/** Les deux jours de présence au centre. Le reste de la semaine est à la maison. */
export const PRESENCE_DAYS: Day[] = ["mardi", "jeudi"];

/**
 * Les compétences hors programme.
 *
 * Elles sont écrites comme les autres pour que le dépôt et l'affichage n'aient
 * pas deux chemins de code, mais aucune ne sera jamais lue par le bilan.
 */
export const RELIGIOUS_COMPETENCIES = [
  { code: "REL-C1", label: "Coran, lecture et mémorisation" },
  { code: "REL-C2", label: "Langue arabe" },
  { code: "REL-C3", label: "Études islamiques" },
];

export const ACTIVITY_COMPETENCY = { code: "ACT-C1", label: "Activité physique ou artistique" };

const LABELS = new Map(
  [...ALL_COMPETENCIES, ...RELIGIOUS_COMPETENCIES, ACTIVITY_COMPETENCY].map((c) => [
    c.code,
    c.label,
  ]),
);

export function labelOf(code: string): string {
  return LABELS.get(code) ?? code;
}

/** Vrai si le code appartient au Programme de formation de l'école québécoise. */
export function isProgramCompetency(code: string): boolean {
  return ALL_COMPETENCIES.some((c) => c.code === code);
}

type Row = [start: string, end: string, title: string, kind: BlockKind, competency?: string, deposit?: string];

/**
 * Une journée au centre : six heures, de 9 h à 15 h.
 *
 * Le Coran ouvre la journée parce qu'un enfant mémorise mieux avant que la
 * fatigue arrive, et parce qu'un bloc placé en fin de journée est le premier
 * qu'on saute quand on prend du retard.
 */
const CENTRE_DAY: Row[] = [
  ["09:00", "09:25", "Coran, mémorisation", "religieux", "REL-C1", "L'enregistrement ou les versets travaillés"],
  ["09:25", "10:40", "Français", "programme", "FR-C2", "Le texte écrit pendant le bloc"],
  ["10:40", "10:55", "Pause", "pause"],
  ["10:55", "12:00", "Mathématique", "programme", "MA-C1", "La situation-problème résolue"],
  ["12:00", "12:45", "Dîner", "pause"],
  ["12:45", "13:45", "Science et technologie", "programme", "ST-C1", "Le compte rendu de l'expérience"],
  ["13:45", "14:20", "Langue arabe", "religieux", "REL-C2", "L'exercice de vocabulaire ou de conjugaison"],
  ["14:20", "15:00", "Activité physique ou artistique", "activite", "ACT-C1"],
];

/**
 * Une journée à la maison : trois blocs courts, pas six heures.
 *
 * Le parent n'enseigne pas ces blocs, il les supervise. Demander plus serait
 * exactement l'épuisement qu'on prétend régler.
 */
const HOME_DAY: Row[] = [
  ["09:00", "09:25", "Coran, mémorisation", "religieux", "REL-C1", "L'enregistrement ou les versets travaillés"],
  ["09:25", "10:15", "Lecture", "programme", "FR-C1", "Le carnet de lecture"],
  ["10:15", "11:00", "Travail autonome", "programme", "MA-C2", "Les exercices faits"],
];

/** Le mercredi remplace la lecture par l'univers social et ajoute les études islamiques. */
const WEDNESDAY: Row[] = [
  ["09:00", "09:25", "Coran, mémorisation", "religieux", "REL-C1", "L'enregistrement ou les versets travaillés"],
  ["09:25", "10:20", "Univers social", "programme", "US-C1", "La carte ou la ligne du temps"],
  ["10:20", "11:05", "Études islamiques", "religieux", "REL-C3", "Le résumé de la leçon"],
];

/** Le vendredi termine par l'anglais : c'est une matière évaluée en 6e année. */
const FRIDAY: Row[] = [
  ["09:00", "09:25", "Coran, mémorisation", "religieux", "REL-C1", "L'enregistrement ou les versets travaillés"],
  ["09:25", "10:20", "Anglais, langue seconde", "programme", "EN-C3", "Le texte écrit en anglais"],
  ["10:20", "11:00", "Travail autonome", "programme", "FR-C4", "La fiche de lecture"],
];

const TABLE: Record<Day, Row[]> = {
  lundi: HOME_DAY,
  mardi: CENTRE_DAY,
  mercredi: WEDNESDAY,
  jeudi: CENTRE_DAY,
  vendredi: FRIDAY,
};

function build(): Block[] {
  const out: Block[] = [];
  for (const day of DAYS) {
    const where = PRESENCE_DAYS.includes(day) ? "centre" : "maison";
    TABLE[day].forEach(([start, end, title, kind, competency, deposit], i) => {
      out.push({
        id: `${day.slice(0, 3)}-${i + 1}`,
        day,
        start,
        end,
        title,
        kind,
        competency,
        where,
        deposit,
      });
    });
  }
  return out;
}

export const WEEK: Block[] = build();

export function blocksOfDay(day: Day): Block[] {
  return WEEK.filter((b) => b.day === day);
}

export function blockById(id: string): Block | undefined {
  return WEEK.find((b) => b.id === id);
}

/** Minutes par semaine, par famille de blocs. Sert à répondre à un juge. */
export function weeklyMinutes() {
  const mins = (b: Block) => {
    const [h1, m1] = b.start.split(":").map(Number);
    const [h2, m2] = b.end.split(":").map(Number);
    return h2 * 60 + m2 - (h1 * 60 + m1);
  };
  const sum = (k: BlockKind) => WEEK.filter((b) => b.kind === k).reduce((n, b) => n + mins(b), 0);
  return {
    programme: sum("programme"),
    religieux: sum("religieux"),
    activite: sum("activite"),
  };
}
