(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sports-rank"],{"0de2":function(t,a,n){"use strict";n.r(a);var i=n("c1d5"),e=n("37d7");for(var o in e)"default"!==o&&function(t){n.d(a,t,function(){return e[t]})}(o);n("c4119");var r,s=n("f0c5"),l=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,"0aa2e561",null,!1,i["a"],r);a["default"]=l.exports},"37d7":function(t,a,n){"use strict";n.r(a);var i=n("efc2"),e=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(a,t,function(){return i[t]})}(o);a["default"]=e.a},c1d5:function(t,a,n){"use strict";var i,e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"rank-bg"},[n("v-uni-view",{staticClass:"index-top"},[n("v-uni-view",{staticClass:"index-top-l",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.turn_back.apply(void 0,arguments)}}},[n("span",[t._v("返回")])]),n("v-uni-view",{staticClass:"index-top-r",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.turn_rule.apply(void 0,arguments)}}},[n("span",[t._v("游戏规则")])])],1),n("v-uni-view",{staticClass:"rank-bg-1"},[n("v-uni-view",{staticClass:"rank-bg-11"},[n("v-uni-view",{staticClass:"r-b-1-t"},[n("span",[t._v("排行榜")])]),n("v-uni-view",{staticClass:"r-b-1-d"},[n("ul",t._l(t.rankList,function(a,i){return n("li",{key:i},[n("span",[t._v(t._s(a.rank))]),n("span",[t._v(t._s(a.name))]),n("span",[t._v(t._s(a.score)+"积分")])])}),0)]),this.user_rank>50?n("v-uni-view",{staticClass:"rank-bg-2-c"},[n("span",[t._v("我的积分")]),n("span",[t._v("0积分")]),n("span",[t._v("排名未进前50")])]):t._e(),this.user_rank<50?n("v-uni-view",{staticClass:"rank-bg-2-c"},[n("span",[t._v("我的积分")]),n("span",[t._v(t._s(t.userInfo.score)+"积分")]),n("span",[t._v("排名未进前"+t._s(t.userInfo.rank-1))])]):t._e()],1)],1)],1)},o=[];n.d(a,"b",function(){return e}),n.d(a,"c",function(){return o}),n.d(a,"a",function(){return i})},c4119:function(t,a,n){"use strict";var i=n("cc84"),e=n.n(i);e.a},cc84:function(t,a,n){var i=n("d73e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("3016eb9f",i,!0,{sourceMap:!1,shadowMode:!1})},d73e:function(t,a,n){a=t.exports=n("2350")(!1),a.push([t.i,".rank-bg[data-v-0aa2e561]{background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rank-bg.png) no-repeat;width:100%;height:100%;background-size:100% 100%}.index-top[data-v-0aa2e561]{height:%?76?%;padding-top:%?33?%}.index-top-l[data-v-0aa2e561]{float:left;width:%?131?%;height:%?67?%;background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/index-t-l.png) no-repeat 0;background-size:100% 100%;line-height:%?67?%;text-align:left;cursor:pointer}.index-top-l span[data-v-0aa2e561]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#f0d06c;margin-left:%?10?%}.index-top-r[data-v-0aa2e561]{float:right;width:%?125?%;height:%?67?%;line-height:%?67?%;background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/index-t-r.png) no-repeat 100%;background-size:100% 100%;text-align:right;cursor:pointer}.index-top-r span[data-v-0aa2e561]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#f0d06c;margin-right:%?10?%}.rank-bg-1[data-v-0aa2e561]{background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rank-bg-1-2.png) no-repeat;background-size:100% 110%;background-position:bottom;height:80%}.rank-bg-11[data-v-0aa2e561]{\n\t\t/* margin-top: 100rpx; */padding-top:%?100?%}.r-b-1-t[data-v-0aa2e561]{background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/r-b-1-t.png) no-repeat;background-size:100% 100%;width:%?162?%;height:%?50?%;\n\t\t/* border: 1rpx solid red; */margin-left:%?80?%;text-align:center}.r-b-1-t span[data-v-0aa2e561]{font-size:%?28?%;font-family:Lantinghei SC;font-weight:600;color:#fefefe}.r-b-1-d[data-v-0aa2e561]{\n\t\t/* height: 320px; */}.r-b-1-d ul[data-v-0aa2e561]{list-style:none;\n\t\t/* width: 524rpx; */width:80%;padding:0;margin:0 auto}.r-b-1-d ul li[data-v-0aa2e561]{height:%?55?%;margin-top:%?13?%;text-align:center}.r-b-1-d ul li span[data-v-0aa2e561]{font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#f0d06c}.r-b-1-d ul li[data-v-0aa2e561]:first-child{background:#e39531;border-radius:%?21?%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;line-height:%?55?%}.r-b-1-d ul li:first-child span[data-v-0aa2e561]{color:#333!important}.r-b-1-d ul li:nth-child(2) span[data-v-0aa2e561]{color:#333!important}.r-b-1-d ul li:nth-child(3) span[data-v-0aa2e561]{color:#333!important}.r-b-1-d ul li[data-v-0aa2e561]:nth-child(2){background:#ddd2c5;border-radius:21px;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;line-height:%?55?%}.r-b-1-d ul li[data-v-0aa2e561]:nth-child(3){background:#836a49;border-radius:21px;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;line-height:%?55?%}.r-b-1-d ul li span[data-v-0aa2e561]:first-child{\n\t\t/* width: 28rpx; */width:10%;display:block;float:left}.r-b-1-d ul li span[data-v-0aa2e561]:nth-child(2){\n\t\t/* width: 28rpx; */width:60%;display:block;float:left;text-align:left}.r-b-1-d ul li span[data-v-0aa2e561]:nth-child(3){\n\t\t/* width: 92rpx; */width:30% ;height:%?55?%;display:block;float:right}\n\n\t/* \t.rank-bg-2 {\n\t\twidth: 100%;\n\t\theight: 200rpx;\n\t\tbackground:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rank-bg-2.png) no-repeat;\n\t\tbackground-size: 90% 100%;\n\t\tbackground-position: center;\n\t\tposition: absolute;\n\t\tbottom: 60rpx;\n\t} */.rank-bg-2-c[data-v-0aa2e561]{\n\t\t/* border: 1px solid red; */width:80%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;vertical-align:middle;position:absolute;bottom:16%;left:10%}.rank-bg-2-c span[data-v-0aa2e561]:first-child{display:block;float:left;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#df8e3f}.rank-bg-2-c span[data-v-0aa2e561]:nth-child(2){display:block;float:left;font-size:%?30?%;font-family:Lantinghei SC;font-weight:700;color:#fff;margin-left:%?22?%}.rank-bg-2-c span[data-v-0aa2e561]:nth-child(3){display:block;float:right;width:%?180?%;height:%?51?%;background:rgba(225,9,180,.27);line-height:%?51?%;\n\t\t/* opacity:0.27; */border-radius:%?26?%;font-size:%?24?%;font-family:Lantinghei SC;font-weight:600;color:#eaeaea;margin-left:%?22?%;text-align:center}",""])},efc2:function(t,a,n){"use strict";(function(t){var i=n("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i(n("e89b")),o=i(n("fb8e")),r={name:"rank",data:function(){return{rankList:[],uid:null,userInfo:{},user_rank:0}},onLoad:function(){this.uid=uni.getStorageSync("uid"),this.getRankList(),this.get_user_info(this.uid)},methods:{get_user_info:function(a){var n=this,i={uid:a};e.default.post(o.default.sq+"/api/v1.h5.Questions/getUserInfo",i).then(function(a){t.log(a),n.userInfo=a.data.data.info,n.user_rank=a.data.data.info.rank}).catch(function(t){}).finally(function(){})},turn_back:function(){uni.navigateBack()},turn_rule:function(){uni.navigateTo({url:"rule"})},getRankList:function(){var a=this;e.default.get(o.default.sq+"/api/v1.h5.Questions/getRankList",[{}]).then(function(n){t.log(n),a.rankList=n.data.data.list}).catch(function(t){}).finally(function(){})}}};a.default=r}).call(this,n("5a52")["default"])}}]);