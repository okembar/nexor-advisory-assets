# ══════════════════════════════════════════════════════════════════════════════
# PROMPT ULTIME — NEXOR ADVISORY WEBSITE
# À coller directement dans Cowork
# Version 1.0 — Mai 2026
# ══════════════════════════════════════════════════════════════════════════════

---

## 🎯 MISSION PRINCIPALE

Tu es un expert en design web premium et développement frontend de niveau world-class.
Ta mission est de créer le site web complet de NEXOR Advisory (nexoradvisory.fr),
un cabinet de conseil IT parisien fondé par Romaric Okemba.

Le site doit être **exceptionnel** — digne d'une agence de design internationale.
Référence visuelle : la précision de Linear.app + l'élégance de Stripe + la profondeur de Vercel.
Mais avec l'identité unique Aurora de NEXOR Advisory.

---

## 📂 FICHIERS DE RÉFÉRENCE (sur le Mac de l'utilisateur)

Lis ces fichiers avant de commencer pour t'imprégner de l'identité NEXOR :

```
/Users/okembsro/NEXOR_ADVISORY/01_BRAND_IDENTITY/Charte_Graphique/NEXOR_Aurora_Variables.css
/Users/okembsro/NEXOR_ADVISORY/01_BRAND_IDENTITY/Charte_Graphique/NEXOR_Aurora_Brand_Guide.html
/Users/okembsro/NEXOR_ADVISORY/01_BRAND_IDENTITY/Logos/SVG/01_NEXOR_Mark_Aurora.svg
/Users/okembsro/NEXOR_ADVISORY/01_BRAND_IDENTITY/Logos/SVG/05_NEXOR_Lockup_Horizontal.svg
/Users/okembsro/NEXOR_ADVISORY/02_COMMERCIAL/
/Users/okembsro/NEXOR_ADVISORY/03_NETFORGE_AI/Product/Specs/
```

---

## 🏢 CONTEXTE COMPLET NEXOR ADVISORY

### Identité
- **Nom légal** : NEXOR Advisory SASU
- **Fondateur** : Romaric Okemba, Fondateur & Consultant Senior
- **Siège** : 120 boulevard Vincent Auriol, 75013 Paris
- **Tagline officielle** : Conseil · Infrastructure · Intelligence
- **Sous-descripteur** : Conseil IT · Automatisation IA · Infrastructure Réseau · Transformation Digitale

### Contacts (à intégrer dans le site)
- **Email public** : contact@nexoradvisory.fr
- **Email perso** : r.okemba@nexoradvisory.fr
- **Téléphone** : 07 49 47 01 17
- **Site** : nexoradvisory.fr
- **LinkedIn** : Afficher "Mon profil LinkedIn" cliquable → https://www.linkedin.com/in/romaric-okemba-27833230/
  ⚠️ Ne jamais afficher l'URL complète LinkedIn. Toujours masquer derrière un texte cliquable.

### Services (4 piliers)
1. **Conseil IT & Architecture Réseau** — Audit, conception, déploiement. Multi-constructeurs : Cisco, Juniper, Aruba/HPE, Fortinet, Palo Alto, Huawei, Nokia. IETF/IEEE.
2. **Automatisation IA & NoCode** — Workflows intelligents, agents IA, intégration SI. Technologies : n8n, Claude API, Make, Bubble.io. (Ne pas mentionner ces outils dans le banner LinkedIn, mais les mettre sur la page services)
3. **NetForge AI** — Plateforme d'intelligence réseau multi-constructeurs. **ATTENTION : c'est une initiative produit EN DÉVELOPPEMENT**. Ne jamais la présenter comme un produit finalisé. 7 modules en cours.
4. **Transformation Digitale & Formation** — Accompagnement stratégique, coaching, transfert de compétences.

---

## 🎨 PALETTE AURORA (IMMUABLE — NE JAMAIS DÉVIER)

