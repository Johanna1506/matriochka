# Matriochka Conseil

Site web statique pour Matriochka Conseil - Cabinet de conseil en structuration et pilotage de projets.

## Description

Site web single-page présentant les services de Matriochka Conseil, spécialisé dans l'accompagnement des dirigeants, fondateurs et solopreneurs pour structurer et piloter leurs projets clés jusqu'à des résultats concrets.

## Technologies

- **React 19** avec **TypeScript**
- **TailwindCSS** pour le styling
- **react-i18next** pour l'internationalisation (français)
- **Create React App** comme outil de build

## Installation

```bash
npm install
```

## Développement

Pour lancer le serveur de développement :

```bash
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Build de production

Pour créer un build de production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `build/`.

## Structure du projet

```
src/
├── components/
│   ├── layout/          # Composants de mise en page (WavyDivider)
│   ├── sections/        # Sections de la page
│   ├── ui/              # Composants UI réutilisables (Button, Logo, Icon)
│   └── types/           # Types TypeScript
├── locales/             # Fichiers de traduction (fr.json)
├── assets/              # Assets statiques
├── App.tsx              # Composant principal
└── index.tsx            # Point d'entrée
```

## Images

Les images doivent être placées dans `public/assets/images/` :
- `matryoshka.avif` - Photo des poupées Matriochka
- `elsa-plaud.jpeg` - Photo d'Elsa PLAUD, fondatrice

## Caractéristiques

- Design noir et blanc avec fond #121212
- Responsive design (mobile-first)
- Accessibilité (ARIA labels, navigation au clavier)
- Internationalisation prête (actuellement en français)
- Composants réutilisables et modulaires

## Scripts disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Crée un build de production
- `npm test` - Lance les tests
- `npm run eject` - Éjecte Create React App (irréversible)

## Notes

- Le projet utilise `legacy-peer-deps` pour résoudre les conflits de dépendances (voir `.npmrc`)
- TailwindCSS v3 est utilisé (compatible avec Create React App)
- Les images sont automatiquement converties en noir et blanc via le filtre CSS `grayscale`
