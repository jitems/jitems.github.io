import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.488728be.js";var e="/assets/bk23.fd2506c7.png",p="/assets/bk24.4b095ba4.png",o="/assets/bk25.50dc93de.png",c="/assets/bk26.216c7cb5.png",l="/assets/bk27.6e1e8bf7.png";const i={},r=t('<p></p><h1 id="\u5904\u7406ios\u5E95\u90E8\u6A2A\u6761\u5B89\u5168\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406ios\u5E95\u90E8\u6A2A\u6761\u5B89\u5168\u533A\u57DF" aria-hidden="true">#</a> \u5904\u7406IOS\u5E95\u90E8\u6A2A\u6761\u5B89\u5168\u533A\u57DF</h1><h3 id="\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65" aria-hidden="true">#</a> \u540C\u6B65</h3><p>uni.getSystemInfo(OBJECT)</p><h3 id="\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65" aria-hidden="true">#</a> \u5F02\u6B65</h3><p>uni.getSystemInfoSync() <img src="'+e+'" alt="solar"><img src="'+p+'" alt="solar"><img src="'+o+`" alt="solar"></p><h3 id="\u4F7F\u7528\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F\u4E00</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>view style<span class="token operator">=</span><span class="token string">&quot;background-color: red;&quot;</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{height:heightOne+&#39;px&#39;}&quot;</span><span class="token operator">&gt;</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>view style<span class="token operator">=</span><span class="token string">&quot;background-color: yellow;&quot;</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{height:heightTwo+&#39;px&#39;}&quot;</span><span class="token operator">&gt;</span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">{</span>
				<span class="token literal-property property">heightOne</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token literal-property property">heightTwo</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
			
			<span class="token keyword">switch</span> <span class="token punctuation">(</span>uni<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>platform<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			    <span class="token keyword">case</span> <span class="token string">&#39;ios&#39;</span><span class="token operator">:</span>
			        <span class="token comment">// \u5F02\u6B65\u65B9\u5F0F</span>
			        uni<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			            <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			        		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>safeArea<span class="token punctuation">)</span>
			        		self<span class="token punctuation">.</span>heightOne <span class="token operator">=</span> res<span class="token punctuation">.</span>safeArea<span class="token punctuation">.</span>top<span class="token punctuation">;</span><span class="token comment">//\u5934\u90E8\u533A\u57DF</span>
			        		self<span class="token punctuation">.</span>heightTwo <span class="token operator">=</span> res<span class="token punctuation">.</span>safeArea<span class="token punctuation">.</span>height<span class="token punctuation">;</span><span class="token comment">//\u5185\u5BB9\u533A\u57DF</span>
			            <span class="token punctuation">}</span>
			        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			        
			        <span class="token comment">//\u540C\u6B65\u65B9\u5F0F</span>
			        <span class="token comment">// self.heightOne.uni.getSystemInfoSync().safeArea.top</span>
			        <span class="token comment">// self.heightTwo.uni.getSystemInfoSync().safeArea.height</span>
			    <span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5982\u4E0B\uFF1A <img src="`+c+`" alt="solar"></p><h3 id="\u4F7F\u7528\u65B9\u5F0F\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F\u4E8C" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F\u4E8C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;contents&quot;</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{bottom:heightOne+&#39;px&#39;}&quot;</span><span class="token operator">&gt;</span>
			
		<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">{</span>
				<span class="token literal-property property">heightOne</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token literal-property property">heightTwo</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
			
			<span class="token keyword">switch</span> <span class="token punctuation">(</span>uni<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>platform<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			    <span class="token keyword">case</span> <span class="token string">&#39;ios&#39;</span><span class="token operator">:</span>
			        <span class="token comment">// \u5F02\u6B65\u65B9\u5F0F</span>
			        uni<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			            <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			        		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>safeArea<span class="token punctuation">)</span>
							<span class="token keyword">let</span> sHeight <span class="token operator">=</span> res<span class="token punctuation">.</span>screenHeight<span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u5C4F\u5E55\u9AD8\u5EA6</span>
							<span class="token keyword">let</span> sTop <span class="token operator">=</span> res<span class="token punctuation">.</span>safeArea<span class="token punctuation">.</span>bottom<span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u5B89\u5168\u533A\u57DF\u5E95\u90E8\u9AD8\u5EA6</span>
							self<span class="token punctuation">.</span>heightOne <span class="token operator">=</span> sHeight <span class="token operator">-</span> sTop<span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u5B89\u5168\u533A\u57DF\u8DDD\u79BB\u5E95\u90E8\u7684\u9AD8\u5EA6</span>
			            <span class="token punctuation">}</span>
			        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			        
			        <span class="token comment">//\u540C\u6B65\u65B9\u5F0F</span>
			        <span class="token comment">// self.heightOne.uni.getSystemInfoSync().safeArea.top</span>
			        <span class="token comment">// self.heightTwo.uni.getSystemInfoSync().safeArea.height</span>
			    <span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
	<span class="token punctuation">.</span>contents<span class="token punctuation">{</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
		<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 10rpx<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5982\u4E0B\uFF1A <img src="`+l+'" alt="solar"></p>',12),u=[r];function k(d,v){return s(),a("div",null,u)}var h=n(i,[["render",k],["__file","\u5904\u7406IOS\u5E95\u90E8\u6A2A\u6761\u5B89\u5168\u533A\u57DF.html.vue"]]);export{h as default};
