(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{447:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"注册npm账号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注册npm账号"}},[s._v("#")]),s._v(" 注册Npm账号")]),s._v(" "),t("p",[s._v("首先需要去npm官网注册一个账号\nhttps://www.npmjs.com/")]),s._v(" "),t("h2",{attrs:{id:"切换镜像源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换镜像源"}},[s._v("#")]),s._v(" 切换镜像源")]),s._v(" "),t("p",[s._v("注册好账号之后，如果你本地使用的是淘宝的镜像，则需要将本地的npm源切换成npm自己的地址")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("查看当前镜像源\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" get registry\n切换淘宝镜像源\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry http://registry.npm.taobao.org\n切换npm源\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npmjs.org/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"登陆账号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登陆账号"}},[s._v("#")]),s._v(" 登陆账号")]),s._v(" "),t("p",[s._v("切换成npm源后打开终端，如果是第一次在本机发包，则先添加你的npm账号到本地。输入命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" adduser\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://pic.imgdb.cn/item/64031276f144a01007943041.jpg",alt:"img.png"}})]),s._v(" "),t("p",[s._v("输入你的用户名，回车，然后再输入密码")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pic.imgdb.cn/item/640312a7f144a0100794737b.jpg",alt:"img.png"}})]),s._v(" "),t("p",[s._v("依次输入用户名 密码 邮箱 验证码，即可登陆成功。")]),s._v(" "),t("p",[s._v("如果不是第一次发包则直接npm login 登陆就行")]),s._v(" "),t("h2",{attrs:{id:"发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),t("p",[s._v("接着npm publish 发布即可")]),s._v(" "),t("p",[s._v("如果有不想发布出去的文件，就可以将它写入.gitignore 或.npmignore中，上传就会被忽略了")]),s._v(" "),t("p",[s._v("发布好之后就可以在npm上搜到你的包了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pic.imgdb.cn/item/640312caf144a0100794a43b.jpg",alt:"img.png"}})]),s._v(" "),t("p",[s._v("记住每次发布的包版本号都需要变更，不然会导致发布失败。")]),s._v(" "),t("h2",{attrs:{id:"错误总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误总结"}},[s._v("#")]),s._v(" 错误总结")]),s._v(" "),t("p",[s._v("下面总结我在发布时遇到的几个发布失败的错误码，以及解决方法")]),s._v(" "),t("ul",[t("li",[s._v("1、401")])]),s._v(" "),t("p",[s._v("401一般就是你的账号密码输入有误导致的。自己核对后重新登陆即可")]),s._v(" "),t("ul",[t("li",[s._v("2、402\n这个问题一般是你尝试发布到公共范围导致的问题")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" ERR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" code E402\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" ERR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("402")]),s._v(" Payment Required - PUT https://registry.npmjs.org/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" - You must sign up "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" private packages\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("因为默认访问级别为私有。要解决此问题，可以设置npm config set access public或添加以下内容到package.json")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加以下")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"publishConfig"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"access"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.npmjs.org/"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("3.403\n一般出现403就表示你的包名已经被别人使用了。解决办法就是换一个包名。\n但大多数时候我建议你将包放在一个唯一的域下，这样以后你的包就不会出现和别人重名的情况，一般这个域会以你的npm username为名，前面加上@。\n例如 @username/xxx")])]),s._v(" "),t("li",[t("p",[s._v("4.404\n出现404的问题，就是你的组织未找到，也就是403状态码中解决办法提到的将包放到一个私有的域下。这个名字你当然不能胡乱写，npm会去搜索是否有这个名字，有的话将你本次的包添加到他下面，没有就会给你报404的错误了。所以大多数时候直接以你的npm 用户名就行了")])])]),s._v(" "),t("p",[s._v("以上就是本篇的全部内容")])])}),[],!1,null,null,null);t.default=e.exports}}]);