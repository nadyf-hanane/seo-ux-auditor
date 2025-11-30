/**
 * Calculer la profondeur d'une URL (nombre de segments /)
 * @param {string} url
 * @returns {number}
 */
export function getUrlDepth(url) {
    // Exemple : https://site.com/a/b/c → profondeur = 3
    const parts = url.split("/");

    // On retire "https:" + "" + "site.com"
    return parts.length - 3;
}

/**
 * Vérifier si une URL est lisible par un humain
 * @param {string} url
 * @returns {boolean}
 */
export function isHumanReadableUrl(url) {
    // Une URL lisible ne contient pas de paramètres complexes
    return !url.includes("?") && !url.includes("=") && !url.includes("%");
}

/**
 * Vérifier la longueur de l'URL
 * @param {string} url
 * @returns {number}
 */
export function getUrlLength(url) {
    return url.length;
}
