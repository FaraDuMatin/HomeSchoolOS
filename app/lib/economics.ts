/**
 * Le modèle financier.
 *
 * La première version vendait 5 heures d'enseignement par semaine pour 2 400 $
 * et concluait que l'entreprise mourait sans salle gratuite. Deux erreurs.
 *
 * ERREUR 1 : on vendait trop peu de service. Un parent qui travaille n'a pas
 * besoin de 5 heures par semaine, il a besoin de journées. On vend donc la
 * journée complète, découpée selon ce que l'État rembourse déjà.
 *
 * ERREUR 2 : on supposait qu'on louerait pour toujours. Un loyer monte avec le
 * nombre d'instructeurs et ne s'arrête jamais. Une hypothèque est fixe, elle
 * finit, et elle laisse un actif. Surtout : notre programme occupe un bâtiment
 * exactement aux heures dont personne ne veut, la semaine de 9 h à 15 h. Le
 * soir et la fin de semaine se louent. Le local cesse d'être notre plus gros
 * coût pour devenir notre deuxième source de revenus.
 *
 * Résultat du calcul, et c'est l'inverse de ce qu'on disait : à 96 enfants, la
 * location au tarif du marché perd 47 676 $ par an, l'achat en gagne 81 931 $.
 *
 * SOURCES
 * - Crédit pour frais de garde 2025 : plafond de 6 180 $ par enfant de 7 à
 *   moins de 14 ans, 12 275 $ sous 7 ans, remboursé à 67 % à 78 % selon le
 *   revenu familial [Revenu Québec]. L'âge maximal passe de 16 à 14 ans en
 *   2026, ce qui confirme de commencer au primaire.
 * - Crédit pour activités des enfants : 20 % jusqu'à 500 $ de frais, donc
 *   100 $ par enfant, programme d'au moins 8 semaines consécutives, revenu
 *   familial sous 168 470 $ [Revenu Québec].
 * - Bâtisse commerciale à Gatineau : 349 900 $ à 595 000 $ sur les annonces
 *   courantes [Centris, LesPAC].
 * - Hypothèque commerciale : mise de fonds de 20 % à 30 %, taux de 6 % à 8 %
 *   fin 2025, amortissement de 20 à 25 ans [Desjardins, LendCity].
 * - Salle au tarif communautaire : 85 $ le bloc de 4 h [Centre St-Pierre].
 *
 * CE QUI RESTE NON RÉSOLU, et qu'il faut dire à voix haute : le relevé 24 est
 * produit par « une garderie, un pensionnat, une colonie de vacances ou un camp
 * de jour ». Un encadrement en semaine pendant l'année scolaire n'est aucun des
 * quatre. L'admissibilité est une question à poser à Revenu Québec, pas un
 * fait. Elle est donc un paramètre du modèle, pas une hypothèse cachée.
 */

// --- L'offre ---------------------------------------------------------------

export const OFFER = {
  weeks: 36,
  /** Deux journées complètes par semaine, 9 h à 15 h. */
  daysPerWeek: 2,
  hoursPerDay: 6,
  /** Deux blocs de 2 h 30 par semaine, en cohorte de 4. */
  teachingHoursPerWeek: 5,
  /** Quatre élèves à la fois. C'est la loi, pas une préférence. */
  cohortCap: 4,
  /** Un instructeur porte 4 cohortes, donc 16 familles. */
  studentsPerInstructor: 16,
  /** Jours d'ouverture par semaine. */
  openDays: 4,
} as const;

/** Heures d'enseignement livrées par un instructeur en un an. */
export const TEACHING_HOURS = 4 * OFFER.teachingHoursPerWeek * OFFER.weeks; // 720
/** Heures d'encadrement couvertes par un surveillant en un an. */
export const CARE_HOURS = OFFER.hoursPerDay * OFFER.openDays * OFFER.weeks; // 864

/** Ce que le parent voit sur sa facture, par enfant et par an. */
export const PRICES = {
  teaching: 2400,
  care: 1800,
  activities: 500,
  compliance: 250,
} as const;

export const COMPLIANCE_ADOPTION = 0.7;

// --- Les crédits -----------------------------------------------------------

export const CREDIT = {
  care: { low: 0.67, high: 0.78, ceiling: 6180, ceilingUnder7: 12_275 },
  activities: { rate: 0.2, ceiling: 500, familyIncomeMax: 168_470 },
} as const;

export type ParentBill = {
  billed: number;
  creditCare: number;
  creditActivities: number;
  net: number;
  /** Coût net par journée de présence. La seule unité qu'un parent compare. */
  netPerDay: number;
};

/**
 * Ce que le parent paie vraiment.
 *
 * `careEligible` porte toute l'incertitude : à 1 les heures d'encadrement
 * donnent droit au crédit, à 0 elles n'y donnent pas droit du tout. Exposé pour
 * qu'un juge puisse le mettre à zéro et voir ce qui reste.
 */
