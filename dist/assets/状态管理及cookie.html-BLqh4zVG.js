import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as a,a as e,d as i,o as l}from"./app-Bi9sAhmd.js";const p={},t=e("p",null," ",-1),c=i(`<h1 id="状态管理及cookie" tabindex="-1"><a class="header-anchor" href="#状态管理及cookie"><span>状态管理及cookie</span></a></h1><p>在Nuxt2中，如果我们要使用cookie,需要引入插件js-cookie，在Nuxt3中，也不再集成Vuex，可以利用Nuxt3的composables自动导入属性，把它们定义在composables目录中，这样他们将成为全局类型安全的状态。</p><p><strong>1、useState使用</strong></p><p>首先我们需要在项目的根目录新建composables文件夹，然后创建状态管理文件如：composables/state.ts.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>//首先引入useState、useCookie</span></span>
<span class="line"><span>import { useState, useCookie } from &quot;nuxt/app&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const userLangeages = () =&gt; {</span></span>
<span class="line"><span>    const langages = useCookie(&#39;lang&#39;)</span></span>
<span class="line"><span>    langages.value = langages.value || &#39;cn&#39;</span></span>
<span class="line"><span>    return useState(&#39;userLang&#39;, () =&gt; langages.value)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export const userinfo = () =&gt; {</span></span>
<span class="line"><span>    return useState(&#39;userLang&#39;, () =&gt; &quot;这是状态数据查看&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何获取state值和修改state的值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div&gt;{{ userlang }}&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div&gt;{{ userin }}&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;button @click=&quot;onEventClick()&quot;&gt; 更改状态 &lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不使用layout布局功能</span></span>
<span class="line"><span>definePageMeta({</span></span>
<span class="line"><span>    layout: false</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>//获取state的值</span></span>
<span class="line"><span>const userlang = userLangeages ()</span></span>
<span class="line"><span>const userin = userinfo ()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onEventClick = () =&gt; {</span></span>
<span class="line"><span>    userlang.value = &quot;ljsdfdfe&quot;</span></span>
<span class="line"><span>    userin.value = &quot;状态已经改变了&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击之前 <img src="https://jitems.github.io/blog/bk567.png" alt="solar"> 点击事件，改变状态 <img src="https://jitems.github.io/blog/bk568.png" alt="solar"></p><p><strong>2、useCookie使用</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;你好&lt;/h3&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>	// 获取 Cookie</span></span>
<span class="line"><span>  const Cookies = useCookie(&#39;token&#39;)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>	// 设置 Cookie</span></span>
<span class="line"><span>	Cookies.value = Cookies.value || &#39;&#39;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>	// 删除  Cookie</span></span>
<span class="line"><span>	cookie.value = undefined || null</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function d(o,r){return l(),n("div",null,[t,a(" more "),c])}const m=s(p,[["render",d],["__file","状态管理及cookie.html.vue"]]),g=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/Nuxt3%E6%95%99%E7%A8%8B/%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E5%8F%8Acookie.html","title":"状态管理及cookie","lang":"zh-CN","frontmatter":{"title":"状态管理及cookie","category":["前端"],"tag":["nuxt3"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF/Nuxt3%E6%95%99%E7%A8%8B/%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E5%8F%8Acookie.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"状态管理及cookie"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:34:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"nuxt3"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"状态管理及cookie\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:34:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1679973526000,"updatedTime":1720593294000,"contributors":[{"name":"test","email":"email","commits":2}]},"readingTime":{"minutes":1,"words":301},"filePathRelative":"前端/Nuxt3教程/状态管理及cookie.md","localizedDate":"2023年3月28日","excerpt":"<p>&nbsp;</p>\\n"}');export{m as comp,g as data};
