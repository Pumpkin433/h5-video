(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-location-get-location"],{1302:function(t,n,e){"use strict";e.r(n);var i=e("5a80"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"5a80":function(t,n,e){"use strict";var i=e("ee27");e("c975"),e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var o=i(e("c964")),a=i(e("6ac2")),r=e("c51f"),u=r.formatLocation,c={components:{uniPopup:a.default},data:function(){return{title:"getLocation",hasLocation:!1,location:{},type:""}},methods:{togglePopup:function(t){this.type=t},showConfirm:function(){this.type="showpopup"},hideConfirm:function(){this.type=""},getLocation:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.doGetLocation();case 1:case"end":return n.stop()}}),n)})))()},doGetLocation:function(){var t=this;uni.getLocation({success:function(n){t.hasLocation=!0,t.location=u(n.longitude,n.latitude)},fail:function(t){t.errMsg.indexOf("auth deny")>=0?uni.showToast({title:"访问位置被拒绝"}):uni.showToast({title:t.errMsg})}})},getSetting:function(){return new Promise((function(t,n){uni.getSetting({success:function(n){void 0!==n.authSetting["scope.userLocation"]?n.authSetting["scope.userLocation"]?t(1):t(2):t(0)}})}))},openSetting:function(){var t=this;this.hideConfirm(),uni.openSetting({success:function(n){n.authSetting&&n.authSetting["scope.userLocation"]&&t.doGetLocation()},fail:function(t){}})},checkPermission:function(){return(0,o.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!permision.isIOS){t.next=6;break}return t.next=3,permision.requestIOS("location");case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,permision.requestAndroid("android.permission.ACCESS_FINE_LOCATION");case 8:t.t0=t.sent;case 9:return n=t.t0,null===n||1===n?n=1:2===n?uni.showModal({content:"系统定位已关闭",confirmText:"确定",showCancel:!1,success:function(t){}}):n.code?uni.showModal({content:n.message}):uni.showModal({content:"需要定位权限",confirmText:"设置",success:function(t){t.confirm&&permision.gotoAppSetting()}}),t.abrupt("return",n);case 12:case"end":return t.stop()}}),t)})))()},clear:function(){this.hasLocation=!1}}};n.default=c},"5ae3":function(t,n,e){"use strict";var i=e("7cb3"),o=e.n(i);o.a},"7cb3":function(t,n,e){var i=e("ebaf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("042b82e1",i,!0,{sourceMap:!1,shadowMode:!1})},b2e4:function(t,n,e){"use strict";var i={"uni-popup":e("6ac2").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40rpx"}},[e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("当前位置经纬度")]),!1===t.hasLocation?[e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未获取")])]:t._e(),!0===t.hasLocation?[e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[e("v-uni-text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),e("v-uni-text",[t._v("\\nN: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])],1)]:t._e()],2),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getLocation.apply(void 0,arguments)}}},[t._v("获取位置")]),e("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t._v("清空")])],1)],1),e("uni-popup",{attrs:{show:"showpopup"===t.type,mode:"fixed"},on:{hidePopup:function(n){arguments[0]=n=t.$handleEvent(n),t.togglePopup("")}}},[e("v-uni-view",{staticClass:"popup-view"},[e("v-uni-text",{staticClass:"popup-title"},[t._v("需要用户授权位置权限")]),e("v-uni-view",{staticClass:"uni-flex popup-buttons"},[e("v-uni-button",{staticClass:"uni-flex-item",attrs:{type:"primary","open-type":"openSetting"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openSetting.apply(void 0,arguments)}}},[t._v("设置")]),e("v-uni-button",{staticClass:"uni-flex-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.togglePopup("")}}},[t._v("取消")])],1)],1)],1)],1)},a=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},b514:function(t,n,e){"use strict";e.r(n);var i=e("b2e4"),o=e("1302");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("5ae3");var r,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"7e182cd8",null,!1,i["a"],r);n["default"]=c.exports},c51f:function(t,n,e){function i(t){if("number"!==typeof t||t<0)return t;var n=parseInt(t/3600);t%=3600;var e=parseInt(t/60);t%=60;var i=t;return[n,e,i].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function o(t,n,e){var i="",o=n,a=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-"];t&&(o=Math.round(Math.random()*(e-n))+n);for(var r=0;r<o;r++){var u=Math.round(Math.random()*(a.length-1));i+=a[u]}return i}function a(t,n){for(var e=t,i=[],o=0;o<n;o++){if(!(e.length>0))break;var a=Math.floor(Math.random()*e.length);i[o]=e[a],e.splice(a,1)}return i}function r(t,n){return"string"===typeof t&&"string"===typeof n&&(t=parseFloat(t),n=parseFloat(n)),t=t.toFixed(2),n=n.toFixed(2),{longitude:t.toString().split("."),latitude:n.toString().split(".")}}e("a15b"),e("d81d"),e("a434"),e("b6802"),e("d3b7"),e("acd8"),e("e25e"),e("ac1f"),e("25f0"),e("1276");var u={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var n="";for(var e in this.UNITS)if(t>=this.UNITS[e]){n=Math.floor(t/this.UNITS[e])+e+"前";break}return n||"刚刚"},format:function(t){var n=this.parse(t),e=Date.now()-n.getTime();if(e<this.UNITS["天"])return this.humanize(e);var i=function(t){return t<10?"0"+t:t};return n.getFullYear()+"/"+i(n.getMonth()+1)+"/"+i(n.getDate())+"-"+i(n.getHours())+":"+i(n.getMinutes())},parse:function(t){var n=t.split(/[^0-9]/);return new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5])}};t.exports={formatTime:i,formatLocation:r,dateUtils:u,randomWord:o,randomOption:a}},ebaf:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".popup-view[data-v-7e182cd8]{width:%?500?%}.popup-title[data-v-7e182cd8]{display:block;font-size:16px;line-height:3;margin-bottom:10px;text-align:center}.popup-buttons uni-button[data-v-7e182cd8]{margin-left:4px;margin-right:4px}",""]),t.exports=n}}]);