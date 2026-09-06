/**
 * Le modèle financier d'un site, calculé plutôt qu'affirmé.
 *
 * « Is the cost of running sustainable » vaut 10 % de la note. Un tableau sur un
 * slide répond à la question une fois, avec les chiffres qui arrangent. Une page
 * qui recalcule devant le juge répond à toutes les versions de la question, y
 * compris celles qu'on n'avait pas préparées.
 *
 * Ce fichier ne touche pas la base de données : ce sont des fonctions pures, ce
 * qui permet au curseur de recalculer dans le navigateur sans aller-retour.
 *
 * SOURCES. Les valeurs marquées [source] viennent du marché, les autres sont nos
 * hypothèses et sont marquées comme telles. Un juge qui demande d'où sort un
 * chiffre doit avoir une réponse, pas une justification.
 */

export const MODEL = {
  /** Prix annuel d'une place en cohorte. [hypothèse] calée sur le comparable
   *  Les Apprenants Épanouis, 40 $ pour 3 h, soit 13,33 $/h. */
  priceCohort: 2400,
  /** Abonnement conformité annuel. [hypothèse] */
  priceCompliance: 250,
  /** Part des familles qui prennent la conformité. [hypothèse] */
  complianceAdoption: 0.7,

  /** Taux horaire d'un instructeur contractuel. [hypothèse], contre 30 à 60 $/h
   *  au tutorat privé. */
  instructorHourly: 35,
  /** 4 jours par semaine, 2 blocs de 2 h 30, 36 semaines. */
  instructorHoursPerYear: 720,
  /** 4 cohortes de 4 élèves. Le plafond légal limite la salle, pas la personne. */
  studentsPerInstructor: 16,

  /** Un site type : 6 salles, 6 instructeurs. */
  siteRooms: 6,
  siteCapacity: 96,

  /** Coordonnateur à 60 000 $ chargé à 20 %, réparti sur 3 sites. [hypothèse] */
  coordinatorPerSite: 22_000,
  /** Matériel, assurances, administration. [hypothèse] */
  overheadPerSite: 30_000,

  /** Tarif communautaire d'une salle : 85 $ le bloc de 4 h. [Centre St-Pierre] */
  blockRate: 85,
} as const;

/** Coût annuel d'un instructeur : 720 h × 35 $. */
export const INSTRUCTOR_COST =
  MODEL.instructorHoursPerYear * MODEL.instructorHourly; // 25 200 $

/** Charges fixes d'un site, indépendantes du nombre d'enfants. */
export const FIXED_COST = MODEL.coordinatorPerSite + MODEL.overheadPerSite; // 52 000 $

/**
 * Coût annuel d'une salle au tarif du marché.
 *
 * 6 salles × 5 h/jour × 4 jours × 36 semaines = 4 320 heures-salle par site,
 * soit 1 080 blocs de 4 h à 85 $ = 91 800 $, donc 15 300 $ par salle.
 */
export const ROOM_COST = Math.round(
  ((MODEL.siteRooms * 5 * 4 * 36) / 4) * MODEL.blockRate / MODEL.siteRooms,
); // 15 300 $

export type Scenario = "prete" | "loue";

export type SiteResult = {
  students: number;
  scenario: Scenario;
  instructors: number;
  rooms: number;
  revenueCohorts: number;
  revenueCompliance: number;
  revenue: number;
  instructorCost: number;
  spaceCost: number;
  fixedCost: number;
  costs: number;
  result: number;
  margin: number;
  occupancy: number;
};

/**
 * Le compte d'un site à un niveau de remplissage donné.
 *
 * Le point important est `Math.ceil` : un instructeur s'embauche par paliers de
 * 16 enfants, pas au prorata. C'est ce qui crée les dents de scie du résultat et
 * c'est la vraie contrainte opérationnelle. Un modèle linéaire lisse ce détail
 * et fait croire qu'on peut embaucher au bon moment.
 */
export function siteEconomics(students: number, scenario: Scenario): SiteResult {
  const n = Math.max(0, Math.min(MODEL.siteCapacity, Math.round(students)));
  const instructors = Math.ceil(n / MODEL.studentsPerInstructor);
  const rooms = instructors;

  const revenueCohorts = n * MODEL.priceCohort;
  const revenueCompliance = Math.round(n * MODEL.complianceAdoption * MODEL.priceCompliance);
  const revenue = revenueCohorts + revenueCompliance;

  const instructorCost = instructors * INSTRUCTOR_COST;
  const spaceCost = scenario === "loue" ? rooms * ROOM_COST : 0;
  const costs = instructorCost + spaceCost + FIXED_COST;

  return {
    students: n,
    scenario,
    instructors,
    rooms,
    revenueCohorts,
    revenueCompliance,
    revenue,
    instructorCost,
    spaceCost,
    fixedCost: FIXED_COST,
    costs,
    result: revenue - costs,
    margin: revenue > 0 ? (revenue - costs) / revenue : 0,
    occupancy: n / MODEL.siteCapacity,
  };
}

/**
 * Il n'y a pas UN point mort, il y en a deux, et c'est le résultat le plus
 * important de ce fichier.
 *
 * `first` est le premier remplissage où le site cesse de perdre de l'argent.
 * `stable` est celui à partir duquel il ne replonge plus jamais en montant.
 *
 * Les deux diffèrent à cause des paliers d'embauche. Un site rentable à 63
 * enfants redevient déficitaire à 65, quand le cinquième instructeur est
 * embauché pour un enfant de plus, et il le reste jusqu'à 70. Annoncer un seul
 * chiffre revient donc soit à promettre une rentabilité qui se défait à la
 * prochaine inscription, soit à cacher qu'elle existe déjà plus tôt.
 *
 * Conséquence opérationnelle, et c'est elle qui compte : on n'embauche pas
 * l'instructeur suivant à la première inscription qui dépasse le palier, on
 * l'embauche quand la cohorte qu'il va servir est remplie.
 *
 * `stable` vaut null quand aucun remplissage possible ne suffit, ce qui est le
 * cas du scénario avec local loué.
 */
export function breakEven(scenario: Scenario): { first: number | null; stable: number | null } {
  let first: number | null = null;
  for (let n = 1; n <= MODEL.siteCapacity; n++) {
    if (siteEconomics(n, scenario).result >= 0) {
      first = n;
      break;
    }
  }

  let stable: number | null = null;
  for (let n = MODEL.siteCapacity; n >= 1; n--) {
    if (siteEconomics(n, scenario).result >= 0) stable = n;
    else break;
  }

  return { first, stable };
}

/** Chaque embauche, et le résultat juste après. Ce sont les creux du graphique. */
export function hiringSteps(scenario: Scenario): { at: number; instructors: number; result: number }[] {
  const out: { at: number; instructors: number; result: number }[] = [];
  for (let n = 1; n <= MODEL.siteCapacity; n++) {
    const now = siteEconomics(n, scenario);
    const before = siteEconomics(n - 1, scenario);
    if (now.instructors > before.instructors) {
      out.push({ at: n, instructors: now.instructors, result: now.result });
    }
  }
  return out;
}

/** La courbe complète, pour le graphique. */
export function curve(scenario: Scenario): SiteResult[] {
  return Array.from({ length: MODEL.siteCapacity + 1 }, (_, n) => siteEconomics(n, scenario));
}

export const money = (n: number) =>
  `${n < 0 ? "−" : ""}${Math.abs(Math.round(n)).toLocaleString("fr-CA")} $`;
