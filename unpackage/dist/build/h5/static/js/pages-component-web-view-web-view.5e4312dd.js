(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-web-view-web-view"],{1547:function(e,n,t){"use strict";var u=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("f499")),i={data:function(){return{url:"https://uniapp.dcloud.io/static/web-view.html"}},onLoad:function(e){e&&e.url&&(this.url=e.url)},methods:{getMessage:function(e){uni.showModal({content:(0,r.default)(e.detail),showCancel:!1})}}};n.default=i},4159:function(e,n,t){"use strict";t.r(n);var u=t("1547"),r=t.n(u);for(var i in u)"default"!==i&&function(e){t.d(n,e,function(){return u[e]})}(i);n["default"]=r.a},c1b5:function(e,n,t){"use strict";t.r(n);var u=t("febe"),r=t("4159");for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);var a,o=t("f0c5"),c=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"4068fd8d",null,!1,u["a"],a);n["default"]=c.exports},febe:function(e,n,t){"use strict";var u,r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("v-uni-web-view",{attrs:{src:e.url},on:{message:function(n){arguments[0]=n=e.$handleEvent(n),e.getMessage.apply(void 0,arguments)}}})],1)},i=[];t.d(n,"b",function(){return r}),t.d(n,"c",function(){return i}),t.d(n,"a",function(){return u})}}]);