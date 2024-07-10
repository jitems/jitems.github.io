import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as a,a as e,d as i,o as l}from"./app-Bi9sAhmd.js";const p={},t=e("p",null," ",-1),d=i(`<h1 id="iframe内嵌h5页面" tabindex="-1"><a class="header-anchor" href="#iframe内嵌h5页面"><span>iframe内嵌H5页面</span></a></h1><h2 id="uniapp部分" tabindex="-1"><a class="header-anchor" href="#uniapp部分"><span>uniapp部分</span></a></h2><p>这里使用的是vue3的uniapp版本</p><p>在manifest.json文件中配置h5</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&quot;h5&quot; : {</span></span>
<span class="line"><span>        &quot;router&quot; : {</span></span>
<span class="line"><span>            &quot;mode&quot; : &quot;hash&quot;,</span></span>
<span class="line"><span>            &quot;base&quot; : &quot;/wst-b2g-app/&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>接收参数</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>App.vue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>	export default {</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		onLaunch: function() {</span></span>
<span class="line"><span>			console.log(&#39;App Launch&#39;)</span></span>
<span class="line"><span>			// 这里获取windows页面中传递过来的数据</span></span>
<span class="line"><span>			window.addEventListener(&#39;message&#39;, function (event) {</span></span>
<span class="line"><span>				console.log(event.data)</span></span>
<span class="line"><span>			});</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		onShow: function() {</span></span>
<span class="line"><span>			console.log(&#39;App Show&#39;)</span></span>
<span class="line"><span>			</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		onHide: function() {</span></span>
<span class="line"><span>			console.log(&#39;App Hide&#39;)</span></span>
<span class="line"><span>		},		</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows部分" tabindex="-1"><a class="header-anchor" href="#windows部分"><span>windows部分</span></a></h2><p>这里我使用的是nuxt3框架</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;cont&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;iframe&quot;&gt;</span></span>
<span class="line"><span>	&lt;!-- 这里的地址就是h5的地址 --&gt;</span></span>
<span class="line"><span>      &lt;iframe width=&quot;600&quot; ref=&quot;iframeRef&quot; frameborder=0 height=&quot;800&quot; src=&quot;http://localhost:5173/wst-b2g-app/#/&quot;&gt;&lt;/iframe&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>let iframeRef = ref&lt;any&gt;(null);   // 和iframe标签的ref绑定</span></span>
<span class="line"><span>onMounted(()=&gt;{</span></span>
<span class="line"><span>  if (iframeRef.value) {</span></span>
<span class="line"><span>		iframeRef.value.contentWindow.postMessage(</span></span>
<span class="line"><span>			&quot;dddddddddddddddddddddddddddddddd&quot;,</span></span>
<span class="line"><span>			&quot;*&quot;</span></span>
<span class="line"><span>		);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.iframe {</span></span>
<span class="line"><span>  margin: 50px auto;</span></span>
<span class="line"><span>  width: 380px;</span></span>
<span class="line"><span>  height: 680px;</span></span>
<span class="line"><span>  border-radius: 30px;</span></span>
<span class="line"><span>  border: 1px solid rgba(0, 0, 0, 0.09);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.iframe&gt;iframe {</span></span>
<span class="line"><span>  width: 380px;</span></span>
<span class="line"><span>  height: 680px;</span></span>
<span class="line"><span>  border-radius: 30px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jitems.github.io/blog/bk595.png" alt="solar">`,11);function c(r,o){return l(),n("div",null,[t,a(" more "),d])}const m=s(p,[["render",c],["__file","iframe内嵌H5页面.html.vue"]]),b=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/uniapp%E6%95%99%E7%A8%8B/iframe%E5%86%85%E5%B5%8CH5%E9%A1%B5%E9%9D%A2.html","title":"iframe内嵌H5页面","lang":"zh-CN","frontmatter":{"title":"iframe内嵌H5页面","category":["前端"],"tag":["uniapp"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF/uniapp%E6%95%99%E7%A8%8B/iframe%E5%86%85%E5%B5%8CH5%E9%A1%B5%E9%9D%A2.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"iframe内嵌H5页面"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:34:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"uniapp"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"iframe内嵌H5页面\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:34:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"uniapp部分","slug":"uniapp部分","link":"#uniapp部分","children":[]},{"level":2,"title":"windows部分","slug":"windows部分","link":"#windows部分","children":[]}],"git":{"createdTime":1720591787000,"updatedTime":1720593294000,"contributors":[{"name":"test","email":"email","commits":2}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"前端/uniapp教程/iframe内嵌H5页面.md","localizedDate":"2024年7月10日","excerpt":"<p>&nbsp;</p>\\n"}');export{m as comp,b as data};
