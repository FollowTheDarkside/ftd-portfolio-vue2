(function(){"use strict";var t={8973:function(t,r,e){e(6992),e(8674),e(9601),e(7727);var o=e(144),n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-app",[e("HeaderMenu"),e("div",{staticClass:"images-centering"},[e("v-row",t._l(t.workImages,(function(r,o){return e("v-col",{key:r.src,staticClass:"d-flex wrap",attrs:{cols:"12",sm:"6",md:"4",lg:"4",justify:"center","align-content":"center"}},[e("v-img",{staticClass:"grey lighten-2 header-ttl",attrs:{src:r.src,"aspect-ratio":"1",gradient:r.gradient_over},on:{click:function(e){return t.moveLink(r.url)},mouseover:function(r){return t.changeGradient(1,o)},mouseleave:function(r){return t.changeGradient(0,o)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1),e("AppFooter")],1)},i=[],a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("header",[e("v-app-bar",{attrs:{color:"rgba(255, 255, 255, 0.5)",app:"",light:""}},[e("v-app-bar-nav-icon",{on:{click:function(r){t.drawer=!0}}}),e("v-toolbar-title",[t._v("FollowTheDarkside")]),e("v-tabs",{attrs:{color:"transparent","background-color":"transparent","hide-slider":""}},[t._l(t.menuItems,(function(r,o){return e("v-tab",{key:o,attrs:{href:r.url,ripple:!1}},[e("font",{attrs:{color:"dimgray"}},[t._v(t._s(r.name))])],1)})),e("v-tabs-slider",{attrs:{color:"transparent"}})],2)],1),e("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[e("v-list",{attrs:{nav:"",dense:"",flat:""}},[e("v-list-item-group",t._l(t.menuItems,(function(r){return e("v-list-item",{key:r.name,attrs:{href:r.url}},[e("v-list-item-title",[t._v(t._s(r.name))])],1)})),1)],1)],1)],1)},s=[],l={menuItems:[{name:"TOP",url:"https://followthedarkside.github.io/"},{name:"INFO",url:"https://followthedarkside.github.io/info.html"},{name:"OTHER",url:"https://followthedarkside.github.io/other.html"},{name:"CONTACT",url:"https://followthedarkside.github.io/contact.html"}],workImages:[{src:e(2465),url:"https://followthedarkside.github.io/work/dot-matrix-format.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(4691),url:"https://followthedarkside.github.io/work/rojiura-extension.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(7356),url:"https://followthedarkside.github.io/work/gan-sanpo-ikuta.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(440),url:"https://followthedarkside.github.io/work/the-freshest-ai.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(563),url:"https://followthedarkside.github.io/work/breakgan-ft-steez.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(1783),url:"https://followthedarkside.github.io/work/breakgan.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(908),url:"https://followthedarkside.github.io/work/tokaido53-hiroshige-effect.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(1677),url:"https://followthedarkside.github.io/work/danceai-performance-at-stm32-summit.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(5101),url:"https://followthedarkside.github.io/work/dance-ai-for-beginners.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"}]},u={name:"HeaderMenu",data:function(){return{drawer:!1,menuItems:l.menuItems}}},c=u,g=e(1001),p=e(3453),f=e.n(p),d=e(8320),h=e(5206),m=e(6816),b=e(7620),v=e(7874),w=e(3466),k=e(31),_=e(4227),y=e(6933),Z=e(1208),x=e(7921),V=(0,g.Z)(c,a,s,!1,null,"16432834",null),O=V.exports;f()(V,{VAppBar:d.Z,VAppBarNavIcon:h.Z,VList:m.Z,VListItem:b.Z,VListItemGroup:v.Z,VListItemTitle:w.V9,VNavigationDrawer:k.Z,VTab:_.Z,VTabs:y.Z,VTabsSlider:Z.Z,VToolbarTitle:x.qW});var T=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-footer",{attrs:{color:"transparent",absolute:""}},[e("div",{staticClass:"footer"},[t._v(" ©2022 FollowTheDarkside ")])])},I=[],j=e(899),C={},A=(0,g.Z)(C,T,I,!1,null,"76a7acfd",null),F=A.exports;f()(A,{VFooter:j.Z});var S={name:"App",components:{HeaderMenu:O,AppFooter:F},data:function(){return{image_src:e(563),workImages:l.workImages,alpha:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.8)",alpha2:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)",overlay:!1}},created:function(){},methods:{moveLink:function(t){window.open(t,"_self")},changeGradient:function(t,r){this.workImages[r].gradient_over=t?"to top right, rgba(0,0,0,.5), rgba(255,255,255,.5)":"to top right, rgba(0,0,0,.0), rgba(255,255,255,.0)"}}},L=S,M=e(7524),P=e(2102),E=e(7047),G=e(624),H=e(2877),N=(0,g.Z)(L,n,i,!1,null,"6b44d6e3",null),$=N.exports;f()(N,{VApp:M.Z,VCol:P.Z,VImg:E.Z,VProgressCircular:G.Z,VRow:H.Z});var D=e(5591);o.Z.use(D.Z);var B=new D.Z({});o.Z.config.productionTip=!1,new o.Z({vuetify:B,render:function(t){return t($)}}).$mount("#app")},5101:function(t,r,e){t.exports=e.p+"img/work1.c44eecc4.png"},1677:function(t,r,e){t.exports=e.p+"img/work2.ae190796.png"},908:function(t,r,e){t.exports=e.p+"img/work3.b4c78ddf.png"},1783:function(t,r,e){t.exports=e.p+"img/work4.c9bee553.png"},563:function(t,r,e){t.exports=e.p+"img/work5.2dc7c458.png"},440:function(t,r,e){t.exports=e.p+"img/work6.bec1d514.png"},7356:function(t,r,e){t.exports=e.p+"img/work7.24860cd3.png"},4691:function(t,r,e){t.exports=e.p+"img/work8.8531a055.png"},2465:function(t,r,e){t.exports=e.p+"img/work9.8fa50d95.jpg"}},r={};function e(o){var n=r[o];if(void 0!==n)return n.exports;var i=r[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(r,o,n,i){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],n=t[c][1],i=t[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[l])}))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){t.splice(c--,1);var u=n();void 0!==u&&(r=u)}}return r}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,n,i]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={826:0};e.O.j=function(r){return 0===t[r]};var r=function(r,o){var n,i,a=o[0],s=o[1],l=o[2],u=0;if(a.some((function(r){return 0!==t[r]}))){for(n in s)e.o(s,n)&&(e.m[n]=s[n]);if(l)var c=l(e)}for(r&&r(o);u<a.length;u++)i=a[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},o=self["webpackChunkftd_portfolio_vue2"]=self["webpackChunkftd_portfolio_vue2"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(8973)}));o=e.O(o)})();
//# sourceMappingURL=index-legacy.3776284c.js.map