(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mid-mid"],{"324f":function(n,e,t){"use strict";var i,u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view")},o=[];t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}))},"911b":function(n,e,t){"use strict";t.r(e);var i=t("324f"),u=t("9aea");for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);var a,d=t("f0c5"),r=Object(d["a"])(u["default"],i["b"],i["c"],!1,null,"ad344894",null,!1,i["a"],a);e["default"]=r.exports},"9aea":function(n,e,t){"use strict";t.r(e);var i=t("f0d4"),u=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,(function(){return i[n]}))}(o);e["default"]=u.a},f0d4:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={name:"mid",onShow:function(){},onLoad:function(e){var t=e.uid,i=e.token,u=e.ns_device_id,o=e.videoId;uni.setStorageSync("uid",t),uni.setStorageSync("token",i),uni.setStorageSync("ns_device_id",u),n.log(t),n.log(i),n.log(u),n.log(o),uni.reLaunch({url:"/pages/index/video?uid="+t+"&token="+i+"&ns_device_id="+u+"&id="+o})}};e.default=t}).call(this,t("5a52")["default"])}}]);