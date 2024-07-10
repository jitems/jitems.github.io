import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,a as e,d as n,o as t}from"./app-Bi9sAhmd.js";const h={},l=e("p",null," ",-1),p=n(`<h1 id="pnpm使用" tabindex="-1"><a class="header-anchor" href="#pnpm使用"><span>pnpm使用</span></a></h1><h2 id="什么是pnpm" tabindex="-1"><a class="header-anchor" href="#什么是pnpm"><span>什么是pnpm</span></a></h2><p>pnpm是 Node.js 的替代包管理器。它是 npm 的直接替代品，但速度更快、效率更高。</p><p>为什么效率更高？当您安装软件包时，我们会将其保存在您机器上的全局存储中，然后我们会从中创建一个硬链接，而不是进行复制。对于模块的每个版本，磁盘上只保留一个副本。例如，当使用 npm 或 yarn 时，如果您有 100 个使用 lodash 的包，则磁盘上将有 100 个 lodash 副本。pnpm 可让您节省数 GB 的磁盘空间！</p><h2 id="pnpm优势" tabindex="-1"><a class="header-anchor" href="#pnpm优势"><span>pnpm优势</span></a></h2><p><strong>pnpm 拥有 Yarn 超过 npm 的所有附加功能：</strong></p><ul><li>安全: 与 yarn 一样，pnpm 有一个包含所有已安装包校验和的特殊文件，用于在执行代码之前验证每个已安装包的完整性。</li><li>离线模式: pnpm 将所有下载的包 tarball 保存在本地注册表镜像中。当包在本地可用时，它从不发出请求。使用该--offline参数可以完全禁止 HTTP 请求。</li><li>速度: pnpm 不仅比 npm 快，而且比 yarn 快。无论是冷缓存还是热缓存，它都比 yarn 快。yarn 从缓存中复制文件，而 pnpm 只是从全局存储中链接它们。</li></ul><h2 id="pnpm安装" tabindex="-1"><a class="header-anchor" href="#pnpm安装"><span>pnpm安装</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">npm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> pnpm</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> //通过 npm 安装</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">npx</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> pnpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> add</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> pnpm</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> //通过 npx 安装</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置源" tabindex="-1"><a class="header-anchor" href="#设置源"><span>设置源</span></a></h2><div class="language-jd line-numbers-mode" data-highlighter="shiki" data-ext="jd" data-title="jd" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>pnpm config get registry //查看源</span></span>
<span class="line"><span>pnpm config set registry https://registry.npmmirror.com //切换淘宝源</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加包" tabindex="-1"><a class="header-anchor" href="#添加包"><span>添加包</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pnpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//保存到依赖项</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pnpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> add</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">D</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//保存到devDependencies</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pnpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> add</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">O</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//保存到optionalDependencies</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pnpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]@</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> //安装指定依赖</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移除包" tabindex="-1"><a class="header-anchor" href="#移除包"><span>移除包</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pnpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> remove</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//移除包</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pnpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> remove</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">global</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> //移除全局包</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新包" tabindex="-1"><a class="header-anchor" href="#更新包"><span>更新包</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pnpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> up</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> //更新所有依赖项，遵守package.json中指定的范围</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pnpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> up</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">latest</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> //最新更新所有依赖项，忽略package.json中指定的范围</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置存储路径" tabindex="-1"><a class="header-anchor" href="#设置存储路径"><span>设置存储路径</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pnpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> config</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> set</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> store</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">dir</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">path</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">to</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pnpm</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">store</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,19);function k(r,d){return t(),s("div",null,[l,a(" more "),p])}const o=i(h,[["render",k],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/node%E6%95%99%E7%A8%8B/","title":"pnpm使用","lang":"zh-CN","frontmatter":{"title":"pnpm使用","category":["前端"],"tag":["node"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF/node%E6%95%99%E7%A8%8B/"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"pnpm使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:09:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:09:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pnpm使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:09:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是pnpm","slug":"什么是pnpm","link":"#什么是pnpm","children":[]},{"level":2,"title":"pnpm优势","slug":"pnpm优势","link":"#pnpm优势","children":[]},{"level":2,"title":"pnpm安装","slug":"pnpm安装","link":"#pnpm安装","children":[]},{"level":2,"title":"设置源","slug":"设置源","link":"#设置源","children":[]},{"level":2,"title":"添加包","slug":"添加包","link":"#添加包","children":[]},{"level":2,"title":"移除包","slug":"移除包","link":"#移除包","children":[]},{"level":2,"title":"更新包","slug":"更新包","link":"#更新包","children":[]},{"level":2,"title":"设置存储路径","slug":"设置存储路径","link":"#设置存储路径","children":[]}],"git":{"createdTime":1659952375000,"updatedTime":1720591787000,"contributors":[{"name":"test","email":"email","commits":1}]},"readingTime":{"minutes":1.68,"words":505},"filePathRelative":"前端/node教程/README.md","localizedDate":"2022年8月8日","excerpt":"<p>&nbsp;</p>\\n"}');export{o as comp,m as data};