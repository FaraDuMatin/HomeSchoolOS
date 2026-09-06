/**
 * Le contenu du deck.
 *
 * Tout le texte du pitch est ici, dans un seul fichier plat. Changer un mot ne
 * demande pas de toucher au rendu, et ne demande personne d'autre que toi.
 *
 * `say` est ce que tu dis à voix haute. Il ne s'affiche pas au projecteur :
 * appuie sur N pour le voir sur ton écran pendant que la salle voit le slide.
 *
 * RÈGLE : rien de ce qui est à l'écran dans l'app ne se retrouve sur un slide.
 * Le deck porte l'histoire, la recherche, les chiffres et la demande. L'app
 * porte la preuve que ça marche.
 */

export type Row = { label: string; values: string[]; tone?: "good" | "bad" };

export type Slide = {
  /** Étiquette de section, en haut à gauche. */
  eyebrow: string;
  title: string;
  /** Une phrase sous le titre. */
  lede?: string;
  /** Points, courts. Jamais de paragraphe sur un slide. */
  bullets?: string[];
  /** Un tableau, quand les chiffres valent mieux qu'une phrase. */
  table?: { head: string[]; rows: Row[] };
  /** Les deux ou trois chiffres qui doivent rester en tête. */
  stats?: { value: string; label: string; tone?: "good" | "bad" }[];
  /** Ce que tu dis. Visible sur ton écran seulement. */
  say: string;
  /** Ce que tu ouvres dans l'autre onglet à ce moment-là. */
  demo?: string;
  /** Source ou étiquette d'hypothèse, en pied de slide. */
  source?: string;
};

