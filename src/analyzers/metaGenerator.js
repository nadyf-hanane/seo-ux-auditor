// src/analyzers/metaGenerator.js

/**
 * Génère automatiquement les balises <meta> SEO manquantes ou incorrectes
 * à partir des données extraites par seoAnalyzer.
 */

export function generateMetaTags(data) {
  const meta = [];

  // Title
  if (!data.title || data.title.trim() === "") {
    meta.push(`<title>Default SEO Title</title>`);
  } else {
    meta.push(`<title>${data.title}</title>`);
  }

  // Meta Description
  if (!data.description || data.description.trim() === "") {
    meta.push(
      `<meta name="description" content="Default meta description for SEO optimization." />`
    );
  } else {
    meta.push(
      `<meta name="description" content="${data.description}" />`
    );
  }

  // Canonical
  if (!data.canonical || data.canonical.trim() === "") {
    meta.push(
      `<link rel="canonical" href="https://example.com/" />`
    );
  } else {
    meta.push(
      `<link rel="canonical" href="${data.canonical}" />`
    );
  }

  // OpenGraph / Social preview
  meta.push(
    `<meta property="og:title" content="${data.title || "Default OG Title"}" />`
  );

  meta.push(
    `<meta property="og:description" content="${data.description || "Default OG Description"}" />`
  );

  meta.push(
    `<meta property="og:image" content="${data.ogImage || "https://example.com/default.jpg"}" />`
  );

  // Twitter Card
  meta.push(`<meta name="twitter:card" content="summary_large_image" />`);
  meta.push(
    `<meta name="twitter:title" content="${data.title || "Default Twitter Title"}" />`
  );
  meta.push(
    `<meta name="twitter:description" content="${data.description || "Default Twitter Description"}" />`
  );

  return meta.join("\n");
}
