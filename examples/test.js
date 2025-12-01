import { analyzePage } from "../src/index.js";

const result = await analyzePage("https://mondesignweb.com/");

console.log(JSON.stringify(result, null, 2));

