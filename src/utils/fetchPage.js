
import fs from "fs/promises";
import fetch from "node-fetch";

export async function fetchPage(source) {

  if (source.startsWith("http")) {
    const response = await fetch(source);
    return await response.text();
  }

  return await fs.readFile(source, "utf8");
}
