import fs from "node:fs";
import path from "node:path";

export type LegacyDocument = {
  lang: string;
  htmlClass: string;
  headHtml: string;
  bodyHtml: string;
  bodyClass: string;
};

function extractMatch(source: string, pattern: RegExp, fallback = "") {
  const match = source.match(pattern);
  return match?.[1]?.trim() ?? fallback;
}

export function loadLegacyDocument(relativePath: string): LegacyDocument {
  const filePath = path.resolve(process.cwd(), relativePath);
  const html = fs.readFileSync(filePath, "utf-8");

  const lang = extractMatch(html, /<html[^>]*lang="([^"]+)"/i, "zh-CN");
  const htmlClass = extractMatch(html, /<html[^>]*class="([^"]*)"/i);
  const headHtml = extractMatch(html, /<head>([\s\S]*?)<\/head>/i);
  const bodyHtml = extractMatch(html, /<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyClass = extractMatch(html, /<body[^>]*class="([^"]*)"/i);

  return {
    lang,
    htmlClass,
    headHtml,
    bodyHtml,
    bodyClass
  };
}