```css
/* Backgrounds (du plus sombre au plus clair) */
--void:      #060411;   /* fond de page principal */
--deep:      #0D0820;   /* container icon, hero dark */
--dark:      #130926;   /* cards, surfaces */
--mid:       #1E0F3F;   /* sections alternées */
--dusk:      #2D1657;   /* bordures */
--twilight:  #3D2070;   /* bordures actives */

/* Couleurs signature */
--violet-d:  #5B21B6;   /* gradient start / deep violet */
--violet:    #7C3AED;   /* PRIMARY — CTAs, IA, accent principal */
--flame:     #F97316;   /* SECONDARY — énergie, urgence, CTAs secondaires */
--flame-d:   #C2410C;   /* flame foncé */
--solar:     #FCD34D;   /* nexus diamond / or / highlights premium */
--cyan:      #22D3EE;   /* ACCENT — réseau, data, tech */

/* Support */
--emerald:   #10B981;   /* succès, positif */
--alert:     #EF4444;   /* erreur, critique */
--lavender:  #A78BFA;   /* texte secondaire sur fond sombre */
--ivory:     #FAFAF9;   /* fond document, version light */

/* Texte (hiérarchie) */
--text-1:    #FFFFFF;   /* titres, emphase */
--text-2:    #C4B5FD;   /* sous-titres */
--text-3:    #A78BFA;   /* body text */
--text-4:    #7C6FAF;   /* labels, secondary */
--text-5:    #4A3A6A;   /* très discret, métadonnées */

/* Gradients */
--grad-aurora: linear-gradient(135deg, #5B21B6 0%, #7C3AED 38%, #F97316 100%);
--grad-band: linear-gradient(90deg, #5B21B6, #7C3AED, #F97316, #22D3EE, #FCD34D);
/* La band Aurora = 3px de hauteur, présente sur chaque page en haut et parfois en bas */
```

---

## 🔤 TYPOGRAPHIE (IMMUABLE)

```
Police principale : Montserrat (Google Fonts — charger toutes les graisses)
URL Google Fonts : https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap

Hiérarchie :
- H1 (héros)      : Montserrat 900 (Black) — 64–80px — letter-spacing -2px
- H1 (sections)   : Montserrat 900 — 44–56px — letter-spacing -1px
- H2              : Montserrat 800 — 28–36px
- H3              : Montserrat 700 — 20–24px
- Body            : Montserrat 400 — 14–15px — line-height 1.85
- Labels/Eyebrow  : Montserrat 700 — 9–10px — letter-spacing 4px — ALL CAPS
- Tagline ADVISORY: Montserrat 200 — letter-spacing 18–20px

Effets typographiques à utiliser :
- Texte en gradient Aurora : background: var(--grad-aurora); -webkit-background-clip: text; -webkit-text-fill-color: transparent
- Eyebrow (petits labels avant les titres) : couleur violet, lettre-espacement large, avec un petit trait violet à gauche
```

---

## 🖼️ LE LOGO NEXOR (SVG — CODE EXACT)

```svg
<!-- Le N mark — viewBox 0 0 80 100 -->
<!-- Barre gauche x:0→14 | Barre droite x:66→80 | Retrait diagonale: 22px -->
<svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-nexor" x1="0" y1="0" x2="80" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#5B21B6"/>
      <stop offset="38%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#F97316"/>
    </linearGradient>
  </defs>
  <!-- Le N -->
  <path d="M0,0 L0,100 L14,100 L14,22 L66,100 L80,100 L80,0 L66,0 L66,78 L14,0 Z"
        fill="url(#grad-nexor)"/>
  <!-- Le Nexus Diamond (Solar Gold) — cœur du logo -->
  <polygon points="40,44 47,51 40,58 33,51" fill="#FCD34D"/>
</svg>

Wordmark NEXOR : Montserrat 900, letter-spacing 8–14px, couleur #FFFFFF
Wordmark ADVISORY : Montserrat 200, letter-spacing 16–20px, couleur #A78BFA
```

---

## 📐 DIRECTION DESIGN — IMPERATIVES

### Philosophie visuelle
**MOT CLÉ : Premium Spatial Dark**
- Généreux espace négatif — respire, ne pas surcharger
- Profondeur par couches : fond → surface → accent → highlight
- Chaque section doit avoir une identité visuelle propre
- Asymétrie contrôlée — pas de layouts symétriques parfaits, c'est monotone
- Le mouvement crée la vie — animation sur tout ce qui peut bouger

