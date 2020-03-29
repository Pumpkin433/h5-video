(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-link/uni-link"],{"072c":function(t,n,e){"use strict";e.r(n);var u=e("6dd6"),i=e("816f");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("0fb81");var a,o=e("f0c5"),f=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,"77e41d98",null,!1,u["a"],a);n["default"]=f.exports},"0fb81":function(t,n,e){"use strict";var u=e("2950"),i=e.n(u);i.a},2950:function(t,n,e){},"6dd6":function(t,n,e){"use strict";var u,i=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return u})},"816f":function(t,n,e){"use strict";e.r(n);var u=e("d16c"),i=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=i.a},d16c:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},methods:{openURL:function(){t.setClipboardData({data:this.href}),t.showModal({content:this.copyTips,showCancel:!1})}}};n.default=e}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-link/uni-link-create-component',
    {
        'components/uni-link/uni-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("072c"))
        })
    },
    [['components/uni-link/uni-link-create-component']]
]);
