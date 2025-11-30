// src/analyzers/seoValidator.js

/**
 * Reçoit les données extraites par seoAnalyzer
 * Et applique les règles SEO
 */
export function seoValidator(data) {
  const report = {
    errors: [],
    warnings: [],
    score: 100
  };

  // ✔ Vérifier le title
  if (!data.title) {
    report.errors.push("Missing <title> tag.");
    report.score -= 20;
  } else if (data.title.length > 60) {
    report.warnings.push("Title is too long (> 60 characters).");
    report.score -= 5;
  }

  // ✔ Vérifier la meta description
  if (!data.description) {
    report.errors.push("Missing meta description.");
    report.score -= 20;
  } else if (data.description.length > 160) {
    report.warnings.push("Meta description is too long (> 160 characters).");
    report.score -= 5;
  }

  // ✔ Vérifier canonical
  if (!data.canonical) {
    report.warnings.push("Missing canonical URL.");
    report.score -= 5;
  }

  // ✔ Vérifier OG:image
  if (!data.ogImage) {
    report.warnings.push("Missing og:image.");
    report.score -= 5;
  }

  // ✔ Vérifier doublons H1
  if (data.headings.h1.length > 1) {
    report.warnings.push("Multiple <h1> detected.");
    report.score -= 10;
  }

  return report;
}
