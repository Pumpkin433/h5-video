(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-fav-fav"],{"0955":function(e,t,n){"use strict";n.r(t);var i=n("1211"),a=n("f5cc");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("4d80");var c,r=n("f0c5"),l=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"73be9062",null,!1,i["a"],c);t["default"]=l.exports},1211:function(e,t,n){"use strict";var i={"uni-icons":n("0be5").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-fav",class:[!0===e.circle||"true"===e.circle?"uni-fav--circle":""],style:[{backgroundColor:e.checked?e.bgColorChecked:e.bgColor}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.checked||!0!==e.star&&"true"!==e.star?e._e():n("uni-icons",{staticClass:"uni-fav-star",style:{color:e.checked?e.fgColorChecked:e.fgColor},attrs:{color:e.fgColor,size:"14",type:"star-filled"}}),n("v-uni-text",{staticClass:"uni-fav-text",style:{color:e.checked?e.fgColorChecked:e.fgColor}},[e._v(e._s(e.checked?e.contentText.contentFav:e.contentText.contentDefault))])],1)},o=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i})},"446a":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".uni-fav[data-v-73be9062]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:60px;height:25px;line-height:25px;text-align:center;border-radius:3px}.uni-fav--circle[data-v-73be9062]{border-radius:30px}.uni-fav-star[data-v-73be9062]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\theight:25px;line-height:24px;margin-right:3px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-fav-text[data-v-73be9062]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\theight:25px;line-height:25px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}",""])},"4d80":function(e,t,n){"use strict";var i=n("4e5f"),a=n.n(i);a.a},"4e5f":function(e,t,n){var i=n("446a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("36384e78",i,!0,{sourceMap:!1,shadowMode:!1})},"5d42":function(e,t,n){"use strict";var i={"uni-section":n("0e01").default,"uni-fav":n("0955").default,"uni-nav-bar":n("caba").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"example-fav"},[n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body example-body-first"},[n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[0]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(0)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[1],star:!1},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(1)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[2],circle:!0,"bg-color":"#dd524d","bg-color-checked":"#007aff","fg-color":"#ffffff","fg-color-checked":"#ffffff"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(2)}}}),n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[3],"bg-color":"#f8f8f8","bg-color-checked":"#eeeeee","fg-color":"#333333","fg-color-checked":"#333333"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(3)}}})],1),n("uni-section",{attrs:{title:"自定义文字",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-fav",{staticClass:"favBtn",attrs:{checked:e.checkList[4],"content-text":e.contentText},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(4)}}})],1),n("uni-section",{attrs:{title:"在自定义导航栏使用",type:"line"}}),n("v-uni-view",{staticClass:"example-body example-body-fullWidth"},[n("uni-nav-bar",{staticStyle:{width:"100%"},attrs:{fixed:!1,"left-icon":"arrowleft",title:"标题",color:"#333333","background-color":"#FFFFFF"}},[n("template",{attrs:{slot:"right"},slot:"right"},[n("uni-fav",{staticClass:"favBtn-nav",attrs:{checked:e.checkList[5],circle:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.favClick(5)}}})],1)],2)],1)],1)},o=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i})},"7f45":function(e,t,n){n("b041");t=e.exports=n("2350")(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/* 头条小程序组件内不能引入字体 */\n\t\n\tuni-page-body[data-v-2eb570a8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-2eb570a8]{font-size:14px;line-height:inherit}.example[data-v-2eb570a8]{padding:0 15px 15px}.example-info[data-v-2eb570a8]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-2eb570a8]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n\t.example[data-v-2eb570a8]{padding:0 15px}.example-info[data-v-2eb570a8]{\n\t\tdisplay:block;\n\t\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-2eb570a8]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-2eb570a8]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-2eb570a8]{font-size:18px;color:#fff}.word-btn[data-v-2eb570a8]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-2eb570a8]{background-color:#4ca2ff}\n\t.favBtn[data-v-2eb570a8]{margin:0 %?20?% %?20?% 0}.example-body-fullWidth[data-v-2eb570a8]{padding:%?32?% 0}.example-body-first[data-v-2eb570a8]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.favBtn-nav[data-v-2eb570a8]{\n\t\t/* left:-50rpx;\n */}body.?%PAGE?%[data-v-2eb570a8]{background-color:#efeff4}",""])},"888b":function(e,t,n){"use strict";n.r(t);var i=n("de9a"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},b71e:function(e,t,n){"use strict";var i=n("ed86"),a=n.n(i);a.a},bb14:function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("0be5")),o={name:"UniFav",components:{uniIcons:a.default},props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"收藏",contentFav:"已收藏"}}}},watch:{checked:function(){uni.report&&(this.checked?uni.report("收藏","收藏"):uni.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};t.default=o},d2c2:function(e,t,n){"use strict";n.r(t);var i=n("5d42"),a=n("888b");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("b71e");var c,r=n("f0c5"),l=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"2eb570a8",null,!1,i["a"],c);t["default"]=l.exports},de9a:function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("0955")),o=i(n("caba")),c=i(n("0e01")),r={components:{uniFav:a.default,uniNavBar:o.default,uniSection:c.default},data:function(){return{checkList:[!1,!1,!1,!1,!1,!1],contentText:{contentDefault:"追番",contentFav:"已追番"}}},methods:{favClick:function(e){this.checkList[e]=!this.checkList[e],this.$forceUpdate()}}};t.default=r},ed86:function(e,t,n){var i=n("7f45");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("5bf9bc40",i,!0,{sourceMap:!1,shadowMode:!1})},f5cc:function(e,t,n){"use strict";n.r(t);var i=n("bb14"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a}}]);