(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-template-template"],{"2a2c":function(t,n,e){var a=e("ad60");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("77f6d520",a,!0,{sourceMap:!1,shadowMode:!1})},"677d":function(t,n,e){"use strict";var a=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("9642")),o={components:{uLink:i.default},data:function(){return{list:[{id:"navbar",name:"顶部原生导航标题栏",open:!1,pages:[{name:"导航栏带自定义按钮",url:"nav-button"},{name:"导航栏带红点和角标",url:"nav-dot"},{name:"导航栏带城市选择",url:"nav-city-dropdown"},{name:"导航栏带搜索框",url:"nav-search-input"},{name:"透明渐变样式",url:"nav-transparent"},{name:"导航栏带图片",url:"nav-image"}]},{name:"顶部选项卡",url:"tabbar"},{name:"组件通讯",url:"component-communication"},{name:"uCharts 图表",url:"ucharts"},{name:"列表到详情示例",url:"list2detail-list"},{name:"上下滑动切换视频",url:"swiper-vertical"},{name:"GlobalData和vuex",url:"global"},{name:"微信自定义组件示例（vant ui）",url:"vant-button"}],navigateFlag:!1}},onLoad:function(){},onReady:function(){},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/template/template"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t){if(this.list[t].pages)for(var n=0;n<this.list.length;++n)this.list[n].open=t===n&&!this.list[t].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(t){var n=this;if(!this.navigateFlag){this.navigateFlag=!0;var e=t.url?t.url:t,a=~e.indexOf("platform")?e:"/pages/template/"+e+"/"+e;return uni.navigateTo({url:a}),setTimeout(function(){n.navigateFlag=!1},200),!1}}}};n.default=o},"6fcb":function(t,n,e){"use strict";e.r(n);var a=e("ba80"),i=e("daff");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("ef77");var r,l=e("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"22b848f0",null,!1,a["a"],r);n["default"]=u.exports},ad60:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"uni-page-body[data-v-22b848f0]{min-height:100%;height:auto}\r\n\r\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\r\n.uni-icon[data-v-22b848f0]{font-family:uniicons;font-weight:400}.uni-container[data-v-22b848f0]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-22b848f0]{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-22b848f0]{width:80px;height:80px}.uni-hello-text[data-v-22b848f0]{margin-bottom:20px}.hello-text[data-v-22b848f0]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-22b848f0]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-22b848f0]{margin-bottom:12px}.uni-panel-h[data-v-22b848f0]{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px}\r\n/*\r\n.uni-panel-h:active {\r\n    background-color: #f8f8f8;\r\n}\r\n */.uni-panel-h-on[data-v-22b848f0]{background-color:#f0f0f0}.uni-panel-text[data-v-22b848f0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-22b848f0]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-22b848f0]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-22b848f0]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item[data-v-22b848f0]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-22b848f0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-22b848f0]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""])},ba80:function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-container"},[e("v-uni-view",{staticClass:"uni-header-logo"},[e("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/templateIndex.png"}})],1),e("v-uni-view",{staticClass:"uni-hello-text"},[e("v-uni-text",{staticClass:"hello-text"},[t._v("以下是部分模板示例，更多模板见插件市场：")]),e("u-link",{staticClass:"hello-link",attrs:{href:"https://ext.dcloud.net.cn",text:"https://ext.dcloud.net.cn",inWhiteList:!0}})],1),t._l(t.list,function(n,a){return e("v-uni-view",{key:n.id,staticClass:"uni-panel"},[e("v-uni-view",{staticClass:"uni-panel-h",class:n.open?"uni-panel-h-on":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.triggerCollapse(a)}}},[e("v-uni-text",{staticClass:"uni-panel-text"},[t._v(t._s(n.name))]),e("v-uni-text",{staticClass:"uni-panel-icon uni-icon",class:n.open?"uni-panel-icon-on":""},[t._v(t._s(n.pages?"":""))])],1),n.open?e("v-uni-view",{staticClass:"uni-panel-c"},t._l(n.pages,function(n,a){return e("v-uni-view",{key:a,staticClass:"uni-navigate-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetailPage(n)}}},[e("v-uni-text",{staticClass:"uni-navigate-text"},[t._v(t._s(n.name?n.name:n))]),e("v-uni-text",{staticClass:"uni-navigate-icon uni-icon"},[t._v("")])],1)}),1):t._e()],1)})],2)},o=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return a})},daff:function(t,n,e){"use strict";e.r(n);var a=e("677d"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},ef77:function(t,n,e){"use strict";var a=e("2a2c"),i=e.n(a);i.a}}]);