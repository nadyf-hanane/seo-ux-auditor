// src/index.js

import { fetchPage } from "./utils/fetchPage.js";
import { seoAnalyzer } from "./analyzers/seoAnalyzer.js";
import { seoValidator } from "./analyzers/seoValidator.js";
import { analyzeUX } from "./analyzers/uxAnalyzer.js";
import { copyrightAnalyzer } from "./analyzers/copyrightAnalyzer.js";
import { generateMetaTags } from "./analyzers/metaGenerator.js";
import { CONFIG } from "./config.js";

/**
 * Analyse complète SEO + UX + Copyright d'une page web
 * @param {string} source - URL ou chemin fichier local
 */
export async function analyzePage(source) {
  // 1. Charger le HTML
  const html = await fetchPage(source);

  // 2. Extraire données SEO
  const seoData = seoAnalyzer(html);

  // 3. Appliquer règles SEO
  const seoReport = seoValidator(seoData, CONFIG);

  // 4. Générer meta tags automatiques
  const metaTags = generateMetaTags(seoData, CONFIG);

  // 5. Analyse UX
  const uxReport = analyzeUX(html);

  // 6. Analyse Copyright
  const copyrightReport = copyrightAnalyzer(html);



  // 7. Retourner un rapport complet
  return {
    source,
    seo: {
      data: seoData,
      report: seoReport,
      generatedMetaTags: metaTags,
    },
    ux: uxReport,
    copyright: copyrightReport
  };
}
