(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{450:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("monorepo")]),s._v("（将多个项目放在同一个仓库管理）是当前大热的一个"),a("code",[s._v("多包管理")]),s._v("方案，但是想要用好"),a("code",[s._v("monorepo")]),s._v("，就需要解决依赖关系的处理以及包的"),a("code",[s._v("构建")]),s._v("和"),a("code",[s._v("发布")]),s._v("问题。下文就来介绍一下如何优雅的解决这些问题")])]),s._v(" "),a("h2",{attrs:{id:"pnpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pnpm"}},[s._v("#")]),s._v(" pnpm")]),s._v(" "),a("p",[s._v("强烈安利在monorepo方案中使用"),a("code",[s._v("pnpm")]),s._v("作为包管理器，"),a("code",[s._v("pnpm")]),s._v("有着天然的对monorepo的支持")]),s._v(" "),a("ul",[a("li",[s._v("内置"),a("code",[s._v("workspace")]),s._v("，有着良好的"),a("code",[s._v("依赖关系管理")]),s._v("，让你无需处处npm link")]),s._v(" "),a("li",[s._v("独特的依赖管理机制（将所有依赖的依赖都"),a("code",[s._v("打平")]),s._v("放置在"),a("code",[s._v(".pnpm")]),s._v("文件夹内），解决了让人诟病的幽灵依赖问题")]),s._v(" "),a("li",[s._v("特有的"),a("code",[s._v("filter")]),s._v("机制，让你在轻松"),a("code",[s._v("筛选")]),s._v("你想处理的子包")])]),s._v(" "),a("h2",{attrs:{id:"changeset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changeset"}},[s._v("#")]),s._v(" changeset")]),s._v(" "),a("p",[s._v("下面介绍一下主角，"),a("code",[s._v("changeset")]),s._v("是一个版本管理，发布，以及"),a("code",[s._v("changelog")]),s._v("文件管理的工具，它可以筛选出你想发布的子包然后为这些包进行版本升级，生成changelog，以及发布新版本。")]),s._v(" "),a("p",[s._v("他的工作流程也很简单")]),s._v(" "),a("ul",[a("li",[s._v("首先"),a("code",[s._v("筛选")]),s._v("出想更新的包")]),s._v(" "),a("li",[s._v("然后"),a("code",[s._v("选择")]),s._v("更新版本号")]),s._v(" "),a("li",[s._v("接着"),a("code",[s._v("写入")]),s._v("更新摘要，此时会"),a("code",[s._v("生成")]),s._v("一个"),a("code",[s._v("临时")]),s._v("changelog文件")]),s._v(" "),a("li",[s._v("执行"),a("code",[s._v("更新")]),s._v("命令，会"),a("code",[s._v("消耗")]),s._v("这个临时文件生成"),a("code",[s._v("最终")]),s._v("的changelog，并且"),a("code",[s._v("更新版本")])]),s._v(" "),a("li",[s._v("然后执行"),a("code",[s._v("发布")]),s._v("命令，就完成了一个包的更新发布")])]),s._v(" "),a("p",[s._v("由于"),a("code",[s._v("Monorepo")]),s._v("方案的特殊性，我们没办法直接通过"),a("code",[s._v("commit")]),s._v("来生成"),a("code",[s._v("changelog")]),s._v("，所以此时"),a("code",[s._v("changeset")]),s._v("这种更新方式就显得尤其有用，虽然他看上去会比较繁琐。")]),s._v(" "),a("p",[s._v("下面通过一个例子来真实感受一下")]),s._v(" "),a("p",[s._v("首先通过pnpm创建一个monorepo工程并创建几个子包")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("pnpm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("changsets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("monorepo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("example\n├── "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LICENSE")]),s._v("\n├── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n├── packages\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  ├── a\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  ├── "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHANGELOG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  ├── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  └── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  ├── b\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  ├── "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHANGELOG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  ├── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  └── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  └── c\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     ├── "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHANGELOG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     ├── index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     └── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("几个子包的依赖关系如下：\nc包独立，a包是b包的依赖")]),s._v(" "),a("p",[s._v("这里再提一点"),a("code",[s._v("pnpm")]),s._v("的强大之处，例如此时我们a包和b包有更新，需要发版。此时因为a包和b包之间存在"),a("code",[s._v("依赖关系")]),s._v("，正常来说我们需要等待a包"),a("code",[s._v("构建发布")]),s._v("完毕再去"),a("code",[s._v("发布b包")]),s._v("。\n而pnpm其实早已帮我们处理好了这一切，当我们同时构建这两个包的时候，pnpm内部会"),a("code",[s._v("自行检测依赖关系")]),s._v("，并且"),a("code",[s._v("先执行被依赖的包")]),s._v("的构建最后"),a("code",[s._v("再执行主包的构建")]),s._v("。")]),s._v(" "),a("p",[s._v("回归正题，此时我们有三个包，如果想要更新c包，并且为他生成他自己的changelog。")]),s._v(" "),a("p",[s._v("首先安装一下"),a("code",[s._v("changeset")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" i @changesets/cli\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后执行初始化命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("changeset init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行后你就会看到在根目录生成了.changeset文件夹，里面有changeset的配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"$schema"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://unpkg.com/@changesets/config@2.3.1/schema.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"changelog"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@changesets/cli/changelog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"fixed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"linked"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"access"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"baseBranch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"master"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这里修改成你的主分支名")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"updateInternalDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"patch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"ignore"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("开始更新，先执行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("changeset 或者 npx changeset\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行次命令后控制台就会"),a("code",[s._v("罗列")]),s._v("出package下的"),a("code",[s._v("所有子包")]),s._v("，按"),a("code",[s._v("空格")]),s._v("选择你想要更新的包，然后按"),a("code",[s._v("回车")]),s._v("确定")]),s._v(" "),a("p",[s._v("这时候控制台会展示"),a("code",[s._v("需要更新")]),s._v("的"),a("code",[s._v("版本号")]),s._v("，是"),a("code",[s._v("大版本")]),s._v("还是"),a("code",[s._v("小补丁")]),s._v("，一共"),a("code",[s._v("三个")]),s._v("选择，对应了语义化版本号管理的三个值。\n但是这里不是罗列出来让你选了，而是你要一个一个去确认，不是你想跟新的位数直接输入"),a("code",[s._v("n")]),s._v("跳过就行了。")]),s._v(" "),a("p",[s._v("当版本号确定后就会出现让你"),a("code",[s._v("输入摘要")]),s._v("，这个摘要就是最后"),a("code",[s._v("写入changelog")]),s._v("的内容")]),s._v(" "),a("p",[s._v("输入完摘要就会生成一个"),a("code",[s._v("临时")]),s._v("的md文件。")]),s._v(" "),a("p",[s._v("这个时候执行以下命令"),a("code",[s._v("消耗")]),s._v("掉这个临时文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("changeset version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样就可以看到版本号更新了，以及changelog也生成了。")]),s._v(" "),a("p",[s._v("发布版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("changeset publish\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("以上就是一个完整的使用过程了")])])}),[],!1,null,null,null);a.default=n.exports}}]);