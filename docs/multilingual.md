# 多语言维护

网站支持 20 种语言：英文（默认，无前缀；旧的 `/en/` 网址 301 跳转到根目录）、简体中文（`/zh-cn/`）、繁体中文（`/zh-tw/`），以及日语 `/ja/`、韩语 `/ko/`、西班牙语 `/es/`、巴西葡萄牙语 `/pt-br/`、法语 `/fr/`、德语 `/de/`、意大利语 `/it/`、荷兰语 `/nl/`、波兰语 `/pl/`、瑞典语 `/sv/`、俄语 `/ru/`、土耳其语 `/tr/`、印尼语 `/id/`、越南语 `/vi/`、泰语 `/th/`、印地语 `/hi/`、阿拉伯语 `/ar/`（从右到左排版）。语言切换保留当前页面；站内链接、登录后的跳转和工具初始化优先使用网址对应的语言，不自动把搜索访问者跳转走。

## 实现

- `src/i18n/site.ts` 是唯一的语言表：语言代码、网址前缀、显示名称、`og:locale` 和文字方向。增加一种语言只需在这里加一行，再提供一份翻译表。
- 简体中文、繁体中文和英文是手写文案。其余 17 种语言以英文为源，通过 `src/i18n/translations/<lang>/*.json` 翻译；`src/i18n/translate.ts` 的 `tr` / `trDeep` / `pick` / `withLocales` 负责查表，没有译文的字符串会保留英文，页面不会出错。
- 翻译表以英文字符串的短哈希（`textId`）为键，`translations/source.json` 列出每个键对应的英文原文，方便对照审校。
- `[locale]/[...path].astro` 为所有带前缀的语言复用原页面组件，包括 invsi。
- `src/middleware.ts` 在 Astro 预渲染阶段处理 `data-i18n`、公共文案、图片描述和结构化数据（JSON-LD 中的 `@type`、网址等标识字段不会被翻译）。线上不需要翻译接口或额外服务器。
- 每个页面输出独立 canonical、20 种语言的 hreflang 和指向英文的 `x-default`、正确的 `html lang` / `dir`、`og:locale` 及其他语言的 `og:locale:alternate`。站点地图在构建后自动生成，并为每个网址列出全部语言版本。
- 浏览器端只内嵌当前语言和英文的词库，避免每页携带 20 种语言。
- 法律协议正文只维护中文和英文。其他语言显示英文正文（标注 `lang="en"`），并在顶部用该语言说明以英文版为准。
- `llms.txt` 汇总各语言的产品页，`/invsi/product.md` 包含全部语言的产品说明，供大模型检索引用。

## 增加或修改文案

1. 按原来的方式修改中文和英文（词库、`site-copy.ts`、`product-seo.ts`、`guides.ts` 等）。
2. 运行 `npm run build` 和 `npm run i18n:extract`。脚本会更新 `translations/source.json`，并报告每种语言缺少或多余的译文。加 `--missing` 参数时会为每种语言生成 `<lang>.missing.json`，列出待翻译的英文。
3. 把译文按 `{ "键": "译文" }` 写进对应语言目录下的 JSON 文件（可以新建 `6.json` 等文件，同一语言的所有文件会合并，文件名靠后的覆盖靠前的）。保留原文中的 `<br>`、`<span>`、`\n` 和产品名。
4. 重新构建并检查，确认每种语言都是满覆盖。

当前英文源词库共 1,037 条，17 种翻译语言均应保持完整覆盖，并清理不再出现在 `source.json` 中的旧键。荷兰语、波兰语、瑞典语的第 3 批，以及泰语、印地语的第 2、3 批使用机器翻译补齐，仍需母语审校。

品牌名、示例人名、邮箱和快捷键不需要翻译，已在 `scripts/i18n-extract.mjs` 中排除。

## 增加一种语言

在 `src/i18n/site.ts` 的 `locales` 中加一行，在 `scripts/check-i18n.mjs` 的 `prefixes` 中加上同样的前缀，然后新建 `src/i18n/translations/<lang>/` 并按上面的步骤补齐译文。从右到左的语言需要设置 `dir: 'rtl'`。

## 验证

```sh
npm run build
npm run i18n:extract
node scripts/check-seo.mjs
node scripts/check-i18n.mjs
npx tsc --noEmit
```

检查包括无 JavaScript 的翻译正文、非中文页面是否残留中文、20 种语言的相互关联和 `x-default`、文字方向、canonical、结构化数据语言、内部链接是否丢失语言、内联脚本语法，以及旧语言偏好是否覆盖当前语言。非公开索引页仍保留 noindex。
