import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.488728be.js";var i="/assets/bk17.faf6ec02.png";const t={},l=e('<h1 id="\u94F6\u884C\u5361\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u94F6\u884C\u5361\u63D2\u4EF6" aria-hidden="true">#</a> \u94F6\u884C\u5361\u63D2\u4EF6</h1><p>1.npm\u4E0B\u8F7D\uFF08\u6211\u4EEC\u4EE5\u94F6\u884C\u5361\u5361\u53F7\u67E5\u8BE2\u94F6\u884C\u7C7B\u578B\u548C\u5361\u7C7B\u578B\u63D2\u4EF6\uFF1Abankcardinfo\u4E3A\u4F8B\uFF09\uFF1A npm install bankcardinfo --save-dev 2.\u4E0B\u8F7D\u540E\uFF0C\u4F60\u53EF\u4EE5\u5728package.json\u6587\u4EF6\u91CC\u9762\u6765\u67E5\u770B\u662F\u5426\u4E0B\u8F7D\u6210\u529F\uFF08\u5982\u679C\u6709\u5C31\u6210\u529F\u4E86\uFF09 <img src="'+i+`" alt="solar"></p><p>\u6CE8\u610F\uFF1A\u4F60\u5982\u679C\u5728\u6587\u4EF6\u4E2D\u627E\u4E0D\u5230package.json\u6587\u4EF6\uFF1A\u8BF7\u5728\u9879\u76EE\u6839\u76EE\u5F55\u6267\u884C\u547D\u4EE4\u521D\u59CB\u5316npm\u5DE5\u7A0B\uFF1A</p><p>npm init -y uniapp\u4E2D \u6839\u636E\u94F6\u884C\u5361\u5361\u53F7\u67E5\u8BE2\u94F6\u884C\u7C7B\u578B\u548C\u5361\u7C7B\u578B(javascript\u4E5F\u53EF\u4EE5\u7528)</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>import BIN from &#39;bankcardinfo&#39;
methods:{
	// \u5361\u53F7\u83B7\u53D6
	numberCard(e){
	const self = this;
	// \u83B7\u53D6\u94F6\u884C\u5361\u7C7B\u578B
	BIN.getBankBin(self.cardNumber).then(function(res){
		self.cardNum = res.bankName+&#39;   &#39;+res.cardTypeName
			console.log(res)
		}).catch(function(err){
			self.cardNum = &#39;\u50A8\u84C4\u5361&#39;
			// console.log(err)
		})
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6210\u529F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
	<span class="token string">&quot;bankName&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;\u4E2D\u56FD\u5EFA\u8BBE\u94F6\u884C&quot;</span>,
	<span class="token string">&quot;bankCode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;CCB&quot;</span>,
	<span class="token string">&quot;cardType&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;DC&quot;</span>,
	<span class="token string">&quot;cardTypeName&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;\u50A8\u84C4\u5361&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6839\u636E\u94F6\u884C\u4EE3\u7801\u83B7\u53D6\u94F6\u884Clogo</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://apimg.alipay.com/combo.png?d<span class="token operator">=</span>cashier<span class="token operator">&amp;</span><span class="token assign-left variable">t</span><span class="token operator">=</span>CMB
 
CCB\u662F\u6307\u94F6\u884C\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F\u4E0A\u9762\u83B7\u53D6\u5230\u7684bankCode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[l];function c(d,o){return s(),a("div",null,r)}var m=n(t,[["render",c],["__file","\u94F6\u884C\u5361\u63D2\u4EF6.html.vue"]]);export{m as default};
