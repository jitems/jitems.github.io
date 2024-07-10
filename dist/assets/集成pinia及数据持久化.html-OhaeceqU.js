import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as a,a as i,d as e,o as l}from"./app-Bi9sAhmd.js";const t={},p=i("p",null," ",-1),d=e(`<h1 id="集成pinia及数据持久化" tabindex="-1"><a class="header-anchor" href="#集成pinia及数据持久化"><span>集成pinia及数据持久化</span></a></h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    npm install pinia @pinia/nuxt</span></span>
<span class="line"><span>    npm i -D @pinia-plugin-persistedstate/nuxt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目中配置-nuxt-config-ts中" tabindex="-1"><a class="header-anchor" href="#项目中配置-nuxt-config-ts中"><span>项目中配置(nuxt.config.ts中)</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>export default defineNuxtConfig({</span></span>
<span class="line"><span>  modules: [</span></span>
<span class="line"><span>    &#39;@pinia/nuxt&#39;,</span></span>
<span class="line"><span>    &#39;@pinia-plugin-persistedstate/nuxt&#39;,</span></span>
<span class="line"><span>  ],</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据持久化配置-注册插件-plugis-pinia-ts" tabindex="-1"><a class="header-anchor" href="#数据持久化配置-注册插件-plugis-pinia-ts"><span>数据持久化配置,注册插件(plugis/pinia.ts)</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import piniaPluginPersistedstate from &#39;pinia-plugin-persistedstate&#39;</span></span>
<span class="line"><span>export default defineNuxtPlugin((nuxtApp) =&gt; {</span></span>
<span class="line"><span>    nuxtApp.$pinia.use(piniaPluginPersistedstate)</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新建文件-store-counter-ts" tabindex="-1"><a class="header-anchor" href="#新建文件-store-counter-ts"><span>新建文件(store/counter.ts)</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>// 登录信息持久化保存</span></span>
<span class="line"><span>import { defineStore } from &#39;pinia&#39;</span></span>
<span class="line"><span>export const useLoginStore = defineStore(&#39;loginStore&#39;, {</span></span>
<span class="line"><span>    state: () =&gt; {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            userInfo:&quot;&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    getters: {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    actions: {</span></span>
<span class="line"><span>        setUser(e:any){</span></span>
<span class="line"><span>            this.userInfo = e</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    persist: {</span></span>
<span class="line"><span>        storage: persistedState.localStorage,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面使用" tabindex="-1"><a class="header-anchor" href="#页面使用"><span>页面使用</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;cont&quot;&gt;</span></span>
<span class="line"><span>131434</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { useLoginStore } from &#39;@/store/login&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>let login = useLoginStore()</span></span>
<span class="line"><span>console.log(login.userInfo)</span></span>
<span class="line"><span>login.setUser(&#39;dsdfsf&#39;)</span></span>
<span class="line"><span>console.log(login.userInfo)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.cont{</span></span>
<span class="line"><span>  height: 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function r(c,o){return l(),n("div",null,[p,a(" more "),d])}const h=s(t,[["render",r],["__file","集成pinia及数据持久化.html.vue"]]),m=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/Nuxt3%E6%95%99%E7%A8%8B/%E9%9B%86%E6%88%90pinia%E5%8F%8A%E6%95%B0%E6%8D%AE%E6%8C%81%E4%B9%85%E5%8C%96.html","title":"集成pinia及数据持久化","lang":"zh-CN","frontmatter":{"title":"集成pinia及数据持久化","category":["前端"],"tag":["nuxt3"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF/Nuxt3%E6%95%99%E7%A8%8B/%E9%9B%86%E6%88%90pinia%E5%8F%8A%E6%95%B0%E6%8D%AE%E6%8C%81%E4%B9%85%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"集成pinia及数据持久化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:09:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"nuxt3"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:09:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集成pinia及数据持久化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:09:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"项目中配置(nuxt.config.ts中)","slug":"项目中配置-nuxt-config-ts中","link":"#项目中配置-nuxt-config-ts中","children":[]},{"level":2,"title":"数据持久化配置,注册插件(plugis/pinia.ts)","slug":"数据持久化配置-注册插件-plugis-pinia-ts","link":"#数据持久化配置-注册插件-plugis-pinia-ts","children":[]},{"level":2,"title":"新建文件(store/counter.ts)","slug":"新建文件-store-counter-ts","link":"#新建文件-store-counter-ts","children":[]},{"level":2,"title":"页面使用","slug":"页面使用","link":"#页面使用","children":[]}],"git":{"createdTime":1720591787000,"updatedTime":1720591787000,"contributors":[{"name":"test","email":"email","commits":1}]},"readingTime":{"minutes":0.51,"words":152},"filePathRelative":"前端/Nuxt3教程/集成pinia及数据持久化.md","localizedDate":"2024年7月10日","excerpt":"<p>&nbsp;</p>\\n"}');export{h as comp,m as data};
