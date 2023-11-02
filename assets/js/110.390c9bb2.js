(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{488:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("blockquote",[n("p",[s._v("前端路由大致分为"),n("code",[s._v("hash")]),s._v("模式和"),n("code",[s._v("history")]),s._v("模式两种,并且前端路由的主要实现思路其实就是路由改变而不重新像服务器请求资源。在这一点上hash路由可以很好的坐到。而history路由则就需要服务端同学做一些额外的配置支持一下了。具体的两种路由这里就不多做介绍。直接进入正文")])]),s._v(" "),n("h2",{attrs:{id:"nginx配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[s._v("#")]),s._v(" nginx配置")]),s._v(" "),n("p",[s._v("通常"),n("code",[s._v("nginx")]),s._v("会为匹配不到的资源跳转到"),n("code",[s._v("404兜底")]),s._v("，而history模式下刷新浏览器，浏览器会真实的像服务器去请求"),n("code",[s._v("url")]),s._v("对应的资源，这个时候资源是不存在的，我们就需要给他都重定向到"),n("code",[s._v("index.html")]),s._v("文件去。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("    server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#监听80端口")]),s._v("\n        server_name  xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#域名")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里我们有三个项目都部署到了同一个域名下，所以对每个项目都进行一个配置")]),s._v("\n        location /h5 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n            root   /mnt/belife-work/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            try_files "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /h5/index.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重点在这一句，路径要天你的站点对应的后缀下的inde.html")]),s._v("\n            index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location /cms "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   /mnt/belife-work/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location /admin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   /mnt/belife-work/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            try_files "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /admin/index.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location ~ /v1/app "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端接口代理")]),s._v("\n            proxy_pass http://localhost:8081"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location ~ /v1/work "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            proxy_pass http://localhost:8088"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("p",[n("strong",[s._v("try_files $uri $uri/ /h5/index.html")]),s._v(" 重点代码，路径的话跟着你的站点"),n("code",[s._v("后缀")]),s._v("自由变化就行，如果你是在"),n("code",[s._v("根目录")]),s._v("下那就直接"),n("code",[s._v("/index.html")]),s._v("即可")]),s._v(" "),n("h2",{attrs:{id:"另外"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#另外"}},[s._v("#")]),s._v(" 另外")]),s._v(" "),n("p",[s._v("如果你的站点不是部署在"),n("code",[s._v("根目录")]),s._v("，而是像上文中的"),n("code",[s._v("/h5")]),s._v("，"),n("code",[s._v("/admin")]),s._v("目录下的话，那你的路由还需要配置一下"),n("code",[s._v("base")]),s._v("属性，这样，vue-router会自动的帮你在路由前面加上"),n("code",[s._v("前缀")]),s._v("。\n注意：这里的"),n("code",[s._v("base")]),s._v("和"),n("code",[s._v("打包配置")]),s._v("里的"),n("code",[s._v("base")]),s._v("可不一样哦，"),n("code",[s._v("路由里的base")]),s._v("作用是在你的"),n("code",[s._v("路由")]),s._v("里添加上"),n("code",[s._v("前缀")]),s._v("，而"),n("code",[s._v("vue.config.js")]),s._v("里的"),n("code",[s._v("base")]),s._v("则是你构建后的"),n("code",[s._v("静态资源")]),s._v("的"),n("code",[s._v("前缀")]),s._v("，比如你的静态资源可能会放置在别的cdn上，那么vite会自动帮你加上cdn的前缀，也就是你配置的base，这样就无需手动的去添加了")])])}),[],!1,null,null,null);n.default=e.exports}}]);