# SEO-UX-Auditor

SEO-UX-Auditor est un module Node.js qui permet d’analyser une page web et d’obtenir :

- ✔ un rapport SEO (title, description, canonical, OG tags…)
- ✔ une validation SEO (longueur recommandée, balises manquantes…)
- ✔ une analyse UX (balises alt, structure…)
- ✔ une analyse des métadonnées copyright
- ✔ une génération automatique des balises `<meta>` manquantes

Ce module a été développé par **Hanane Nadyf**.



##  Fonctionnalités

### 🔍 Analyse SEO
- Extraction des balises :  
  `<title>`, `<meta name="description">`, `canonical`, `og:title`, `og:image`…
- Détection des H1
- Extraction JSON-LD (à étendre)

---

###  Validation SEO
Basée sur les bonnes pratiques Google :

- Titre > 60 caractères  
- Description > 160 caractères  
- Absence de canonical  
- Absence d’OpenGraph  
- Doublons H1  
- Score SEO (0–100)

---

###  Génération dynamique des balises `<meta>`
- Génère automatiquement les balises SEO essentielles si elles sont absentes.
- Supporte :  
  title, description, canonical, og:title, og:description, og:image, twitter:card…



### Analyse UX
- Détection des balises `<img>` sans attribut `alt`
- Vérifications simples de structure (à étendre)



### Analyse Copyright
- Lecture des balises `<meta name="copyright">`  
- Lecture de `<meta name="author">`



## Structure du projet

src/
├─ analyzers/
│ ├─ seoAnalyzer.js
│ ├─ seoValidator.js
│ ├─ uxAnalyzer.js
│ ├─ metaGenerator.js
│ └─ copyrightAnalyzer.js
│
├─ utils/
│ ├─ fetchPage.js
│ ├─ parseHtml.js
│ └─ urlHelpers.js
│
├─ config.js
└─ index.js

## Usage Example

import { analyzePage } from "seo-ux-auditor";

const result = await analyzePage("https://example.com");

console.log(result);

## Output Example
{
  "source": "https://example.com",
  "seo": {
    "data": { ...extracted info },
    "report": { ...seo validation results },
    "generatedMetaTags": "<title>...</title> ..."
  },
  "ux": { ...ux checks },
  "copyright": { ...copyright info }
}
