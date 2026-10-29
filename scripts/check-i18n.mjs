import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { Script, runInNewContext } from 'node:vm';
import { parse } from 'parse5';
const read = path => readFileSync(`dist/${path}`, 'utf8');
const files = readdirSync('dist', { recursive: true }).filter(file => file.endsWith('.html'));
// Mirrors src/i18n/site.ts.
const prefixes = [['', 'zh-CN'], ['zh-tw/', 'zh-TW'], ['en/', 'en'], ['ja/', 'ja'], ['ko/', 'ko'], ['es/', 'es'], ['pt-br/', 'pt-BR'], ['fr/', 'fr'], ['de/', 'de'], ['it/', 'it'], ['ru/', 'ru'], ['tr/', 'tr'], ['id/', 'id'], ['vi/', 'vi'], ['ar/', 'ar']];
const prefixPattern = new RegExp(`^/(${prefixes.slice(1).map(([prefix]) => prefix.slice(0, -1)).join('|')})(?=/|$)`);
const languageOf = path => prefixes.find(([prefix]) => prefix && path.startsWith(`/${prefix}`))?.[1] ?? 'zh-CN';
const labels = ['简体中文', '繁體中文', '日本語', '한국어'];
let count = 0;
for (const file of files) {
  const html = read(file);
  const root = parse(html);
  const nodes = [];
  function visit(node) {
    nodes.push(node);
    if (['script', 'style'].includes(node.tagName)) return;
    for (const child of node.childNodes || []) visit(child);
  }
  visit(root);
  const attr = (node, key) => node.attrs?.find(a => a.name === key)?.value;
  const lang = attr(nodes.find(n => n.tagName === 'html'), 'lang');
  const canonical = attr(nodes.find(n => n.tagName === 'link' && attr(n, 'rel') === 'canonical'), 'href');
  const path = new URL(canonical).pathname;
  const base = path.replace(prefixPattern, '').replace(/^\//, '');
  const alternates = nodes.filter(n => n.tagName === 'link' && attr(n, 'hreflang'));
  assert.equal(alternates.length, prefixes.length + 1, `Missing language alternatives: ${file}`);
  assert.ok(alternates.some(n => attr(n, 'hreflang') === 'x-default' && attr(n, 'href') === `https://maxc.cc/en/${base}`), `x-default should be English: ${file}`);
  assert.equal(attr(nodes.find(n => n.tagName === 'html'), 'dir'), lang === 'ar' ? 'rtl' : undefined, `Wrong text direction: ${file}`);
  for (const [prefix, language] of prefixes) {
    assert.ok(alternates.some(n => attr(n, 'hreflang') === language && attr(n, 'href') === `https://maxc.cc/${prefix}${base}`), `Incorrect language link: ${file} -> ${language}`);
  }
  for (const node of nodes) {
    if (node.tagName === 'script') {
      const code = (node.childNodes || []).map(n => n.value || '').join('');
      const type = attr(node, 'type');
      if (!type && code) new Script(code, { filename: file });
      if (type === 'application/ld+json') {
        const json = JSON.parse(code);
        if (!lang.startsWith('zh') && lang !== 'ja') assert.ok(!/[\u3400-\u9fff]/.test(code), `Chinese search schema in ${file}`);
        const webpage = json['@graph']?.find(item => item['@type'] === 'WebPage');
        if (webpage) {
          assert.equal(webpage.url, canonical, `Schema URL mismatch: ${file}`);
          assert.equal(webpage.inLanguage, lang, `Schema language mismatch: ${file}`);
        }
      }
    }
    if (!lang.startsWith('zh') && lang !== 'ja' && node.nodeName === '#text') {
      const text = node.value.trim();
      if (!labels.includes(text)) assert.ok(!/[\u3400-\u9fff]/.test(text), `Chinese text left on ${lang} page ${file}: ${text}`);
    }
    if (node.tagName === 'a') {
      const href = attr(node, 'href');
      if (href?.startsWith('/') && !href.startsWith('//') && !attr(node, 'hreflang')) {
        const target = new URL(href, canonical).pathname;
        if (!/\.[a-z]+$/.test(target)) assert.equal(languageOf(target), lang, `Language lost in link on ${file}: ${href}`);
      }
    }
  }
  const bootstrap = nodes.find(n => n.tagName === 'script' && n.childNodes?.some(c => c.value?.includes('window.DoCoolI18n =')));
  const sandbox = { window: {}, document: { documentElement: { lang, dataset: { localePage: 'true' } } }, localStorage: { getItem: () => 'zh-TW' }, navigator: { language: 'zh-TW' } };
  runInNewContext(bootstrap.childNodes.map(n => n.value || '').join(''), sandbox);
  assert.equal(sandbox.window.DoCoolI18n.getLang(), lang, `Stored preference overrides URL: ${file}`);
  assert.equal(sandbox.window.DoCoolI18n.pathFor('/dashboard/'), `/${prefixes.find(([, language]) => language === lang)[0]}dashboard/`);
  count++;
}
console.log(`Multilingual checks passed for ${count} HTML pages: language alternatives, translated content and schemas, URL persistence, and inline JavaScript syntax.`);
