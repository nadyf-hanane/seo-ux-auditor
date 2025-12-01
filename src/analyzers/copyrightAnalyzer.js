// src/analyzers/copyrightAnalyzer.js
import * as cheerio from "cheerio";

export function copyrightAnalyzer(html) {
    // Charger le HTML
    const $ = cheerio.load(html);

    // Chercher <meta name="copyright">
    const copyrightMeta = $('meta[name="copyright"]').attr("content");

    // Chercher <meta name="author">
    const authorMeta = $('meta[name="author"]').attr("content");

    return {
        hasCopyrightMeta: Boolean(copyrightMeta),
        copyright: copyrightMeta || null,
        hasAuthorMeta: Boolean(authorMeta),
        author: authorMeta || null
    };
}
