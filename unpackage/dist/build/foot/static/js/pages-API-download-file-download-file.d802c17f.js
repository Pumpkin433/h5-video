(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-download-file-download-file"],{"18d7":function(n,t,i){"use strict";var e=i("93c3"),a=i.n(e);a.a},"21c9":function(n,t,i){"use strict";var e,a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:n.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n.imageSrc?i("v-uni-image",{staticClass:"img",attrs:{src:n.imageSrc,mode:"center"}}):[i("v-uni-view",{staticClass:"uni-hello-text"},[n._v("点击按钮下载服务端示例图片（下载网络文件到本地临时目录）")]),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.downloadImage.apply(void 0,arguments)}}},[n._v("下载")])],1)]],2)],1)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return e}))},"6b9e":function(n,t,i){"use strict";i.r(t);var e=i("21c9"),a=i("94ed");for(var o in a)"default"!==o&&function(n){i.d(t,n,(function(){return a[n]}))}(o);i("18d7");var u,c=i("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"765a70de",null,!1,e["a"],u);t["default"]=r.exports},7039:function(n,t,i){var e=i("24fb");t=e(!1),t.push([n.i,".img[data-v-765a70de]{width:%?500?%;height:%?500?%;margin:0 %?95?%}",""]),n.exports=t},"93c3":function(n,t,i){var e=i("7039");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("5aa5d79b",e,!0,{sourceMap:!1,shadowMode:!1})},"94ed":function(n,t,i){"use strict";i.r(t);var e=i("e9c2"),a=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,(function(){return e[n]}))}(o);t["default"]=a.a},e9c2:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{title:"downloadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{downloadImage:function(){uni.showLoading({title:"下载中"});var t=this;uni.downloadFile({url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(i){n.log("downloadFile success, res is",i),t.imageSrc=i.tempFilePath,uni.hideLoading()},fail:function(t){n.log("downloadFile fail, err is:",t)}})}}};t.default=i}).call(this,i("5a52")["default"])}}]);