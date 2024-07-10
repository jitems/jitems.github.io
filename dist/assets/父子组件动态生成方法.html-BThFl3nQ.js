import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,a as i,d as l,o as e}from"./app-Bi9sAhmd.js";const p={},t=i("p",null," ",-1),c=l(`<h1 id="父子组件动态生成方法" tabindex="-1"><a class="header-anchor" href="#父子组件动态生成方法"><span>父子组件动态生成方法</span></a></h1><p>在 Vue 3 中，由于组合式 API 的引入，我们需要在组合式 API 中获取 $emit 方法并使用它来触发事件。在 Setup 函数中，我们可以通过 getCurrentInstance 方法获取当前组件实例，然后从实例对象中获取 $emit 方法并使用它来触发事件，例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;clickEvent&quot;&gt;点击触发事件&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { getCurrentInstance } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function clickEvent() {</span></span>
<span class="line"><span>  const instance = getCurrentInstance()</span></span>
<span class="line"><span>  instance?.emit?.(&#39;event&#39;, &#39;参数&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><p>###父组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 在这个例子中，我们使用 getCurrentInstance 方法获取当前组件实例，并通过 instance?.emit?.(&#39;event&#39;, &#39;参数&#39;) 语句调用实例的 $emit 方法触发事件。由于 instance 和 instance.$emit 可能会为空值，我们使用了可选链语法来避免程序抛出错误。 --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;dialogData.status = true&quot;&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;ConfirmDialog :dialogData=&quot;dialogData&quot; @dialogConfirmFunc0=&quot;onDialogConfirmFunc0&quot; @dialogConfirmFunc1=&quot;onDialogConfirmFunc1&quot; @dialogConfirmFunc2=&quot;onDialogConfirmFunc2&quot; @dialogCancelFunc0=&quot;dialogData.status=false&quot;&gt;&lt;/ConfirmDialog&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import ConfirmDialog from &#39;@/components/confirmDialog.vue&#39;</span></span>
<span class="line"><span>import { ref, reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { Plus } from &#39;@element-plus/icons-vue&#39;</span></span>
<span class="line"><span>let dialogData = ref({</span></span>
<span class="line"><span>  status: false,</span></span>
<span class="line"><span>  type:&quot;YELLOW&quot;,</span></span>
<span class="line"><span>  title: &quot;请确认是否批量结算&quot;,</span></span>
<span class="line"><span>  text: &quot;请确认是否结算？点击确认后列表中的全部账单将确认结算，确定后将不允许撤销&quot;,</span></span>
<span class="line"><span>  cancelText: [&quot;取消&quot;],</span></span>
<span class="line"><span>  confirmText: [&quot;确定&quot;,&quot;确认1&quot;,&#39;确认3&#39;]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>onMounted(()=&gt;{</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const onDialogConfirmFunc0 = ()=&gt;{</span></span>
<span class="line"><span>  console.log(&#39;1111111111&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const onDialogConfirmFunc1 = ()=&gt;{</span></span>
<span class="line"><span>  console.log(&#39;222222222222&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const onDialogConfirmFunc2 = ()=&gt;{</span></span>
<span class="line"><span>  console.log(&#39;33333333&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.container {</span></span>
<span class="line"><span>  height: 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###子组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 通用确认弹框 --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;el-dialog v-model=&quot;dialogData.status&quot; :show-close=&quot;false&quot; :align-center=&quot;true&quot; width=&quot;400px&quot;&gt;</span></span>
<span class="line"><span>        &lt;template #header=&quot;{ close, titleId, titleClass }&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;dialog_header&quot;&gt;</span></span>
<span class="line"><span>                &lt;div :id=&quot;titleId&quot; class=&quot;dialogs&quot; :class=&quot;[dialogData.type]&quot;&gt;</span></span>
<span class="line"><span>                    &lt;!-- &lt;div src=&quot;@/assets/icon/dialog_1.png&quot; alt=&quot;&quot;&gt; --&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;dialogs_img&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;dialogs_title&quot;&gt;{{ dialogData.title }}&lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;el-icon color=&quot;#909399&quot; @click=&quot;dialogData.status = false&quot;&gt;</span></span>
<span class="line"><span>                    &lt;Close /&gt;</span></span>
<span class="line"><span>                &lt;/el-icon&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/template&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;dialog_text&quot;&gt;</span></span>
<span class="line"><span>            {{ dialogData.text }}</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;template #footer&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;dialog-footer&quot;&gt;</span></span>
<span class="line"><span>                &lt;template v-for=&quot;(item, index) in dialogData.cancelText&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>                    &lt;el-button class=&quot;set_other_btn&quot; @click=&quot;onCancel(index)&quot;&gt;{{ item }}&lt;/el-button&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>                &lt;template v-for=&quot;(item, index) in dialogData.confirmText&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>                    &lt;el-button type=&quot;primary&quot; @click=&quot;onConfirm(index)&quot; :color=&quot;globalBtnColor&quot;&gt;</span></span>
<span class="line"><span>                        {{ item }}</span></span>
<span class="line"><span>                    &lt;/el-button&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;/span&gt;</span></span>
<span class="line"><span>        &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/el-dialog&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { globalBtnColor } from &#39;@/constants&#39;</span></span>
<span class="line"><span>import { ref, reactive, onMounted, getCurrentInstance } from &#39;vue&#39;</span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>    dialogData: {</span></span>
<span class="line"><span>        type: Object,</span></span>
<span class="line"><span>        default: {</span></span>
<span class="line"><span>            status: false,//状态</span></span>
<span class="line"><span>            type:&quot;&quot;,//颜色类型，枚举：RED，YELLOW，GREEN</span></span>
<span class="line"><span>            title: &quot;&quot;,//标题 </span></span>
<span class="line"><span>            text: &quot;&quot;,//内容</span></span>
<span class="line"><span>            cancelText: [&quot;&quot;],//确认组</span></span>
<span class="line"><span>            confirmText: [&quot;&quot;]//取消组</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>let btnList: any = []</span></span>
<span class="line"><span>const instance = getCurrentInstance()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>props.dialogData.cancelText.forEach((item: any, index: number) =&gt; {</span></span>
<span class="line"><span>    btnList.push(&quot;dialogCancelFunc&quot; + index)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>props.dialogData.confirmText.forEach((item: any, index: number) =&gt; {</span></span>
<span class="line"><span>    btnList.push(&quot;dialogConfirmFunc&quot; + index)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onConfirm = (index: number) =&gt; {</span></span>
<span class="line"><span>    instance?.emit?.(&quot;dialogConfirmFunc&quot; + index, &#39;&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const onCancel = (index: number) =&gt; {</span></span>
<span class="line"><span>    instance?.emit?.(&quot;dialogCancelFunc&quot; + index, &#39;&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.dialog_header {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    flex-direction: row;</span></span>
<span class="line"><span>    justify-content: space-between;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.dialogs{</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .dialogs_img {</span></span>
<span class="line"><span>        width: 24px;</span></span>
<span class="line"><span>        height: 24px;</span></span>
<span class="line"><span>        background-size: 100% 100%;</span></span>
<span class="line"><span>        background-repeat: no-repeat;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .dialogs_title {</span></span>
<span class="line"><span>        margin-left: 8px;</span></span>
<span class="line"><span>        color: #F59300;</span></span>
<span class="line"><span>        font-size: $fontSizeSixteen;</span></span>
<span class="line"><span>        font-weight: bold;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.YELLOW {</span></span>
<span class="line"><span>    .dialogs_img {</span></span>
<span class="line"><span>        background-image: url(&#39;@/assets/icon/dialog_1.png&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .dialogs_title {</span></span>
<span class="line"><span>        color: #F59300;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.RED {</span></span>
<span class="line"><span>    .dialogs_img {</span></span>
<span class="line"><span>        background-image: url(&#39;@/assets/icon/dialog_2.png&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .dialogs_title {</span></span>
<span class="line"><span>        color: #F56C6C;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.GREEN {</span></span>
<span class="line"><span>    .dialogs_img {</span></span>
<span class="line"><span>        background-image: url(&#39;@/assets/icon/dialog_3.png&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .dialogs_title {</span></span>
<span class="line"><span>        color: #67C23A;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.dialog_text {</span></span>
<span class="line"><span>    margin-left: 32px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function d(v,o){return e(),s("div",null,[t,a(" more "),c])}const m=n(p,[["render",d],["__file","父子组件动态生成方法.html.vue"]]),b=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/vue3%E6%95%99%E7%A8%8B/%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E5%8A%A8%E6%80%81%E7%94%9F%E6%88%90%E6%96%B9%E6%B3%95.html","title":"父子组件动态生成方法","lang":"zh-CN","frontmatter":{"title":"父子组件动态生成方法","category":["前端"],"tag":["vue3"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF/vue3%E6%95%99%E7%A8%8B/%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E5%8A%A8%E6%80%81%E7%94%9F%E6%88%90%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"父子组件动态生成方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:09:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"vue3"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:09:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"父子组件动态生成方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:09:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]}],"git":{"createdTime":1720591787000,"updatedTime":1720591787000,"contributors":[{"name":"test","email":"email","commits":1}]},"readingTime":{"minutes":2.17,"words":650},"filePathRelative":"前端/vue3教程/父子组件动态生成方法.md","localizedDate":"2024年7月10日","excerpt":"<p>&nbsp;</p>\\n"}');export{m as comp,b as data};
