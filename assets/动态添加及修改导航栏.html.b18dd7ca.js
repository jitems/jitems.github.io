import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as t,a}from"./app.488728be.js";const e={},i=a(`<h1 id="\u52A8\u6001\u6DFB\u52A0\u53CA\u4FEE\u6539\u5BFC\u822A\u680F" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u6DFB\u52A0\u53CA\u4FEE\u6539\u5BFC\u822A\u680F" aria-hidden="true">#</a> \u52A8\u6001\u6DFB\u52A0\u53CA\u4FEE\u6539\u5BFC\u822A\u680F</h1><p>\u5728pages.json</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
			<span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pages/cart/cart&quot;</span>,
			<span class="token string">&quot;style&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">&quot;navigationBarTitleText&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;\u8D2D\u7269\u8F66&quot;</span>,
				<span class="token string">&quot;navigationBarBackgroundColor&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;#FFFFFF&quot;</span>,
				<span class="token string">&quot;app-plus&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				    <span class="token string">&quot;titleNView&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>  
				       <span class="token string">&quot;titleAlign&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;left&quot;</span>,
					   <span class="token string">&quot;titleSize&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;40rpx&quot;</span>,
					   // <span class="token string">&quot;autoBackButton&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;false&quot;</span>,
					   <span class="token string">&quot;buttons&quot;</span>:<span class="token punctuation">[</span>
					   	<span class="token punctuation">{</span>
					   		<span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;\u7F16\u8F91&quot;</span>,
					   		<span class="token string">&quot;float&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;right&quot;</span>,//\u8868\u793A\u663E\u793A\u5728\u5BFC\u822A\u680F\u53F3\u4FA7\uFF0C\uFF0C\u5DE6\u4FA7\u5C31\u6539\u6210left&#39;
							<span class="token string">&quot;fontSize&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;32rpx&quot;</span>
					   	<span class="token punctuation">}</span>
					   <span class="token punctuation">]</span>
				    <span class="token punctuation">}</span>  
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u5B9E\u73B0\u6548\u679C\u7684\u9875\u9762\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u52A8\u6001\u4FEE\u6539\u53F3\u4FA7\u6216\u5DE6\u4FA7\u5185\u5BB9
var webView <span class="token operator">=</span> this.<span class="token variable">$mp</span>.page.<span class="token variable">$getAppWebview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
// \u4FEE\u6539buttons  
// index: \u6309\u94AE\u7D22\u5F15, style <span class="token punctuation">{</span>WebviewTitleNViewButtonStyles <span class="token punctuation">}</span>  
webView.setTitleNViewButtonStyle<span class="token punctuation">(</span><span class="token number">0</span>, <span class="token punctuation">{</span>  
    text: <span class="token string">&#39;hello&#39;</span>,  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
// \u4FEE\u6539\u6309\u94AE\u4E0A\u7684\u89D2\u6807  
// index: \u6309\u94AE\u7D22\u5F15, text: \u89D2\u6807\u6587\u672C\u5185\u5BB9  
webView.setTitleNViewButtonBadge<span class="token punctuation">(</span><span class="token punctuation">{</span>  
    index: <span class="token number">0</span>,  
    text: <span class="token number">10</span>,  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function p(o,c){return s(),t("div",null,l)}var d=n(e,[["render",p],["__file","\u52A8\u6001\u6DFB\u52A0\u53CA\u4FEE\u6539\u5BFC\u822A\u680F.html.vue"]]);export{d as default};
