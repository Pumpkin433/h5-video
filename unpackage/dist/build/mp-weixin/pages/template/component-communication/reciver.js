(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/component-communication/reciver"],{"3b4a":function(t,n,e){"use strict";var c=e("4b6a"),u=e.n(c);u.a},"4b6a":function(t,n,e){},7109:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=u(e("7191"));function u(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{msg:""}},created:function(){t.$on("cc",this.recive),c.default.$on("cc",this.recive)},beforeDestroy:function(){t.$off("cc",this.recive),c.default.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};n.default=r}).call(this,e("543d")["default"])},"873a":function(t,n,e){"use strict";var c,u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return c})},b6a5:function(t,n,e){"use strict";e.r(n);var c=e("873a"),u=e("c3b9");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);e("3b4a");var a,i=e("f0c5"),o=Object(i["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],a);n["default"]=o.exports},c3b9:function(t,n,e){"use strict";e.r(n);var c=e("7109"),u=e.n(c);for(var r in c)"default"!==r&&function(t){e.d(n,t,function(){return c[t]})}(r);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/component-communication/reciver-create-component',
    {
        'pages/template/component-communication/reciver-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b6a5"))
        })
    },
    [['pages/template/component-communication/reciver-create-component']]
]);
