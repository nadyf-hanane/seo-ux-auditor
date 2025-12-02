
import * as cheerio from "cheerio";

export function seoAnalyzer(html) {
  const $ = cheerio.load(html);

  return {
    title: $("title").text().trim(),
    description: $('meta[name="description"]').attr("content") || "",
    canonical: $('link[rel="canonical"]').attr("href") || "",
    ogImage: $('meta[property="og:image"]').attr("content") || "",
    headings: {
      h1: $("h1").map((i, el) => $(el).text().trim()).get()
    }
  };
}
