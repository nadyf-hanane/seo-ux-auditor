import { load } from "cheerio";

import { analyzeUX } from "../src/analyzers/uxAnalyzer.js";  
import {analyzeCopyright} from "../src/analyzers/copyrightAnalyzer.js"

/*
async function testOnlinePage() {
    const response = await fetch("https://mondesignweb.com/");
    const html = await response.text();

    const dom = load(html);

    console.log(analyzeSEO(dom));

    // -------------------
console.log("\n=== UX ===");
console.log(analyzeUX("https://mondesignweb.com/"));

// -------------------
console.log("\n=== COPYRIGHT ===");
console.log(analyzeCopyright(dom));
}

testOnlinePage();
*/

import { analyzeSEO } from "../src/index.js";

const result = await analyzeSEO("https://mondesignweb.com/");
console.log(result);
