import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.488728be.js";const e={},i=t(`<h1 id="on\u4E0Eemit\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#on\u4E0Eemit\u4F7F\u7528" aria-hidden="true">#</a> on\u4E0Eemit\u4F7F\u7528</h1><p>\u5728\u9875\u9762\u4E0E\u9875\u9762\u4E4B\u95F4\u901A\u8BAF\u65F6\uFF0C\u5F88\u591A\u4EBA\u4F1A\u76F4\u63A5\u9009\u62E9\u4F7F\u7528\u5728navigato\u7684\u65F6\u5019\u76F4\u63A5\u62FC\u63A5\u5B57\u7B26\u4E32\u6765\u4F20\u9012\u3002\u53EF\u662F\u5F53\u9700\u8981\u4F20\u4F9D\u4E2A\u6BD4\u8F83\u591A\u6570\u636E\u7684\u7684\u5BF9\u8C61\u7684\u65F6\u5019\u8FD9\u4E2A\u65B9\u5F0F\u5C31\u4E0D\u662F\u5F88\u7BA1\u7528\u4E86\uFF0C\u4E3A\u6B64uniapp\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u9875\u9762\u4E0E\u9875\u9762\u4E4B\u95F4\u901A\u8BAF\u7684\u6781\u4E3A\u7B80\u4FBF\u7684\u65B9\u6CD5\u3002</p><p>\u6BD4\u5982\u6211\u5728\u4E0B\u8BA2\u5355\u9875\u9762\u7684\u65F6\u5019\u9700\u8981\u7528\u6237\u9009\u62E9\u4E00\u4E2A\u5730\u5740\u53BB\u914D\u9001\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u70B9\u51FB\u4E4B\u540E\u8DF3\u8F6C\u5230\u9009\u62E9\u6536\u8D27\u5730\u5740\u9875\u9762\u3002\u800C\u5728\u9009\u62E9\u5B8C\u4E86\u6536\u8D27\u5730\u5740\u4EE5\u540E\u9700\u8981\u5173\u95ED\u90A3\u4E2A\u9875\u9762\u8FD4\u56DE\u8BE5\u8BA2\u5355\u9875\u9762\u3002\u56E0\u6B64\u5728\u8BE5\u8BA2\u5355\u9875\u9762\u6211\u4EEC\u9700\u8981\u5F00\u542F\u76D1\u542C\u7528\u6237\u9009\u62E9\u5730\u5740\u7684\u4E8B\u4EF6\u3002\u6CE8\u610F\u5728\u8BA2\u5355\u9875\u9762\u5378\u8F7D\u7684\u65F6\u5019\u4E5F\u8981\u8BB0\u5F97\u5173\u95ED\u8BE5\u76D1\u542C\u3002</p><p>\u4E0B\u9762\u4E3A\u8BA2\u5355\u9875\u9762\u7684\u4EE3\u7801\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function-name function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			
	//\u5F00\u542F\u76D1\u542C\u9009\u62E9\u6536\u8D27\u5730\u5740\u4E8B\u4EF6
	uni.<span class="token variable">$on</span><span class="token punctuation">(</span><span class="token string">&#39;choosePath&#39;</span>,<span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>
		this.path <span class="token operator">=</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>,
		
//\u9875\u9762\u5378\u8F7D
	<span class="token function-name function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		//\u5173\u95ED\u76D1\u542C\u9009\u62E9\u6536\u8D27\u5730\u5740\u4E8B\u4EF6
	uni.<span class="token variable">$off</span><span class="token punctuation">(</span><span class="token string">&#39;choosePath&#39;</span>,<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>
		console.log<span class="token punctuation">(</span><span class="token string">&#39;\u5173\u95ED\u76D1\u542C\u9009\u62E9\u6536\u8D27\u5730\u5740&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>,
	
methods: <span class="token punctuation">{</span>
	<span class="token function-name function">openPathList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	    uni.navigateTo<span class="token punctuation">(</span><span class="token punctuation">{</span>
	        url: <span class="token string">&#39;../user-path-list/user-path-list?type=choose&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>,
<span class="token punctuation">}</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u9009\u62E9\u5730\u5740\u7684\u9875\u9762\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>onLoad<span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	if<span class="token punctuation">(</span>option.type<span class="token operator">==</span><span class="token operator">=</span><span class="token string">&#39;choose&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		this.isChoose <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>,
 
methods:<span class="token punctuation">{</span>
    //\u9009\u62E9\u6536\u83B7\u5730\u5740
	choosePath<span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">{</span>
		if<span class="token punctuation">(</span>this.isChoose<span class="token punctuation">)</span><span class="token punctuation">{</span>
			//\u901A\u77E5\u8BA2\u5355\u9875\u9762\u4FEE\u6539\u5730\u5740
			uni.<span class="token variable">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;choosePath&#39;</span>,item<span class="token punctuation">)</span>
			//\u5173\u95ED\u5F53\u524D\u9875\u9762
			uni.navigateBack<span class="token punctuation">(</span><span class="token punctuation">{</span>
				delta: <span class="token number">1</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[i];function o(c,l){return s(),a("div",null,p)}var r=n(e,[["render",o],["__file","on\u4E0Eemit\u4F7F\u7528.html.vue"]]);export{r as default};