### Effets visuels obligatoires
```
1. GLASSMORPHISM sur les cards :
   background: rgba(13,8,32,0.6);
   backdrop-filter: blur(20px);
   -webkit-backdrop-filter: blur(20px);
   border: 1px solid rgba(124,58,237,0.2);
   border-radius: 20px;

2. GLOW sur les éléments importants :
   box-shadow: 0 0 40px rgba(124,58,237,0.25), 0 20px 60px rgba(0,0,0,0.4);

3. GRADIENT MESH background (hero) :
   background: 
     radial-gradient(ellipse 80% 70% at 20% 60%, rgba(124,58,237,0.15) 0%, transparent 55%),
     radial-gradient(ellipse 60% 50% at 80% 30%, rgba(249,115,22,0.08) 0%, transparent 55%),
     radial-gradient(ellipse 50% 40% at 50% 80%, rgba(34,211,238,0.05) 0%, transparent 50%),
     #060411;

4. ANIMATIONS CSS (pas de JavaScript lourd) :
   @keyframes fadeInUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:none; } }
   @keyframes nexusPulse { 0%,100% { filter:drop-shadow(0 0 8px rgba(252,211,77,0.7)); } 50% { filter:drop-shadow(0 0 24px rgba(252,211,77,1)); } }
   @keyframes gradFloat { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-16px); } }
   @keyframes bandPulse { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }

5. HOVER sur les cards :
   transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), 
               box-shadow 0.3s ease, border-color 0.3s ease;
   .card:hover { transform: translateY(-6px); border-color: rgba(124,58,237,0.4); }

6. CURSOR personnalisé (optionnel mais premium) :
   cursor: none; + un curseur custom violet

7. SCROLL REVEAL avec Intersection Observer :
   Chaque section et carte entre avec une animation douce
```

### Navigation
```
- Position: fixed, top: 0
- Hauteur: 72px
- Fond: rgba(6,4,17,0.85) + backdrop-filter: blur(24px)
- Bordure bottom: 1px solid rgba(124,58,237,0.15)
- Logo: N mark (20px) + NEXOR + ADVISORY
- Liens: Montserrat 600, 10px, letter-spacing 2px, UPPERCASE
- CTA: bouton violet avec glow
- Au scroll: fond devient rgba(6,4,17,0.96), bordure plus visible
- Mobile: menu hamburger avec overlay dark
```

### Footer
```
- Fond: #030209 (encore plus sombre)
- 4 colonnes: Brand | Navigation | Services | Contact
- La band Aurora en bas (3px)
- Mentions légales: "© 2026 NEXOR Advisory SASU — Capital 1 000€ — 120 bvd Vincent Auriol, 75013 Paris"
```

---

## 📄 STRUCTURE DES 5 PAGES

### PAGE 1 — index.html (Accueil)

**Hero (full-screen, min-height: 100vh)**
- Background : gradient mesh Aurora (violet + flame + cyan)
- Gauche : Contenu texte
  - Badge: "Cabinet de conseil IT fondé à Paris" (avec point vert pulsant)
  - H1 énorme : "L'expertise qui transforme votre SI" (avec "transforme" en gradient Aurora)
  - Sous-titre : "Conseil IT, automatisation IA et infrastructure réseau multi-constructeurs. NEXOR Advisory accompagne les entreprises dans leur transformation numérique."
  - 2 boutons : "Parler à un expert" (violet) + "Découvrir nos services" (outline)
  - Stats : 10+ ans | Multi-constructeurs | IA-native | Paris
- Droite : Le N mark animé (gradFloat + nexusPulse sur le diamond) avec aura violet en arrière-plan

**Bande de logos/stats** (fond dark, 3 stats animées avec compteur JS)

**Section Services** (4 cards glassmorphism, grille 2×2)
- Chaque card : icône SVG + pill badge + titre + description courte + lien "En savoir plus →"
- Hover : lift + border violet glow

**Section "Pourquoi NEXOR"** (3 cards avec numéros 01/02/03 en grand)
- 01 : Expertise technique profonde (Cisco, réseau, multi-constructeurs)
- 02 : IA & Automatisation natives
- 03 : Indépendant des constructeurs

**Section Testimonial/Confiance** (si pas de vrais témoignages, une quote du fondateur)

**CTA Final** (fond gradient mesh, titre, sous-titre, bouton)

---

### PAGE 2 — services.html (Services)

**Hero simple** : titre + sous-titre + eyebrow label

**4 sections de service détaillé** (alterner gauche/droite) :

**Service 1 — Conseil IT & Architecture Réseau** (violet)
- Droite : liste des livrables (HLD, LLD, audit sécurité, plan de déploiement)
- Gauche : description + features grid + liste constructeurs
- Constructeurs : Cisco IOS-XE, CatC, Juniper Junos, Aruba/HPE AOS, Fortinet FortiOS, Palo Alto PAN-OS, Huawei VRP, IETF/IEEE

