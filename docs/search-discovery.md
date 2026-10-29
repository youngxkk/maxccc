# 搜索收录与自然增长

## 已实现

- 静态 HTML 提供产品简介；不依赖浏览器执行脚本才能读到首页文案。
- 页面独立 canonical，统一尾斜线；首页、组织、网页、软件与面包屑结构化数据。
- 从构建后的可索引 HTML 自动生成 sitemap.xml，排除 dashboard、404 和 thanks；这些页面设置 noindex。
- 产品页问答和全站页脚产品链接，帮助用户与爬虫发现产品。
- llms.txt 从产品数据生成，作为补充目录；不是搜索排名或 AI 推荐保证。
- robots.txt 已允许所有爬虫，不需要为 AI 搜索开放训练爬虫的特殊权限。

## 部署后需要在站外完成

1. 在 Google Search Console 和 Bing Webmaster Tools 验证 maxc.cc 域名所有权，提交 https://maxc.cc/sitemap.xml。需要所有者账户或 DNS 权限；代码不会代替验证。
2. 用 URL 检查工具检查首页及六个产品页，请求索引。用 Google Rich Results Test 检查结构化数据；没有捏造价格、评分或评论来满足富结果要求。
3. 检查托管平台/CDN：Googlebot、Bingbot、OAI-SearchBot 等访问产品页应得到 200 与正文，不能被登录、验证码或防火墙拦截。
4. 查看搜索展示、点击、查询词、产品页到 App Store 的点击，以及 ChatGPT/Bing 等引荐来源。按真实查询写有用的使用指南，避免批量生成同质化页面。
5. 如果启用 IndexNow，只在内容部署成功后提交有变动的公开 URL；先配置域名密钥，勿在每次构建时提交未上线的内容。

## 后续内容方向

围绕真实产品能力制作有截图的操作指南，例如 NexPaste 的 Mac 剪贴板历史检索与跨设备同步、Transnap 的菜单栏翻译、invsi 的应用锁设置、Pixie 的壁纸收藏。每篇解决一个具体问题，并链接对应产品下载入口。避免没有验证的竞品比较或“最好”承诺。

全站已提供服务端输出的简体、英文与繁体独立页面，通过 hreflang 关联；应用目录、四篇场景指南和工具页也有对应语言版本。可继续补充真实操作截图与具体步骤。

## 本地检查

运行 `npm run build`，然后运行 `node scripts/check-seo.mjs` 和 `node scripts/check-i18n.mjs`。

参考：
- https://developers.google.com/search/docs/fundamentals/get-started-developers
- https://developers.google.com/search/docs/appearance/structured-data/software-app
- https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
- https://developers.openai.com/api/docs/bots
