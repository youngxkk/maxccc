import type { APIRoute } from 'astro';
import { localizedProducts } from '../i18n/product-seo';
import { locales } from '../i18n/site';

// Supplemental discovery index. Canonical HTML remains the source of truth.
const english = localizedProducts('en');
export const GET: APIRoute = () => new Response(`# invisilab

> Independent, ad-free apps for Mac, iPhone and iPad by invisilab. Official product pages and App Store listings, available in ${locales.length} languages.

## Products
${Object.entries(english).map(([slug, product]) => `- [${product.name}](https://maxc.cc/${slug}/): ${product.description} App Store: https://apps.apple.com/app/id${product.store}`).join('\n')}

## invsi official sources
- [Product facts in Markdown, all languages](https://maxc.cc/invsi/product.md)
- [Official App Store listing](https://apps.apple.com/app/id6444667120): Current pricing, availability and system requirements.

## Product directory and guides
- [All apps](https://maxc.cc/apps/)
- [Usage guides](https://maxc.cc/guides/)
- [Free browser tools](https://maxc.cc/tools/multitools/): password generator, unit converter, word counter, JSON formatter, CSS gradients, image background removal and PDF to text. Files stay in the browser.

## Localized product pages
${locales.filter(locale => locale.lang !== 'en').map(({ lang, label, prefix }) => {
  const products = localizedProducts(lang);
  return `### ${label} (${lang})\n${Object.entries(products).map(([slug, product]) => `- [${product.name}](https://maxc.cc${prefix}/${slug}/): ${product.description}`).join('\n')}`;
}).join('\n\n')}

## Site information
- [Privacy policy](https://maxc.cc/privacy-policy/)
- [Terms of use](https://maxc.cc/terms-of-use/)
- [Sitemap with language alternates](https://maxc.cc/sitemap.xml)
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
