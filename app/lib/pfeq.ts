/**
 * Les compétences du Programme de formation de l'école québécoise.
 *
 * Pourquoi ce fichier existe : le bilan de progression déposé au ministère doit
 * couvrir TOUTES les compétences d'une matière. L'AQED documente que les bilans
 * incomplets « se voyaient refusés ou devaient être modifiés ». Étiqueter chaque
 * exercice avec sa compétence est donc ce qui rend le document généré valide, et
 * ce qui permet de dire à un parent quelle compétence n'a encore aucune trace.
 *
 * Les cinq matières sont exactement celles qu'exige le projet d'apprentissage.
 *
 * Les libellés ci-dessous sont ceux du programme du primaire, saisis à la main
 * depuis les documents publics du ministère. À faire relire avant de les montrer
 * à un juge : ce sont des intitulés officiels, pas des inventions, mais ils
 * n'ont pas été vérifiés ligne par ligne contre la source.
 */

export type Competency = { code: string; label: string };
export type Subject = { key: string; label: string; competencies: Competency[] };

export const SUBJECTS: Subject[] = [
  {
    key: "francais",
    label: "Français, langue d'enseignement",
    competencies: [
      { code: "FR-C1", label: "Lire des textes variés" },
      { code: "FR-C2", label: "Écrire des textes variés" },
      { code: "FR-C3", label: "Communiquer oralement" },
      { code: "FR-C4", label: "Apprécier des œuvres littéraires" },
    ],
  },
  {
    key: "anglais",
    label: "Anglais, langue seconde",
    competencies: [
      { code: "EN-C1", label: "Interagir oralement en anglais" },
      { code: "EN-C2", label: "Réinvestir sa compréhension de textes" },
      { code: "EN-C3", label: "Écrire des textes" },
    ],
  },
  {
    key: "mathematiques",
    label: "Mathématique",
    competencies: [
      { code: "MA-C1", label: "Résoudre une situation-problème" },
      { code: "MA-C2", label: "Raisonner à l'aide de concepts et de processus" },
      { code: "MA-C3", label: "Communiquer à l'aide du langage mathématique" },
    ],
  },
  {
    key: "science",
    label: "Science et technologie",
    competencies: [
      { code: "ST-C1", label: "Proposer des explications ou des solutions" },
      { code: "ST-C2", label: "Mettre à profit les outils et procédés de la science" },
      { code: "ST-C3", label: "Communiquer à l'aide des langages de la science" },
    ],
  },
  {
    key: "univers-social",
    label: "Univers social",
    competencies: [
      { code: "US-C1", label: "Lire l'organisation d'une société sur son territoire" },
      { code: "US-C2", label: "Interpréter le changement dans une société" },
      { code: "US-C3", label: "S'ouvrir à la diversité des sociétés" },
    ],
  },
];

export const ALL_COMPETENCIES: Competency[] = SUBJECTS.flatMap((s) => s.competencies);

export function subjectOf(competencyCode: string): Subject | undefined {
  return SUBJECTS.find((s) => s.competencies.some((c) => c.code === competencyCode));
}

export function competencyLabel(code: string): string {
  return ALL_COMPETENCIES.find((c) => c.code === code)?.label ?? code;
}
