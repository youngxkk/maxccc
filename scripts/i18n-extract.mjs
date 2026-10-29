import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { parse } from 'parse5';
import { createServer } from 'vite';

// Collects every English string the site shows (dictionaries plus built English pages at the site root) into
// src/i18n/translations/source.json as { id: English }, then reports what each language is missing.
// Translations live in src/i18n/translations/<lang>/*.json under the same ids.
// Run after `npm run build`. Translated locales pivot from English, so English is the only source.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { sharedDictionary, authDictionary, toolDictionaries } = await server.ssrLoadModule('/src/i18n/dictionaries.ts');
const { pixieContent } = await server.ssrLoadModule('/src/i18n/pixie-content.ts');
const { pineappleContent } = await server.ssrLoadModule('/src/i18n/pineapple-content.ts');
const { nexpasteRedesign } = await server.ssrLoadModule('/src/i18n/nexpaste-redesign.ts');
const { locales, translatedLocales, untranslatedKeys, englishLegalNote } = await server.ssrLoadModule('/src/i18n/site.ts');
const { fixedKeys, textId } = await server.ssrLoadModule('/src/i18n/translate.ts');
await server.close();

const strings = new Set();
// Names that read the same in every language: products, platforms, language names, numbered labels.
const keep = new Set([...locales.map(locale => locale.label), '翻译，不打断你的状态。复制一句话，它已经在这里了。', 'invsi', 'invisi', 'lab', 'invisilab', 'NexPaste', 'Transnap', 'Pixie', 'Pixie Pro', 'Are You OK', 'App Store',
  'iPhone', 'iPad', 'Mac', 'macOS', 'iOS', 'iPadOS', 'iOS, iPadOS', 'iPhone · iPad', 'iPhone Duo', 'iCloud', 'NASA', 'BMI', 'PDF', 'TXT', 'MD', 'KB', 'MB', 'GB', 'cm', 'kg', 'apple.com', 'en', 'zh-CN', 'document.pdf',
  'Pineapple English', 'Pixie Wallpaper', 'PINEAPPLE ENGLISH', 'PIXIE WALLPAPER', 'NexPaste / macOS', 'X (Twitter) @invisilab_x', 'Lusha',
  // Sample names in the test-data tools.
  'Ava Brown', 'Ava Chen', 'Emma Wilson', 'Ethan Zhao', 'James Smith', 'Leo Carter', 'Leo Wang', 'Mia Lin']);
const add = value => {
  const text = value.trim();
  if (/\p{L}/u.test(text) && !/^https?:\/\//.test(text) && !keep.has(text) && !/^[A-Z]$|^PIXIE \/ \d+$|^\d+h$|^\S+@\S+\.\w+$|^⌘/.test(text)) strings.add(text);
};
function leaves(value, key = '') {
  if (typeof value === 'string') { if (!untranslatedKeys.has(key) && !fixedKeys.has(key) && !key.startsWith('@')) add(value); }
  else if (Array.isArray(value)) for (const next of value) leaves(next, key);
  else if (value && typeof value === 'object') for (const [child, next] of Object.entries(value)) leaves(next, child);
}
function collect(value) {
  if (!value || typeof value !== 'object') return;
  if (value['zh-CN'] && value.en) leaves(value.en);
  else for (const child of Object.values(value)) collect(child);
}
for (const group of [sharedDictionary, authDictionary, toolDictionaries, pixieContent, pineappleContent, nexpasteRedesign]) collect(group);
// Shown only on translated locales, so it never appears on the English pages scanned below.
add(englishLegalNote);

const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
// English is served without a prefix; skip the other locales' folders.
const localeDirs = /^(zh-cn|zh-tw|ja|ko|es|pt-br|fr|de|it|ru|tr|id|vi|ar)\//;
for (const file of readdirSync('dist', { recursive: true }).filter(file => file.endsWith('.html') && !localeDirs.test(file))) {
  const root = parse(readFileSync(`dist/${file}`, 'utf8'));
  (function visit(node, keyed) {
    if (node.tagName === 'style') return;
    if (node.tagName === 'script') {
      if (attr(node, 'type') === 'application/ld+json') leaves(JSON.parse(node.childNodes.map(n => n.value || '').join('')));
      return;
    }
    // Keyed elements with markup are translated as whole messages from the dictionaries above;
    // plain-text ones are still read, since a site-copy phrase may replace their message.
    if (attr(node, 'data-i18n') && node.childNodes.some(child => child.nodeName !== '#text')) keyed = true;
    if (node.nodeName === '#text' && !keyed) add(node.value);
    for (const name of ['alt', 'title', 'aria-label', 'placeholder']) if (attr(node, name)) add(attr(node, name));
    if (node.tagName === 'meta' && /description|title/.test(attr(node, 'name') || attr(node, 'property') || '')) add(attr(node, 'content'));
    for (const child of node.childNodes || []) visit(child, keyed);
  })(root, false);
}

const source = Object.fromEntries([...strings].sort().map(text => [textId(text), text]));
if (Object.keys(source).length !== strings.size) throw new Error('Two English strings share an id; change textId.');
writeFileSync('src/i18n/translations/source.json', `${JSON.stringify(source, null, 1)}\n`);
console.log(`${strings.size} English strings, ${[...strings].join('').length} characters.`);
for (const { lang } of translatedLocales) {
  const dir = `src/i18n/translations/${lang}`;
  const table = Object.assign({}, ...(existsSync(dir) ? readdirSync(dir).filter(file => file.endsWith('.json')).map(file => JSON.parse(readFileSync(`${dir}/${file}`, 'utf8'))) : []));
  const missing = Object.keys(source).filter(id => !table[id]);
  const stale = Object.keys(table).filter(id => !source[id]);
  console.log(`${lang}: ${strings.size - missing.length}/${strings.size}${missing.length ? `, missing ${missing.length}` : ''}${stale.length ? `, ${stale.length} unused` : ''}`);
  if (process.argv.includes('--missing') && missing.length) writeFileSync(`${dir}.missing.json`, `${JSON.stringify(Object.fromEntries(missing.map(id => [id, source[id]])), null, 1)}\n`);
}