**Service 2 — Automatisation IA & NoCode** (flame)
- Gauche : exemples de cas d'usage concrets (4 exemples dans des cards)
- Droite : description + features

**Service 3 — Transformation Digitale** (cyan)
- Droite : timeline 4 étapes (Diagnostic → Roadmap → Exécution → Autonomisation)
- Gauche : description + features

**Service 4 — Formation & Coaching** (solar)
- Gauche : formats (4 cards: Individuel / Groupe / Intra / En ligne)
- Droite : description + features

**CTA page** : "Quel est votre défi ? Discutons-en."

---

### PAGE 3 — netforge.html (NetForge AI)

**Hero NetForge** (fond avec nuances cyan) :
- Badge ORANGE : "Initiative produit en développement"
- Logo NetForge : N mark + "NET**FORGE**" (FORGE en violet) + "AI PLATFORM · by NEXOR Advisory"
- H1 : "Plateforme d'intelligence réseau multi-constructeurs"
- Note d'alerte orange : contexte "en développement" — honnêteté totale

**Section Vision** (3 cards : Gagner du temps / Multi-constructeurs natif / IA spécialisée réseau)

**Section 7 Modules** (grille 3×3, 7 modules + description + badge de statut)
- Module 01 : Network Designer → "En développement"
- Module 02 : IP & VLAN Planner → "En développement"
- Module 03 : Config Generator → "En développement"
- Module 04 : WiFi Designer → "En développement"
- Module 05 : Log Analyzer & Troubleshooter → "Bêta interne" (PRIORITAIRE — mis en avant)
- Module 06 : Security Auditor → "En développement"
- Module 07 : Doc Generator → "Planifié"

**Section Constructeurs** (badges de constructeurs + note sur IETF/IEEE)

**CTA** : "Être informé du lancement" → formulaire email simple

---

### PAGE 4 — a-propos.html (À propos)

**Hero** : titre + sous-titre

**Layout 2 colonnes** :
- Gauche (sticky) : Carte profil Romaric
  - Avatar RO (initiales sur fond gradient)
  - Nom : Romaric Okemba
  - Titre : Fondateur & Consultant Senior
  - Barres de compétences (avec animation)
  - Coordonnées
  - LinkedIn masqué

- Droite (scrollable) :
  - "Une carrière construite sur le terrain" (10+ ans, Cisco, WiFi, IA)
  - "Pourquoi NEXOR Advisory" (la vision)
  - Expertise détaillée (6 cards : Cisco CatC / WiFi Enterprise / IA / NoCode / Cybersécurité / Lab)
  - Quote du fondateur en block stylisé

**Section Vision** (fond mid, grande quote avec border violet gauche)

---

### PAGE 5 — contact.html (Contact)

**Hero** : "Parlons de votre projet" + sous-titre

**Layout 2 colonnes** :
- Gauche (sticky) : Carte informations
  - Email général : contact@nexoradvisory.fr
  - Téléphone : 07 49 47 01 17
  - Site : nexoradvisory.fr
  - LinkedIn : "Mon profil LinkedIn ↗" (URL masquée)
  - Adresse : 120 bvd Vincent Auriol, 75013 Paris
  - Badge vert : "Réponse sous 24h ouvrées"

- Droite : Formulaire premium
  - Prénom + Nom (2 colonnes)
  - Email
  - Société
  - Sujet (select : Audit réseau / Architecture / Automatisation IA / NetForge AI / Transformation Digitale / Formation / Autre)
  - Message (textarea)
  - Bouton "Envoyer" (violet, pleine largeur)

**Backend formulaire** : Utiliser Formspree.io
```
<form action="https://formspree.io/f/PLACEHOLDER_FORMSPREE_ID" method="POST">
```
Laisser PLACEHOLDER_FORMSPREE_ID que l'utilisateur remplacera.
Ajouter aussi un lien mailto en fallback.

---

## ⚙️ SPÉCIFICATIONS TECHNIQUES

### Structure de fichiers à créer :
```
/Users/okembsro/NEXOR_ADVISORY/08_WEBSITE/nexoradvisory.fr/Pages/
├── index.html
├── services.html
├── netforge.html
├── a-propos.html
├── contact.html
├── css/
│   ├── aurora.css          ← variables + reset + composants partagés
│   └── [page].css          ← styles spécifiques à chaque page (optionnel)
└── js/
    └── main.js             ← navigation mobile, scroll reveal, animations, formulaire
```

