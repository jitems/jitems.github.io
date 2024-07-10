import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,a as l,d as e,o as i}from"./app-Bi9sAhmd.js";const p={},u=l("p",null," ",-1),d=e(`<h1 id="elementplus常用" tabindex="-1"><a class="header-anchor" href="#elementplus常用"><span>elementplus常用</span></a></h1><h2 id="分页修改背景色" tabindex="-1"><a class="header-anchor" href="#分页修改背景色"><span>分页修改背景色</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {</span></span>
<span class="line"><span>  background-color: #494893 !important;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="角色分配权限菜单" tabindex="-1"><a class="header-anchor" href="#角色分配权限菜单"><span>角色分配权限菜单</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 角色管理 --&gt;</span></span>
<span class="line"><span>&lt;!-- 别删，多按钮分配的流程 --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;positions&quot; ref=&quot;supHeight&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-tree class=&quot;positions_row_right&quot; v-model=&quot;ruleForm.menuIds&quot; default-expand-all :data=&quot;dataList&quot; show-checkbox</span></span>
<span class="line"><span>            node-key=&quot;id&quot; @check=&quot;setUseCheck&quot; :default-checked-keys=&quot;ruleForm.menuIds&quot;</span></span>
<span class="line"><span>            :props=&quot;{ ...defaultProps, class: customNodeClass }&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { ref, reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import type Node from &#39;element-plus/es/components/tree/src/model/node&#39;</span></span>
<span class="line"><span>// 编辑/新增数据</span></span>
<span class="line"><span>let ruleForm: any = ref({</span></span>
<span class="line"><span>    name: &quot;&quot;,//角色名称</span></span>
<span class="line"><span>    resource: &quot;&quot;,////菜单数组</span></span>
<span class="line"><span>    menuIds: &quot;&quot;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 菜单选取</span></span>
<span class="line"><span>const setUseCheck = (checkedNodes: any, e: any) =&gt; {</span></span>
<span class="line"><span>    console.log(e.checkedKeys)</span></span>
<span class="line"><span>    e.checkedKeys.map((item: any, index: any) =&gt; {</span></span>
<span class="line"><span>        if (item == null) {</span></span>
<span class="line"><span>            e.checkedKeys.splice(index, 1)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    ruleForm.value.menuIds = e.checkedKeys</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const customNodeClass: any = (dataList: any, node: Node) =&gt; {</span></span>
<span class="line"><span>    if (dataList.enable==true || dataList.enable==false) {</span></span>
<span class="line"><span>        return &#39;is-penultimate&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return null</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const defaultProps = {</span></span>
<span class="line"><span>    children: &#39;modules&#39;,</span></span>
<span class="line"><span>    label: &#39;view&#39;,</span></span>
<span class="line"><span>    class: &#39;is-penultimate&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let dataList = ref&lt;any&gt;()</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>    dataList.value = [</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;view&quot;: &quot;供应商管理&quot;,</span></span>
<span class="line"><span>            &quot;modules&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;SUPPLIER&quot;,</span></span>
<span class="line"><span>                    &quot;view&quot;: &quot;机票供应商管理&quot;,</span></span>
<span class="line"><span>                    &quot;enable&quot;: true,</span></span>
<span class="line"><span>                    &quot;actions&quot;: [</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;CREATE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;DELETE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;EDIT&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;VIEW&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;CREATE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;DELETE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;EDIT&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;VIEW&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;CREATE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;DELETE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;EDIT&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;VIEW&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;CREATE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;DELETE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;EDIT&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;VIEW&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;SUPPLIER_INTERFACE&quot;,</span></span>
<span class="line"><span>                    &quot;view&quot;: &quot;机票供应商接口管理&quot;,</span></span>
<span class="line"><span>                    &quot;enable&quot;: false,</span></span>
<span class="line"><span>                    &quot;actions&quot;: [</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;CREATE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;DELETE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;EDIT&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;VIEW&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;view&quot;: &quot;机票政策管理&quot;,</span></span>
<span class="line"><span>            &quot;modules&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;POLICY&quot;,</span></span>
<span class="line"><span>                    &quot;view&quot;: &quot;政策管理&quot;,</span></span>
<span class="line"><span>                    &quot;enable&quot;: true,</span></span>
<span class="line"><span>                    &quot;actions&quot;: [</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;CREATE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;DELETE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;EDIT&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;VIEW&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;view&quot;: &quot;报表中心&quot;,</span></span>
<span class="line"><span>            &quot;modules&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;supplierFlowReport&quot;,</span></span>
<span class="line"><span>                    &quot;view&quot;: &quot;供应商流量报表&quot;,</span></span>
<span class="line"><span>                    &quot;enable&quot;: true,</span></span>
<span class="line"><span>                    &quot;actions&quot;: [</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;CREATE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;DELETE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;EDIT&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;VIEW&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;view&quot;: &quot;基本设置&quot;,</span></span>
<span class="line"><span>            &quot;modules&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;ACCOUNT&quot;,</span></span>
<span class="line"><span>                    &quot;view&quot;: &quot;员工账号密码管理&quot;,</span></span>
<span class="line"><span>                    &quot;enable&quot;: false,</span></span>
<span class="line"><span>                    &quot;actions&quot;: [</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;CREATE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;DELETE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;EDIT&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;VIEW&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;deptMgmt&quot;,</span></span>
<span class="line"><span>                    &quot;view&quot;: &quot;部门管理&quot;,</span></span>
<span class="line"><span>                    &quot;enable&quot;: true,</span></span>
<span class="line"><span>                    &quot;actions&quot;: [</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;CREATE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;DELETE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;EDIT&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;VIEW&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;positionMgmt&quot;,</span></span>
<span class="line"><span>                    &quot;view&quot;: &quot;职位管理&quot;,</span></span>
<span class="line"><span>                    &quot;enable&quot;: false,</span></span>
<span class="line"><span>                    &quot;actions&quot;: [</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;CREATE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;DELETE&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;EDIT&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;VIEW&quot;,</span></span>
<span class="line"><span>                            &quot;configurable&quot;: true,</span></span>
<span class="line"><span>                            &quot;enable&quot;: true</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>    // 数据组织</span></span>
<span class="line"><span>    dataList.value.map((item: any, index: number) =&gt; {</span></span>
<span class="line"><span>        item.id = index + 1</span></span>
<span class="line"><span>        item.name = item.view</span></span>
<span class="line"><span>        item.modules.map((items: any, indexs: any) =&gt; {</span></span>
<span class="line"><span>            items.id = Number(item.id + &#39;&#39; + (indexs + 1))</span></span>
<span class="line"><span>            items.actions.map((itemt: any, indext: number) =&gt; {</span></span>
<span class="line"><span>                itemt.view = itemt.name</span></span>
<span class="line"><span>                itemt.id = Number(items.id + &#39;&#39; + (indext + 1))</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            items.modules = items.actions</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    console.log(dataList.value)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.is-penultimate &gt; .el-tree-node__content {</span></span>
<span class="line"><span>  color: #626aef;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.el-tree-node.is-expanded.is-penultimate &gt; .el-tree-node__children {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-wrap: wrap;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.is-penultimate &gt; .el-tree-node__children &gt; div {</span></span>
<span class="line"><span>  width: 25%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.is-penultimate  &gt;.el-collapse-transition-leave-active{</span></span>
<span class="line"><span>    display: flex !important;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.is-penultimate  &gt;.el-collapse-transition-enter-active{</span></span>
<span class="line"><span>      flex-direction: row !important;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果</p><img src="https://jitems.github.io/blog/bk577.png" alt="solar"><h2 id="element-plus的table合并单元格" tabindex="-1"><a class="header-anchor" href="#element-plus的table合并单元格"><span>element plus的table合并单元格</span></a></h2><p>就element+中的el-table中的span-method方法的使用和遇到的一些问题 如果想要将后一列挨着的单元格合并，return 1,2,但是得将后一个单元格设置为 0，0，不然会被推走</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;el-table</span></span>
<span class="line"><span>      :data=&quot;tableData&quot;</span></span>
<span class="line"><span>      :span-method=&quot;arraySpanMethod&quot;</span></span>
<span class="line"><span>      border</span></span>
<span class="line"><span>      style=&quot;width: 100%&quot;</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      &lt;el-table-column prop=&quot;id&quot; label=&quot;ID&quot; width=&quot;180&quot; /&gt;</span></span>
<span class="line"><span>      &lt;el-table-column prop=&quot;name&quot; label=&quot;Name&quot; /&gt;</span></span>
<span class="line"><span>      &lt;el-table-column prop=&quot;amount1&quot; sortable label=&quot;Amount 1&quot; /&gt;</span></span>
<span class="line"><span>      &lt;el-table-column prop=&quot;amount2&quot; sortable label=&quot;Amount 2&quot; /&gt;</span></span>
<span class="line"><span>      &lt;el-table-column prop=&quot;amount3&quot; sortable label=&quot;Amount 3&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/el-table&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;el-table</span></span>
<span class="line"><span>      :data=&quot;tableData&quot;</span></span>
<span class="line"><span>      :span-method=&quot;objectSpanMethod&quot;</span></span>
<span class="line"><span>      border</span></span>
<span class="line"><span>      style=&quot;width: 100%; margin-top: 20px&quot;</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      &lt;el-table-column prop=&quot;id&quot; label=&quot;ID&quot; width=&quot;180&quot; /&gt;</span></span>
<span class="line"><span>      &lt;el-table-column prop=&quot;name&quot; label=&quot;Name&quot; /&gt;</span></span>
<span class="line"><span>      &lt;el-table-column prop=&quot;amount1&quot; label=&quot;Amount 1&quot; /&gt;</span></span>
<span class="line"><span>      &lt;el-table-column prop=&quot;amount2&quot; label=&quot;Amount 2&quot; /&gt;</span></span>
<span class="line"><span>      &lt;el-table-column prop=&quot;amount3&quot; label=&quot;Amount 3&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/el-table&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import type { TableColumnCtx } from &#39;element-plus&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface User {</span></span>
<span class="line"><span>  id: string</span></span>
<span class="line"><span>  name: string</span></span>
<span class="line"><span>  amount1: string</span></span>
<span class="line"><span>  amount2: string</span></span>
<span class="line"><span>  amount3: number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface SpanMethodProps {</span></span>
<span class="line"><span>  row: User</span></span>
<span class="line"><span>  column: TableColumnCtx&lt;User&gt;</span></span>
<span class="line"><span>  rowIndex: number</span></span>
<span class="line"><span>  columnIndex: number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const arraySpanMethod = ({</span></span>
<span class="line"><span>  row,</span></span>
<span class="line"><span>  column,</span></span>
<span class="line"><span>  rowIndex,</span></span>
<span class="line"><span>  columnIndex,</span></span>
<span class="line"><span>}: SpanMethodProps) =&gt; {</span></span>
<span class="line"><span>  if (rowIndex % 2 === 0) {</span></span>
<span class="line"><span>    if (columnIndex === 0) {</span></span>
<span class="line"><span>      return [1, 2]</span></span>
<span class="line"><span>    } else if (columnIndex === 1) {</span></span>
<span class="line"><span>      return [0, 0]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const objectSpanMethod = ({</span></span>
<span class="line"><span>  row,</span></span>
<span class="line"><span>  column,</span></span>
<span class="line"><span>  rowIndex,</span></span>
<span class="line"><span>  columnIndex,</span></span>
<span class="line"><span>}: SpanMethodProps) =&gt; {</span></span>
<span class="line"><span>  if (columnIndex === 0) {</span></span>
<span class="line"><span>    if (rowIndex % 2 === 0) {</span></span>
<span class="line"><span>      return { //这里表示，单前单元格和后一列的单元格合并</span></span>
<span class="line"><span>        rowspan: 1,</span></span>
<span class="line"><span>        colspan: 2,</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    else { //返回11表示此单元显示</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        rowspan: 1,</span></span>
<span class="line"><span>        colspan: 1,</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }else if(columnIndex === 1){</span></span>
<span class="line"><span>    if (rowIndex % 2 === 0) {</span></span>
<span class="line"><span>      return { //返回00表示此单元格移出</span></span>
<span class="line"><span>        rowspan: 0,</span></span>
<span class="line"><span>        colspan: 0,</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        rowspan: 1,</span></span>
<span class="line"><span>        colspan: 1,</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tableData: User[] = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: &#39;合计&#39;,</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    amount1: &#39;234&#39;,</span></span>
<span class="line"><span>    amount2: &#39;3.2&#39;,</span></span>
<span class="line"><span>    amount3: 10,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: &#39;12987123&#39;,</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    amount1: &#39;165&#39;,</span></span>
<span class="line"><span>    amount2: &#39;4.43&#39;,</span></span>
<span class="line"><span>    amount3: 12,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: &#39;合计&#39;,</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    amount1: &#39;324&#39;,</span></span>
<span class="line"><span>    amount2: &#39;1.9&#39;,</span></span>
<span class="line"><span>    amount3: 9,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: &#39;12987125&#39;,</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    amount1: &#39;621&#39;,</span></span>
<span class="line"><span>    amount2: &#39;2.2&#39;,</span></span>
<span class="line"><span>    amount3: 17,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: &#39;合计&#39;,</span></span>
<span class="line"><span>    name: &#39;Tom&#39;,</span></span>
<span class="line"><span>    amount1: &#39;539&#39;,</span></span>
<span class="line"><span>    amount2: &#39;4.1&#39;,</span></span>
<span class="line"><span>    amount3: 15,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改el-input-的placeholder样式" tabindex="-1"><a class="header-anchor" href="#修改el-input-的placeholder样式"><span>修改el-input 的placeholder样式</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>:deep(.el-input__inner::placeholder){</span></span>
<span class="line"><span>    font-size: 12px;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按f12后动态监听窗口大小" tabindex="-1"><a class="header-anchor" href="#按f12后动态监听窗口大小"><span>按F12后动态监听窗口大小</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;cont&quot; ref=&quot;contHeight&quot;&gt;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script setup  lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { onMounted,onUnmounted,ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>// 页面高度</span></span>
<span class="line"><span>let contHeight = ref()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//这里监听页面大小</span></span>
<span class="line"><span>const updateWindowWidth = () =&gt; {</span></span>
<span class="line"><span>    let contHeights = contHeight.value?.clientHeight</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>    // 整个页面高度</span></span>
<span class="line"><span>    let contHeights = contHeight.value?.clientHeight</span></span>
<span class="line"><span>    window.addEventListener(&#39;resize&#39;, updateWindowWidth)</span></span>
<span class="line"><span>    getQueryOrder()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>onUnmounted(() =&gt; {</span></span>
<span class="line"><span>    window.removeEventListener(&#39;resize&#39;, updateWindowWidth)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function c(t,v){return i(),s("div",null,[u,a(" more "),d])}const m=n(p,[["render",c],["__file","elementplus常用.html.vue"]]),b=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/vue3%E6%95%99%E7%A8%8B/elementplus%E5%B8%B8%E7%94%A8.html","title":"elementplus常用","lang":"zh-CN","frontmatter":{"title":"elementplus常用","category":["前端"],"tag":["vue3"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF/vue3%E6%95%99%E7%A8%8B/elementplus%E5%B8%B8%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"elementplus常用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:34:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"vue3"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"elementplus常用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:34:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"分页修改背景色","slug":"分页修改背景色","link":"#分页修改背景色","children":[]},{"level":2,"title":"角色分配权限菜单","slug":"角色分配权限菜单","link":"#角色分配权限菜单","children":[]},{"level":2,"title":"element plus的table合并单元格","slug":"element-plus的table合并单元格","link":"#element-plus的table合并单元格","children":[]},{"level":2,"title":"修改el-input 的placeholder样式","slug":"修改el-input-的placeholder样式","link":"#修改el-input-的placeholder样式","children":[]},{"level":2,"title":"按F12后动态监听窗口大小","slug":"按f12后动态监听窗口大小","link":"#按f12后动态监听窗口大小","children":[]}],"git":{"createdTime":1682047696000,"updatedTime":1720593294000,"contributors":[{"name":"test","email":"email","commits":2}]},"readingTime":{"minutes":3.81,"words":1142},"filePathRelative":"前端/vue3教程/elementplus常用.md","localizedDate":"2023年4月21日","excerpt":"<p>&nbsp;</p>\\n"}');export{m as comp,b as data};
