// Cette fonction analyse les meta-données liées au copyright
export function analyzeCopyright($) {
    // On cherche la balise meta name="copyright"
    const copyrightMeta = $('meta[name="copyright"]').attr("content");

    // On cherche l'auteur
    const authorMeta = $('meta[name="author"]').attr("content");

    // Résultat simple
    return {
        hasCopyrightMeta: Boolean(copyrightMeta), // True si trouvé
        copyright: copyrightMeta || null,         // Texte copyright
        hasAuthorMeta: Boolean(authorMeta),       // True si trouvé
        author: authorMeta || null                // Auteur trouvé
    };
}