### CSS Architecture :
```css
/* 1. Variables CSS globales (aurora.css) */
/* 2. Reset + Base */
/* 3. Navigation (partagée) */
/* 4. Footer (partagé) */
/* 5. Composants : .card, .btn, .pill, .section-header, etc. */
/* 6. Animations : @keyframes */
/* 7. Utilitaires : .reveal, .anim-1, .anim-2, etc. */
/* 8. Responsive : breakpoints 1024px, 768px, 480px */
```

### JavaScript (main.js) :
```javascript
// 1. Navigation : sticky + mobile hamburger + smooth scroll
// 2. Intersection Observer : scroll reveal pour toutes les .reveal
// 3. Compteurs animés : pour les stats numériques
// 4. Formulaire contact : async Formspree + états loading/success/error
// 5. Cursor personnalisé (si implémenté)
```

### SEO & Meta tags (dans chaque page) :
```html
<meta name="description" content="[description spécifique à la page]">
<meta property="og:title" content="[titre] — NEXOR Advisory">
<meta property="og:description" content="[description]">
<meta property="og:type" content="website">
<link rel="canonical" href="https://nexoradvisory.fr/[page]">
```

---

## 🏆 CRITÈRES DE QUALITÉ — DÉFINITION DU "TERMINÉ"

Le site est terminé et acceptable SEULEMENT si :

✅ **Design**
- Chaque page ressemble à un site d'agence de design premium, pas à un template générique
- La palette Aurora est respectée à 100% — aucune couleur non officielle
- Le glassmorphism est appliqué sur les cards
- Les animations de révélation au scroll fonctionnent
- Le logo N mark (avec le diamond Solar pulsant) est présent dans la navigation et le footer
- La band Aurora (3px gradient) est présente en haut et/ou en bas de chaque section importante

✅ **Contenu**
- Toutes les informations de contact sont correctes (voir section CONTEXTE)
- NetForge AI est présenté comme "en développement" — jamais comme produit fini
- Le lien LinkedIn n'affiche jamais l'URL complète
- Les 7 modules NetForge sont listés avec leurs statuts
- Les 4 services sont décrits avec précision

✅ **Technique**
- Le site est 100% responsive (mobile, tablette, desktop)
- La navigation est fixe et fonctionnelle sur mobile
- Le formulaire de contact envoie (Formspree ou mailto: fallback)
- Les pages se chargent en moins de 2 secondes (pas de ressources lourdes)
- Toutes les pages sont interconnectées via la navigation

✅ **Performance**
- Pas de dépendances JavaScript externes (ni jQuery, ni Bootstrap)
- CSS vanilla avec variables
- Images : SVG privilégiés, JPG/PNG optimisés
- Google Fonts : chargement asynchrone

---

## 📝 INSTRUCTIONS D'EXÉCUTION POUR COWORK

1. **Lis d'abord** les fichiers de référence listés au début
2. **Crée d'abord** `css/aurora.css` avec toutes les variables et composants partagés
3. **Crée ensuite** `js/main.js` avec toutes les fonctions utilitaires
4. **Crée les pages** dans cet ordre : index.html → services.html → netforge.html → a-propos.html → contact.html
5. **Vérifie** que la navigation fonctionne entre toutes les pages
6. **Sauvegarde tout** dans `/Users/okembsro/NEXOR_ADVISORY/08_WEBSITE/nexoradvisory.fr/Pages/`
7. **Ouvre** `index.html` dans Chrome pour vérifier le rendu final

---

## 🚀 DÉPLOIEMENT HOSTINGER (instructions pour après la création)

Une fois le site créé localement, l'uploader sur Hostinger :
1. Ouvrir hpanel.hostinger.com
2. Hosting → nexoradvisory.fr → File Manager
3. Naviguer vers `public_html/`
4. Uploader tous les fichiers (index.html, services.html, netforge.html, a-propos.html, contact.html, css/, js/)
5. Vérifier que index.html est à la racine de public_html

Pour le formulaire Formspree :
1. Créer un compte sur formspree.io
2. New Form → email : contact@nexoradvisory.fr
3. Copier l'ID (ex: xpwzgkjb)
4. Remplacer PLACEHOLDER_FORMSPREE_ID dans contact.html
5. Réuploader contact.html

---

*Prompt créé par Claude (Anthropic) — Mai 2026 — Pour usage exclusif NEXOR Advisory*
