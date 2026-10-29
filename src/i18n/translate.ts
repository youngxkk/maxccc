import { isHandwritten, translatedLocales, untranslatedKeys, type HandwrittenLocale, type Locale } from './site';

/** Stable short id for an English string (32-bit FNV-1a); translation tables are keyed by it. */
export function textId(text: string) {
  let hash = 0x811c9dc5;
  for (const char of text) hash = Math.imul(hash ^ char.codePointAt(0)!, 0x01000193) >>> 0;
  return hash.toString(36);
}

// translations/source.json lists every English string by id; translations/<lang>/*.json hold the
// translations under the same ids (see scripts/i18n-extract.mjs). Parts are merged per language.
const tables: Record<string, Record<string, string>> = {};
for (const [file, table] of Object.entries(import.meta.glob<Record<string, string>>('./translations/*/*.json', { eager: true, import: 'default' }))) {
  Object.assign(tables[file.split('/').at(-2)!] ??= {}, table);
}

/** Translate one English string; untranslated text stays English so pages never break. */
export function tr(lang: Locale, english: string) {
  if (isHandwritten(lang)) return english;
  const text = english.trim();
  const target = tables[lang]?.[textId(text)];
  return target ? english.replace(text, target) : english;
}

// Identifiers and machine-read values that must never be translated, in data objects and JSON-LD.
export const fixedKeys = new Set(['slug', 'product', 'image', 'store', 'href', 'url', 'os', 'category', 'lang', 'path', 'prefix',
  'inLanguage', 'applicationCategory', 'operatingSystem', 'downloadUrl', 'item', 'sameAs']);
/** Deep-translate English string leaves, leaving non-text values (URLs, ids, numbers) untouched. */
export function trDeep<T>(lang: Locale, value: T, key = ''): T {
  if (typeof value === 'string') return (untranslatedKeys.has(key) || fixedKeys.has(key) || key.startsWith('@') ? value : tr(lang, value)) as T;
  if (Array.isArray(value)) return value.map(item => trDeep(lang, item)) as T;
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([child, next]) => [child, trDeep(lang, next, child)])) as T;
  return value;
}

/** Pick handwritten copy for Chinese and English, translating the English for every other locale. */
export function pick(lang: Locale, copy: Record<HandwrittenLocale, string>) {
  return isHandwritten(lang) ? copy[lang] : tr(lang, copy.en);
}

type Localized<T> = T & { [lang in Locale]: T extends { en: infer E } ? E : never };
/** Add every translated locale to a { 'zh-CN', 'zh-TW', en } dictionary (recursively for nested groups). */
export function withLocales<T extends object>(dictionary: T): Localized<T> {
  const value = dictionary as any;
  if (value['zh-CN'] && value.en) {
    for (const { lang } of translatedLocales) value[lang] ??= trDeep(lang, value.en);
  } else {
    for (const child of Object.values(value)) if (child && typeof child === 'object') withLocales(child);
  }
  return value;
}
