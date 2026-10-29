export const siteUrl = 'https://maxc.cc/';
export const excludedSearchPaths = new Set(['/404/', '/dashboard/', '/thanks/']);
export function canonicalPath(path: string) {
  const clean = path.replace(/\/+$/, '');
  return clean ? `${clean}/` : '/';
}
export function canonicalUrl(path: string) {
  return new URL(canonicalPath(new URL(path, siteUrl).pathname), siteUrl).href;
}
export const serializeSchema = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
