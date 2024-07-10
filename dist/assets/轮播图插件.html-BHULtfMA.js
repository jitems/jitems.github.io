import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,a as i,d as e,o as l}from"./app-Bi9sAhmd.js";const p={},c=i("p",null," ",-1),d=e(`<h1 id="轮播图插件" tabindex="-1"><a class="header-anchor" href="#轮播图插件"><span>轮播图插件</span></a></h1><p><a href="https://pub.dev/packages/carousel_slider" target="_blank" rel="noopener noreferrer">carousel_slider</a> flutter_swiper的空安全版本 轮播图</p><p>新建一个custom_swiper_pagination.dart（flutter2.x+card_swiper 此库是flutter_swiper的空安全版）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import &#39;dart:developer&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;package:flutter/material.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:card_swiper/card_swiper.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/// 自定义页面指示器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class CustomSwiperPaginationBuilder extends SwiperPlugin {</span></span>
<span class="line"><span>  // 当滚动到此时的颜色</span></span>
<span class="line"><span>  late Color? activeColor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 默认颜色</span></span>
<span class="line"><span>  late Color? color;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 每个圆点的间距</span></span>
<span class="line"><span>  final double space;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 每个圆点的大小</span></span>
<span class="line"><span>  final double size;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 特殊点的宽度</span></span>
<span class="line"><span>  final double activeSize;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  final Key? key;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  CustomSwiperPaginationBuilder(</span></span>
<span class="line"><span>      {this.color = Colors.grey,</span></span>
<span class="line"><span>      this.activeColor = Colors.blue,</span></span>
<span class="line"><span>      this.space = 3.0,</span></span>
<span class="line"><span>      this.size = 6.0,</span></span>
<span class="line"><span>      this.activeSize = 20.0,</span></span>
<span class="line"><span>      this.key});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context, SwiperPluginConfig config) {</span></span>
<span class="line"><span>    // 处理边界情况</span></span>
<span class="line"><span>    if (config.itemCount &gt; 20) {</span></span>
<span class="line"><span>      log(</span></span>
<span class="line"><span>        &#39;The itemCount is too big, we suggest use FractionPaginationBuilder &#39;</span></span>
<span class="line"><span>        &#39;instead of DotSwiperPaginationBuilder in this situation&#39;,</span></span>
<span class="line"><span>      );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int activeIndex = config.activeIndex;</span></span>
<span class="line"><span>    // 用于存放小圆点</span></span>
<span class="line"><span>    List&lt;Widget&gt; list = [];</span></span>
<span class="line"><span>    for (var i = 0; i &lt; config.itemCount; ++i) {</span></span>
<span class="line"><span>      if (activeIndex == i) {</span></span>
<span class="line"><span>        list.add(Container(</span></span>
<span class="line"><span>            key: Key(&#39;pagination_$i&#39;),</span></span>
<span class="line"><span>            margin: EdgeInsets.all(space),</span></span>
<span class="line"><span>            child: PhysicalModel(</span></span>
<span class="line"><span>              color: Colors.transparent,</span></span>
<span class="line"><span>              borderRadius: BorderRadius.circular(10),</span></span>
<span class="line"><span>              clipBehavior: Clip.antiAlias,</span></span>
<span class="line"><span>              child: Container(</span></span>
<span class="line"><span>                color: activeColor,</span></span>
<span class="line"><span>                width: activeSize,</span></span>
<span class="line"><span>                height: size,</span></span>
<span class="line"><span>              ),</span></span>
<span class="line"><span>            )));</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        list.add(Container(</span></span>
<span class="line"><span>          key: Key(&#39;pagination_$i&#39;),</span></span>
<span class="line"><span>          margin: EdgeInsets.all(space),</span></span>
<span class="line"><span>          child: ClipOval(</span></span>
<span class="line"><span>            // 圆角组件</span></span>
<span class="line"><span>            child: Container(</span></span>
<span class="line"><span>              color: color,</span></span>
<span class="line"><span>              width: size,</span></span>
<span class="line"><span>              height: size,</span></span>
<span class="line"><span>            ),</span></span>
<span class="line"><span>          ),</span></span>
<span class="line"><span>        ));</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return Stack(</span></span>
<span class="line"><span>      clipBehavior: Clip.none,</span></span>
<span class="line"><span>      children: [</span></span>
<span class="line"><span>        Positioned(</span></span>
<span class="line"><span>            left: 0,</span></span>
<span class="line"><span>            right: 0,</span></span>
<span class="line"><span>            bottom: -35.0,</span></span>
<span class="line"><span>            child: Row(</span></span>
<span class="line"><span>              key: key,</span></span>
<span class="line"><span>              mainAxisSize: MainAxisSize.min,</span></span>
<span class="line"><span>              mainAxisAlignment: MainAxisAlignment.center,</span></span>
<span class="line"><span>              children: list,</span></span>
<span class="line"><span>            ))</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用此方法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>child: Swiper(</span></span>
<span class="line"><span>          itemBuilder: (BuildContext context, int index) {</span></span>
<span class="line"><span>            var swiperItem = swiperList[index];</span></span>
<span class="line"><span>            return PhysicalModel(</span></span>
<span class="line"><span>              color: Colors.transparent,</span></span>
<span class="line"><span>              borderRadius: BorderRadius.circular(10),</span></span>
<span class="line"><span>              clipBehavior: Clip.antiAlias,</span></span>
<span class="line"><span>              child: Image.network(</span></span>
<span class="line"><span>                swiperItem?.img ?? &#39;&#39;,</span></span>
<span class="line"><span>                fit: BoxFit.cover,</span></span>
<span class="line"><span>              ),</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          viewportFraction: 0.85,</span></span>
<span class="line"><span>          scale: 0.9,</span></span>
<span class="line"><span>          autoplay: swiperList.isNotEmpty,</span></span>
<span class="line"><span>          itemCount: swiperList.length,</span></span>
<span class="line"><span>          pagination: SwiperPagination( // 此处使用自己编写的样式</span></span>
<span class="line"><span>            alignment: Alignment.bottomCenter,</span></span>
<span class="line"><span>            builder: CustomSwiperPaginationBuilder(),</span></span>
<span class="line"><span>          ),</span></span>
<span class="line"><span>          // control: const SwiperControl(),</span></span>
<span class="line"><span>        ),</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>flutter_swiper默认是在图片内部的，因为我需要它显示在外面，因此使用了Stack组件</p><p>注意：autoplay: swiperList.isNotEmpty最好使用isNotEmpty而不是true</p><img src="https://jitems.github.io/blog/bk362.png" alt="solar">`,9);function r(t,v){return l(),s("div",null,[c,a(" more "),d])}const u=n(p,[["render",r],["__file","轮播图插件.html.vue"]]),b=JSON.parse('{"path":"/flutter%E6%95%99%E7%A8%8B/%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8/%E8%BD%AE%E6%92%AD%E5%9B%BE%E6%8F%92%E4%BB%B6.html","title":"轮播图插件","lang":"zh-CN","frontmatter":{"title":"轮播图插件","category":["前端"],"tag":["flutter"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/flutter%E6%95%99%E7%A8%8B/%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8/%E8%BD%AE%E6%92%AD%E5%9B%BE%E6%8F%92%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"轮播图插件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:34:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"flutter"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"轮播图插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:34:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1669891630000,"updatedTime":1720593294000,"contributors":[{"name":"test","email":"email","commits":2}]},"readingTime":{"minutes":1.26,"words":377},"filePathRelative":"flutter教程/插件使用/轮播图插件.md","localizedDate":"2022年12月1日","excerpt":"<p>&nbsp;</p>\\n"}');export{u as comp,b as data};
