import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read = path => readFileSync(`dist/${path}`, 'utf8');
const urls = [...read('sitemap.xml').matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
for (const url of urls) {
  const path = new URL(url).pathname;
  assert.ok(!/\/(dashboard|404|thanks)\/?$/.test(path), 'Non-search page in sitemap');
  const html = read(`${path.slice(1)}index.html`);
  assert.ok(html.includes(`<link rel="canonical" href="${url}"`), `Canonical mismatch: ${url}`);
  assert.ok(/<meta name="description" content="[^"]+"/.test(html), `Missing description: ${url}`);
  assert.ok(!html.includes('noindex'), `Indexable route marked noindex: ${url}`);
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) JSON.parse(match[1]);
}
for (const slug of ['nexpaste', 'transnap', 'invsi', 'pixie-wallpaper', 'pineapple-english', 'are-you-ok']) {
  const html = read(`${slug}/index.html`);
  assert.ok(urls.includes(`https://maxc.cc/${slug}/`), `Missing product: ${slug}`);
  assert.ok(html.includes('SoftwareApplication'), `Missing application schema: ${slug}`);
  assert.ok(read('llms.txt').includes(`https://maxc.cc/${slug}`), `Missing discovery link: ${slug}`);
}
assert.ok(!/class="card-desc"[^>]*><\/div>/.test(read('index.html')), 'Empty server-rendered product description');
for (const path of ['dashboard/index.html', '404.html', 'thanks/index.html']) assert.ok(read(path).includes('noindex, follow'), `Missing noindex: ${path}`);
assert.ok(existsSync('dist/images/og-image.jpg'));
console.log(`SEO checks passed: ${urls.length} sitemap URLs, 6 product schemas, static descriptions and discovery file.`);
const locales = [['invsi/', 'en'], ['zh-cn/invsi/', 'zh-CN'], ['zh-tw/invsi/', 'zh-TW'], ['ja/invsi/', 'ja'], ['pt-br/invsi/', 'pt-BR'], ['ar/invsi/', 'ar']];
for (const [path, lang] of locales) {
  const html = read(`${path}index.html`);
  assert.ok(html.includes(`<html lang="${lang}"`), `Wrong document language: ${path}`);
  for (const [target, language] of locales) {
    assert.ok(html.includes(`hreflang="${language}" href="https://maxc.cc/${target}"`), `Missing reciprocal language link: ${path} -> ${target}`);
  }
}
for (const url of urls) {
  const html = read(`${new URL(url).pathname.slice(1)}index.html`);
  for (const tag of ['<title>', 'rel="canonical"', 'name="robots"']) {
    assert.equal(html.split(tag).length - 1, 1, `Duplicate or missing ${tag}: ${url}`);
  }
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const target = `dist${decodeURI(match[1])}`;
    assert.ok(existsSync(target) || existsSync(`${target}/index.html`), `Broken local link ${match[1]} on ${url}`);
  }
}
console.log('Language reciprocity, unique metadata and internal destination checks passed.');
