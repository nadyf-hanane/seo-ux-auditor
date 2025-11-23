// Cette fonction analyse la partie SEO d'une page HTML
// Pour le moment : elle extrait seulement le <title>
export function analyzeSEO(page) {
    // page est l'objet cheerio (DOM parser)
    // On récupère le texte dans la balise <title>
    const title = page("title").text().trim();

    // On prépare un objet résultat simple
    return {
        title: title || null,         // Titre trouvé ou null
        titleLength: title.length || 0, // Longueur du titre
        hasTitle: title.length > 0    // Indique si un titre existe
    };
}
