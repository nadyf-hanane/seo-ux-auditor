// src/index.js
import { seoAnalyzer } from "./analyzers/seoAnalyzer.js";
import { seoValidator } from "./analyzers/seoValidator.js";
import { fetchPage } from "./utils/fetchPage.js";

export async function analyzeSEO(url) {
  const html = await fetchPage(url);
  const seoData = seoAnalyzer(html);
  const report = seoValidator(seoData);

  return {
    url,
    seoData,
    report
  };
}
