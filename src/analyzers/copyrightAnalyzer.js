
import * as cheerio from "cheerio";

export function copyrightAnalyzer(html) {
    
    const $ = cheerio.load(html);

    const copyrightMeta = $('meta[name="copyright"]').attr("content");

    const authorMeta = $('meta[name="author"]').attr("content");

    return {
        hasCopyrightMeta: Boolean(copyrightMeta),
        copyright: copyrightMeta || null,
        hasAuthorMeta: Boolean(authorMeta),
        author: authorMeta || null
    };
}
