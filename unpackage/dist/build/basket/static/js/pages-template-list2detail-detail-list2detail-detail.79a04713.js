(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-list2detail-detail-list2detail-detail"],{"0730":function(t,e,n){"use strict";var i=n("1b27"),a=n.n(i);a.a},"1b27":function(t,e,n){var i=n("3aba");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("49f17470",i,!0,{sourceMap:!1,shadowMode:!1})},"3aba":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".banner[data-v-0a999682]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-0a999682]{width:100%}.banner-title[data-v-0a999682]{max-height:%?84?%;overflow:hidden;position:absolute;left:%?30?%;bottom:%?30?%;width:90%;font-size:%?32?%;font-weight:400;line-height:%?42?%;color:#fff;z-index:11}.article-meta[data-v-0a999682]{padding:%?20?% %?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;color:grey}.article-text[data-v-0a999682]{font-size:%?26?%;line-height:%?50?%;margin:0 %?20?%}.article-author[data-v-0a999682],\n.article-time[data-v-0a999682]{font-size:%?30?%}.article-content[data-v-0a999682]{padding:0 %?30?%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""]),t.exports=e},"601c":function(t,e,n){"use strict";(function(t){var i=n("ee27");n("c975"),n("d81d"),n("4e82"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("bb4d")),r="/pages/template/list2detail-detail/list2detail-detail";function s(t){for(var e=[],n=0,i=t.length;n<i;n++)switch(t[n]){case"weixin":e.push({text:"分享到微信好友",id:"weixin",sort:0}),e.push({text:"分享到微信朋友圈",id:"weixin",sort:1});break;default:break}return e.sort((function(t,e){return t.sort-e.sort})),e}var o={data:function(){return{title:"",banner:{},htmlNodes:[]}},onLoad:function(t){var e=t.detailDate||t.payload;try{this.banner=JSON.parse(decodeURIComponent(e))}catch(n){this.banner=JSON.parse(e)}uni.setNavigationBarTitle({title:this.banner.title}),this.getDetail()},onShareAppMessage:function(){return{title:this.banner.title,path:r+"?detailDate="+JSON.stringify(this.banner)}},onNavigationBarButtonTap:function(t){var e=this,n=t.index;if(0===n){uni.getProvider({service:"share",success:function(t){if(t.provider&&t.provider.length&&~t.provider.indexOf("weixin")){var n=s(t.provider);uni.showActionSheet({itemList:n.map((function(t){return t.text})),success:function(t){var n=t.tapIndex;uni.share({provider:"weixin",type:0,title:e.banner.title,scene:0===n?"WXSceneSession":"WXSenceTimeline",href:"https://uniapp.dcloud.io/h5"+r+"?detailDate="+JSON.stringify(e.banner),imageUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png"})}})}else uni.showToast({title:"未检测到可用的微信分享服务"})},fail:function(t){uni.showToast({title:"获取分享服务失败"})}})}},methods:{getDetail:function(){var e=this;uni.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+this.banner.post_id,success:function(t){if(200==t.statusCode){var n=t.data.content.replace(/\\/g,"").replace(/<img/g,'<img style="display:none;"');e.htmlNodes=(0,a.default)(n)}},fail:function(){t.log("fail")}})}}};e.default=o}).call(this,n("5a52")["default"])},"72cf":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"banner"},[n("v-uni-image",{staticClass:"banner-img",attrs:{src:t.banner.cover}}),n("v-uni-view",{staticClass:"banner-title"},[t._v(t._s(t.banner.title))])],1),n("v-uni-view",{staticClass:"article-meta"},[n("v-uni-text",{staticClass:"article-author"},[t._v(t._s(t.banner.author_name))]),n("v-uni-text",{staticClass:"article-text"},[t._v("发表于")]),n("v-uni-text",{staticClass:"article-time"},[t._v(t._s(t.banner.published_at))])],1),n("v-uni-view",{staticClass:"article-content"},[n("v-uni-rich-text",{attrs:{nodes:t.htmlNodes}})],1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"8fd2":function(t,e,n){"use strict";n.r(e);var i=n("601c"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},bb4d:function(t,e,n){"use strict";(function(t){n("c975"),n("13d5"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,a=/^<\/([-A-Za-z0-9_]+)[^>]*>/,r=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,s=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),o=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),l=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),c=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),d=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=h("script,style");function f(t,e){var n,f,h,p=[],v=t;p.last=function(){return this[this.length-1]};while(t){if(f=!0,p.last()&&u[p.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),(function(t,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(n),""})),g("",p.last());else if(0==t.indexOf("\x3c!--")?(n=t.indexOf("--\x3e"),n>=0&&(e.comment&&e.comment(t.substring(4,n)),t=t.substring(n+3),f=!1)):0==t.indexOf("</")?(h=t.match(a),h&&(t=t.substring(h[0].length),h[0].replace(a,g),f=!1)):0==t.indexOf("<")&&(h=t.match(i),h&&(t=t.substring(h[0].length),h[0].replace(i,m),f=!1)),f){n=t.indexOf("<");var b=n<0?t:t.substring(0,n);t=n<0?"":t.substring(n),e.chars&&e.chars(b)}if(t==v)throw"Parse Error: "+t;v=t}function m(t,n,i,a){if(n=n.toLowerCase(),o[n])while(p.last()&&l[p.last()])g("",p.last());if(c[n]&&p.last()==n&&g("",n),a=s[n]||!!a,a||p.push(n),e.start){var u=[];i.replace(r,(function(t,e){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:d[e]?e:"";u.push({name:e,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})})),e.start&&e.start(n,u,a)}}function g(t,n){if(n){for(i=p.length-1;i>=0;i--)if(p[i]==n)break}else var i=0;if(i>=0){for(var a=p.length-1;a>=i;a--)e.end&&e.end(p[a]);p.length=i}}g()}function h(t){for(var e={},n=t.split(","),i=0;i<n.length;i++)e[n[i]]=!0;return e}function p(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function v(t){return t.reduce((function(t,e){var n=e.value,i=e.name;return t[i]?t[i]=t[i]+" "+n:t[i]=n,t}),{})}function b(e){e=p(e);var n=[],i={node:"root",children:[]};return f(e,{start:function(t,e,a){var r={name:t};if(0!==e.length&&(r.attrs=v(e)),a){var s=n[0]||i;s.children||(s.children=[]),s.children.push(r)}else n.unshift(r)},end:function(e){var a=n.shift();if(a.name!==e&&t.error("invalid state: mismatch end tag"),0===n.length)i.children.push(a);else{var r=n[0];r.children||(r.children=[]),r.children.push(a)}},chars:function(t){var e={type:"text",text:t};if(0===n.length)i.children.push(e);else{var a=n[0];a.children||(a.children=[]),a.children.push(e)}},comment:function(t){var e={node:"comment",text:t},i=n[0];i.children||(i.children=[]),i.children.push(e)}}),i.children}var m=b;e.default=m}).call(this,n("5a52")["default"])},d648:function(t,e,n){"use strict";n.r(e);var i=n("72cf"),a=n("8fd2");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("0730");var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"0a999682",null,!1,i["a"],s);e["default"]=l.exports}}]);