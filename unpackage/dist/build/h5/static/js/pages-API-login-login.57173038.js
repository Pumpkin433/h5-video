(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-login-login"],{"0cb7":function(t,e,n){var i=n("8e02");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("860ab5b4",i,!0,{sourceMap:!1,shadowMode:!1})},4483:function(t,e,n){"use strict";n.r(e);var i=n("bbe1"),a=n("48e6");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("bc967");var o,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"1dd8558a",null,!1,i["a"],o);e["default"]=u.exports},"48e6":function(t,e,n){"use strict";n.r(e);var i=n("976b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"8e02":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-button[data-v-1dd8558a]{background-color:#007aff;color:#fff}",""]),t.exports=e},"976b":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("8e6e"),n("ac6a"),n("456d");var a=i(n("bd86")),r=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={data:function(){return{title:"login",providerList:[]}},computed:c({},(0,r.mapState)(["hasLogin"])),onLoad:function(){var e=this;uni.getProvider({service:"oauth",success:function(t){e.providerList=t.provider.map((function(t){var e="";switch(t){case"weixin":e="微信登录";break;case"qq":e="QQ登录";break;case"sinaweibo":e="新浪微博登录";break;case"xiaomi":e="小米登录";break;case"alipay":e="支付宝登录";break;case"baidu":e="百度登录";break;case"toutiao":e="头条登录";break;case"apple":e="苹果登录";break}return{name:e,id:t}}))},fail:function(e){t.log("获取登录通道失败",e)}})},methods:c({},(0,r.mapMutations)(["login"]),{tologin:function(e){var n=this;uni.login({provider:e.id,success:function(i){t.log("login success:",i),n.login(e.id)},fail:function(e){t.log("login fail:",e)}})}})};e.default=u}).call(this,n("5a52")["default"])},bbe1:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticStyle:{background:"#FFF",padding:"40rpx"}},[!0===t.hasLogin?[n("v-uni-view",{staticClass:"uni-h3 uni-center uni-common-mt"},[t._v("已登录")]),n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[n("v-uni-text",[t._v("每个账号仅需登录 1 次，\\n后续每次进入页面即可自动拉取用户信息。")])],1)]:t._e(),!1===t.hasLogin?[n("v-uni-view",{staticClass:"uni-h3 uni-center uni-common-mt"},[t._v("未登录")]),n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("请点击按钮登录")])]:t._e()],2),n("v-uni-view",{staticClass:"uni-btn-v uni- uni-common-mt"},t._l(t.providerList,(function(e,i){return n("v-uni-button",{key:i,staticClass:"page-body-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tologin(e)}}},[t._v(t._s(e.name))])})),1)],1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},bc967:function(t,e,n){"use strict";var i=n("0cb7"),a=n.n(i);a.a}}]);