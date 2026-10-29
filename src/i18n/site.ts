import { guides } from '../data/guides';
// Chinese and English are written by hand. Every other locale pivots from English through
// src/i18n/translations/<lang>.json, so adding a language is one row here plus one table.
export const locales = [
  { lang: 'zh-CN', prefix: '', label: '简体中文', og: 'zh_CN' },
  { lang: 'zh-TW', prefix: '/zh-tw', label: '繁體中文', og: 'zh_TW' },
  { lang: 'en', prefix: '/en', label: 'English', og: 'en_US' },
  { lang: 'ja', prefix: '/ja', label: '日本語', og: 'ja_JP' },
  { lang: 'ko', prefix: '/ko', label: '한국어', og: 'ko_KR' },
  { lang: 'es', prefix: '/es', label: 'Español', og: 'es_ES' },
  { lang: 'pt-BR', prefix: '/pt-br', label: 'Português (Brasil)', og: 'pt_BR' },
  { lang: 'fr', prefix: '/fr', label: 'Français', og: 'fr_FR' },
  { lang: 'de', prefix: '/de', label: 'Deutsch', og: 'de_DE' },
  { lang: 'it', prefix: '/it', label: 'Italiano', og: 'it_IT' },
  { lang: 'ru', prefix: '/ru', label: 'Русский', og: 'ru_RU' },
  { lang: 'tr', prefix: '/tr', label: 'Türkçe', og: 'tr_TR' },
  { lang: 'id', prefix: '/id', label: 'Bahasa Indonesia', og: 'id_ID' },
  { lang: 'vi', prefix: '/vi', label: 'Tiếng Việt', og: 'vi_VN' },
  { lang: 'ar', prefix: '/ar', label: 'العربية', og: 'ar_AR', dir: 'rtl' },
] as const;
export type Locale = typeof locales[number]['lang'];
export type HandwrittenLocale = 'zh-CN' | 'zh-TW' | 'en';
export const translatedLocales = locales.filter(locale => !['zh-CN', 'zh-TW', 'en'].includes(locale.lang));
export const isHandwritten = (lang: string): lang is HandwrittenLocale => ['zh-CN', 'zh-TW', 'en'].includes(lang);
export const localeOf = (lang: string) => locales.find(locale => locale.lang === lang) ?? locales[0];
// Legal agreements stay in English for translated locales; the English text is authoritative.
export const untranslatedKeys = new Set(['legal_ua_html', 'legal_pp_html', 'legal_tou_html']);
export const englishLegalNote = 'This document is provided in English. The English version prevails if there is any difference.';
const prefixPattern = new RegExp(`^/(${locales.filter(locale => locale.prefix).map(locale => locale.prefix.slice(1)).join('|')})(?=/|$)`);
export function languageFor(path: string): Locale {
  const prefix = path.match(prefixPattern)?.[0];
  return prefix ? locales.find(locale => locale.prefix === prefix)!.lang : 'zh-CN';
}
export function basePath(path: string) {
  const base = path.replace(prefixPattern, '');
  return `${base.replace(/\/+$/, '')}/`;
}
export function localizedPath(path: string, lang: Locale) {
  return `${localeOf(lang).prefix}${basePath(path)}`;
}
export const localizedPaths = new Set([
  '/', '/apps/', '/guides/', '/nexpaste/', '/transnap/', '/invsi/', '/pixie-wallpaper/',
  '/pineapple-english/', '/are-you-ok/', '/classic-minesweeper/', '/strawberry-diary/',
  '/privacy-policy/', '/terms-of-use/', '/user-agreement/', '/thanks/', '/dashboard/', '/404/',
  ...['multitools', 'password', 'units', 'lorem', 'wordcount', 'textconvert', 'bmi', 'remove-bg', 'gradient', 'json', 'pdf2text'].map(slug => `/tools/${slug}/`),
  ...guides.map(guide => `/guides/${guide.slug}/`),
]);
// Each localized page gets its own route file so it only ships its own CSS; a shared catch-all would bundle every page's styles.
export const localizedStaticPaths = () => locales.filter(locale => locale.prefix).map(locale => ({ params: { locale: locale.prefix.slice(1) }, props: { lang: locale.lang } }));
export function languageLinks(path: string) {
  return locales.map(locale => ({ ...locale, path: localizedPath(path, locale.lang) }));
}
