// Import correct de cheerio en ESM (version moderne)
import { load } from "cheerio";

/**
 * Transformer un texte HTML en un DOM manipulable par cheerio
 * @param {string} html - Le code HTML brut
 * @returns {function} - Une fonction similaire à jQuery (dom)
 */
export function parseHtml(html) {
    // "load" retourne une fonction permettant d'accéder aux éléments HTML
    return load(html);
}
