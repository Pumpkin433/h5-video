(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-web-view-web-view"],{"0820":function(n,t,e){"use strict";e.r(t);var u=e("1c81"),i=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);t["default"]=i.a},"09c9":function(n,t,e){"use strict";e.r(t);var u=e("1a90"),i=e("0820");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);var a,c=e("f0c5"),o=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"1ce566f3",null,!1,u["a"],a);t["default"]=o.exports},"1a90":function(n,t,e){"use strict";var u,i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-web-view",{attrs:{src:n.url},on:{message:function(t){arguments[0]=t=n.$handleEvent(t),n.getMessage.apply(void 0,arguments)}}})],1)},r=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return u}))},"1c81":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{url:"https://uniapp.dcloud.io/static/web-view.html"}},onLoad:function(n){n&&n.url&&(this.url=n.url)},methods:{getMessage:function(n){uni.showModal({content:JSON.stringify(n.detail),showCancel:!1})}}};t.default=u}}]);