(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-upload-file-upload-file"],{"1c28":function(e,a,t){a=e.exports=t("2350")(!1),a.push([e.i,".image[data-v-2be01907]{width:100%}.demo[data-v-2be01907]{background:#fff;padding:%?50?%}",""])},"8f17":function(e,a,t){"use strict";t.r(a);var i=t("a767"),n=t("dfdf");for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);t("c37a");var c,u=t("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"2be01907",null,!1,i["a"],c);a["default"]=s.exports},a767:function(e,a,t){"use strict";var i,n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"demo"},[e.imageSrc?[t("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]:[t("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 选择图片")])]],2)],1)],1)},o=[];t.d(a,"b",function(){return n}),t.d(a,"c",function(){return o}),t.d(a,"a",function(){return i})},a8bc:function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var a=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){e.log("chooseImage success, temp path is",t.tempFilePaths[0]);var i=t.tempFilePaths[0];uni.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:i,fileType:"image",name:"data",success:function(t){e.log("uploadImage success, res is:",t),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),a.imageSrc=i},fail:function(a){e.log("uploadImage fail",a),uni.showModal({content:a.errMsg,showCancel:!1})}})},fail:function(a){e.log("chooseImage fail",a)}})}}};a.default=t}).call(this,t("5a52")["default"])},c37a:function(e,a,t){"use strict";var i=t("e44d"),n=t.n(i);n.a},dfdf:function(e,a,t){"use strict";t.r(a);var i=t("a8bc"),n=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(a,e,function(){return i[e]})}(o);a["default"]=n.a},e44d:function(e,a,t){var i=t("1c28");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("105c6844",i,!0,{sourceMap:!1,shadowMode:!1})}}]);