import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,a as e,d as i,o as t}from"./app-Bi9sAhmd.js";const p={},l=e("p",null," ",-1),r=i(`<h1 id="pinia状态管理的使用" tabindex="-1"><a class="header-anchor" href="#pinia状态管理的使用"><span>pinia状态管理的使用</span></a></h1><h2 id="main-js配置" tabindex="-1"><a class="header-anchor" href="#main-js配置"><span>main.js配置</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import { createSSRApp } from &#39;vue&#39;;</span></span>
<span class="line"><span>import * as Pinia from &#39;pinia&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function createApp() {</span></span>
<span class="line"><span>	const app = createSSRApp(App);</span></span>
<span class="line"><span>	app.use(Pinia.createPinia());</span></span>
<span class="line"><span>	return {</span></span>
<span class="line"><span>		app,</span></span>
<span class="line"><span>		Pinia, // 此处必须将 Pinia 返回</span></span>
<span class="line"><span>	};</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个pinia" tabindex="-1"><a class="header-anchor" href="#创建一个pinia"><span>创建一个pinia</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>// stores/counter.js</span></span>
<span class="line"><span>import { defineStore } from &#39;pinia&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useCounterStore = defineStore(&#39;counter&#39;, {</span></span>
<span class="line"><span>	state: () =&gt; {</span></span>
<span class="line"><span>		return { count: 0 };</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	// 也可以这样定义</span></span>
<span class="line"><span>	// state: () =&gt; ({ count: 0 })</span></span>
<span class="line"><span>	actions: {</span></span>
<span class="line"><span>		increment() {</span></span>
<span class="line"><span>			this.count++;</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件和页面使用" tabindex="-1"><a class="header-anchor" href="#组件和页面使用"><span>组件和页面使用</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>	&lt;view&gt;</span></span>
<span class="line"><span>		&lt;view&gt;{{count}}&lt;/view&gt;</span></span>
<span class="line"><span>		&lt;button  @click=&quot;setNum&quot;&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>	&lt;/view&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>	// 导入ref响应数据</span></span>
<span class="line"><span>	import {ref} from &#39;vue&#39;</span></span>
<span class="line"><span>	import { useCounterStore } from &#39;@/stores/counter&#39;; </span></span>
<span class="line"><span>	const counter = useCounterStore();</span></span>
<span class="line"><span>	let count = ref(0)</span></span>
<span class="line"><span>	const setNum = ()=&gt;{</span></span>
<span class="line"><span>		counter.increment()</span></span>
<span class="line"><span>		count.value = counter.count</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function c(d,o){return t(),s("div",null,[l,a(" more "),r])}const v=n(p,[["render",c],["__file","pinia状态管理使用.html.vue"]]),h=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/uniapp%E6%95%99%E7%A8%8B/pinia%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E4%BD%BF%E7%94%A8.html","title":"pinia状态管理的使用","lang":"zh-CN","frontmatter":{"title":"pinia状态管理的使用","category":["前端"],"tag":["uniapp"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF/uniapp%E6%95%99%E7%A8%8B/pinia%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"pinia状态管理的使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:09:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"uniapp"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:09:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pinia状态管理的使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:09:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"main.js配置","slug":"main-js配置","link":"#main-js配置","children":[]},{"level":2,"title":"创建一个pinia","slug":"创建一个pinia","link":"#创建一个pinia","children":[]},{"level":2,"title":"组件和页面使用","slug":"组件和页面使用","link":"#组件和页面使用","children":[]}],"git":{"createdTime":1682047696000,"updatedTime":1720591787000,"contributors":[{"name":"test","email":"email","commits":1}]},"readingTime":{"minutes":0.48,"words":143},"filePathRelative":"前端/uniapp教程/pinia状态管理使用.md","localizedDate":"2023年4月21日","excerpt":"<p>&nbsp;</p>\\n"}');export{v as comp,h as data};
