import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,a as i,d as e,o as l}from"./app-Bi9sAhmd.js";const p={},d=i("p",null," ",-1),c=e(`<h1 id="软键盘禁止上推底部" tabindex="-1"><a class="header-anchor" href="#软键盘禁止上推底部"><span>软键盘禁止上推底部</span></a></h1><h2 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一"><span>方式一</span></a></h2><p>在Scaffold或者CupertinoPageScaffold中设置resizeToAvoidBottomInset为false</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return Scaffold(</span></span>
<span class="line"><span>      backgroundColor: Colors.white,</span></span>
<span class="line"><span>      resizeToAvoidBottomInset:false,</span></span>
<span class="line"><span>      body: ...,</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二"><span>方式二</span></a></h2><p>不修改resizeToAvoidBottomInset属性的话，可以使用ListView、SingleChildScrollView、CustomScrollView等布局构建页面。</p><h3 id="登录页面完整代码" tabindex="-1"><a class="header-anchor" href="#登录页面完整代码"><span>登录页面完整代码</span></a></h3><p>带删除和眼睛按钮的输入框控件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import &#39;package:flutter/cupertino.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter/material.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class UserTextField extends StatefulWidget {</span></span>
<span class="line"><span>  final TextEditingController controller;</span></span>
<span class="line"><span>  final TextInputType? keyboardType;</span></span>
<span class="line"><span>  final String? placeholder;</span></span>
<span class="line"><span>  final bool usedInPassword;</span></span>
<span class="line"><span>  final Widget? suffixWidget;</span></span>
<span class="line"><span>  final int? maxLength;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const UserTextField({</span></span>
<span class="line"><span>    Key? key,</span></span>
<span class="line"><span>    required this.controller,</span></span>
<span class="line"><span>    this.keyboardType,</span></span>
<span class="line"><span>    this.placeholder,</span></span>
<span class="line"><span>    this.usedInPassword = false,</span></span>
<span class="line"><span>    this.suffixWidget,</span></span>
<span class="line"><span>    this.maxLength,</span></span>
<span class="line"><span>  }) : super(key: key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  State&lt;StatefulWidget&gt; createState() =&gt; _UserTextFieldState();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class _UserTextFieldState extends State&lt;UserTextField&gt; {</span></span>
<span class="line"><span>  var _showClearIcon = false;</span></span>
<span class="line"><span>  var _showEyeIcon = false;</span></span>
<span class="line"><span>  late bool _obscurePassword;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  void initState() {</span></span>
<span class="line"><span>    super.initState();</span></span>
<span class="line"><span>    _obscurePassword = widget.usedInPassword;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    widget.controller.addListener(() {</span></span>
<span class="line"><span>      var isNotEmpty = widget.controller.text.isNotEmpty;</span></span>
<span class="line"><span>      setState(() {</span></span>
<span class="line"><span>        _showEyeIcon = isNotEmpty;</span></span>
<span class="line"><span>        _showClearIcon = isNotEmpty;</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return CupertinoTextField(</span></span>
<span class="line"><span>      controller: widget.controller,</span></span>
<span class="line"><span>      keyboardType: widget.keyboardType,</span></span>
<span class="line"><span>      onChanged: (_) {},</span></span>
<span class="line"><span>      placeholder: widget.placeholder,</span></span>
<span class="line"><span>      style: const TextStyle(color: Colors.black),</span></span>
<span class="line"><span>      placeholderStyle: const TextStyle(color: Colors.grey),</span></span>
<span class="line"><span>      maxLength: widget.maxLength,</span></span>
<span class="line"><span>      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),</span></span>
<span class="line"><span>      decoration: BoxDecoration(</span></span>
<span class="line"><span>        color: Colors.white,</span></span>
<span class="line"><span>        border: Border.all(color: Colors.grey, width: 0.5),</span></span>
<span class="line"><span>        borderRadius: BorderRadius.circular(26),</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>      obscureText: _obscurePassword,</span></span>
<span class="line"><span>      obscuringCharacter: &quot;*&quot;,</span></span>
<span class="line"><span>      suffix: widget.suffixWidget ??</span></span>
<span class="line"><span>          (widget.usedInPassword ? _buildPasswordEyeIcon() : _buildClearIcon()),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Widget _buildClearIcon() {</span></span>
<span class="line"><span>    return _showClearIcon</span></span>
<span class="line"><span>        ? CupertinoButton(</span></span>
<span class="line"><span>            padding: const EdgeInsets.fromLTRB(0, 0, 8, 0),</span></span>
<span class="line"><span>            child: const Icon(Icons.clear, size: 18),</span></span>
<span class="line"><span>            onPressed: () =&gt; widget.controller.clear(),</span></span>
<span class="line"><span>          )</span></span>
<span class="line"><span>        : const SizedBox(width: 8.0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Widget _buildPasswordEyeIcon() {</span></span>
<span class="line"><span>    return _showEyeIcon</span></span>
<span class="line"><span>        ? CupertinoButton(</span></span>
<span class="line"><span>            padding: const EdgeInsets.fromLTRB(0, 0, 8, 0),</span></span>
<span class="line"><span>            child: Icon(</span></span>
<span class="line"><span>              _obscurePassword ? Icons.visibility_off : Icons.visibility,</span></span>
<span class="line"><span>              size: 18,</span></span>
<span class="line"><span>            ),</span></span>
<span class="line"><span>            onPressed: () {</span></span>
<span class="line"><span>              setState(() =&gt; _obscurePassword = !_obscurePassword);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>          )</span></span>
<span class="line"><span>        : const SizedBox(width: 8.0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录页面" tabindex="-1"><a class="header-anchor" href="#登录页面"><span>登录页面</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import &#39;dart:ui&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;package:flutter/cupertino.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter/material.dart&#39;;</span></span>
<span class="line"><span>import &#39;user_text_field.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main() =&gt; runApp(const MyApp());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyApp extends StatelessWidget {</span></span>
<span class="line"><span>  const MyApp({Key? key}) : super(key: key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return const CupertinoApp(</span></span>
<span class="line"><span>      theme: CupertinoThemeData(</span></span>
<span class="line"><span>        primaryColor: Colors.red,</span></span>
<span class="line"><span>        scaffoldBackgroundColor: Colors.white,</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>      debugShowCheckedModeBanner: false,</span></span>
<span class="line"><span>      home: LoginPage(),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LoginPage extends StatefulWidget {</span></span>
<span class="line"><span>  const LoginPage({Key? key}) : super(key: key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  State&lt;StatefulWidget&gt; createState() =&gt; _LoginPageState();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class _LoginPageState extends State&lt;LoginPage&gt; with WidgetsBindingObserver {</span></span>
<span class="line"><span>  final _emailController = TextEditingController();</span></span>
<span class="line"><span>  final _passwordController = TextEditingController();</span></span>
<span class="line"><span>  final _codeController = TextEditingController();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 软键盘高度</span></span>
<span class="line"><span>  double _keyboardHeight = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 可控制ListView滑动</span></span>
<span class="line"><span>  final _scrollController = ScrollController();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 用于获取目标Widget的位置坐标</span></span>
<span class="line"><span>  final _targetWidgetKey = GlobalKey();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  void initState() {</span></span>
<span class="line"><span>    super.initState();</span></span>
<span class="line"><span>    // 添加监听，didChangeMetrics</span></span>
<span class="line"><span>    WidgetsBinding.instance.addObserver(this);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  void dispose() {</span></span>
<span class="line"><span>    WidgetsBinding.instance.removeObserver(this);</span></span>
<span class="line"><span>    super.dispose();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 当应用程序的尺寸发生变化时会调用</span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  void didChangeMetrics() {</span></span>
<span class="line"><span>    // 获取页面高度</span></span>
<span class="line"><span>    var pageHeight = MediaQuery.of(context).size.height;</span></span>
<span class="line"><span>    if (pageHeight &lt;= 0) {</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 软键盘顶部  px</span></span>
<span class="line"><span>    final keyboardTopPixels =</span></span>
<span class="line"><span>        window.physicalSize.height - window.viewInsets.bottom;</span></span>
<span class="line"><span>    // 转换为 dp</span></span>
<span class="line"><span>    final keyboardTopPoints = keyboardTopPixels / window.devicePixelRatio;</span></span>
<span class="line"><span>    // 软键盘高度</span></span>
<span class="line"><span>    final keyboardHeight = pageHeight - keyboardTopPoints;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setState(() {</span></span>
<span class="line"><span>      _keyboardHeight = keyboardHeight;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    if (keyboardHeight &lt;= 0) {</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 获取目标位置的坐标</span></span>
<span class="line"><span>    RenderBox? renderBox =</span></span>
<span class="line"><span>        _targetWidgetKey.currentContext?.findRenderObject() as RenderBox?;</span></span>
<span class="line"><span>    if (renderBox == null) {</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 转换为全局坐标</span></span>
<span class="line"><span>    final bottomOffset =</span></span>
<span class="line"><span>        renderBox.localToGlobal(Offset(0, renderBox.size.height));</span></span>
<span class="line"><span>    final targetDy = bottomOffset.dy;</span></span>
<span class="line"><span>    // 获取要滚动的距离</span></span>
<span class="line"><span>    // 即被软键盘挡住的那段距离 加上 _scrollController.offset 已经滑动过的距离</span></span>
<span class="line"><span>    final offsetY =</span></span>
<span class="line"><span>        keyboardHeight - (pageHeight - targetDy) + _scrollController.offset;</span></span>
<span class="line"><span>    // 滑动到指定位置</span></span>
<span class="line"><span>    if (offsetY &gt; 0) {</span></span>
<span class="line"><span>      _scrollController.animateTo(</span></span>
<span class="line"><span>        offsetY,</span></span>
<span class="line"><span>        duration: kTabScrollDuration,</span></span>
<span class="line"><span>        curve: Curves.ease,</span></span>
<span class="line"><span>      );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return Scaffold(</span></span>
<span class="line"><span>      backgroundColor: Colors.white,</span></span>
<span class="line"><span>      resizeToAvoidBottomInset: false,</span></span>
<span class="line"><span>      body: GestureDetector(</span></span>
<span class="line"><span>        behavior: HitTestBehavior.opaque,</span></span>
<span class="line"><span>        onTap: () =&gt; FocusManager.instance.primaryFocus?.unfocus(),</span></span>
<span class="line"><span>        child: Column(</span></span>
<span class="line"><span>          children: [</span></span>
<span class="line"><span>            Expanded(</span></span>
<span class="line"><span>              child: ListView(</span></span>
<span class="line"><span>                controller: _scrollController,</span></span>
<span class="line"><span>                children: [</span></span>
<span class="line"><span>                  SafeArea(</span></span>
<span class="line"><span>                    child: Align(</span></span>
<span class="line"><span>                      alignment: Alignment.centerRight,</span></span>
<span class="line"><span>                      child: CupertinoButton(</span></span>
<span class="line"><span>                        onPressed: () {},</span></span>
<span class="line"><span>                        child: const Icon(CupertinoIcons.clear, size: 24),</span></span>
<span class="line"><span>                      ),</span></span>
<span class="line"><span>                    ),</span></span>
<span class="line"><span>                  ),</span></span>
<span class="line"><span>                  const Padding(</span></span>
<span class="line"><span>                    padding: EdgeInsets.fromLTRB(16, 16, 16, 16),</span></span>
<span class="line"><span>                    child: Text(</span></span>
<span class="line"><span>                      &#39;你好，\\n欢迎使用Flutter App&#39;,</span></span>
<span class="line"><span>                      style: TextStyle(</span></span>
<span class="line"><span>                        fontSize: 24,</span></span>
<span class="line"><span>                        color: Colors.black,</span></span>
<span class="line"><span>                        fontWeight: FontWeight.w500,</span></span>
<span class="line"><span>                      ),</span></span>
<span class="line"><span>                    ),</span></span>
<span class="line"><span>                  ),</span></span>
<span class="line"><span>                  const SizedBox(height: 40),</span></span>
<span class="line"><span>                  Padding(</span></span>
<span class="line"><span>                    padding: const EdgeInsets.symmetric(horizontal: 16),</span></span>
<span class="line"><span>                    child: UserTextField(</span></span>
<span class="line"><span>                      controller: _emailController,</span></span>
<span class="line"><span>                      keyboardType: TextInputType.emailAddress,</span></span>
<span class="line"><span>                      placeholder: &#39;请输入邮箱&#39;,</span></span>
<span class="line"><span>                    ),</span></span>
<span class="line"><span>                  ),</span></span>
<span class="line"><span>                  const SizedBox(height: 16.0),</span></span>
<span class="line"><span>                  Padding(</span></span>
<span class="line"><span>                    padding: const EdgeInsets.symmetric(horizontal: 16),</span></span>
<span class="line"><span>                    child: UserTextField(</span></span>
<span class="line"><span>                      controller: _passwordController,</span></span>
<span class="line"><span>                      keyboardType: TextInputType.visiblePassword,</span></span>
<span class="line"><span>                      usedInPassword: true,</span></span>
<span class="line"><span>                      placeholder: &#39;请输入密码&#39;,</span></span>
<span class="line"><span>                    ),</span></span>
<span class="line"><span>                  ),</span></span>
<span class="line"><span>                  const SizedBox(height: 16.0),</span></span>
<span class="line"><span>                  Padding(</span></span>
<span class="line"><span>                    padding: const EdgeInsets.symmetric(horizontal: 16),</span></span>
<span class="line"><span>                    child: UserTextField(</span></span>
<span class="line"><span>                      controller: _codeController,</span></span>
<span class="line"><span>                      keyboardType: TextInputType.number,</span></span>
<span class="line"><span>                      placeholder: &#39;请输入6位验证码&#39;,</span></span>
<span class="line"><span>                    ),</span></span>
<span class="line"><span>                  ),</span></span>
<span class="line"><span>                  const SizedBox(height: 16.0),</span></span>
<span class="line"><span>                  CupertinoButton(</span></span>
<span class="line"><span>                    padding: const EdgeInsets.all(16),</span></span>
<span class="line"><span>                    child: Container(</span></span>
<span class="line"><span>                      height: 44,</span></span>
<span class="line"><span>                      width: double.infinity,</span></span>
<span class="line"><span>                      alignment: Alignment.center,</span></span>
<span class="line"><span>                      decoration: const BoxDecoration(</span></span>
<span class="line"><span>                        color: Colors.red,</span></span>
<span class="line"><span>                        borderRadius: BorderRadius.all(Radius.circular(22)),</span></span>
<span class="line"><span>                      ),</span></span>
<span class="line"><span>                      child: const Text(</span></span>
<span class="line"><span>                        &#39;登录&#39;,</span></span>
<span class="line"><span>                        style: TextStyle(color: Colors.white),</span></span>
<span class="line"><span>                      ),</span></span>
<span class="line"><span>                    ),</span></span>
<span class="line"><span>                    onPressed: () {},</span></span>
<span class="line"><span>                  ),</span></span>
<span class="line"><span>                  Row(</span></span>
<span class="line"><span>                    key: _targetWidgetKey,</span></span>
<span class="line"><span>                    mainAxisAlignment: MainAxisAlignment.spaceBetween,</span></span>
<span class="line"><span>                    children: [</span></span>
<span class="line"><span>                      CupertinoButton(</span></span>
<span class="line"><span>                        minSize: 24,</span></span>
<span class="line"><span>                        alignment: Alignment.topCenter,</span></span>
<span class="line"><span>                        padding: const EdgeInsets.symmetric(</span></span>
<span class="line"><span>                            horizontal: 18, vertical: 0),</span></span>
<span class="line"><span>                        onPressed: () {},</span></span>
<span class="line"><span>                        child: const Text(</span></span>
<span class="line"><span>                          &#39;忘记密码？&#39;,</span></span>
<span class="line"><span>                          style: TextStyle(fontSize: 14),</span></span>
<span class="line"><span>                        ),</span></span>
<span class="line"><span>                      ),</span></span>
<span class="line"><span>                      CupertinoButton(</span></span>
<span class="line"><span>                        minSize: 24,</span></span>
<span class="line"><span>                        alignment: Alignment.topCenter,</span></span>
<span class="line"><span>                        padding: const EdgeInsets.symmetric(</span></span>
<span class="line"><span>                            horizontal: 18, vertical: 0),</span></span>
<span class="line"><span>                        onPressed: () {},</span></span>
<span class="line"><span>                        child:</span></span>
<span class="line"><span>                            const Text(&#39;立即注册&#39;, style: TextStyle(fontSize: 14)),</span></span>
<span class="line"><span>                      ),</span></span>
<span class="line"><span>                    ],</span></span>
<span class="line"><span>                  ),</span></span>
<span class="line"><span>                  SizedBox(height: _keyboardHeight)</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>              ),</span></span>
<span class="line"><span>            ),</span></span>
<span class="line"><span>            Row(</span></span>
<span class="line"><span>              children: const [</span></span>
<span class="line"><span>                SizedBox(width: 16),</span></span>
<span class="line"><span>                Expanded(child: Divider()),</span></span>
<span class="line"><span>                SizedBox(width: 8),</span></span>
<span class="line"><span>                Text(</span></span>
<span class="line"><span>                  &#39;其它登录方式&#39;,</span></span>
<span class="line"><span>                  style: TextStyle(fontSize: 13, color: Colors.grey),</span></span>
<span class="line"><span>                ),</span></span>
<span class="line"><span>                SizedBox(width: 8),</span></span>
<span class="line"><span>                Expanded(child: Divider()),</span></span>
<span class="line"><span>                SizedBox(width: 16),</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            ),</span></span>
<span class="line"><span>            Row(</span></span>
<span class="line"><span>              crossAxisAlignment: CrossAxisAlignment.center,</span></span>
<span class="line"><span>              mainAxisAlignment: MainAxisAlignment.center,</span></span>
<span class="line"><span>              children: [</span></span>
<span class="line"><span>                CupertinoButton(</span></span>
<span class="line"><span>                  onPressed: () {},</span></span>
<span class="line"><span>                  child: const Icon(Icons.facebook, size: 44),</span></span>
<span class="line"><span>                ),</span></span>
<span class="line"><span>                const SizedBox(width: 32),</span></span>
<span class="line"><span>                CupertinoButton(</span></span>
<span class="line"><span>                  onPressed: () {},</span></span>
<span class="line"><span>                  child: const Icon(Icons.apple, size: 44),</span></span>
<span class="line"><span>                ),</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            ),</span></span>
<span class="line"><span>            const SizedBox(height: 12),</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function r(v,t){return l(),s("div",null,[d,a(" more "),c])}const m=n(p,[["render",r],["__file","软键盘禁止上推底部.html.vue"]]),b=JSON.parse('{"path":"/flutter%E6%95%99%E7%A8%8B/%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94/%E8%BD%AF%E9%94%AE%E7%9B%98%E7%A6%81%E6%AD%A2%E4%B8%8A%E6%8E%A8%E5%BA%95%E9%83%A8.html","title":"软键盘禁止上推底部","lang":"zh-CN","frontmatter":{"title":"软键盘禁止上推底部","category":["前端"],"tag":["flutter"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/flutter%E6%95%99%E7%A8%8B/%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94/%E8%BD%AF%E9%94%AE%E7%9B%98%E7%A6%81%E6%AD%A2%E4%B8%8A%E6%8E%A8%E5%BA%95%E9%83%A8.html"}],["meta",{"property":"og:site_name","content":"遐想的猫"}],["meta",{"property":"og:title","content":"软键盘禁止上推底部"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-10T06:09:47.000Z"}],["meta",{"property":"article:author","content":"Mr.Liu"}],["meta",{"property":"article:tag","content":"flutter"}],["meta",{"property":"article:modified_time","content":"2024-07-10T06:09:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"软键盘禁止上推底部\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-10T06:09:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Liu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"方式一","slug":"方式一","link":"#方式一","children":[]},{"level":2,"title":"方式二","slug":"方式二","link":"#方式二","children":[{"level":3,"title":"登录页面完整代码","slug":"登录页面完整代码","link":"#登录页面完整代码","children":[]},{"level":3,"title":"登录页面","slug":"登录页面","link":"#登录页面","children":[]}]}],"git":{"createdTime":1669686720000,"updatedTime":1720591787000,"contributors":[{"name":"test","email":"email","commits":1}]},"readingTime":{"minutes":2.93,"words":880},"filePathRelative":"flutter教程/问题解答/软键盘禁止上推底部.md","localizedDate":"2022年11月29日","excerpt":"<p>&nbsp;</p>\\n"}');export{m as comp,b as data};