export function parentBill(creditRate = 0.7, careEligible = 1): ParentBill {
  const billed = PRICES.teaching + PRICES.care + PRICES.activities + PRICES.compliance;
  const creditCare =
    Math.min(PRICES.care * careEligible, CREDIT.care.ceiling) * creditRate;
  const creditActivities =
    Math.min(PRICES.activities, CREDIT.activities.ceiling) * CREDIT.activities.rate;
  const net = billed - creditCare - creditActivities;
  return {
    billed,
    creditCare,
    creditActivities,
    net,
    netPerDay: net / (OFFER.weeks * OFFER.daysPerWeek),
  };
}

// --- La marge horaire ------------------------------------------------------

/**
 * Le premier test qu'un modèle doit passer : gagne-t-on de l'argent sur chaque
 * heure travaillée ? Si la réponse est non, aucune échelle ne sauve
 * l'entreprise, elle ne fait qu'accélérer la perte.
 */
export function hourlyMargin() {
  const teachRevenue =
    (OFFER.cohortCap * PRICES.teaching) / (OFFER.teachingHoursPerWeek * OFFER.weeks);
  const careRevenuePerChild = PRICES.care / ((OFFER.hoursPerDay - 2.5) * OFFER.weeks);
  return {
    teaching: { revenue: teachRevenue, cost: COSTS.instructorRate, margin: teachRevenue - COSTS.instructorRate },
    care4: {
      revenue: careRevenuePerChild * 4,
      cost: COSTS.monitorRate,
      margin: careRevenuePerChild * 4 - COSTS.monitorRate,
    },
    care8: {
      revenue: careRevenuePerChild * 8,
      cost: COSTS.monitorRate,
      margin: careRevenuePerChild * 8 - COSTS.monitorRate,
    },
  };
}

// --- Les coûts -------------------------------------------------------------

export const COSTS = {
  /** Instructeur contractuel. [hypothèse], contre 30-60 $/h au tutorat privé. */
  instructorRate: 35,
  /** Surveillant d'encadrement. Ce n'est pas un enseignant. [hypothèse] */
  monitorRate: 20,
  /** Salle d'enseignement, 85 $ le bloc de 4 h. [Centre St-Pierre] */
  roomTeachingRate: 85 / 4,
  /** Espace d'encadrement : gymnase, parc, bibliothèque municipale. [hypothèse] */
  roomCareRate: 10,
  materialsPerChild: 150,
  insuranceBase: 2000,
  insurancePerInstructor: 500,
  /** Avis juridique et constitution. An 1 seulement. [hypothèse] */
  legalYearOne: 5000,
  screeningPerInstructor: 200,
  /** Imprévus. Un modèle sans cette ligne n'a jamais été exploité. */
  contingency: 0.05,
} as const;

/**
 * L'immeuble.
 *
 * Prix médian des annonces courantes de bâtisse commerciale à Gatineau. La
 * sous-location est la ligne qui change tout : on utilise 24 heures sur les
 * quelque 84 heures ouvrables d'une semaine, et les 60 autres sont exactement
 * celles que veulent les écoles du soir, les cours de fin de semaine et les
 * organismes communautaires.
 */
export const BUILDING = {
  price: 500_000,
  downPayment: 0.25,
  rate: 0.07,
  years: 25,
  taxes: 12_000,
  insurance: 4000,
  upkeep: 12_000,
  /** Heures louées à des tiers par semaine, hors de nos heures. [hypothèse] */
  subletHoursPerWeek: 30,
  subletRate: 30,
  subletWeeks: 44,
} as const;

export function mortgageAnnual(): number {
  const loan = BUILDING.price * (1 - BUILDING.downPayment);
  const r = BUILDING.rate / 12;
  const n = BUILDING.years * 12;
  return (loan * r) / (1 - Math.pow(1 + r, -n)) * 12;
}

export function subletRevenue(): number {
  return BUILDING.subletHoursPerWeek * BUILDING.subletRate * BUILDING.subletWeeks;
}

/** Coût net d'occupation quand on est propriétaire. Fixe, quelle que soit la taille. */
export function ownedOccupancyCost(): number {
  return (
    mortgageAnnual() + BUILDING.taxes + BUILDING.insurance + BUILDING.upkeep - subletRevenue()
  );
}

// --- Le compte -------------------------------------------------------------

export type Occupancy = "partenaire" | "marche" | "achat" | "prete";

export const OCCUPANCY_LABEL: Record<Occupancy, string> = {
  prete: "Salle prêtée",
  partenaire: "Tarif partenaire",
  marche: "Tarif du marché",
  achat: "Immeuble acheté",
};

const RENT_FACTOR: Record<Occupancy, number> = {
  prete: 0,
  partenaire: 0.5,
  marche: 1,
  achat: 0,
};

export function rentCost(instructors: number, occupancy: Occupancy): number {
  if (occupancy === "achat") return Math.round(ownedOccupancyCost());
  return Math.round(
    instructors *
      (TEACHING_HOURS * COSTS.roomTeachingRate + CARE_HOURS * COSTS.roomCareRate) *
      RENT_FACTOR[occupancy],
  );
}

