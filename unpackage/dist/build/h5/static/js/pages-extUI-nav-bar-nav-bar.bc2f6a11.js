(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-nav-bar-nav-bar"],{"0956":function(n,t,e){"use strict";(function(n){var i=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("0be5")),o=i(e("caba")),r=i(e("0e01")),l={components:{uniIcons:a.default,uniNavBar:o.default,uniSection:r.default},data:function(){return{city:"北京"}},methods:{back:function(){uni.navigateBack({delta:1})},showMenu:function(){uni.showToast({title:"菜单"})},clickLeft:function(){uni.showToast({title:"左侧按钮"})},search:function(){uni.showToast({title:"搜索"})},showCity:function(){uni.showToast({title:"选择城市"})},scan:function(){uni.showToast({title:"扫码"})},confirm:function(){uni.showToast({title:"搜索"})}},onPullDownRefresh:function(){n.log("onPullDownRefresh"),setTimeout(function(){uni.stopPullDownRefresh(),n.log("stopPullDownRefresh")},1e3)}};t.default=l}).call(this,e("5a52")["default"])},"0bff":function(n,t,e){"use strict";e.r(t);var i=e("9d40"),a=e("51ab");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("43e7");var r,l=e("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"222ea2d1",null,!1,i["a"],r);t["default"]=c.exports},"43e7":function(n,t,e){"use strict";var i=e("9de9"),a=e.n(i);a.a},"51ab":function(n,t,e){"use strict";e.r(t);var i=e("0956"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);t["default"]=a.a},"9d40":function(n,t,e){"use strict";var i={"uni-nav-bar":e("caba").default,"uni-section":e("0e01").default,"uni-icons":e("0be5").default},a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("uni-nav-bar",{attrs:{color:"#ffffff","background-color":"#007AFF","status-bar":!0,"left-icon":"arrowleft","left-text":"返回",title:"标题"},on:{clickLeft:function(t){arguments[0]=t=n.$handleEvent(t),n.back.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"example-info"},[n._v("本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。具体参考https://ask.dcloud.net.cn/article/34921")]),e("uni-section",{attrs:{title:"基本用法",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-nav-bar",{attrs:{"left-icon":"arrowleft",title:"标题"},on:{clickLeft:function(t){arguments[0]=t=n.$handleEvent(t),n.back.apply(void 0,arguments)}}})],1),e("uni-section",{attrs:{title:"左右显示文字",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-nav-bar",{attrs:{"left-icon":"arrowleft","right-text":"菜单","left-text":"返回",title:"标题"},on:{clickLeft:function(t){arguments[0]=t=n.$handleEvent(t),n.back.apply(void 0,arguments)}}})],1),e("uni-section",{attrs:{title:"插入slot",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-icon":"scan"},on:{clickLeft:function(t){arguments[0]=t=n.$handleEvent(t),n.showCity.apply(void 0,arguments)},clickRight:function(t){arguments[0]=t=n.$handleEvent(t),n.scan.apply(void 0,arguments)}}},[e("template",{attrs:{slot:"left"},slot:"left"},[e("v-uni-view",{staticClass:"city"},[e("v-uni-view",[e("v-uni-text",{staticClass:"uni-nav-bar-text"},[n._v(n._s(n.city))])],1),e("uni-icons",{attrs:{type:"arrowdown",color:"#333333",size:"22"}})],1)],1),e("v-uni-view",{staticClass:"input-view"},[e("uni-icons",{staticClass:"input-uni-icon",attrs:{type:"search",size:"22",color:"#666666"}}),e("v-uni-input",{staticClass:"nav-bar-input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(t){arguments[0]=t=n.$handleEvent(t),n.confirm.apply(void 0,arguments)}}})],1)],2)],1)],1)},o=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return i})},"9de9":function(n,t,e){var i=e("fc01");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("7c4fbcdb",i,!0,{sourceMap:!1,shadowMode:!1})},fc01:function(n,t,e){e("b041");t=n.exports=e("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/* 头条小程序组件内不能引入字体 */\n\t\n\tuni-page-body[data-v-222ea2d1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-222ea2d1]{font-size:14px;line-height:inherit}.example[data-v-222ea2d1]{padding:0 15px 15px}.example-info[data-v-222ea2d1]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-222ea2d1]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n\t.example[data-v-222ea2d1]{padding:0 15px}.example-info[data-v-222ea2d1]{\n\t\tdisplay:block;\n\t\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-222ea2d1]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-222ea2d1]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-222ea2d1]{font-size:18px;color:#fff}.word-btn[data-v-222ea2d1]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-222ea2d1]{background-color:#4ca2ff}.uni-nav-bar-text[data-v-222ea2d1]{font-size:%?28?%}.city[data-v-222ea2d1]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;\n\t\t/* width: 160rpx;\n */margin-left:4px}.input-view[data-v-222ea2d1]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n\t\t/* width: 500rpx;\n */-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#f8f8f8;height:30px;border-radius:15px;padding:0 15px;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;margin:7px 0;line-height:30px}.input-uni-icon[data-v-222ea2d1]{line-height:30px}.nav-bar-input[data-v-222ea2d1]{height:30px;line-height:30px;\n\t\tpadding:0 5px;font-size:%?28?%;background-color:#f8f8f8}.example-body[data-v-222ea2d1]{\n\t\tdisplay:block;\n\t\tpadding:0}body.?%PAGE?%[data-v-222ea2d1]{background-color:#efeff4}",""])}}]);