export const SLIDES: Slide[] = [
  {
    eyebrow: "MuslimHacks 2026 · Défi 04",
    title: "Elle a payé 1 800 $ et son fils n'a gagné aucune unité",
    lede: "Une mère apprend en avril que l'inscription aux évaluations fermait le 1er mars.",
    say: "Ouvrir là-dessus, lentement. Pas de statistique en ouverture. Une personne, un mois, une conséquence chiffrée. À remplacer par la vraie famille rencontrée sur place.",
    source: "À remplacer par une citation réelle.",
  },

  {
    eyebrow: "Le marché",
    title: "8 700 familles, et elles ne repartent pas",
    stats: [
      { value: "5 964", label: "avant la pandémie" },
      { value: "8 304", label: "au pic d'août 2020" },
      { value: "8 700", label: "aujourd'hui" },
    ],
    bullets: [
      "71 % au primaire.",
      "Le crédit d'impôt pour frais de garde s'arrête à moins de 14 ans en 2026.",
      "Le marché principal et le seul marché finançable sont donc le même.",
    ],
    say: "Le marché a gagné 2 500 familles en 2020 et ne les a jamais reperdues. Ce n'est pas une bulle, c'est une bascule. Ne jamais dire plus 50 pour cent de croissance : un juge demandera depuis quand.",
    source: "Radio-Canada, Le Devoir, Revenu Québec.",
  },

  {
    eyebrow: "Le trou",
    title: "Le ministère écrit lui-même qu'il n'enseigne pas",
    bullets: [
      "Il donne les gabarits. Le centre de services prête les labos.",
      "Personne ne livre l'enseignement ni l'évaluation.",
      "Le parent doit déposer un bilan couvrant toutes les compétences du programme.",
      "Huit obligations, deux organismes, aucune reprise.",
    ],
    say: "Le trou est officiel, et il est exactement là où on se place. Les parents externalisent déjà : on n'a pas à créer le comportement, seulement à l'organiser.",
  },

  {
    eyebrow: "La thèse",
    title: "L'exemption plafonne la salle, pas l'instructeur",
    bullets: [
      "Une école : permis déposé 12 mois d'avance, programme complet, enseignant à 61 602 $.",
      "La loi exempte qui enseigne seul à moins de cinq élèves.",
      "Quatre a l'air trop petit pour être une entreprise.",
      "Un instructeur porte quatre cohortes. Seize familles.",
    ],
    say: "C'est le temps le plus important du pitch. Le répéter jusqu'à ce qu'il sorte sans hésitation. Et on ne sort jamais de l'exemption : on n'agrandit pas les groupes, on ajoute des instructeurs. Le plafond de quatre n'est pas un plafond d'entreprise.",
    source: "Loi sur l'enseignement privé, E-9.1.",
  },

  {
    eyebrow: "L'offre",
    title: "On vend la journée, pas l'heure",
    lede: "Deux journées complètes par semaine, 9 h à 15 h, 36 semaines.",
    table: {
      head: ["Ligne", "Prix / an", "Crédit d'impôt"],
      rows: [
        { label: "Enseignement, cohorte de 4", values: ["2 400 $", "aucun"] },
        { label: "Encadrement, le reste de la journée", values: ["1 800 $", "67 à 78 %"], tone: "good" },
        { label: "Activité physique ou artistique", values: ["500 $", "20 %, max 100 $"], tone: "good" },
        { label: "Conformité aux huit obligations", values: ["250 $", "aucun"] },
      ],
    },
    say: "Un parent qui travaille n'a pas besoin de cinq heures par semaine, il a besoin de journées. On découpe la journée selon ce que l'État rembourse déjà. On peut donc facturer plus sans que le parent paie plus.",
    source: "Plafond de garde 6 180 $ pour 7 à 13 ans. Crédit activités : 8 semaines consécutives, revenu familial sous 168 470 $. [Revenu Québec 2025]",
  },

  {
    eyebrow: "Démonstration",
    title: "Ce qui tourne, en direct",
    bullets: [
      "Le système refuse le cinquième élève.",
      "Un bloc en direct : rien n'est saisi à la main.",
      "Le bilan du ministère, généré en un clic.",
      "L'échéance ratée, en rouge.",
      "La suppression Loi 25, le compteur tombe à zéro.",
    ],
    demo: "Basculer sur l'onglet de l'app. Revenir ici après.",
    say: "La loi n'est pas dans une politique interne, elle est dans la base de données. Ne jamais laisser entendre que les transcriptions viennent d'un micro : ce sont des données de test.",
  },

  {
    eyebrow: "Viabilité 1 sur 3",
    title: "On gagne sur chaque heure travaillée",
    table: {
      head: ["Heure", "Reçu", "Payé", "Marge"],
      rows: [
        { label: "Enseignement, 4 élèves", values: ["53,33 $", "35,00 $", "+18,33 $"], tone: "good" },
        { label: "Encadrement, 4 élèves", values: ["28,57 $", "20,00 $", "+8,57 $"], tone: "good" },
        { label: "Encadrement, 8 élèves", values: ["57,14 $", "20,00 $", "+37,14 $"], tone: "good" },
      ],
    },
    say: "C'est le premier test qu'un modèle doit passer. Si une heure ne rapporte pas, aucune échelle ne sauve l'entreprise, elle accélère la perte. Nous, on multiplie un nombre positif.",
    source: "Instructeur contractuel 35 $/h, surveillant 20 $/h. [hypothèses]",
  },

  {
    eyebrow: "Viabilité 2 sur 3",
    title: "Le parent paie 50 $ la journée",
    table: {
      head: ["", "Montant"],
      rows: [
        { label: "Facturé", values: ["4 950 $"] },
        { label: "Crédit frais de garde, à 70 %", values: ["−1 260 $"], tone: "good" },
        { label: "Crédit activités", values: ["−100 $"], tone: "good" },
        { label: "Payé par le parent", values: ["3 590 $"] },
        { label: "Par journée de présence", values: ["50 $"] },
      ],
    },
    bullets: [
      "Un camp de jour privé coûte pareil et n'enseigne rien.",
      "L'école privée subventionnée : 2 500 à 5 000 $, avec 60 % payé par l'État.",
      "Un tuteur privé : 45 $ de l'heure, pour un enfant.",
    ],
    say: "L'admissibilité de nos heures d'encadrement au relevé 24 n'est pas confirmée. Je le dis avant qu'on le demande. Dans l'app, c'est un menu déroulant : mettez-le à zéro, nos coûts ne changent pas.",
    source: "Le relevé 24 est produit par une garderie, un pensionnat, une colonie de vacances ou un camp de jour. Question à poser à Revenu Québec.",
  },

  {
    eyebrow: "Viabilité 3 sur 3",
    title: "On achète le local au lieu de le louer",
    lede: "Le loyer monte avec chaque instructeur. Une hypothèque, non.",
    table: {
      head: ["Coût du local", "16 enfants", "48", "96"],
      rows: [
        { label: "Tarif du marché", values: ["23 940 $", "71 820 $", "143 640 $"], tone: "bad" },
        { label: "Tarif partenaire, la moitié", values: ["11 970 $", "35 910 $", "71 820 $"] },
        { label: "Immeuble acheté, net", values: ["20 205 $", "20 205 $", "20 205 $"], tone: "good" },
      ],
    },
    bullets: [
      "On occupe le bâtiment de 9 h à 15 h en semaine. Personne d'autre n'en veut à ces heures-là.",
      "Le soir et la fin de semaine se louent : 30 h par semaine à 30 $, 44 semaines.",
      "Le local cesse d'être notre plus gros coût pour devenir notre deuxième revenu.",
    ],
    say: "Voici le calcul. Immeuble à 500 000, mise de fonds de 25 pour cent, 7 pour cent sur 25 ans : l'hypothèque coûte 31 805 par an. Taxes, assurance et entretien, 28 000. Total 59 805. Moins 39 600 de sous-location. Net 20 205, et ce chiffre ne bouge pas avec le nombre d'enfants.",
    source: "Bâtisse commerciale à Gatineau : 349 900 $ à 595 000 $ [Centris, LesPAC]. À Montréal, prévoir davantage : le modèle prend le prix en paramètre. Hypothèque commerciale : mise de fonds 20 à 30 %, taux 6 à 8 % fin 2025 [Desjardins, LendCity].",
  },

  {
    eyebrow: "Le résultat",
    title: "Louer nous tue. Acheter nous fait vivre.",
    table: {
      head: ["À 96 enfants", "Revenus", "Charges", "Résultat"],
      rows: [
        { label: "Louer au tarif du marché", values: ["475 200 $", "522 876 $", "−47 676 $"], tone: "bad" },
        { label: "Tarif partenaire", values: ["475 200 $", "447 465 $", "+27 735 $"] },
        { label: "Immeuble acheté", values: ["475 200 $", "393 269 $", "+81 931 $"], tone: "good" },
      ],
    },
    bullets: [
      "Revenus : 96 × 4 700 $, plus la conformité à 70 % d'adhésion.",
      "Charges : 6 instructeurs, 6 surveillants, le local, matériel, assurances, secrétaire, coordonnateur, et 5 % d'imprévus.",
      "Tarif partenaire : une mosquée, une église, un centre communautaire, une bibliothèque municipale, une école le soir.",
    ],
    say: "On n'était pas condamnés sans salle gratuite. On était condamnés si on louait pour toujours. Le tarif partenaire est une hypothèse à la moitié du tarif communautaire de 85 dollars le bloc de quatre heures.",
    source: "Modèle complet et vérifiable dans l'app, page /viability.",
  },

  {
    eyebrow: "Le démarrage",
    title: "Ça coûte 20 000 $ pour commencer, pas 200 000 $",
    table: {
      head: ["Mise de fonds", "Phase 1, en ligne ou chez un partenaire", "Phase 3, l'immeuble"],
      rows: [
        { label: "Avis juridique et constitution", values: ["5 000 $", "—"] },
        { label: "Matériel et activités", values: ["2 400 $", "—"] },
        { label: "Assurance et antécédents", values: ["2 700 $", "—"] },
        { label: "Fonds de roulement, 3 mois", values: ["10 000 $", "—"] },
        { label: "Mise de fonds sur l'immeuble", values: ["—", "125 000 $"] },
        { label: "Notaire, inspection, mutation", values: ["—", "25 000 $"] },
        { label: "Total", values: ["20 100 $", "150 000 $"] },
      ],
    },
    bullets: [
      "On peut commencer en ligne : zéro local, on prouve l'enseignement et le bilan.",
      "En ligne, on perd l'encadrement et donc le crédit d'impôt. C'est une étape, pas le produit.",
      "L'immeuble est une décision de phase 3, financée par l'exploitation et une campagne.",
    ],
    say: "La question qu'on va nous poser : où trouvez-vous 125 000. Trois réponses. Sept ans d'autofinancement, et je le dis, c'est long. Un financement d'immeuble occupé par son propriétaire demande parfois moins de 25 pour cent. Et une campagne auprès des familles et de l'organisme partenaire, qui coinvestit contre des heures d'usage garanties.",
  },

  {
    eyebrow: "Les risques",
    title: "Ce qui peut nous tuer, nommé par nous",
    table: {
      head: ["Risque", "Gravité", "Ce qu'on fait"],
      rows: [
        { label: "Le relevé 24 ne s'applique pas", values: ["Élevée", "Appel à Revenu Québec lundi. Le modèle tient sans, le marché rétrécit."], tone: "bad" },
        { label: "Le ministère y voit une école non permise", values: ["Fatale", "Contrats parent-instructeur, salles séparées, aucun bulletin. Avocat avant le 2e site."], tone: "bad" },
        { label: "Instructeurs requalifiés en salariés", values: ["Élevée", "+20 % de charges. Les seuils montent, le modèle tient si on est propriétaires."] },
        { label: "Sept ans pour la mise de fonds", values: ["Moyenne", "Campagne, coinvestissement, deuxième site en parallèle."] },
      ],
    },
    say: "Annoncer soi-même sa faiblesse fatale est ce qui fait passer un pitch de trois à cinq sur would you invest. Et sur la zone grise légale : aucune décision publiée ne dit ce que le ministère penserait de six instructeurs exemptés dans un même bâtiment. Je le nomme avant qu'on me le demande.",
  },

  {
    eyebrow: "La demande",
    title: "Lundi, on vend la conformité",
    bullets: [
      "Elle se vend partout au Québec, sans local et sans permis.",
      "Il nous faut un organisme avec des salles vides le mardi.",
      "Et vingt minutes avec un avocat.",
    ],
    say: "Fermer là-dessus. Une demande précise vaut mieux qu'une vision.",
  },
];
