(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{400:function(t,s,n){t.exports=n.p+"assets/img/v2_img4.e0dde024.png"},483:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("整体的工作流程如下"),s("br"),t._v(" "),s("img",{attrs:{src:n(400),alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("首先vue会合并用户传入的options，合并完毕之后就会开始进行一些列的初始化操作")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initLifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件声明周期相关属性初始化$parent、$children")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义组件事件监听")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initRender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插槽处理 createElement （render中的 h）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用声明周期的钩子")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeCreate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// provide/inject  单项数据流  祖辈注入提供数据、子辈使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initInjections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve injections before data/props")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化data/props/methods/computed/watch")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initProvide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve provide after data/props")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'created'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("合并完options之后会去创建组件的生命周期，监听组件的事件，处理插槽。随后调用beforeCreate钩子，接下来就是处理data props之类的数据了。处理完之后调用create钩子。这也就是为什么在create钩子里我们就可访问到data和props里的东西，因为他们的初始化在create之前进行")]),t._v(" "),s("p",[t._v("当执行了created之后就要开始进行render操作了，这个时候就会去获取template，生成render函数，在调用render函数获取到VNode，VNode在经理patch阶段转成真实dom，然后进行watcher的创建，最后完成挂载。")])])}),[],!1,null,null,null);s.default=e.exports}}]);