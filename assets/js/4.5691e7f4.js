(window.webpackJsonp=window.webpackJsonp||[]).push([[4,32,39],{258:function(e,t,n){},261:function(e,t,n){"use strict";n.r(t);var i={name:"DropdownTransition",methods:{setHeight(e){e.style.height=e.scrollHeight+"px"},unsetHeight(e){e.style.height=""}}},s=(n(262),n(0)),r=Object(s.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.default=r.exports},262:function(e,t,n){"use strict";n(258)},267:function(e,t,n){},273:function(e,t,n){},282:function(e,t,n){"use strict";n(267)},284:function(e,t,n){"use strict";n.r(t);var i=n(309),s=n(286),r=n(11);function a(e,t){return"group"===t.type&&t.children.some(t=>"group"===t.type?a(e,t):"page"===t.type&&Object(r.f)(e,t.path))}var o={name:"SidebarLinks",components:{SidebarGroup:i.default,SidebarLink:s.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const e=function(e,t){for(let n=0;n<t.length;n++){const i=t[n];if(a(e,i))return n}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive(e){return Object(r.f)(this.$route,e.regularPath)}}},l=n(0),p=Object(l.a)(o,(function(){var e=this,t=e._self._c;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(n,i){return t("li",{key:i},["group"===n.type?t("SidebarGroup",{attrs:{item:n,open:i===e.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(i)}}}):t("SidebarLink",{attrs:{sidebarDepth:e.sidebarDepth,item:n}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=p.exports},286:function(e,t,n){"use strict";n.r(t);var i=n(11);function s(e,t,n,i){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function r(e,t,n,a,o,l=1){return!t||l>o?null:e("ul",{class:"sidebar-sub-headers"},t.map(t=>{const p=Object(i.f)(a,n+"#"+t.slug);return e("li",{class:"sidebar-sub-header level"+t.level},[s(e,n+"#"+t.slug,t.title,p),r(e,t.children,n,a,o,l+1)])}))}var a={functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:n,$route:a,$themeConfig:o,$themeLocaleConfig:l},props:{item:p,sidebarDepth:u}}){const c=Object(i.f)(a,p.path),d="auto"===p.type?c||p.children.some(e=>Object(i.f)(a,p.basePath+"#"+e.slug)):c,h="external"===p.type?function(e,t,n){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,e("OutboundLink")])}(e,p.path,p.title||p.path):s(e,p.path,p.title||p.path,d),b=[t.frontmatter.sidebarDepth,u,l.sidebarDepth,o.sidebarDepth,1].find(e=>void 0!==e),f=l.displayAllHeaders||o.displayAllHeaders;if("auto"===p.type)return[h,r(e,p.children,p.basePath,a,b)];if((d||f)&&p.headers&&!i.e.test(p.path)){return[h,r(e,Object(i.d)(p.headers),p.path,a,b)]}return h}},o=(n(282),n(0)),l=Object(o.a)(a,void 0,void 0,!1,null,null,null);t.default=l.exports},304:function(e,t,n){"use strict";n(273)},309:function(e,t,n){"use strict";n.r(t);var i=n(11),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(261).default},beforeCreate(){this.$options.components.SidebarLinks=n(284).default},methods:{isActive:i.f}},r=(n(304),n(0)),a=Object(r.a)(s,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?t("router-link",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);