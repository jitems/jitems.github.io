import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as a,a as i,d as l,o as e}from"./app-Bi9sAhmd.js";const p={},t=i("p",null," ",-1),c=l(`<h1 id="gcj-02和wgs-84互转" tabindex="-1"><a class="header-anchor" href="#gcj-02和wgs-84互转"><span>GCJ-02和WGS-84互转</span></a></h1><h1 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h1><p>在uniapp中直接使用GCJ-02会出现很大几率获取不到当前定位，所以在网上找到GCJ-02和WGS-84互转教程</p><h1 id="封装js代码" tabindex="-1"><a class="header-anchor" href="#封装js代码"><span>封装JS代码</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>class GCJ02_WGS84 {</span></span>
<span class="line"><span>    static x_pi = 3.14159265358979324 * 3000.0 / 180.0</span></span>
<span class="line"><span>    static pi = 3.1415926535897932384626 //π</span></span>
<span class="line"><span>    static a = 6378245.0 // 长半轴</span></span>
<span class="line"><span>    static ee = 0.00669342162296594323 // 扁率</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static wgs84togcj02(lng, lat) {</span></span>
<span class="line"><span>        let dlat = this.transformlat(lng - 105.0, lat - 35.0)</span></span>
<span class="line"><span>        let dlng = this.transformlng(lng - 105.0, lat - 35.0)</span></span>
<span class="line"><span>        let radlat = lat / 180.0 * this.pi</span></span>
<span class="line"><span>        let magic = Math.sin(radlat)</span></span>
<span class="line"><span>        magic = 1 - this.ee * magic * magic</span></span>
<span class="line"><span>        let sqrtmagic = Math.sqrt(magic)</span></span>
<span class="line"><span>        dlat = (dlat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtmagic) * this.pi)</span></span>
<span class="line"><span>        dlng = (dlng * 180.0) / (this.a / sqrtmagic * Math.cos(radlat) * this.pi)</span></span>
<span class="line"><span>        let mglat = lat + dlat</span></span>
<span class="line"><span>        let mglng = lng + dlng</span></span>
<span class="line"><span>        return [mglng, mglat]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static gcj02towgs84(lng, lat) {</span></span>
<span class="line"><span>        // GCJ02(火星坐标系) 转GPS84: param lng: 火星坐标系的经度: param lat: 火星坐标系纬度: return :</span></span>
<span class="line"><span>        let dlat = this.transformlat(lng - 105.0, lat - 35.0)</span></span>
<span class="line"><span>        let dlng = this.transformlng(lng - 105.0, lat - 35.0)</span></span>
<span class="line"><span>        let radlat = lat / 180.0 * this.pi</span></span>
<span class="line"><span>        let magic = Math.sin(radlat)</span></span>
<span class="line"><span>        magic = 1 - this.ee * magic * magic</span></span>
<span class="line"><span>        let sqrtmagic = Math.sqrt(magic)</span></span>
<span class="line"><span>        dlat = (dlat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtmagic) * this.pi)</span></span>
<span class="line"><span>        dlng = (dlng * 180.0) / (this.a / sqrtmagic * Math.cos(radlat) * this.pi)</span></span>
<span class="line"><span>        let mglat = lat + dlat</span></span>
<span class="line"><span>        let mglng = lng + dlng</span></span>
<span class="line"><span>        return [lng * 2 - mglng, lat * 2 - mglat]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static transformlat(lng, lat) {</span></span>
<span class="line"><span>        let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))</span></span>
<span class="line"><span>        ret += (20.0 * Math.sin(6.0 * lng * this.pi) + 20.0 * Math.sin(2.0 * lng * this.pi)) * 2.0 / 3.0</span></span>
<span class="line"><span>        ret += (20.0 * Math.sin(lat * this.pi) + 40.0 * Math.sin(lat / 3.0 * this.pi)) * 2.0 / 3.0</span></span>
<span class="line"><span>        ret += (160.0 * Math.sin(lat / 12.0 * this.pi) + 320 * Math.sin(lat * this.pi / 30.0)) * 2.0 / 3.0</span></span>
<span class="line"><span>        return ret</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static transformlng(lng, lat) {</span></span>
<span class="line"><span>        let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))</span></span>
<span class="line"><span>        ret += (20.0 * Math.sin(6.0 * lng * this.pi) + 20.0 *</span></span>
<span class="line"><span>            Math.sin(2.0 * lng * this.pi)) * 2.0 / 3.0</span></span>
<span class="line"><span>        ret += (20.0 * Math.sin(lng * this.pi) + 40.0 *</span></span>
<span class="line"><span>            Math.sin(lng / 3.0 * this.pi)) * 2.0 / 3.0</span></span>
<span class="line"><span>        ret += (150.0 * Math.sin(lng / 12.0 * this.pi) + 300.0 *</span></span>
<span class="line"><span>            Math.sin(lng / 30.0 * this.pi)) * 2.0 / 3.0</span></span>
<span class="line"><span>        return ret</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default GCJ02_WGS84</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="调用方法" tabindex="-1"><a class="header-anchor" href="#调用方法"><span>调用方法</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>//uniapp中使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uni.getLocation({</span></span>
<span class="line"><span>	geocode: false, //默认false，是否解析地址信息</span></span>
<span class="line"><span>	isHighAccuracy: true,</span></span>
<span class="line"><span>	success: function(res) {</span></span>
<span class="line"><span>		// 转换经纬度</span></span>
<span class="line"><span>		let gcj02towgs84 = wgs84.wgs84togcj02(res.longitude,res.latitude)</span></span>
<span class="line"><span>		if (that.latitude == &#39;&#39; || that.longitude == &#39;&#39;) {</span></span>
<span class="line"><span>			that.latitude = gcj02towgs84[1]</span></span>
<span class="line"><span>			that.longitude = gcj02towgs84[0]</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		let markert = [{</span></span>
<span class="line"><span>			id: 2,</span></span>
<span class="line"><span>			latitude: gcj02towgs84[1], //维度</span></span>
<span class="line"><span>			longitude: gcj02towgs84[0], //经度</span></span>
<span class="line"><span>			rotate: 0, // 旋转度数</span></span>
<span class="line"><span>			width: 30, //宽</span></span>
<span class="line"><span>			height: 30, //高</span></span>
<span class="line"><span>			iconPath: that.$store.state.imagesurl + &#39;img7.png&#39;, //显示的图标</span></span>
<span class="line"><span>			anchor: {</span></span>
<span class="line"><span>				x: 0.5,</span></span>
<span class="line"><span>				y: 0.5</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}]</span></span>
<span class="line"><span>		that.markers.push.apply(that.markers, markert);</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	fail(err) {</span></span>
<span class="line"><span>		console.log(err)</span></span>
<span class="line"><span>		that.gpstype = false</span></span>
<span class="line"><span>		that.getData()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//JS使用方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let gcj02towgs84 = GCJ02_WGS84.gcj02towgs84(116.397477, 39.908692)</span></span>
<span class="line"><span>console.log(&#39;gcj02towgs84&#39;, gcj02towgs84)</span></span>
<span class="line"><span>let wgs84togcj02= GCJ02_WGS84.wgs84togcj02(116.39123343289631, 39.9072885060602)</span></span>
<span class="line"><span>console.log(&#39;wgs84togcj02&#39;, wgs84togcj02)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="打印结果" tabindex="-1"><a class="header-anchor" href="#打印结果"><span>打印结果</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>wgs84togcj02,[113.83269945830277,22.612941440541874]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,9);function d(r,v){return e(),n("div",null,[t,a(" more "),c])}const h=s(p,[["render",d],["__file","GCJ-02和WGS-84互转.html.vue"]]),u=JSON.parse('{"path":"/%E5%85%B6%E5%AE%83/%E6%8A%80%E5%B7%A7/GCJ-02%E5%92%8CWGS-84%E4%BA%92%E8%BD%AC.html","title":"GCJ-02和WGS-84互转","lang":"zh-CN","frontmatter":{"title":"GCJ-02和WGS-84互转","category":["其它"],"tag":["技巧"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%85%B6%E5%AE%83/%E6%8A%80%E5%B7%A7/GCJ-02%E5%92%8CWGS-84%E4%BA%92%E8%BD%AC.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"GCJ-02和WGS-84互转"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:09:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"技巧"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:09:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GCJ-02和WGS-84互转\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:09:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1671695856000,"updatedTime":1720591787000,"contributors":[{"name":"test","email":"email","commits":1}]},"readingTime":{"minutes":1.78,"words":534},"filePathRelative":"其它/技巧/GCJ-02和WGS-84互转.md","localizedDate":"2022年12月22日","excerpt":"<p>&nbsp;</p>\\n"}');export{h as comp,u as data};
