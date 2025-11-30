// src/utils/fetchPage.js
import fs from "fs/promises";
import fetch from "node-fetch";

/**
 * Récupère une page soit en ligne (URL), soit en local (chemin fichier)
 */
export async function fetchPage(source) {
  // Si c’est une URL
  if (source.startsWith("http")) {
    const response = await fetch(source);
    return await response.text();
  }

  // Sinon : fichier local
  return await fs.readFile(source, "utf8");
}
