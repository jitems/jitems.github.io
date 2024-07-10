import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as a,a as t,d as e,o as i}from"./app-Bi9sAhmd.js";const l={},p=t("p",null," ",-1),o=e(`<h1 id="vscodo代码片段" tabindex="-1"><a class="header-anchor" href="#vscodo代码片段"><span>vscodo代码片段</span></a></h1><h2 id="新建代码片段" tabindex="-1"><a class="header-anchor" href="#新建代码片段"><span>新建代码片段</span></a></h2><p>使用快捷键ctrl+shift+p打开命令行窗口，选择代码片段</p><img src="https://jitems.github.io/blog/bk571.png" alt="solar"><p>选择新代码片段</p><img src="https://jitems.github.io/blog/bk572.png" alt="solar"><p>输入代码片段名称，回车</p><img src="https://jitems.github.io/blog/bk573.png" alt="solar"><p>vue3.2模板代码片段</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;Print to vue3.2&quot;: {</span></span>
<span class="line"><span>		&quot;prefix&quot;: &quot;vue3.2&quot;,</span></span>
<span class="line"><span>		&quot;body&quot;: [</span></span>
<span class="line"><span>			&quot;&lt;template&gt;&quot;,</span></span>
<span class="line"><span>			&quot;  &lt;div class=\\&quot;container\\&quot;&gt;\\n&quot;,</span></span>
<span class="line"><span>			&quot;  &lt;/div&gt;&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/template&gt;\\n&quot;,</span></span>
<span class="line"><span>			&quot;&lt;script setup lang=\\&quot;ts\\&quot;&gt;&quot;,</span></span>
<span class="line"><span>			&quot;import { ref, reactive, onMounted } from &#39;vue&#39;&quot;,</span></span>
<span class="line"><span>			&quot;import { Plus } from &#39;@element-plus/icons-vue&#39;&quot;,</span></span>
<span class="line"><span>			&quot;import { FormRules,FormInstance,ElMessageBox,ElMessage } from &#39;element-plus&#39;\\n&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/script&gt;\\n&quot;,</span></span>
<span class="line"><span>			&quot;&lt;style scoped lang=\\&quot;scss\\&quot;&gt;&quot;,</span></span>
<span class="line"><span>				&quot;.container{&quot;,</span></span>
<span class="line"><span>					&quot;  height: 100%;&quot;,</span></span>
<span class="line"><span>				&quot;}\\n&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/style&gt;&quot;,</span></span>
<span class="line"><span>		],</span></span>
<span class="line"><span>		&quot;description&quot;: &quot;vue3.2 output to vue3.2模板&quot;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在页面中输入 “vue3.2”，即可弹出对应的代码片段 <img src="https://jitems.github.io/blog/bk574.png" alt="solar"></p><h2 id="代码片段说明" tabindex="-1"><a class="header-anchor" href="#代码片段说明"><span>代码片段说明</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>prefix      :代码片段名字，就是创建这个片段的指令。</span></span>
<span class="line"><span>body        :你想在页面上输出啥就往这里面加啥，不过得按规矩来哦。　　　</span></span>
<span class="line"><span>\${数字}    	:生成代码后光标的位置，1表示光标开始的序号，按住tab键可切换光标位置。</span></span>
<span class="line"><span>\\n          :换行符。</span></span>
<span class="line"><span>\\           :转义符号。</span></span>
<span class="line"><span>&#39;&#39;          :用来控制代码的缩进。</span></span>
<span class="line"><span>description :描述,输入创建指令后编辑器显示出提示信息。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用代码片段" tabindex="-1"><a class="header-anchor" href="#常用代码片段"><span>常用代码片段</span></a></h2><p>vue2.0</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;Print to vue2.0&quot;: {</span></span>
<span class="line"><span>		&quot;prefix&quot;: &quot;vue2.0&quot;,</span></span>
<span class="line"><span>		&quot;body&quot;: [</span></span>
<span class="line"><span>			&quot;&lt;template&gt;&quot;,</span></span>
<span class="line"><span>			&quot;  &lt;div class=\\&quot;wrapper\\&quot;&gt;&quot;,</span></span>
<span class="line"><span>			&quot;    hello\${1}&quot;,</span></span>
<span class="line"><span>			&quot;  &lt;/div&gt;&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/template&gt;\\n&quot;,</span></span>
<span class="line"><span>			&quot;&lt;script&gt;&quot;,</span></span>
<span class="line"><span>			&quot;export default {&quot;,</span></span>
<span class="line"><span>			&quot;  name:\\&quot;\\&quot;,&quot;,</span></span>
<span class="line"><span>			&quot;  components: {}&quot;,</span></span>
<span class="line"><span>			&quot;  data() {&quot;,</span></span>
<span class="line"><span>			&quot;    return {\\n\${2}&quot;,</span></span>
<span class="line"><span>			&quot;    }&quot;,</span></span>
<span class="line"><span>			&quot;  },&quot;,</span></span>
<span class="line"><span>			&quot;  filters: {\\n\${3}&quot;,</span></span>
<span class="line"><span>			&quot;  }&quot;,</span></span>
<span class="line"><span>			&quot;  computed: {\\n\${4}&quot;,</span></span>
<span class="line"><span>			&quot;  }&quot;,</span></span>
<span class="line"><span>			&quot;  watch: {\\n\${5}&quot;,</span></span>
<span class="line"><span>			&quot;  }&quot;,</span></span>
<span class="line"><span>			&quot;  created () {\\n\${6}&quot;,</span></span>
<span class="line"><span>			&quot;  }&quot;,</span></span>
<span class="line"><span>			&quot;  mounted () {\\n\${7}&quot;,</span></span>
<span class="line"><span>			&quot;  }&quot;,</span></span>
<span class="line"><span>			&quot;  methods: {\\n\${8}&quot;,</span></span>
<span class="line"><span>			&quot;  }&quot;,</span></span>
<span class="line"><span>			&quot;}&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/script&gt;\\n&quot;,</span></span>
<span class="line"><span>			&quot;&lt;style scoped&gt;\\n\${9}&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/style&gt;&quot;,</span></span>
<span class="line"><span>		],</span></span>
<span class="line"><span>		&quot;description&quot;: &quot;vue2.0 output to vue2.0模板&quot;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3.0</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;Print to vue3.0&quot;: {</span></span>
<span class="line"><span>		&quot;prefix&quot;: &quot;vue3.0&quot;,</span></span>
<span class="line"><span>		&quot;body&quot;: [</span></span>
<span class="line"><span>			&quot;&lt;template&gt;&quot;,</span></span>
<span class="line"><span>			&quot;  &lt;div class=\\&quot;wrapper\\&quot;&gt;&quot;,</span></span>
<span class="line"><span>			&quot;    hello\${1}&quot;,</span></span>
<span class="line"><span>			&quot;  &lt;/div&gt;&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/template&gt;\\n&quot;,</span></span>
<span class="line"><span>			&quot;&lt;script lang=\\&quot;ts\\&quot;&gt;&quot;,</span></span>
<span class="line"><span>			&quot;export default {&quot;,</span></span>
<span class="line"><span>			&quot;  name:\\&quot;\\&quot;,&quot;,</span></span>
<span class="line"><span>			&quot;  setup() {&quot;,</span></span>
<span class="line"><span>			&quot;    return {\\n\${2}&quot;,</span></span>
<span class="line"><span>			&quot;    }&quot;,</span></span>
<span class="line"><span>			&quot;  },&quot;,</span></span>
<span class="line"><span>			&quot;}&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/script&gt;\\n&quot;,</span></span>
<span class="line"><span>			&quot;&lt;style scoped&gt;\\n\${3}&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/style&gt;&quot;,</span></span>
<span class="line"><span>		],</span></span>
<span class="line"><span>		&quot;description&quot;: &quot;vue3.0 output to vue3.0模板&quot;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除代码片段文件" tabindex="-1"><a class="header-anchor" href="#删除代码片段文件"><span>删除代码片段文件</span></a></h2><p>由于已经创建的代码片段文件会存在本地，因此不能在vscode中直接删除，需要按照以下方法才能删除</p><p><strong>1.1.打开显示导航痕迹</strong></p><img src="https://jitems.github.io/blog/bk575.png" alt="solar"><p><strong>1.2 在目录下找到需要删除的文件</strong> 直接删除即可</p><img src="https://jitems.github.io/blog/bk576.png" alt="solar">`,24);function u(d,c){return i(),n("div",null,[p,a(" more "),o])}const m=s(l,[["render",u],["__file","vscodo代码片段.html.vue"]]),q=JSON.parse('{"path":"/%E5%85%B6%E5%AE%83/%E6%8A%80%E5%B7%A7/vscodo%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.html","title":"vscodo代码片段","lang":"zh-CN","frontmatter":{"title":"vscodo代码片段","category":["其它"],"tag":["技巧"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%85%B6%E5%AE%83/%E6%8A%80%E5%B7%A7/vscodo%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"vscodo代码片段"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:34:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"技巧"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vscodo代码片段\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:34:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"新建代码片段","slug":"新建代码片段","link":"#新建代码片段","children":[]},{"level":2,"title":"代码片段说明","slug":"代码片段说明","link":"#代码片段说明","children":[]},{"level":2,"title":"常用代码片段","slug":"常用代码片段","link":"#常用代码片段","children":[]},{"level":2,"title":"删除代码片段文件","slug":"删除代码片段文件","link":"#删除代码片段文件","children":[]}],"git":{"createdTime":1682047696000,"updatedTime":1720593294000,"contributors":[{"name":"test","email":"email","commits":2}]},"readingTime":{"minutes":1.63,"words":489},"filePathRelative":"其它/技巧/vscodo代码片段.md","localizedDate":"2023年4月21日","excerpt":"<p>&nbsp;</p>\\n"}');export{m as comp,q as data};
