# Portfolio Luxe — Nizar SNABI

Portfolio personnel d'ingénieur haut de gamme, moderne et raffiné pour **Nizar SNABI**, étudiant en 5ème année Informatique & Réseaux à l'EMSI Rabat, en recherche de stage PFE (début Février 2027).

---

## 💎 Direction Artistique & Caractéristiques
- **Thème Luxe** : Fond noir profond (`#0A0A0A`) et touches champagne doré (`#C9A96E`).
- **Typographies** : *Cormorant Garamond* (titres sérif de luxe) & *Manrope* (corps sans-sérif moderne).
- **Animations soignées** : Défilement fluide (Lenis), curseur doré interactif avec magnétisme, preloader monogramme « NS », timeline animée, grille de compétences avec jauges, carrousel infini de logos tech, fenêtres modales pour les projets, et pluie de confettis dorés au contact.
- **Bilingue Intégral** : Bascule instantanée Français / Anglais avec mémorisation.
- **Bascule Sombre / Clair** : Thème commutable avec persistance `localStorage`.
- **Données 100% centralisées** : Fichier unique `src/data.js` pour modifier facilement vos textes, liens GitHub / LinkedIn et informations.

---

## 🚀 Lancement en local

1. **Ouvrir le terminal dans le dossier du projet** :
   ```bash
   cd "c:\Users\hp\Desktop\portfolio 2"
   ```

2. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
   Le site s'ouvrira sur `http://localhost:3000` avec rechargement à chaud (Hot Module Replacement).

3. **Compiler pour la production** :
   ```bash
   npm run build
   ```

4. **Prévisualiser la version de production en local** :
   ```bash
   npm run preview
   ```

---

## 🌐 Déploiement gratuit

### Option 1 : Déploiement sur GitHub Pages

Le workflow GitHub Actions de ce dépôt compile automatiquement le site et le publie sur GitHub Pages à chaque mise à jour de la branche `main`.

1. Créez un dépôt GitHub public et poussez le projet sur sa branche `main`.
2. Dans le dépôt, ouvrez **Settings > Pages** et choisissez **GitHub Actions** comme source de déploiement.
3. Attendez la fin du workflow **Deploy to GitHub Pages** dans l’onglet **Actions**. L’URL du site apparaîtra dans le déploiement et dans **Settings > Pages**.

### Option 2 : Déploiement sur Vercel (Recommandé en 2 minutes)

1. Créez un compte gratuit sur [Vercel](https://vercel.com).
2. Installez le CLI Vercel ou connectez votre compte GitHub :
   ```bash
   npx vercel
   ```
   - Confirmez les options par défaut (`Build Command: npm run build`, `Output Directory: dist`).
3. Ou via l'interface web de Vercel :
   - Poussez votre projet sur GitHub :
     ```bash
     git init
     git add .
     git commit -m "Initial commit - Portfolio Nizar Snabi"
     git branch -M main
     git remote add origin https://github.com/nizarsn18/portfolio.git
     git push -u origin main
     ```
   - Sur Vercel, cliquez sur **"Add New Project"** > importez votre dépôt GitHub > cliquez sur **"Deploy"**.

---

### Option 3 : Déploiement sur Netlify

1. Créez un compte gratuit sur [Netlify](https://www.netlify.com).
2. Vous pouvez soit :
   - Glisser-déposer directement le dossier `dist` sur le tableau de bord Netlify Drop.
   - Ou lier votre dépôt GitHub (Netlify détectera automatiquement la configuration présente dans `netlify.toml`).
