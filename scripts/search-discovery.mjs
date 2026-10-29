import { readFile, readdir, writeFile } from 'node:fs/promises';

// Derive the sitemap from built, indexable HTML rather than a second list of URLs.
export default function searchDiscovery() {
  return {
    name: 'search-discovery',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const files = await readdir(dir, { recursive: true });
        const urls = new Map();
        for (const file of files.filter(file => file.endsWith('.html'))) {
          const html = await readFile(new URL(file, dir), 'utf8');
          if (/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html)) continue;
          const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
          // Repeat each page's hreflang group in the sitemap so search engines see every language version.
          const alternates = [...html.matchAll(/<link\b[^>]*rel="alternate"[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"/gi)].map(([, lang, href]) => [lang, href]);
          if (canonical) urls.set(canonical, alternates);
        }
        const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
        const entries = [...urls].sort(([a], [b]) => a.localeCompare(b)).map(([url, alternates]) => [
          `  <url>`, `    <loc>${escape(url)}</loc>`,
          ...alternates.map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${escape(href)}"/>`),
          `  </url>`,
        ].join('\n'));
        await writeFile(new URL('sitemap.xml', dir), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`);
      },
    },
  };
}
