(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-choose-location-choose-location"],{"0a96":function(t,n,i){"use strict";i.r(n);var o=i("15da"),e=i("6f38");for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);i("22c2");var r,u=i("f0c5"),c=Object(u["a"])(e["default"],o["b"],o["c"],!1,null,"19576514",null,!1,o["a"],r);n["default"]=c.exports},"0b25":function(t,n,i){var o=i("24fb");n=o(!1),n.push([t.i,".page-body-info[data-v-19576514]{padding-bottom:0;height:%?440?%}",""]),t.exports=n},"15da":function(t,n,i){"use strict";var o,e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40rpx"}},[i("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("当前位置信息")]),!1===t.hasLocation?[i("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未选择位置")])]:t._e(),!0===t.hasLocation?[i("v-uni-view",{staticClass:"uni-hello-text uni-center",staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.locationAddress))]),i("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[i("v-uni-text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),i("v-uni-text",[t._v("\\nN: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])],1)]:t._e()],2),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.chooseLocation.apply(void 0,arguments)}}},[t._v("选择位置")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t._v("清空")])],1)],1)],1)},a=[];i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return o}))},"22c2":function(t,n,i){"use strict";var o=i("31c5"),e=i.n(o);e.a},"31c5":function(t,n,i){var o=i("0b25");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=i("4f06").default;e("38090e30",o,!0,{sourceMap:!1,shadowMode:!1})},"62c1":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i("ce9c"),e=o.formatLocation,a={data:function(){return{title:"chooseLocation",hasLocation:!1,location:{},locationAddress:""}},methods:{chooseLocation:function(){var t=this;uni.chooseLocation({success:function(n){t.hasLocation=!0,t.location=e(n.longitude,n.latitude),t.locationAddress=n.address}})},clear:function(){this.hasLocation=!1}}};n.default=a},"6f38":function(t,n,i){"use strict";i.r(n);var o=i("62c1"),e=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);n["default"]=e.a},ce9c:function(t,n,i){"use strict";function o(t){if("number"!==typeof t||t<0)return t;var n=parseInt(t/3600);t%=3600;var i=parseInt(t/60);t%=60;var o=t;return[n,i,o].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function e(t,n,i){var o="",e=n,a=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-"];t&&(e=Math.round(Math.random()*(i-n))+n);for(var r=0;r<e;r++){var u=Math.round(Math.random()*(a.length-1));o+=a[u]}return o}function a(t,n){return"string"===typeof t&&"string"===typeof n&&(t=parseFloat(t),n=parseFloat(n)),t=t.toFixed(2),n=n.toFixed(2),{longitude:t.toString().split("."),latitude:n.toString().split(".")}}i("28a5"),i("6b54");var r={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var n="";for(var i in this.UNITS)if(t>=this.UNITS[i]){n=Math.floor(t/this.UNITS[i])+i+"前";break}return n||"刚刚"},format:function(t){var n=this.parse(t),i=Date.now()-n.getTime();if(i<this.UNITS["天"])return this.humanize(i);var o=function(t){return t<10?"0"+t:t};return n.getFullYear()+"/"+o(n.getMonth()+1)+"/"+o(n.getDate())+"-"+o(n.getHours())+":"+o(n.getMinutes())},parse:function(t){var n=t.split(/[^0-9]/);return new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5])}};t.exports={formatTime:o,formatLocation:a,dateUtils:r,randomWord:e}}}]);