(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-template-template"],{"35b6":function(t,a,n){"use strict";var e,i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-header-logo"},[n("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/templateIndex.png"}})],1),n("v-uni-view",{staticClass:"uni-hello-text"},[n("v-uni-text",{staticClass:"hello-text"},[t._v("以下是部分模板示例，更多模板见插件市场：")]),n("u-link",{staticClass:"hello-link",attrs:{href:"https://ext.dcloud.net.cn",text:"https://ext.dcloud.net.cn",inWhiteList:!0}})],1),t._l(t.list,(function(a,e){return n("v-uni-view",{key:a.id,staticClass:"uni-panel"},[n("v-uni-view",{staticClass:"uni-panel-h",class:a.open?"uni-panel-h-on":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.triggerCollapse(e)}}},[n("v-uni-text",{staticClass:"uni-panel-text"},[t._v(t._s(a.name))]),n("v-uni-text",{staticClass:"uni-panel-icon uni-icon",class:a.open?"uni-panel-icon-on":""},[t._v(t._s(a.pages?"":""))])],1),a.open?n("v-uni-view",{staticClass:"uni-panel-c"},t._l(a.pages,(function(a,e){return n("v-uni-view",{key:e,staticClass:"uni-navigate-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetailPage(a)}}},[n("v-uni-text",{staticClass:"uni-navigate-text"},[t._v(t._s(a.name?a.name:a))]),n("v-uni-text",{staticClass:"uni-navigate-icon uni-icon"},[t._v("")])],1)})),1):t._e()],1)}))],2)},o=[];n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}))},"5a26":function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,"uni-page-body[data-v-f6baaf52]{min-height:100%;height:auto}\r\n\r\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\r\n.uni-icon[data-v-f6baaf52]{font-family:uniicons;font-weight:400}.uni-container[data-v-f6baaf52]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-f6baaf52]{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-f6baaf52]{width:80px;height:80px}.uni-hello-text[data-v-f6baaf52]{margin-bottom:20px}.hello-text[data-v-f6baaf52]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-f6baaf52]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-f6baaf52]{margin-bottom:12px}.uni-panel-h[data-v-f6baaf52]{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px}\r\n/*\r\n.uni-panel-h:active {\r\n    background-color: #f8f8f8;\r\n}\r\n */.uni-panel-h-on[data-v-f6baaf52]{background-color:#f0f0f0}.uni-panel-text[data-v-f6baaf52]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-f6baaf52]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-f6baaf52]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-f6baaf52]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item[data-v-f6baaf52]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-f6baaf52]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-f6baaf52]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""]),t.exports=a},"79a3":function(t,a,n){var e=n("5a26");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("34535a10",e,!0,{sourceMap:!1,shadowMode:!1})},8887:function(t,a,n){"use strict";var e=n("ee27");n("c975"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("a70c")),o={components:{uLink:i.default},data:function(){return{list:[{id:"navbar",name:"顶部原生导航标题栏",open:!1,pages:[{name:"导航栏带自定义按钮",url:"nav-button"},{name:"导航栏带红点和角标",url:"nav-dot"},{name:"导航栏带城市选择",url:"nav-city-dropdown"},{name:"导航栏带搜索框",url:"nav-search-input"},{name:"透明渐变样式",url:"nav-transparent"},{name:"导航栏带图片",url:"nav-image"}]},{name:"顶部选项卡",url:"tabbar"},{name:"组件通讯",url:"component-communication"},{name:"uCharts 图表",url:"ucharts"},{name:"列表到详情示例",url:"list2detail-list"},{name:"上下滑动切换视频",url:"swiper-vertical"},{name:"GlobalData和vuex",url:"global"},{name:"微信自定义组件示例（vant ui）",url:"vant-button"}],navigateFlag:!1}},onLoad:function(){},onReady:function(){},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/template/template"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t){if(this.list[t].pages)for(var a=0;a<this.list.length;++a)this.list[a].open=t===a&&!this.list[t].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(t){var a=this;if(!this.navigateFlag){this.navigateFlag=!0;var n=t.url?t.url:t,e=~n.indexOf("platform")?n:"/pages/template/"+n+"/"+n;return uni.navigateTo({url:e}),setTimeout((function(){a.navigateFlag=!1}),200),!1}}}};a.default=o},"9c4a":function(t,a,n){"use strict";n.r(a);var e=n("35b6"),i=n("b7c1");for(var o in i)"default"!==o&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("ef5f");var r,l=n("f0c5"),u=Object(l["a"])(i["default"],e["b"],e["c"],!1,null,"f6baaf52",null,!1,e["a"],r);a["default"]=u.exports},b7c1:function(t,a,n){"use strict";n.r(a);var e=n("8887"),i=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a},ef5f:function(t,a,n){"use strict";var e=n("79a3"),i=n.n(e);i.a}}]);