/**
 * Le personnel administratif apparaît par paliers.
 *
 * En amorçage, la fondatrice fait l'administration sans salaire. C'est
 * soutenable pour seize enfants et malhonnête à prétendre pour quatre-vingt-seize.
 */
export function adminCost(children: number) {
  return {
    secretary: children >= 64 ? 45_000 : children >= 32 ? 25_000 : 0,
    coordinator: children >= 64 ? 22_000 : 0,
  };
}

export type Plan = {
  children: number;
  instructors: number;
  occupancy: Occupancy;
  yearOne: boolean;
  revenue: { teaching: number; care: number; activities: number; compliance: number; total: number };
  cost: {
    instructors: number;
    monitors: number;
    space: number;
    materials: number;
    insurance: number;
    legal: number;
    screening: number;
    secretary: number;
    coordinator: number;
    contingency: number;
    total: number;
  };
  result: number;
  margin: number;
};

export function plan(children: number, occupancy: Occupancy = "partenaire", yearOne = true): Plan {
  const n = Math.max(0, Math.round(children));
  const instructors = Math.ceil(n / OFFER.studentsPerInstructor);

  const revenue = {
    teaching: n * PRICES.teaching,
    care: n * PRICES.care,
    activities: n * PRICES.activities,
    compliance: Math.round(n * COMPLIANCE_ADOPTION * PRICES.compliance),
    total: 0,
  };
  revenue.total = revenue.teaching + revenue.care + revenue.activities + revenue.compliance;

  const admin = adminCost(n);
  const cost = {
    instructors: instructors * TEACHING_HOURS * COSTS.instructorRate,
    monitors: instructors * CARE_HOURS * COSTS.monitorRate,
    // Un immeuble acheté coûte le même prix qu'on ait un enfant ou cent.
    space: n === 0 && occupancy !== "achat" ? 0 : rentCost(instructors, occupancy),
    materials: n * COSTS.materialsPerChild,
    insurance: n === 0 ? 0 : COSTS.insuranceBase + instructors * COSTS.insurancePerInstructor,
    legal: yearOne && n > 0 ? COSTS.legalYearOne : 0,
    screening: instructors * COSTS.screeningPerInstructor,
    secretary: admin.secretary,
    coordinator: admin.coordinator,
    contingency: 0,
    total: 0,
  };

  const base =
    cost.instructors +
    cost.monitors +
    cost.space +
    cost.materials +
    cost.insurance +
    cost.legal +
    cost.screening +
    cost.secretary +
    cost.coordinator;
  cost.contingency = Math.round(base * COSTS.contingency);
  cost.total = base + cost.contingency;

  return {
    children: n,
    instructors,
    occupancy,
    yearOne,
    revenue,
    cost,
    result: revenue.total - cost.total,
    margin: revenue.total > 0 ? (revenue.total - cost.total) / revenue.total : 0,
  };
}

/**
 * Le premier remplissage rentable, et celui à partir duquel on ne replonge
 * plus en montant. Les deux diffèrent parce qu'un instructeur s'embauche par
 * paliers de 16 : le site redevient déficitaire quand il arrive pour un enfant
 * de plus. D'où la règle : on embauche quand la cohorte suivante est remplie.
 */
export function breakEven(occupancy: Occupancy, yearOne = true, max = 96) {
  let first: number | null = null;
  for (let n = 1; n <= max; n++) {
    if (plan(n, occupancy, yearOne).result >= 0) {
      first = n;
      break;
    }
  }
  let stable: number | null = null;
  for (let n = max; n >= 1; n--) {
    if (plan(n, occupancy, yearOne).result >= 0) stable = n;
    else break;
  }
  return { first, stable };
}

export function curve(occupancy: Occupancy, yearOne = true, max = 96): number[] {
  return Array.from({ length: max + 1 }, (_, n) => plan(n, occupancy, yearOne).result);
}

/** Le chemin, année par année, jusqu'à la mise de fonds. */
export type Step = { year: number; children: number; occupancy: Occupancy; result: number; cash: number };

export function path(): Step[] {
  const growth: { children: number; occupancy: Occupancy }[] = [
    { children: 16, occupancy: "partenaire" },
    { children: 32, occupancy: "partenaire" },
    { children: 48, occupancy: "partenaire" },
    { children: 64, occupancy: "partenaire" },
    { children: 80, occupancy: "partenaire" },
    { children: 96, occupancy: "achat" },
    { children: 96, occupancy: "achat" },
  ];
  let cash = 0;
  return growth.map((g, i) => {
    const p = plan(g.children, g.occupancy, i === 0);
    // L'année de l'achat, la mise de fonds sort de la caisse.
    const down = g.occupancy === "achat" && growth[i - 1]?.occupancy !== "achat"
      ? BUILDING.price * BUILDING.downPayment
      : 0;
    cash += p.result - down;
    return { year: i + 1, children: g.children, occupancy: g.occupancy, result: p.result, cash };
  });
}

export const money = (n: number) =>
  `${n < 0 ? "−" : ""}${Math.abs(Math.round(n)).toLocaleString("fr-CA")} $`;
