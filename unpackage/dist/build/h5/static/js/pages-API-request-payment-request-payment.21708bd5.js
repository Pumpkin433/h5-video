(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-request-payment-request-payment"],{"0cd4":function(t,e,n){var i=n("d2db");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("39cebd5d",i,!0,{sourceMap:!1,shadowMode:!1})},"319b":function(t,e,n){"use strict";n.r(e);var i=n("c32c"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"407f":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticStyle:{background:"#FFF",padding:"50rpx 0"}},[n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("支付金额")]),n("v-uni-view",{staticClass:"uni-h1 uni-center uni-common-mt"},[n("v-uni-text",{staticClass:"rmbLogo"},[t._v("￥")]),n("v-uni-input",{staticClass:"price",attrs:{type:"digit",value:t.price,maxlength:"4"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.priceChange.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"})],1)],1)},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},41805:function(t,e,n){"use strict";var i=n("0cd4"),a=n.n(i);a.a},a8a2:function(t,e,n){"use strict";n.r(e);var i=n("407f"),a=n("319b");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("41805");var c,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"79a8c0be",null,!1,i["a"],c);e["default"]=u.exports},c32c:function(t,e,n){"use strict";(function(t){var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("795b"));n("96cf");var o=i(n("3b8d")),c={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},onLoad:function(){},methods:{weixinPay:function(){var e=this;t.log("发起支付"),this.loading=!0,uni.login({success:function(n){t.log("login success",n),uni.request({url:"https://unidemo.dcloud.net.cn/payment/wx/mp?code=".concat(n.code,"&amount=").concat(e.price),success:function(n){if(t.log("pay request success",n),200===n.statusCode)if(0===n.data.ret){t.log("得到接口prepay_id",n.data.payment);var i=n.data.payment;uni.requestPayment({timeStamp:i.timeStamp,nonceStr:i.nonceStr,package:i.package,signType:"MD5",paySign:i.paySign,success:function(t){uni.showToast({title:"感谢您的赞助!"})},fail:function(t){uni.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){e.loading=!1}})}else uni.showModal({content:n.data.desc,showCancel:!1});else uni.showModal({content:"支付失败，请重试！",showCancel:!1})},fail:function(n){t.log("fail",n),e.loading=!1,uni.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})}})},fail:function(n){t.log("fail",n),e.loading=!1,uni.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})}})},requestPayment:function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(n,i){var a,o=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.providerList[i].loading=!0,e.next=3,this.getOrderInfo(n.id);case 3:if(a=e.sent,t.log("得到订单信息",a),200===a.statusCode){e.next=9;break}return t.log("获得订单信息失败",a),uni.showModal({content:"获得订单信息失败",showCancel:!1}),e.abrupt("return");case 9:uni.requestPayment({provider:n.id,orderInfo:a.data,success:function(e){t.log("success",e),uni.showToast({title:"感谢您的赞助!"})},fail:function(e){t.log("fail",e),uni.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})},complete:function(){o.providerList[i].loading=!1}});case 10:case"end":return e.stop()}},e,this)}));function n(t,n){return e.apply(this,arguments)}return n}(),getOrderInfo:function(t){var e="",n="https://demo.dcloud.net.cn/payment/?payid="+t+"&appid="+e+"&total="+this.price;return new a.default(function(t){uni.request({url:n,success:function(e){t(e)},fail:function(e){t(e)}})})},priceChange:function(e){t.log(e.detail.value),this.price=e.detail.value}}};e.default=c}).call(this,n("5a52")["default"])},d2db:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".rmbLogo[data-v-79a8c0be]{font-size:%?40?%}uni-button[data-v-79a8c0be]{background-color:#007aff;color:#fff}.uni-h1.uni-center[data-v-79a8c0be]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.price[data-v-79a8c0be]{border-bottom:1px solid #eee;width:%?200?%;height:%?80?%;padding-bottom:%?4?%}.ipaPayBtn[data-v-79a8c0be]{margin-top:%?30?%}",""])}}]);