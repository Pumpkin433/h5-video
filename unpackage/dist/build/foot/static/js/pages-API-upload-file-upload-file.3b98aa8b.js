(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-upload-file-upload-file"],{"0d13":function(e,t,a){"use strict";a.r(t);var i=a("bd30"),n=a("9cbe");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("8fe1");var c,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"d5884200",null,!1,i["a"],c);t["default"]=s.exports},"39c9":function(e,t,a){var i=a("fe17");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("f22dccf4",i,!0,{sourceMap:!1,shadowMode:!1})},"8fe1":function(e,t,a){"use strict";var i=a("39c9"),n=a.n(i);n.a},"9cbe":function(e,t,a){"use strict";a.r(t);var i=a("bef7"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},bd30:function(e,t,a){"use strict";var i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:e.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"demo"},[e.imageSrc?[a("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]:[a("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 选择图片")])]],2)],1)],1)},o=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}))},bef7:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(a){e.log("chooseImage success, temp path is",a.tempFilePaths[0]);var i=a.tempFilePaths[0];uni.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:i,fileType:"image",name:"data",success:function(a){e.log("uploadImage success, res is:",a),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),t.imageSrc=i},fail:function(t){e.log("uploadImage fail",t),uni.showModal({content:t.errMsg,showCancel:!1})}})},fail:function(t){e.log("chooseImage fail",t)}})}}};t.default=a}).call(this,a("5a52")["default"])},fe17:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".image[data-v-d5884200]{width:100%}.demo[data-v-d5884200]{background:#fff;padding:%?50?%}",""]),e.exports=t}}]);