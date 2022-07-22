import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as t,a}from"./app.488728be.js";var e="/assets/bk14.47ab2738.png",p="/assets/bk15.8779740f.png",i="/assets/bk16.a4a34e9e.png";const o={},l=a('<p></p><h1 id="\u81EA\u5B9A\u4E49\u8FD4\u56DE\u548C\u7269\u7406\u8FD4\u56DE" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8FD4\u56DE\u548C\u7269\u7406\u8FD4\u56DE" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u8FD4\u56DE\u548C\u7269\u7406\u8FD4\u56DE</h1><p>\u5728pages.json\u4E2D\u53EF\u4EE5\u4F7F\u7528\u81EA\u5DF1\u53BB\u627E\u7684\u56FE\u6807\u6837\u5F0F</p><img src="'+e+'" alt="solar"><img src="'+p+'" alt="solar"><img src="'+i+`" alt="solar"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
			<span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pages/myOrder/myOrder&quot;</span>,
			<span class="token string">&quot;style&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				<span class="token string">&quot;navigationBarTitleText&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;\u6211\u7684\u8BA2\u5355&quot;</span>,
				<span class="token string">&quot;navigationBarBackgroundColor&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;#fff&quot;</span>,
				<span class="token string">&quot;app-plus&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
				    <span class="token string">&quot;titleNView&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>  
						<span class="token string">&quot;autoBackButton&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;false&quot;</span>,
						<span class="token string">&quot;buttons&quot;</span>:<span class="token punctuation">[</span>
							<span class="token punctuation">{</span>
								<span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;<span class="token entity" title="\\ue601">\\ue601</span>&quot;</span>,
								<span class="token string">&quot;fontSrc&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;/static/iconfont.ttf&quot;</span>,
								<span class="token string">&quot;float&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;left&quot;</span>,
								<span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;none&quot;</span>
							<span class="token punctuation">}</span>
						<span class="token punctuation">]</span>
				    <span class="token punctuation">}</span>  
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728vue\u9875\u9762\u4E2D\u4E0Emethods\u540C\u7EA7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u81EA\u5B9A\u4E49\u8FD4\u56DE\u4E8B\u4EF6,\u8DF3\u8F6C\u5230\u9996\u9875
		onNavigationBarButtonTap: function<span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token builtin class-name">let</span> routes <span class="token operator">=</span> getCurrentPages<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token builtin class-name">let</span> curRoute <span class="token operator">=</span> routes<span class="token punctuation">[</span>routes.length - <span class="token number">2</span><span class="token punctuation">]</span>.route
			// \u83B7\u53D6\u4E0A\u4E00\u4E2A\u9875\u9762\u8DEF\u5F84
			console.log<span class="token punctuation">(</span>curRoute<span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>curRoute <span class="token operator">!=</span> <span class="token string">&quot;pages/my/my&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				uni.switchTab<span class="token punctuation">(</span><span class="token punctuation">{</span>
					url: <span class="token string">&#39;/pages/my/my&#39;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				uni.navigateBack<span class="token punctuation">(</span><span class="token punctuation">{</span>
				    delta: <span class="token number">1</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>,
		// \u7269\u7406\u8FD4\u56DE
		<span class="token function-name function">onBackPress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> //\u4E0Emethods\u540C\u7EA7
			//\u5C3D\u91CF\u5C11\u4F7F\u7528uni.reLaunch
			<span class="token builtin class-name">let</span> routes <span class="token operator">=</span> getCurrentPages<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token builtin class-name">let</span> curRoute <span class="token operator">=</span> routes<span class="token punctuation">[</span>routes.length - <span class="token number">2</span><span class="token punctuation">]</span>.route
			// \u83B7\u53D6\u4E0A\u4E00\u4E2A\u9875\u9762\u8DEF\u5F84
			<span class="token keyword">if</span> <span class="token punctuation">(</span>curRoute <span class="token operator">!=</span> <span class="token string">&quot;pages/my/my&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				uni.switchTab<span class="token punctuation">(</span><span class="token punctuation">{</span>
					url: <span class="token string">&#39;/pages/my/my&#39;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				uni.navigateBack<span class="token punctuation">(</span><span class="token punctuation">{</span>
				    delta: <span class="token number">1</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token builtin class-name">return</span> <span class="token boolean">true</span> //\u53EA\u6709\u5728\u8BE5\u51FD\u6570\u4E2D\u8FD4\u56DE\u503C\u4E3A <span class="token boolean">true</span> \u65F6\uFF0C\u624D\u8868\u793A\u4E0D\u6267\u884C\u9ED8\u8BA4\u7684\u8FD4\u56DE\uFF0C\u81EA\u884C\u5904\u7406\u6B64\u65F6\u7684\u4E1A\u52A1\u903B\u8F91
		<span class="token punctuation">}</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[l];function u(r,d){return s(),t("div",null,c)}var m=n(o,[["render",u],["__file","\u81EA\u5B9A\u4E49\u8FD4\u56DE\u548C\u7269\u7406\u8FD4\u56DE.html.vue"]]);export{m as default};
