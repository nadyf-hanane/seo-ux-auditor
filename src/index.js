

import { fetchPage } from "./utils/fetchPage.js";
import { seoAnalyzer } from "./analyzers/seoAnalyzer.js";
import { seoValidator } from "./analyzers/seoValidator.js";
import { analyzeUX } from "./analyzers/uxAnalyzer.js";
import { copyrightAnalyzer } from "./analyzers/copyrightAnalyzer.js";
import { generateMetaTags } from "./analyzers/metaGenerator.js";
import { CONFIG } from "./config.js";

export async function analyzePage(source) {

  const html = await fetchPage(source);

  const seoData = seoAnalyzer(html);

  const seoReport = seoValidator(seoData, CONFIG);

  const metaTags = generateMetaTags(seoData, CONFIG);

  const uxReport = analyzeUX(html);

  const copyrightReport = copyrightAnalyzer(html);

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
