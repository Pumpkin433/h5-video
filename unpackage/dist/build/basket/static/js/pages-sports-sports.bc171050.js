(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sports-sports"],{"3eea":function(t,e,n){"use strict";(function(t){var r=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("c51f")),a=r(n("3b89")),o=r(n("9f72")),s=(r(n("4328")),{name:"sports",data:function(){return{msg_modal_share:!1,msg_modal_app_share:!1,uid:null,token:null,ns_device_id:null,answer_chance:null,nickname:null,login_app_status:!0,contactExists:!1,isModalMsg:!1,name:"",user_type:1,hasShareDone:!1}},onLoad:function(e){var n=uni.getStorageSync("uid"),r=uni.getStorageSync("ns_device_id");if("undefined"===typeof contact)this.contactExists=!1,this.user_type=2,uni.setStorageSync("user_type",2),n&&null!=n&&""!=n&&void 0!==n?this.uid=n:(this.uid=i.default.randomWord(!1,18),uni.setStorageSync("uid",this.uid)),r&&null!=r&&""!=r&&void 0!==r?this.ns_device_id=r:(this.ns_device_id="web",uni.setStorageSync("ns_device_id",this.ns_device_id));else{this.contactExists=!0;var a=uni.getStorageSync("user_type");if(t.log(a+"--hasUserType"),a?uni.setStorageSync("user_type",a):(this.user_type=1,uni.setStorageSync("user_type",1)),contact.onLoginDone=function(t,e){uni.removeStorageSync("uid"),uni.removeStorageSync("token"),uni.setStorageSync("uid",t),uni.setStorageSync("token",e),uni.setStorageSync("login_app_status",!0),uni.reLaunch({url:"/pages/sports/mid?ns_device_id="+uni.getStorageSync("ns_device_id")})},"null"===e.uid||""===e.uid||void 0===e.uid||null===e.uid){uni.setStorageSync("ns_device_id",e.ns_device_id);var o=uni.getStorageSync("login_app_status");this.login_app_status=1==o}else uni.removeStorageSync("uid"),uni.removeStorageSync("token"),uni.removeStorageSync("ns_device_id"),uni.setStorageSync("uid",e.uid),uni.setStorageSync("token",e.token),uni.setStorageSync("ns_device_id",e.ns_device_id),this.login_app_status=!0,t.log("3a--"+this.login_app_status)}this.uid=uni.getStorageSync("uid"),this.token=uni.getStorageSync("token"),this.ns_device_id=uni.getStorageSync("ns_device_id"),t.log(this.uid),t.log(this.token),t.log(this.ns_device_id+"--ns_device_id"),t.log(this.login_app_status+"--login_app_status")},methods:{loginApp:function(){contact.requireLogin()},turnQuestion:function(e){var n=this,r={uid:this.uid,activity_id:this.$question.activity_id,from:e};a.default.post(o.default.sq+"/activity/api.usersAnswerChance/getAnswerChance",r).then((function(e){if(t.log(e),200!=e.status)return alert("server error");var r=e.data.data.answer_chance;r<=0?n.msg_modal_share=!0:n.getQuestionList(n.$question.activity_id)})).catch((function(t){})).finally((function(){}))},getQuestionList:function(t){var e=this,n={activity_id:t};a.default.post(o.default.sq+"/activity/api.questions/list",n).then((function(n){if(200!=n.status)return alert("server error");e.$question.setQusetionList(n.data.data),e.updateAnswerChance(e.uid,t,2)})).catch((function(t){})).finally((function(){}))},updateAnswerChance:function(e,n,r){var i={uid:e,activity_id:n,type:r};a.default.post(o.default.sq+"/activity/api.UsersAnswerChance/update",i).then((function(e){if(t.log(e),200!=e.status)return alert("server error");uni.redirectTo({url:"/pages/sports/question",success:function(){}})})).catch((function(t){})).finally((function(){}))},msg_modal_app:function(){this.msg_modal_app_share=!1},msg_modal_close:function(){this.msg_modal_share=!1},turn_rank:function(){uni.reLaunch({url:"/pages/sports/info?click=1",success:function(){}})},turn_rule:function(){uni.reLaunch({url:"/pages/sports/info?click=2",success:function(){}})}}});e.default=s}).call(this,n("5a52")["default"])},4127:function(t,e,n){"use strict";var r=n("d233"),i=n("b313"),a={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},o=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(t){return o.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,n,i,a,o,c,l,u,d,f,p,g){var h=e;if("function"===typeof l)h=l(n,h);else if(h instanceof Date)h=f(h);else if(null===h){if(a)return c&&!g?c(n,s.encoder):n;h=""}if("string"===typeof h||"number"===typeof h||"boolean"===typeof h||r.isBuffer(h)){if(c){var v=g?n:c(n,s.encoder);return[p(v)+"="+p(c(h,s.encoder))]}return[p(n)+"="+p(String(h))]}var y,m=[];if("undefined"===typeof h)return m;if(Array.isArray(l))y=l;else{var b=Object.keys(h);y=u?b.sort(u):b}for(var _=0;_<y.length;++_){var w=y[_];o&&null===h[w]||(m=Array.isArray(h)?m.concat(t(h[w],i(n,w),i,a,o,c,l,u,d,f,p,g)):m.concat(t(h[w],n+(d?"."+w:"["+w+"]"),i,a,o,c,l,u,d,f,p,g)))}return m};t.exports=function(t,e){var n=t,o=e?r.assign({},e):{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!==typeof o.encoder)throw new TypeError("Encoder has to be a function.");var l="undefined"===typeof o.delimiter?s.delimiter:o.delimiter,u="boolean"===typeof o.strictNullHandling?o.strictNullHandling:s.strictNullHandling,d="boolean"===typeof o.skipNulls?o.skipNulls:s.skipNulls,f="boolean"===typeof o.encode?o.encode:s.encode,p="function"===typeof o.encoder?o.encoder:s.encoder,g="function"===typeof o.sort?o.sort:null,h="undefined"!==typeof o.allowDots&&o.allowDots,v="function"===typeof o.serializeDate?o.serializeDate:s.serializeDate,y="boolean"===typeof o.encodeValuesOnly?o.encodeValuesOnly:s.encodeValuesOnly;if("undefined"===typeof o.format)o.format=i["default"];else if(!Object.prototype.hasOwnProperty.call(i.formatters,o.format))throw new TypeError("Unknown format option provided.");var m,b,_=i.formatters[o.format];"function"===typeof o.filter?(b=o.filter,n=b("",n)):Array.isArray(o.filter)&&(b=o.filter,m=b);var w,x=[];if("object"!==typeof n||null===n)return"";w=o.arrayFormat in a?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var k=a[w];m||(m=Object.keys(n)),g&&m.sort(g);for(var S=0;S<m.length;++S){var j=m[S];d&&null===n[j]||(x=x.concat(c(n[j],j,k,u,d,f?p:null,b,g,h,v,_,y)))}var O=x.join(l),A=!0===o.addQueryPrefix?"?":"";return O.length>0?A+O:""}},4328:function(t,e,n){"use strict";var r=n("4127"),i=n("9e6a"),a=n("b313");t.exports={formats:a,parse:i,stringify:r}},"9e6a":function(t,e,n){"use strict";var r=n("d233"),i=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},o=function(t,e){for(var n={},r=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,o=e.parameterLimit===1/0?void 0:e.parameterLimit,s=r.split(e.delimiter,o),c=0;c<s.length;++c){var l,u,d=s[c],f=d.indexOf("]="),p=-1===f?d.indexOf("="):f+1;-1===p?(l=e.decoder(d,a.decoder),u=e.strictNullHandling?null:""):(l=e.decoder(d.slice(0,p),a.decoder),u=e.decoder(d.slice(p+1),a.decoder)),i.call(n,l)?n[l]=[].concat(n[l]).concat(u):n[l]=u}return n},s=function(t,e,n){for(var r=e,i=t.length-1;i>=0;--i){var a,o=t[i];if("[]"===o)a=[],a=a.concat(r);else{a=n.plainObjects?Object.create(null):{};var s="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,c=parseInt(s,10);!isNaN(c)&&o!==s&&String(c)===s&&c>=0&&n.parseArrays&&c<=n.arrayLimit?(a=[],a[c]=r):a[s]=r}r=a}return r},c=function(t,e,n){if(t){var r=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,c=a.exec(r),l=c?r.slice(0,c.index):r,u=[];if(l){if(!n.plainObjects&&i.call(Object.prototype,l)&&!n.allowPrototypes)return;u.push(l)}var d=0;while(null!==(c=o.exec(r))&&d<n.depth){if(d+=1,!n.plainObjects&&i.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+r.slice(c.index)+"]"),s(u,e,n)}};t.exports=function(t,e){var n=e?r.assign({},e):{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!==typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.ignoreQueryPrefix=!0===n.ignoreQueryPrefix,n.delimiter="string"===typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:a.delimiter,n.depth="number"===typeof n.depth?n.depth:a.depth,n.arrayLimit="number"===typeof n.arrayLimit?n.arrayLimit:a.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"===typeof n.decoder?n.decoder:a.decoder,n.allowDots="boolean"===typeof n.allowDots?n.allowDots:a.allowDots,n.plainObjects="boolean"===typeof n.plainObjects?n.plainObjects:a.plainObjects,n.allowPrototypes="boolean"===typeof n.allowPrototypes?n.allowPrototypes:a.allowPrototypes,n.parameterLimit="number"===typeof n.parameterLimit?n.parameterLimit:a.parameterLimit,n.strictNullHandling="boolean"===typeof n.strictNullHandling?n.strictNullHandling:a.strictNullHandling,""===t||null===t||"undefined"===typeof t)return n.plainObjects?Object.create(null):{};for(var i="string"===typeof t?o(t,n):t,s=n.plainObjects?Object.create(null):{},l=Object.keys(i),u=0;u<l.length;++u){var d=l[u],f=c(d,i[d],n);s=r.merge(s,f,n)}return r.compact(s)}},b313:function(t,e,n){"use strict";var r=String.prototype.replace,i=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,i,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c22a:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-flex uni-column index-bg"},[n("v-uni-view",{staticClass:"flex-item flex-item-V index-top"},[n("v-uni-view",{staticClass:"index-top-l",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.turn_rule.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"index-top-r",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.turn_rank.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"flex-item flex-item-V index-d"},[1==t.contactExists?n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.login_app_status,expression:"login_app_status == false"}],staticClass:"index-d-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginApp.apply(void 0,arguments)}}},[n("span",[t._v("我要答题")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.login_app_status,expression:"login_app_status == true"}],staticClass:"index-d-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.turnQuestion(1)}}},[n("span",[t._v("我要答题")])])]):t._e(),0==t.contactExists?n("div",{staticClass:"index-d-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.turnQuestion(2)}}},[n("span",[t._v("我要答题")])]):t._e()]),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.msg_modal_share,expression:"msg_modal_share === true"}],staticClass:"msg-modal",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.msg_modal_close.apply(void 0,arguments)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.msg_modal_share,expression:"msg_modal_share === true"}],staticClass:"msg-modal-bg"},[n("v-uni-view",{staticClass:"modal-msg-t"},[n("v-uni-view",{staticClass:"modal-msg-t-1"},[t._v("骚年 !")]),n("v-uni-view",{staticClass:"modal-msg-t-2"},[t._v("您今天答题的机会"),n("br"),t._v("已经用完啦!")]),n("v-uni-view",{staticClass:"modal-msg-t-3"},[t._v("下载全民体育app"),n("br"),t._v("分享活动 答题机会+1！")]),n("v-uni-view",{staticClass:"modal-msg-t-4"},[n("img",{attrs:{src:"https://aloss.hotforest.cn/basketball-v2/modal-end-qrcode.png",alt:""}})])],1)],1)],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},c4ab:function(t,e,n){"use strict";var r=n("ecc4"),i=n.n(r);i.a},c51f:function(t,e,n){function r(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var r=t;return[e,n,r].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function i(t,e,n){var r="",i=e,a=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-"];t&&(i=Math.round(Math.random()*(n-e))+e);for(var o=0;o<i;o++){var s=Math.round(Math.random()*(a.length-1));r+=a[s]}return r}function a(t,e){for(var n=t,r=[],i=0;i<e;i++){if(!(n.length>0))break;var a=Math.floor(Math.random()*n.length);r[i]=n[a],n.splice(a,1)}return r}function o(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}n("a15b"),n("d81d"),n("a434"),n("b6802"),n("d3b7"),n("acd8"),n("e25e"),n("ac1f"),n("25f0"),n("1276");var s={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();if(n<this.UNITS["天"])return this.humanize(n);var r=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+r(e.getMonth()+1)+"/"+r(e.getDate())+"-"+r(e.getHours())+":"+r(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:r,formatLocation:o,dateUtils:s,randomWord:i,randomOption:a}},d17a:function(t,e,n){"use strict";n.r(e);var r=n("3eea"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},d233:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,i=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),a=function(t){var e;while(t.length){var n=t.pop();if(e=n.obj[n.prop],Array.isArray(e)){for(var r=[],i=0;i<e.length;++i)"undefined"!==typeof e[i]&&r.push(e[i]);n.obj[n.prop]=r}}return e},o=function(t,e){for(var n=e&&e.plainObjects?Object.create(null):{},r=0;r<t.length;++r)"undefined"!==typeof t[r]&&(n[r]=t[r]);return n},s=function t(e,n,i){if(!n)return e;if("object"!==typeof n){if(Array.isArray(e))e.push(n);else{if("object"!==typeof e)return[e,n];(i.plainObjects||i.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!==typeof e)return[e].concat(n);var a=e;return Array.isArray(e)&&!Array.isArray(n)&&(a=o(e,i)),Array.isArray(e)&&Array.isArray(n)?(n.forEach((function(n,a){r.call(e,a)?e[a]&&"object"===typeof e[a]?e[a]=t(e[a],n,i):e.push(n):e[a]=n})),e):Object.keys(n).reduce((function(e,a){var o=n[a];return r.call(e,a)?e[a]=t(e[a],o,i):e[a]=o,e}),a)},c=function(t,e){return Object.keys(e).reduce((function(t,n){return t[n]=e[n],t}),t)},l=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},u=function(t){if(0===t.length)return t;for(var e="string"===typeof t?t:String(t),n="",r=0;r<e.length;++r){var a=e.charCodeAt(r);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?n+=e.charAt(r):a<128?n+=i[a]:a<2048?n+=i[192|a>>6]+i[128|63&a]:a<55296||a>=57344?n+=i[224|a>>12]+i[128|a>>6&63]+i[128|63&a]:(r+=1,a=65536+((1023&a)<<10|1023&e.charCodeAt(r)),n+=i[240|a>>18]+i[128|a>>12&63]+i[128|a>>6&63]+i[128|63&a])}return n},d=function(t){for(var e=[{obj:{o:t},prop:"o"}],n=[],r=0;r<e.length;++r)for(var i=e[r],o=i.obj[i.prop],s=Object.keys(o),c=0;c<s.length;++c){var l=s[c],u=o[l];"object"===typeof u&&null!==u&&-1===n.indexOf(u)&&(e.push({obj:o,prop:l}),n.push(u))}return a(e)},f=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},p=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))};t.exports={arrayToObject:o,assign:c,compact:d,decode:l,encode:u,isBuffer:p,isRegExp:f,merge:s}},d687:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"a[data-v-d230173a]{text-decoration:none}.msg-modal-bg[data-v-d230173a]{background:url(https://aloss.hotforest.cn/basketball-v2/modal-end-bg.png) no-repeat;background-size:100% 100%;\r\n\t/* width: 80%; */width:%?516?%;height:%?653?%;\r\n\t/* height: 756.47rpx; */position:fixed;z-index:100000000;margin:auto;top:0;left:0;bottom:0;right:0}.msg-modal[data-v-d230173a]{background-color:rgba(0,0,0,.5);background-position:top;background-size:100% 100%;width:100%;height:100%;position:fixed;z-index:10000000;top:0;left:0}.modal-msg-t[data-v-d230173a]{text-align:center;height:100%;padding:5% 5% 0 5%}.modal-msg-t-1[data-v-d230173a]{font-size:%?48?%;font-family:wawaw5;font-weight:700;color:#292929}.modal-msg-t-2[data-v-d230173a]{font-size:%?44?%;font-family:wawaw5;font-weight:700;color:#e53f2a;-webkit-text-stroke:%?1?% rgba(0,0,0,.5)}.modal-msg-t-3[data-v-d230173a]{width:%?420?%;height:%?142?%;margin:0 auto;background:url(https://aloss.hotforest.cn/basketball-v2/modal-end-line.png) no-repeat 50%;background-size:100% 100%;font-size:%?34?%;font-family:wawaw5;font-weight:700;color:#333}.modal-msg-t-4[data-v-d230173a]{margin-top:%?22?%}.modal-msg-t-4 img[data-v-d230173a]{width:%?192?%;height:%?189?%}.index-bg[data-v-d230173a]{background:url(https://aloss.hotforest.cn/basketball-v2/index-bg.png) no-repeat;width:100%;height:100%;background-size:100% 100%\r\n\t/* background-size: cover; */\r\n\t/* position: absolute; */\r\n\t/* filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png', sizingMethod='scale'); */}.index-top[data-v-d230173a]{height:%?76?%;padding-top:%?33?%}.index-top-l[data-v-d230173a]{float:left;width:%?214?%;height:%?104?%;background:url(https://aloss.hotforest.cn/basketball-v2/index-top-l.png) no-repeat;background-size:100% 100%;background-position:0;margin-left:%?20?%;cursor:pointer}.index-top-r[data-v-d230173a]{float:right;width:%?193?%;height:%?108?%;background:url(https://aloss.hotforest.cn/basketball-v2/index-top-r.png) no-repeat;background-size:100% 100%;background-position:100%;cursor:pointer;margin-right:%?20?%}.index-d[data-v-d230173a]{position:absolute;width:100%;height:%?156?%;bottom:%?186?%}.index-d-bg[data-v-d230173a]{width:%?490?%;height:%?156?%;background:url(https://aloss.hotforest.cn/basketball-v2/index-button.png) no-repeat;text-align:center;margin:0 auto;line-height:%?156?%;background-size:100% 100%}.index-d-bg span[data-v-d230173a]{font-size:%?74?%;font-family:wawaw5;font-weight:700;color:#2a64d0;line-height:%?62?%;-webkit-text-stroke:%?1?% rgba(16,16,16,.8);text-stroke:%?1?% rgba(16,16,16,.8)}@font-face{font-family:wawaw5;src:url(https://aloss.hotforest.cn/basketball-v2/huakangwawaW5.ttf)}",""]),t.exports=e},ecc4:function(t,e,n){var r=n("d687");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("7e9215a6",r,!0,{sourceMap:!1,shadowMode:!1})},fbe8:function(t,e,n){"use strict";n.r(e);var r=n("c22a"),i=n("d17a");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("c4ab");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"d230173a",null,!1,r["a"],o);e["default"]=c.exports}}]);