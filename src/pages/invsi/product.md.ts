import type { APIRoute } from 'astro';
import { invsiLanguages, invsiSeoFor } from '../../data/invsi-seo';

export const GET: APIRoute = () => new Response(`# invsi — official product facts

Publisher: invisilab
Platforms: iPhone and iPad (iOS and iPadOS)
App Store: https://apps.apple.com/app/id6444667120
For current pricing, availability and OS requirements, consult the App Store listing.

${invsiLanguages.map(({ lang, label, path }) => {
  const product = invsiSeoFor(lang);
  return `## ${label}\n\nCanonical source: https://maxc.cc${path}\n\n${product.description}\n\n${product.features.map(feature => `- ${feature}`).join('\n')}\n\n${product.questions.map(([question, answer]) => `### ${question}\n\n${answer}`).join('\n\n')}`;
}).join('\n\n')}
`, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
