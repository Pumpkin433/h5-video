(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-image-image"],{3018:function(e,t,i){"use strict";i.r(t);var n=i("e545"),s=i("d83c7");for(var a in s)"default"!==a&&function(e){i.d(t,e,(function(){return s[e]}))}(a);i("3279");var u,r=i("f0c5"),o=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"9929e3d4",null,!1,n["a"],u);t["default"]=o.exports},3279:function(e,t,i){"use strict";var n=i("73a0"),s=i.n(n);s.a},"669e":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".cell-pd[data-v-9929e3d4]{padding:%?22?% %?30?%}.list-pd[data-v-9929e3d4]{margin-top:%?50?%}",""]),e.exports=t},6743:function(e,t,i){"use strict";(function(e){var n=i("ee27");i("99af"),i("d3b7"),i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var s=n(i("c964")),a=n(i("e05a")),u=[["camera"],["album"],["camera","album"]],r=[["compressed"],["original"],["compressed","original"]],o={data:function(){return{title:"choose/previewImage",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{sourceTypeChange:function(e){this.sourceTypeIndex=parseInt(e.detail.value)},sizeTypeChange:function(e){this.sizeTypeIndex=parseInt(e.detail.value)},countChange:function(e){this.countIndex=e.detail.value},chooseImage:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(){var i,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(9!==this.imageList.length){t.next=7;break}return t.next=3,this.isFullImg();case 3:if(i=t.sent,e.log("是否继续?",i),i){t.next=7;break}return t.abrupt("return");case 7:uni.chooseImage({sourceType:u[this.sourceTypeIndex],sizeType:r[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){n.imageList=n.imageList.concat(e.tempFilePaths)},fail:function(e){}});case 8:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),isFullImg:function(){var e=this;return new Promise((function(t){uni.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(i){i.confirm?(e.imageList=[],t(!0)):t(!1)},fail:function(){t(!1)}})}))},previewImage:function(e){var t=e.target.dataset.src;uni.previewImage({current:t,urls:this.imageList})},checkPermission:function(e){var t=this;return(0,s.default)(regeneratorRuntime.mark((function i(){var n,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=e?e-1:t.sourceTypeIndex,!a.default.isIOS){i.next=7;break}return i.next=4,a.default.requestIOS(u[n][0]);case 4:i.t0=i.sent,i.next=10;break;case 7:return i.next=9,a.default.requestAndroid(0===n?"android.permission.CAMERA":"android.permission.READ_EXTERNAL_STORAGE");case 9:i.t0=i.sent;case 10:return s=i.t0,null===s||1===s?s=1:uni.showModal({content:"没有开启权限",confirmText:"设置",success:function(e){e.confirm&&a.default.gotoAppSetting()}}),i.abrupt("return",s);case 13:case"end":return i.stop()}}),i)})))()}}};t.default=o}).call(this,i("5a52")["default"])},"73a0":function(e,t,i){var n=i("669e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("4f06").default;s("5f9898cd",n,!0,{sourceMap:!1,shadowMode:!1})},d83c7:function(e,t,i){"use strict";i.r(t);var n=i("6743"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a},e05a:function(e,t,i){(function(t){var n;function s(){var e=0,t=plus.ios.import("PHPhotoLibrary"),i=t.authorizationStatus();return e=0===i?null:3==i?1:0,plus.ios.deleteObject(t),e}function a(){var e=0,t=plus.ios.import("AVCaptureDevice"),i=t.authorizationStatusForMediaType("vide");return e=0===i?null:3==i?1:0,plus.ios.deleteObject(t),e}function u(){var e=0,t=plus.ios.import("CLLocationManager"),i=t.locationServicesEnabled(),n=t.authorizationStatus();return e=i?0===n?null:3===n||4===n?1:0:2,plus.ios.deleteObject(t),e}function r(){var e=0,i=plus.ios.import("UIApplication"),n=i.sharedApplication(),s=0;if(n.currentUserNotificationSettings){var a=n.currentUserNotificationSettings();s=a.plusGetAttribute("types"),0==s?(e=0,t.log("推送权限没有开启")):(e=1,t.log("已经开启推送功能!")),plus.ios.deleteObject(a)}else s=n.enabledRemoteNotificationTypes(),0==s?(e=3,t.log("推送权限没有开启!")):(e=4,t.log("已经开启推送功能!"));return plus.ios.deleteObject(n),plus.ios.deleteObject(i),e}function o(){var e=0,t=plus.ios.import("CNContactStore"),i=t.authorizationStatusForEntityType(0);return e=0===i?null:3==i?1:0,plus.ios.deleteObject(t),e}function l(){var e=null,i=plus.ios.import("AVAudioSession"),n=i.sharedInstance(),s=n.recordPermission();return t.log("permissionStatus:"+s),e=1970168948===s?null:1735552628===s?1:0,plus.ios.deleteObject(i),e}function c(){var e=null,i=plus.ios.import("EKEventStore"),n=i.authorizationStatusForEntityType(0);return 3==n?(e=1,t.log("日历权限已经开启")):t.log("日历权限没有开启"),plus.ios.deleteObject(i),e}function p(){var e=null,i=plus.ios.import("EKEventStore"),n=i.authorizationStatusForEntityType(1);return 3==n?(e=1,t.log("备忘录权限已经开启")):t.log("备忘录权限没有开启"),plus.ios.deleteObject(i),e}function d(e){return new Promise((function(t,i){switch(e){case"push":t(r());break;case"location":t(u());break;case"record":t(l());break;case"camera":t(a());break;case"album":t(s());break;case"contact":t(o());break;case"calendar":t(c());break;case"memo":t(p());break;default:t(0);break}}))}function v(e){return new Promise((function(i,n){plus.android.requestPermissions([e],(function(e){for(var n=0,s=0;s<e.granted.length;s++){var a=e.granted[s];t.log("已获取的权限："+a),n=1}for(s=0;s<e.deniedPresent.length;s++){var u=e.deniedPresent[s];t.log("拒绝本次申请的权限："+u),n=0}for(s=0;s<e.deniedAlways.length;s++){var r=e.deniedAlways[s];t.log("永久拒绝申请的权限："+r),n=-1}i(n)}),(function(e){t.log("result error: "+e.message),i({code:e.code,message:e.message})}))}))}function f(){if(g.isIOS){var e=plus.ios.import("UIApplication"),t=e.sharedApplication(),i=plus.ios.import("NSURL"),n=i.URLWithString("app-settings:");t.openURL(n),plus.ios.deleteObject(n),plus.ios.deleteObject(i),plus.ios.deleteObject(t)}else{var s=plus.android.importClass("android.content.Intent"),a=plus.android.importClass("android.provider.Settings"),u=plus.android.importClass("android.net.Uri"),r=plus.android.runtimeMainActivity(),o=new s;o.setAction(a.ACTION_APPLICATION_DETAILS_SETTINGS);var l=u.fromParts("package",r.getPackageName(),null);o.setData(l),r.startActivity(o)}}i("d3b7");var g={get isIOS(){return"boolean"===typeof n?n:n="ios"===uni.getSystemInfoSync().platform},requestIOS:d,requestAndroid:v,gotoAppSetting:f};e.exports=g}).call(this,i("5a52")["default"])},e545:function(e,t,i){"use strict";var n,s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-form",[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("图片来源")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.sourceType,value:e.sourceTypeIndex,mode:"selector"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.sourceTypeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sourceType[e.sourceTypeIndex]))])],1)],1)],1),i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("图片质量")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.sizeType,value:e.sizeTypeIndex,mode:"selector"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.sizeTypeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sizeType[e.sizeTypeIndex]))])],1)],1)],1),i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("数量限制")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.count,mode:"selector"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.countChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.count[e.countIndex]))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-list list-pd"},[i("v-uni-view",{staticClass:"uni-list-cell cell-pd"},[i("v-uni-view",{staticClass:"uni-uploader"},[i("v-uni-view",{staticClass:"uni-uploader-head"},[i("v-uni-view",{staticClass:"uni-uploader-title"},[e._v("点击可预览选好的图片")]),i("v-uni-view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/9")])],1),i("v-uni-view",{staticClass:"uni-uploader-body"},[i("v-uni-view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,(function(t,n){return[i("v-uni-view",{key:n+"_0",staticClass:"uni-uploader__file"},[i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:t,"data-src":t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}})],1)]})),i("v-uni-view",{staticClass:"uni-uploader__input-box"},[i("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}})],1)],2)],1)],1)],1)],1)],1)],1)],1)},a=[];i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))}}]);