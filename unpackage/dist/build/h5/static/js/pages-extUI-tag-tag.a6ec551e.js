(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-tag-tag"],{"0df0":function(t,e,i){"use strict";i.r(e);var n=i("baff"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},1982:function(t,e,i){"use strict";var n=i("19a4"),a=i.n(n);a.a},"19a4":function(t,e,i){var n=i("1e55");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2632f090",n,!0,{sourceMap:!1,shadowMode:!1})},"1e55":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.uni-section[data-v-21074330]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-21074330]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-21074330]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-21074330]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-21074330]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-21074330]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-21074330]{font-size:%?28?%;color:#333}.distraction[data-v-21074330]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-21074330]{font-size:%?24?%;color:#999}',""]),t.exports=e},"30c8":function(t,e,i){"use strict";var n=i("be59"),a=i.n(n);a.a},"37b3":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},"4cd1":function(t,e,i){"use strict";i.r(e);var n=i("be86"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},5256:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("v-uni-view",{staticClass:"uni-tag",class:["uni-tag--"+t.type,!0===t.disabled||"true"===t.disabled?"uni-tag--disabled":"",!0===t.inverted||"true"===t.inverted?t.type+"-uni-tag--inverted":"",!0===t.circle||"true"===t.circle?"uni-tag--circle":"",!0===t.mark||"true"===t.mark?"uni-tag--mark":"","uni-tag--"+t.size],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[i("v-uni-text",{class:["default"===t.type?"uni-tag--default":"uni-tag-text",!0===t.inverted||"true"===t.inverted?"uni-tag-text--"+t.type:"","small"===t.size?"uni-tag-text--small":""]},[t._v(t._s(t.text))])],1):t._e()},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},"533a":function(t,e,i){"use strict";var n={"uni-section":i("aebe").default,"uni-tag":i("a574").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-text",{staticClass:"example-info"},[t._v("标签组件多用于商品分类、重点内容显示等场景。")]),i("uni-section",{attrs:{title:"实心标签",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"primary"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"success"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"warning"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"error"}})],1)],1),i("uni-section",{attrs:{title:"空心标签",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,text:"标签"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,text:"标签",type:"primary"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,text:"标签",type:"success"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,text:"标签",type:"warning"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,text:"标签",type:"error"}})],1)],1),i("uni-section",{attrs:{title:"圆角样式",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{circle:!0,text:"标签",type:"primary",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,circle:!0,text:"标签",type:"success",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{circle:!0,text:"标签",type:"warning"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,circle:!0,text:"标签",type:"error"}})],1)],1),i("uni-section",{attrs:{title:"标记样式",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{mark:!0,text:"标签",type:"primary",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{mark:!0,text:"标签",type:"success",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{mark:!0,text:"标签",type:"warning"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{mark:!0,circle:!0,text:"标签",type:"error"}})],1)],1),i("uni-section",{attrs:{title:"点击事件",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{type:t.type,text:"标签"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setType.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{circle:!0,inverted:t.inverted,text:"标签",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setInverted.apply(void 0,arguments)}}})],1)],1),i("uni-section",{attrs:{title:"小标签",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"primary",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"success",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,mark:!0,text:"标签",type:"warning",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,circle:!0,text:"标签",type:"error",size:"small"}})],1)],1),i("uni-section",{attrs:{title:"不可点击状态",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{disabled:!0,text:"标签"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{disabled:!0,text:"标签",type:"primary"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,disabled:!0,text:"标签",type:"error",size:"small"}})],1)],1)],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},"893e":function(t,e,i){"use strict";i.r(e);var n=i("93cd"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"8d29":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-tag[data-v-97760a56]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tpadding:0 16px;height:30px;line-height:30px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}.uni-tag--circle[data-v-97760a56]{border-radius:15px}.uni-tag--mark[data-v-97760a56]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-97760a56]{opacity:.5}.uni-tag--small[data-v-97760a56]{height:20px;padding:0 8px;line-height:20px;font-size:%?24?%}.uni-tag--default[data-v-97760a56]{color:#333;font-size:%?28?%}.uni-tag-text--small[data-v-97760a56]{font-size:%?24?%!important}.uni-tag-text[data-v-97760a56]{color:#fff;font-size:%?28?%}.uni-tag-text--primary[data-v-97760a56]{color:#007aff!important}.uni-tag-text--success[data-v-97760a56]{color:#4cd964!important}.uni-tag-text--warning[data-v-97760a56]{color:#f0ad4e!important}.uni-tag-text--error[data-v-97760a56]{color:#dd524d!important}.uni-tag--primary[data-v-97760a56]{color:#fff;background-color:#007aff;border-width:%?1?%;border-style:solid;border-color:#007aff}.primary-uni-tag--inverted[data-v-97760a56]{color:#007aff;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#007aff}.uni-tag--success[data-v-97760a56]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-97760a56]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-97760a56]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-97760a56]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-97760a56]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-97760a56]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--inverted[data-v-97760a56]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}",""]),t.exports=e},"93cd":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],defalut:!1},inverted:{type:[Boolean,String],defalut:!1},circle:{type:[Boolean,String],defalut:!1},mark:{type:[Boolean,String],defalut:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};e.default=n},"981c":function(t,e,i){var n=i("d730b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("07dbeeec",n,!0,{sourceMap:!1,shadowMode:!1})},a574:function(t,e,i){"use strict";i.r(e);var n=i("5256"),a=i("893e");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("30c8");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"97760a56",null,!1,n["a"],o);e["default"]=c.exports},aebe:function(t,e,i){"use strict";i.r(e);var n=i("37b3"),a=i("0df0");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("1982");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"21074330",null,!1,n["a"],o);e["default"]=c.exports},ba63:function(t,e,i){"use strict";var n=i("981c"),a=i.n(n);a.a},baff:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},be59:function(t,e,i){var n=i("8d29");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("77a43be2",n,!0,{sourceMap:!1,shadowMode:!1})},be86:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("a574")),r=n(i("aebe")),o={components:{uniTag:a.default,uniSection:r.default},data:function(){return{type:"default",inverted:!1}},methods:{setType:function(){var t=["default","primary","success","warning","error"],e=t.indexOf(this.type);t.splice(e,1);var i=Math.floor(4*Math.random());this.type=t[i]},setInverted:function(){this.inverted=!this.inverted}}};e.default=o},d41b:function(t,e,i){"use strict";i.r(e);var n=i("533a"),a=i("4cd1");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("ba63");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"da2c94ae",null,!1,n["a"],o);e["default"]=c.exports},d730b:function(t,e,i){var n=i("24fb"),a=i("1de5"),r=i("b272");e=n(!1);a(r);e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-da2c94ae]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-da2c94ae]{font-size:14px;line-height:inherit}.example[data-v-da2c94ae]{padding:0 15px 15px}.example-info[data-v-da2c94ae]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-da2c94ae]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-da2c94ae]{padding:0 15px}.example-info[data-v-da2c94ae]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-da2c94ae]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-da2c94ae]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-da2c94ae]{font-size:18px;color:#fff}.word-btn[data-v-da2c94ae]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-da2c94ae]{background-color:#4ca2ff}.example-body[data-v-da2c94ae]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?%}.tag-view[data-v-da2c94ae]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?10?% %?15?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}body.?%PAGE?%[data-v-da2c94ae]{background-color:#efeff4}",""]),t.exports=e}}]);