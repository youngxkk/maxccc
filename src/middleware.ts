import { defineMiddleware } from 'astro:middleware';
import { parse, parseFragment, serialize } from 'parse5';
import { sharedDictionary, authDictionary, toolDictionaries } from './i18n/dictionaries';
import { pixieContent } from './i18n/pixie-content';
import { pineappleContent } from './i18n/pineapple-content';
import { nexpasteRedesign } from './i18n/nexpaste-redesign';
import { localizedProducts } from './i18n/product-seo';
import { localizedGuides } from './i18n/guides';
import { toolSeo } from './i18n/tool-seo';
import { extraCopy } from './i18n/site-copy';
import { basePath, isHandwritten, languageFor, localizedPath, localizedPaths } from './i18n/site';
import { fixedKeys, pick, tr, trDeep } from './i18n/translate';

// Translate the existing shared templates during prerendering, before HTML reaches users or crawlers.
export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  if (!response.headers.get('content-type')?.includes('text/html')) return response;
  const lang = languageFor(context.url.pathname);
  const messages: Record<string, string> = Object.assign({}, sharedDictionary[lang], authDictionary[lang], pixieContent[lang], pineappleContent[lang], nexpasteRedesign[lang]);
  const phrases = new Map<string, string>();
  function pair(source: any, target: any) {
    if (typeof source === 'string' && typeof target === 'string') {
      phrases.set(source.trim(), target);
    } else if (source && target && typeof source === 'object') {
      for (const key of Object.keys(source)) pair(source[key], target[key]);
    }
  }
  function collect(value: any) {
    if (!value || typeof value !== 'object') return;
    if (value['zh-CN'] && value[lang]) pair(value['zh-CN'], value[lang]);
    else for (const child of Object.values(value)) collect(child);
  }
  for (const group of [sharedDictionary, authDictionary, toolDictionaries, pixieContent, pineappleContent, nexpasteRedesign]) collect(group);
  const products = localizedProducts(lang);
  pair(localizedProducts('zh-CN'), products);
  const english = localizedProducts('en');
  for (const [slug, source] of Object.entries(localizedProducts('zh-CN'))) {
    const target = products[slug as keyof typeof products];
    const { name } = english[slug as keyof typeof english];
    const set = (zhCN: string, en: string, zhTW: string) => phrases.set(zhCN, pick(lang, { 'zh-CN': zhCN, 'zh-TW': zhTW, en }));
    set(`了解 ${source.name}`, `About ${name}`, `了解 ${target.name}`);
    phrases.set(`${source.alternateName} · ${source.os}`, `${target.alternateName} · ${source.os}`);
    set(`${source.name} 图标`, `${name} icon`, `${target.name} 圖示`);
    set(`${source.name} 应用图标`, `${name} app icon`, `${target.name} App 圖示`);
    set(`在 App Store 查看 ${source.name} ↗`, `View ${name} on the App Store ↗`, `在 App Store 查看 ${target.name} ↗`);
  }
  for (const source of localizedGuides('zh-CN')) {
    const target = localizedGuides(lang).find(guide => guide.slug === source.slug)!;
    phrases.set(`${source.title} →`, `${target.title} →`);
    phrases.set(`${source.title} | invisilab`, `${target.title} | invisilab`);
  }
  pair(localizedGuides('zh-CN'), localizedGuides(lang));
  for (const [source, translations] of Object.entries(extraCopy)) {
    phrases.set(source, pick(lang, translations));
    phrases.set(`${source} | invisilab`, pick(lang, { 'zh-CN': `${translations['zh-CN']} | invisilab`, 'zh-TW': `${translations['zh-TW']} | invisilab`, en: `${translations.en} | invisilab` }));
  }
  // Text without a Chinese source (English in the template) still goes through the locale's table.
  const translate = (value: string) => phrases.get(value.trim()) ?? tr(lang, value);
  const root: any = parse(await response.text());
  const tool = basePath(context.url.pathname).match(/^\/tools\/([^/]+)\/$/)?.[1];
  const seo = lang === 'zh-CN' ? undefined : isHandwritten(lang) ? toolSeo[lang] : trDeep(lang, toolSeo.en);
  const metadata = seo && tool ? seo[tool as keyof typeof toolSeo.en] : undefined;
  if (metadata) {
    const head = root.childNodes.find((n: any) => n.tagName === 'html')?.childNodes.find((n: any) => n.tagName === 'head');
    const title = head?.childNodes.find((n: any) => n.tagName === 'title')?.childNodes[0]?.value;
    const description = head?.childNodes.find((n: any) => n.tagName === 'meta' && n.attrs?.some((a: any) => a.name === 'name' && a.value === 'description'))?.attrs.find((a: any) => a.name === 'content')?.value;
    if (title) phrases.set(title, metadata[0]);
    if (description) phrases.set(description, metadata[1]);
  }
  function visit(node: any) {
    if (node.tagName === 'style') return;
    if (node.tagName === 'script') {
      if (node.attrs?.some((a: any) => a.name === 'type' && a.value === 'application/ld+json')) {
        const convert = (value: any, key = ''): any => {
          if (typeof value === 'string') {
            if (value.startsWith('https://maxc.cc/')) {
              const url = new URL(value);
              if (localizedPaths.has(basePath(url.pathname)) && !['#organization', '#website'].includes(url.hash)) return `https://maxc.cc${localizedPath(url.pathname, lang)}${url.hash}`;
            }
            return key.startsWith('@') || fixedKeys.has(key) ? value : translate(value);
          }
          if (Array.isArray(value)) return value.map(child => convert(child, key));
          if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, convert(child, key)]));
          return value;
        };
        const json = JSON.stringify(convert(JSON.parse(node.childNodes.map((n: any) => n.value || '').join('')))).replace(/</g, '\\u003c');
        node.childNodes = [{ nodeName: '#text', value: json, parentNode: node }];
      }
      return;
    }
    if (node.nodeName === '#text') {
      const original = node.value.trim();
      const translated = translate(original);
      if (translated !== original) node.value = node.value.replace(original, translated);
      return;
    }
    const attrs = node.attrs || [];
    if (metadata && node.tagName === 'title') node.childNodes = [{ nodeName: '#text', value: metadata[0], parentNode: node }];
    if (metadata && node.tagName === 'meta') {
      const field = attrs.find((a: any) => a.name === 'name' || a.name === 'property')?.value;
      const content = attrs.find((a: any) => a.name === 'content');
      if (content && ['description', 'og:description', 'twitter:description'].includes(field)) content.value = metadata[1];
      if (content && ['og:title', 'twitter:title'].includes(field)) content.value = metadata[0];
    }
    const key = attrs.find((attr: any) => attr.name === 'data-i18n')?.value;
    if (key && messages[key] !== undefined) {
      const fragment: any = parseFragment(node, messages[key], {});
      node.childNodes = fragment.childNodes;
      for (const child of node.childNodes) child.parentNode = node;
    }
    for (const attr of attrs) {
      if (['alt', 'title', 'aria-label', 'placeholder', 'content'].includes(attr.name)) attr.value = translate(attr.value);
      if (attr.name === 'href' && attr.value.startsWith('/') && !attr.value.startsWith('//') && !attrs.some((a: any) => a.name === 'hreflang')) {
        const url = new URL(attr.value, context.url);
        if (localizedPaths.has(basePath(url.pathname))) attr.value = localizedPath(url.pathname, lang) + url.search + url.hash;
      }
    }
    // data-i18n may contain markup; visit children to localize embedded links as well.
    for (const child of node.childNodes || []) visit(child);
  }
  visit(root);
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  return new Response(serialize(root), { status: response.status, headers });
});
