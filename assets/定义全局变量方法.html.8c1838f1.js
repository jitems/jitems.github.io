import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.488728be.js";const t={},p=e(`<p></p><h1 id="\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\u65B9\u6CD5</h1><h4 id="\u5F53\u6211\u4EEC\u5F00\u53D1uniapp\u7684\u65F6\u5019-\u4F1A\u60F3\u5230\u5168\u5C40\u53D8\u91CF-\u5168\u7AEF\u5B58\u50A8\u5230\u5168\u5C40\u4E2D-\u8C03\u7528\u8D77\u6765\u975E\u5E38\u65B9\u4FBF" tabindex="-1"><a class="header-anchor" href="#\u5F53\u6211\u4EEC\u5F00\u53D1uniapp\u7684\u65F6\u5019-\u4F1A\u60F3\u5230\u5168\u5C40\u53D8\u91CF-\u5168\u7AEF\u5B58\u50A8\u5230\u5168\u5C40\u4E2D-\u8C03\u7528\u8D77\u6765\u975E\u5E38\u65B9\u4FBF" aria-hidden="true">#</a> \u5F53\u6211\u4EEC\u5F00\u53D1uniapp\u7684\u65F6\u5019\uFF0C\u4F1A\u60F3\u5230\u5168\u5C40\u53D8\u91CF\uFF0C\u5168\u7AEF\u5B58\u50A8\u5230\u5168\u5C40\u4E2D\uFF0C\u8C03\u7528\u8D77\u6765\u975E\u5E38\u65B9\u4FBF</h4><h2 id="main-js\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#main-js\u4EE3\u7801" aria-hidden="true">#</a> main.js\u4EE3\u7801</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">import</span> Vue from <span class="token string">&#39;vue&#39;</span>
<span class="token function">import</span> App from <span class="token string">&#39;./App&#39;</span>
Vue.config.productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

Vue.prototype.globalData <span class="token operator">=</span> <span class="token punctuation">{</span>
	 addressId:<span class="token string">&#39;&#39;</span>,//\u9ED8\u8BA4\u5730\u5740
<span class="token punctuation">}</span>
Vue.prototype.baseUrl<span class="token operator">=</span>  <span class="token string">&quot;http://XXX.XXX.XXX/&quot;</span><span class="token punctuation">;</span> // \u6D4B\u8BD5\u73AF\u5883
// Vue.prototype.baseUrl<span class="token operator">=</span>  <span class="token string">&quot;https://XXX.XXX.XXX/&quot;</span><span class="token punctuation">;</span> // \u6B63\u5F0F\u73AF\u5883
// \u5168\u5C40\u6388\u6743\u767B\u5F55
Vue.prototype.authorize <span class="token operator">=</span> <span class="token function-name function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	// \u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762
	uni.navigateTo<span class="token punctuation">(</span><span class="token punctuation">{</span>
		url: <span class="token string">&#39;/pages/logon/logon&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
App.mpType <span class="token operator">=</span> <span class="token string">&#39;app&#39;</span>

const app <span class="token operator">=</span> new Vue<span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token punctuation">..</span>.App
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app.<span class="token variable">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue\u9875\u9762\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#vue\u9875\u9762\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> vue\u9875\u9762\u4E2D\u4F7F\u7528</h2><p><strong>\u8C03\u7528\u65B9\u6CD5\u5F88\u7B80\u5355\uFF0C\u8FD9\u91CC\u505A\u4E00\u4E2A\u8C03\u7528\u5168\u5C40\u4E2D authorize() \u5168\u5C40\u6388\u6743\u767B\u5F55\u7684\u6848\u4F8B</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bannerClickEvent<span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	var self <span class="token operator">=</span> this<span class="token punctuation">;</span>
	<span class="token builtin class-name">let</span> session <span class="token operator">=</span> uni.getStorageSync<span class="token punctuation">(</span><span class="token string">&#39;SESSION&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>session <span class="token operator">!=</span><span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		self.authorize<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[p];function o(c,l){return s(),a("div",null,i)}var d=n(t,[["render",o],["__file","\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\u65B9\u6CD5.html.vue"]]);export{d as default};
