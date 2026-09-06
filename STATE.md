# État du build

MuslimHacks 2026, défi 04. Ce fichier dit où en est le code. Il se met à jour à chaque étape franchie.

## Comment démarrer

```
npm install
npx prisma generate --schema=prisma/schema.prisma
npx prisma db push --schema=prisma/schema.prisma
npx tsx prisma/seed.ts
npm run dev
```

`.env` doit contenir `DATABASE_URL="file:./dev.db"`. La base est un fichier local, aucun serveur, aucun réseau.

## Ce qui marche

| Item | Quoi | Route | État |
|---|---|---|---|
| **B1** | Squelette Next.js, Prisma sur SQLite, 6 tables | — | fait |
| **B2** | Cohorte plafonnée à 4, refus légal du 5e élève | `/cohorts` | fait |
| **B3** | Bloc en direct, présences, minuterie, journal d'événements | `/sessions`, `/sessions/[id]` | fait |
| **B4** | Transcription Groq Whisper | — | à faire |
| **B5** | Exercices liés aux compétences du PFEQ | — | à faire |
| **B6** | Générateur de bilan de progression | — | à faire |
| **B7** | Tableau de bord du parent | — | à faire |
| **B8** | Seed complet | — | partiel, 6 semaines d'historique en place |

## La règle qui gouverne le code

Rien de ce qui finit dans le bilan du ministère n'est saisi par un humain.

L'instructeur pose des gestes, chaque geste devient une ligne dans `SessionEvent`, et la durée comme les minutes de
présence sont **calculées** à partir de ces lignes. Une durée tapée dans un champ est une affirmation. Une durée
dérivée d'un journal append-only est une trace. C'est la seule raison pour laquelle un bilan produit ici vaut plus que
celui qu'un parent rédige de mémoire.

Corollaire : ne jamais ajouter d'endpoint qui accepte une durée, une présence ou une progression depuis le client.

## Le plafond de 4

`app/lib/cohort.ts` contient `LEGAL_COHORT_CAP = 4` et `CohortCapExceededError`.

La Loi sur l'enseignement privé (E-9.1) exempte de permis une personne physique qui enseigne **seule à moins de cinq
élèves à la fois**, pourvu que ces élèves remplissent autrement leur obligation de fréquentation, ce que fait
l'enseignement à la maison. Au-delà, il faut un permis du ministère déposé au plus tard le 1er septembre de l'année
précédente.

La vérification et l'insertion sont dans une même transaction, sinon deux inscriptions simultanées liraient toutes les
deux « 4 » et écriraient toutes les deux. Toute écriture d'un membre de cohorte doit passer par `addStudentToCohort`.

## Fichiers qui comptent

| Fichier | Rôle |
|---|---|
| `prisma/schema.prisma` | 6 tables, commentées avec la raison de chaque décision |
| `prisma/seed.ts` | 4 élèves inscrits, 1 en attente pour la démo, 12 blocs passés, 1 bloc à ouvrir |
| `app/lib/db.ts` | Client Prisma, mis en cache global pour survivre au rechargement de Next en dev |
| `app/lib/cohort.ts` | Le plafond légal et son erreur nommée |
| `app/lib/session.ts` | Ouverture, présence, fermeture, et le calcul des durées |
| `app/cohorts/` | La page qui refuse le 5e élève |
| `app/sessions/` | La liste des blocs et la page d'un bloc |

## Données de démonstration

- Cohorte « Mardi matin, 3e-4e année », instructeur Karim Haddad, superviseure Nadia Bouchard
- Élèves inscrits : Yacine Sy, Léa Lavoie, Noah Okonkwo, Camille Roy
- **Sara Farouk n'est dans aucune cohorte.** C'est elle qu'on essaie d'ajouter pendant la démo pour déclencher le refus
- 12 blocs terminés sur 6 semaines, une absence volontaire pour que les chiffres n'aient pas l'air inventés
- 1 bloc à l'état `SCHEDULED`, c'est celui qu'on ouvre en direct

## Décisions prises, et pourquoi

- **Zéro code réutilisé.** TuTools existait avant et n'a pas été copié. La rubrique demande « Did you build this from
  scratch during the hackathon? ».
- **Pas d'appel vidéo.** Les cohortes sont en personne dans une salle communautaire. Un appel vidéo contredirait le
  modèle d'affaires et coûterait cinq heures.
- **Pas d'authentification.** Aucun critère de la rubrique ne la récompense.
- **SQLite plutôt que Postgres.** La démo doit tourner sans réseau.
- **Prisma épinglé en v6.** La v7 déplace l'URL de la base vers `prisma.config.ts` et exige un adaptateur. Pas le
  moment.
- **UI volontairement nue.** Le fond est en place pour que l'apparence puisse changer vite à la fin sans toucher à la
  logique.

## Documents à côté

Dans le dossier parent `muslimHacks/` :

- `MUSLIMHACKS_2026.md` — le modèle d'affaires complet
- `RECHERCHE.md` — tous les faits, avec leur source ou leur étiquette d'hypothèse
- `BUILD_SPEC.html` — le plan de construction et le script de démo de 3 minutes
- `PITCH_PREP.html` — l'ordre du pitch et les 35 questions imposées par les juges
