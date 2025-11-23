// Cette fonction analyse l'aspect UX de l'URL
export function analyzeUX(url) {
    // On calcule la longueur de l'URL
    const length = url.length;

    // On calcule la profondeur : nombre de "/"
    const depth = url.split("/").length - 3; 
    // Exemple : "https://site.com/a/b" → profondeur = 2

    // Une règle simple : URL lisible si elle ne contient pas '?', '=', ou '%'
    const isHumanReadable = !url.includes("?") && !url.includes("=") && !url.includes("%");

    return {
        urlLength: length,           // Longueur totale
        depth: depth,                // Profondeur
        isHumanReadable: isHumanReadable // Lisible ou pas
    };
}
