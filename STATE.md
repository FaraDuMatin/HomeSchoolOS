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
| **B1** | Squelette Next.js, Prisma sur SQLite | — | fait |
| **B2** | Cohorte plafonnée à 4, refus légal du 5e élève | `/cohorts` | fait |
| **B3** | Bloc en direct, présences, minuterie, journal d'événements | `/sessions`, `/sessions/[id]` | fait |
| **B4** | Transcription Groq Whisper | — | **non fait, coupé** |
| **B5** | Exercices liés aux compétences du PFEQ | `/sessions/[id]` | fait |
| **B6** | Générateur de bilan de progression | `/report/[studentId]` | fait |
| **B7** | Tableau de bord du parent | `/parent` | fait |
| **B8** | Seed complet | — | fait, sauf ce que B4 aurait produit |
| **B9** | Vue qualité du superviseur | `/supervisor` | fait |
| **B10** | Calendrier des huit obligations | `/obligations` | fait |
| **B11** | Consentement et rétention, Loi 25 | `/privacy` | fait |
| **B12** | Viabilité, remplissage et points morts | `/viability` | fait |

**B4 est coupé volontairement.** Il exige internet et un micro, c'est la pièce la plus fragile en direct, et rien
d'autre n'en dépend. Les segments de transcription du seed sont des données de test : ils existent pour que le bouton
de suppression de `/privacy` ait quelque chose de réel à détruire. Ne jamais laisser entendre en démo qu'un micro les
a produits.

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
| `prisma/schema.prisma` | 9 tables, commentées avec la raison de chaque décision |
| `prisma/seed.ts` | 4 élèves inscrits, 1 en attente, 12 blocs passés, 1 bloc à ouvrir, 1 avis en retard, 36 segments |
| `app/lib/db.ts` | Client Prisma, mis en cache global pour survivre au rechargement de Next en dev |
| `app/lib/cohort.ts` | Le plafond légal et son erreur nommée |
| `app/lib/session.ts` | Ouverture, présence, fermeture, et le calcul des durées |
| `app/lib/pfeq.ts` | Les 17 compétences du programme, par matière |
| `app/lib/report.ts` | Le bilan de progression, lu depuis les traces |
| `app/lib/quality.ts` | Les indicateurs du superviseur, des comptes et non des scores |
| `app/lib/compliance.ts` | Les huit échéances, calculées et jamais stockées |
| `app/lib/privacy.ts` | Consentement, rétention, effacement réel, registre |
| `app/lib/economics.ts` | Le modèle financier, fonctions pures, réutilisées par le curseur côté client |

## Données de démonstration

- Cohorte « Mardi matin, 3e-4e année », instructeur Karim Haddad, superviseure Nadia Bouchard
- Élèves inscrits : Yacine Sy, Léa Lavoie, Noah Okonkwo, Camille Roy
- **Sara Farouk n'est dans aucune cohorte.** C'est elle qu'on essaie d'ajouter pendant la démo pour déclencher le refus
- 12 blocs terminés sur 6 semaines, une absence volontaire pour que les chiffres n'aient pas l'air inventés
- 1 bloc à l'état `SCHEDULED`, c'est celui qu'on ouvre en direct
- **Noah Okonkwo n'a pas d'avis de scolarisation.** Il est en retard sur `/obligations`. Même rôle que Sara : sans un
  retard visible, un calendrier tout vert ne prouve rien
- Yacine Sy a un consentement accordé et 18 segments, dont 6 au-delà de la rétention de 90 jours. Les deux boutons de
  `/privacy` ont donc du travail réel à faire

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

## Ce que le modèle financier a révélé

`app/lib/economics.ts` calcule le point mort par paliers d'embauche plutôt qu'en droite. Résultat : **il y a deux
points morts, pas un.** Le site cesse de perdre de l'argent à **60 enfants**, redevient déficitaire à **65** quand le
cinquième instructeur est embauché pour un enfant de plus, et ne replonge plus à partir de **70**.

Le chiffre de **63** qui figure dans `MUSLIMHACKS_2026.md` vient d'un calcul linéaire. Il est rentable, mais ce
n'est pas un plancher sûr. À corriger dans le modèle d'affaires et dans le pitch avant dimanche.

Au tarif du marché pour le local, **aucun remplissage ne rend le site viable**, pas même 96 sur 96. Ça confirme, en
calcul plutôt qu'en affirmation, que le local prêté est la condition d'existence du modèle.

## Documents à côté

Dans le dossier parent `muslimHacks/` :

- `MUSLIMHACKS_2026.md` — le modèle d'affaires complet
- `RECHERCHE.md` — tous les faits, avec leur source ou leur étiquette d'hypothèse
- `BUILD_SPEC.html` — le plan de construction et le script de démo de 3 minutes
- `PITCH_PREP.html` — l'ordre du pitch et les 35 questions imposées par les juges
