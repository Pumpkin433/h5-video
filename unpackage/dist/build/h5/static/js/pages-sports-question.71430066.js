(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sports-question"],{"0061":function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-countdown[data-v-4eed16b7]{padding:%?2?% 0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-countdown__splitor[data-v-4eed16b7]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%;font-size:%?28?%}.uni-countdown__number[data-v-4eed16b7]{line-height:%?44?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?44?%;border-radius:%?6?%;margin:0 %?5?%;font-size:%?28?%;border:1px solid #000;font-size:%?24?%;padding:0 %?10?%}',""]),t.exports=n},"0c3d":function(t,n,e){"use strict";var o=e("bf8f"),i=e.n(o);i.a},"2ac4":function(t,n,e){var o=e("dbb3");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("0a710d9e",o,!0,{sourceMap:!1,shadowMode:!1})},"3adb":function(t,n,e){"use strict";(function(t){var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("cd52")),a=o(e("e89b")),s=o(e("fb8e")),r={name:"question",components:{uniCountdown:i.default},data:function(){return{isModalEnd:!1,isModalShare:!1,isModalMsg:!1,isModalAnswerError:!1,isModalAnswerTimeout:!1,second:15,reset:!1,questionList:[],q_key:0,question:{},correct:-1,sIndex:0,total_score:0,total_question:0,user_rank:0,uid:null,ns_device_id:null,name:"",mobile:"",isAnswerEnd:!1,isAnswerError:!1,isAnswerTimeout:!1}},onLoad:function(t){this.uid=uni.getStorageSync("uid"),this.ns_device_id=uni.getStorageSync("ns_device_id"),void 0!==t.k&&0!==t.k?(this.q_key=t.k,this.getQuestionList()):(this.k=0,this.getQuestionList()),void 0!=t.s&&(this.total_score=t.s),void 0!==t.t&&void 0!==t.q_key&&t.k===t.t&&(this.get_user_rank(this.uid,this.total_score),this.isModalEnd=!0,this.reset=!this.reset),void 0!==t.w&&1==t.w&&(this.get_user_rank(this.uid,t.s),this.isModalAnswerError=!0,this.reset=!this.reset,this.second=0,this.isModalAnswerTimeout=!1)},methods:{user_msg_add:function(){var n=this,e={uid:this.uid,name:this.name,mobile:this.mobile,score:this.total_score,rank:this.user_rank};a.default.post(s.default.sq+"/api/v1.h5.Questions/updateUserInfo",e).then((function(e){t.log(e),1===e.data.data.updateRow&&(n.isModalShare=!0,n.isModalAnswerError=!1,n.isModalAnswerTimeout=!1,n.isModalEnd=!1,n.isModalMsg=!1)})).catch((function(t){})).finally((function(){}))},select_option:function(n,e){this.sIndex=e,this.correct=this.question.correct,this.q_key++,n===this.question.correct?(this.total_score++,setTimeout((function(n,e,o){uni.redirectTo({url:"/pages/sports/question?k="+n+"&s="+e+"&t="+o,success:function(n){t.log(n)},fail:function(){},complete:function(){}})}),1e3,this.q_key,this.total_score,this.total_question)):setTimeout((function(n,e,o,i){uni.redirectTo({url:"/pages/sports/question?k="+n+"&s="+e+"&t="+o+"&w=1",success:function(n){t.log(n)},fail:function(){},complete:function(){}})}),1e3,this.q_key,this.total_score,this.total_question,1)},get_user_rank:function(t,n){var e=this,o={uid:t,score:n};a.default.post(s.default.sq+"/api/v1.h5.Questions/getUserRank",o).then((function(t){e.user_rank=t.data.data.rank})).catch((function(t){})).finally((function(){}))},score_share_button:function(){var t=this,n={uid:this.uid};a.default.post(s.default.sq+"/api/v1.h5.Questions/uidIsExists",n).then((function(n){var e=n.data.data.status;0===e&&(t.reset=!t.reset,t.isModalMsg=!0,t.isModalAnswerError=!1,t.isModalAnswerTimeout=!1,t.isModalEnd=!1),1===e&&(t.isModalShare=!0,t.isModalAnswerError=!1,t.isModalAnswerTimeout=!1,t.isModalEnd=!1,t.isModalMsg=!1)})).catch((function(t){})).finally((function(){}))},modal_end:function(){var t=this,n={uid:this.uid};a.default.post(s.default.sq+"/api/v1.h5.Questions/uidIsExists",n).then((function(n){var e=n.data.data.status;0===e&&(t.reset=!t.reset,t.isModalMsg=!0),1===e&&(t.get_user_rank(t.uid,t.total_score),t.isModalEnd=!0)})).catch((function(t){})).finally((function(){}))},question_modal:function(){var t=this,n={uid:this.uid};a.default.post(s.default.sq+"/api/v1.h5.Questions/uidIsExists",n).then((function(n){var e=n.data.data.status;0===e&&(t.reset=!t.reset,t.isModalMsg=!0),1===e&&(t.isModalEnd=!1,uni.reLaunch({url:"/pages/sports/sports?uid="+t.uid+"&ns_device_id="+t.ns_device_id}))})).catch((function(t){})).finally((function(){}))},share_modal:function(){var t=this,n={uid:this.uid};a.default.post(s.default.sq+"/api/v1.h5.Questions/uidIsExists",n).then((function(n){var e=n.data.data.status;0===e&&(t.reset=!t.reset,t.isModalMsg=!0,t.isModalAnswerError=!1,t.isModalAnswerTimeout=!1,t.isModalEnd=!1),1===e&&(t.isModalShare=!1,uni.reLaunch({url:"/pages/sports/sports?uid="+t.uid+"&ns_device_id="+t.ns_device_id}))})).catch((function(t){})).finally((function(){}))},msg_modal:function(){},answer_error_modal:function(){var t=this,n={uid:this.uid};a.default.post(s.default.sq+"/api/v1.h5.Questions/uidIsExists",n).then((function(n){var e=n.data.data.status;0===e&&(t.reset=!t.reset,t.isModalMsg=!0,t.isModalAnswerError=!1,t.isModalAnswerTimeout=!1,t.isModalEnd=!1),1===e&&(t.isModalAnswerError=!1,uni.reLaunch({url:"/pages/sports/sports?uid="+t.uid+"&ns_device_id="+t.ns_device_id}))})).catch((function(t){})).finally((function(){}))},answer_timeout_modal:function(){var t=this,n={uid:this.uid};a.default.post(s.default.sq+"/api/v1.h5.Questions/uidIsExists",n).then((function(n){var e=n.data.data.status;0===e&&(t.reset=!t.reset,t.isModalMsg=!0,t.isModalAnswerError=!1,t.isModalAnswerTimeout=!1,t.isModalEnd=!1),1===e&&(t.isModalAnswerTimeout=!1,uni.reLaunch({url:"/pages/sports/sports?uid="+t.uid+"&ns_device_id="+t.ns_device_id}))})).catch((function(t){})).finally((function(){}))},timeUp:function(){this.get_user_rank(this.uid,this.total_score),!0===this.isModalAnswerError?this.isModalAnswerTimeout=!1:this.isModalAnswerTimeout=!0},getQuestionList:function(){var t=this;a.default.get(s.default.sq+"/api/v1.h5.Questions/list",[{}]).then((function(n){t.questionList=n.data.data.list,t.total_question=n.data.data.list.length,t.question=n.data.data.list[t.q_key],!0===t.isModalEnd&&(t.question={q_name:"1",option_a:"1",option_b:"1",option_c:"1",option_d:"1",correct:"1"})})).catch((function(t){})).finally((function(){}))}}};n.default=r}).call(this,e("5a52")["default"])},4526:function(t,n,e){"use strict";var o=e("53e6"),i=e.n(o);i.a},4795:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("c5f6");var o={name:"uni-countdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0},reset:{type:Boolean,default:!1}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},watch:{reset:function(t){clearInterval(this.timer),this.startData()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{startData:function(){var t=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3))},toSeconds:function(t,n,e,o){return 60*t*60*24+60*n*60+60*e+o},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,e=0,o=0,i=0;t>0?(n=Math.floor(t/86400),e=Math.floor(t/3600)-24*n,o=Math.floor(t/60)-24*n*60-60*e,i=Math.floor(t)-24*n*60*60-60*e*60-60*o):this.timeUp(),n<10&&(n="0"+n),e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),this.d=n,this.h=e,this.i=o,this.s=i}}};n.default=o},4956:function(t,n,e){"use strict";e.r(n);var o=e("d446"),i=e("a508");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("0c3d");var s,r=e("f0c5"),d=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"17c1397c",null,!1,o["a"],s);n["default"]=d.exports},"4d59":function(t,n,e){"use strict";e.r(n);var o=e("3adb"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"53e6":function(t,n,e){var o=e("0061");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("081283af",o,!0,{sourceMap:!1,shadowMode:!1})},5592:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".uni-countdown[data-v-17c1397c]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:%?2?% 0}.uni-countdown__splitor[data-v-17c1397c]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?48?%;padding:%?5?%;font-size:%?24?%}.uni-countdown__number[data-v-17c1397c]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?52?%;height:%?48?%;line-height:%?48?%;margin:%?5?%;text-align:center;font-size:%?24?%}",""]),t.exports=n},"5c73":function(t,n,e){"use strict";var o={"uni-countdown":e("4956").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"question-bg"},[e("v-uni-view",{staticClass:"question-bg-1"},[e("v-uni-view",{staticClass:"question-setval"},[e("uni-countdown",{attrs:{"show-day":!1,"background-color":"transparent",color:"white","show-colon":!0,day:0,hour:0,minute:0,second:this.second,reset:this.reset},on:{timeup:function(n){arguments[0]=n=t.$handleEvent(n),t.timeUp.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"question-bg-2"},[e("v-uni-view",{staticClass:"question-c"},[e("p",[t._v(t._s(t.question.q_name))]),e("ul",[e("li",{directives:[{name:"show",rawName:"v-show",value:-1===this.correct||1!==this.sIndex,expression:"this.correct === -1 || this.sIndex !== 1"}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select_option("A",1)}}},[e("span",[t._v("A   "+t._s(t.question.option_a))])]),e("li",{directives:[{name:"show",rawName:"v-show",value:-1!==this.correct&&1===this.sIndex,expression:"this.correct !== -1 && this.sIndex === 1"}],class:"A"===this.correct?"question-right":"question-wrong",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select_option("A",1)}}},[e("span",[t._v("A   "+t._s(t.question.option_a))])]),e("li",{directives:[{name:"show",rawName:"v-show",value:-1===this.correct||2!==this.sIndex,expression:"this.correct === -1 || this.sIndex !== 2"}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select_option("B",2)}}},[e("span",[t._v("B   "+t._s(t.question.option_b))])]),e("li",{directives:[{name:"show",rawName:"v-show",value:-1!==this.correct&&2===this.sIndex,expression:"this.correct !== -1 && this.sIndex === 2"}],class:"B"===this.correct?"question-right":"question-wrong",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select_option("B",2)}}},[e("span",[t._v("B   "+t._s(t.question.option_b))])]),e("li",{directives:[{name:"show",rawName:"v-show",value:-1===this.correct||3!==this.sIndex,expression:"this.correct === -1 || this.sIndex !== 3"}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select_option("C",3)}}},[e("span",[t._v("C   "+t._s(t.question.option_c))])]),e("li",{directives:[{name:"show",rawName:"v-show",value:-1!==this.correct&3===this.sIndex,expression:"(this.correct !== -1) & (this.sIndex === 3)"}],class:"C"===this.correct?"question-right":"question-wrong",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select_option("C",3)}}},[e("span",[t._v("C   "+t._s(t.question.option_c))])]),e("li",{directives:[{name:"show",rawName:"v-show",value:-1===this.correct||4!==this.sIndex,expression:"this.correct === -1 || this.sIndex !== 4"}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select_option("D",4)}}},[e("span",[t._v("D   "+t._s(t.question.option_d))])]),e("li",{directives:[{name:"show",rawName:"v-show",value:-1!==this.correct&4===this.sIndex,expression:"(this.correct !== -1) & (this.sIndex === 4)"}],class:"D"===this.correct?"question-right":"question-wrong",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select_option("D",4)}}},[e("span",[t._v("D   "+t._s(t.question.option_d))])])])]),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.isModalEnd,expression:"isModalEnd === true"}],staticClass:"modal-end",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.question_modal.apply(void 0,arguments)}}}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.isModalEnd,expression:"isModalEnd === true"}],staticClass:"modal-end-bg"},[e("v-uni-view",{staticClass:"modal-end-t"},[e("v-uni-view",{staticClass:"modal-end-l"},[e("h3",[t._v("您实在是太棒了!")]),e("h5",[t._v("您已经完成所有的问题")]),e("h2",[t._v("获得了"),e("span",[t._v(t._s(t.total_score))]),t._v("积分")]),e("h5",[t._v("您现在排名在"),e("span",{directives:[{name:"show",rawName:"v-show",value:t.user_rank<=100&0!=t.user_rank,expression:"(user_rank <= 100) & (user_rank != 0)"}]},[t._v(t._s(t.user_rank))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.user_rank>100||0===t.user_rank,expression:"user_rank > 100 || user_rank === 0"}]},[t._v("100+")])])]),e("v-uni-view",{staticClass:"modal-end-r"})],1),e("v-uni-view",{staticClass:"modal-end-d"},[e("div",{staticClass:"modal-end-d-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.score_share_button.apply(void 0,arguments)}}},[e("span",[t._v("分享战绩")])]),e("v-uni-view",{staticClass:"modal-end-d-d"},[t._v("分享可以获得额外的答题机会")])],1)],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.isModalShare,expression:"isModalShare === true"}],staticClass:"modal-share",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.share_modal.apply(void 0,arguments)}}}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.isModalShare,expression:"isModalShare === true"}],staticClass:"modal-share-bg"},[e("v-uni-view",{staticClass:"modal-share-t"},[e("h3",[t._v("快来全民体育")]),e("h2",[t._v("答题赢大奖")]),e("h4",[t._v("我获得了"),e("span",[t._v(t._s(t.total_score))]),t._v("积分")]),e("h5",[t._v("当前排名"),e("span",{directives:[{name:"show",rawName:"v-show",value:t.user_rank<=100&0!=t.user_rank,expression:"(user_rank <= 100) & (user_rank != 0)"}]},[t._v(t._s(t.user_rank))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.user_rank>100||0===t.user_rank,expression:"user_rank > 100 || user_rank === 0"}]},[t._v("100+")])])]),e("v-uni-view",{staticClass:"modal-share-d"},[e("v-uni-view",{staticClass:"modal-share-d-l"},[e("p",[t._v("长按保存二维码"),e("br"),t._v("下载全民体育APP 参与活动")])]),e("v-uni-view",{staticClass:"modal-share-d-r"},[e("img",{attrs:{src:"http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/m-share-qrcode.png",alt:""}})])],1)],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.isModalMsg,expression:"isModalMsg === true"}],staticClass:"modal-msg",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.msg_modal.apply(void 0,arguments)}}}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.isModalMsg,expression:"isModalMsg === true"}],staticClass:"modal-msg-bg"},[e("h3",[t._v("信息填写")]),e("v-uni-view",{staticClass:"modal-msg-name"},[e("span",[t._v("姓名")]),e("v-uni-input",{attrs:{type:"text"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1),e("v-uni-view",{staticClass:"modal-msg-mobile"},[e("span",[t._v("手机号")]),e("v-uni-input",{attrs:{type:"text"},model:{value:t.mobile,callback:function(n){t.mobile=n},expression:"mobile"}})],1),e("v-uni-view",{staticClass:"modal-msg-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.user_msg_add.apply(void 0,arguments)}}},[e("span",[t._v("确认信息")])])],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.isModalAnswerError,expression:"isModalAnswerError === true"}],staticClass:"modal-answer-error",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.answer_error_modal.apply(void 0,arguments)}}}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.isModalAnswerError,expression:"isModalAnswerError === true"}],staticClass:"modal-answer-error-bg"},[e("v-uni-view",{staticClass:"modal-a-circle"},[e("img",{attrs:{src:"http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/a-error-circle.png",alt:""}})]),e("h4",[t._v("很抱歉您的回答错误")]),e("h3",[t._v("获得了"),e("span",[t._v(t._s(t.total_score))]),t._v("积分")]),e("h5",[t._v("您现在排名在"),e("span",{directives:[{name:"show",rawName:"v-show",value:t.user_rank<=100&0!=t.user_rank,expression:"(user_rank <= 100) & (user_rank != 0)"}]},[t._v(t._s(t.user_rank))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.user_rank>100||0===t.user_rank,expression:"user_rank > 100 || user_rank === 0"}]},[t._v("100+")])]),e("v-uni-view",{staticClass:"modal-a-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.score_share_button.apply(void 0,arguments)}}},[e("span",[t._v("分享战绩")])]),e("v-uni-view",{staticClass:"modal-a-b-t"},[e("span",[t._v("分享可以获得额外的答题机会")])])],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.isModalAnswerTimeout,expression:"isModalAnswerTimeout === true"}],staticClass:"modal-answer-timeout",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.answer_timeout_modal.apply(void 0,arguments)}}}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===t.isModalAnswerTimeout,expression:"isModalAnswerTimeout === true"}],staticClass:"modal-answer-timeout-bg"},[e("v-uni-view",{staticClass:"modal-t-circle"},[e("img",{attrs:{src:"http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/a-timeout-circle.png",alt:""}})]),e("h4",[t._v("很抱歉您已经超时")]),e("h3",[t._v("获得了"),e("span",[t._v(t._s(t.total_score))]),t._v("积分")]),e("h5",[t._v("您现在排名在"),e("span",{directives:[{name:"show",rawName:"v-show",value:t.user_rank<=100&0!=t.user_rank,expression:"(user_rank <= 100) & (user_rank != 0)"}]},[t._v(t._s(t.user_rank))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.user_rank>100||0===t.user_rank,expression:"user_rank > 100 || user_rank === 0"}]},[t._v("100+")])]),e("v-uni-view",{staticClass:"modal-t-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.score_share_button.apply(void 0,arguments)}}},[e("span",[t._v("分享战绩")])]),e("v-uni-view",{staticClass:"modal-t-b-t"},[e("span",[t._v("分享可以获得额外的答题机会")])])],1)],1)],1)],1)},a=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))},8496:function(t,n,e){"use strict";e.r(n);var o=e("4795"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},a508:function(t,n,e){"use strict";e.r(n);var o=e("bfc0"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},a8d5:function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?e("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?e("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),e("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.h))]),e("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),e("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.i))]),e("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),e("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():e("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},a=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))},ad50:function(t,n,e){"use strict";e.r(n);var o=e("5c73"),i=e("4d59");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("efcb");var s,r=e("f0c5"),d=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"4115d348",null,!1,o["a"],s);n["default"]=d.exports},bf8f:function(t,n,e){var o=e("5592");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("17790690",o,!0,{sourceMap:!1,shadowMode:!1})},bfc0:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("c5f6");var o={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,n,e,o){return 60*t*60*24+60*n*60+60*e+o},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,e=0,o=0,i=0;t>0?(n=Math.floor(t/86400),e=Math.floor(t/3600)-24*n,o=Math.floor(t/60)-24*n*60-60*e,i=Math.floor(t)-24*n*60*60-60*e*60-60*o):this.timeUp(),n<10&&(n="0"+n),e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),this.d=n,this.h=e,this.i=o,this.s=i},startData:function(){var t=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};n.default=o},cd52:function(t,n,e){"use strict";e.r(n);var o=e("a8d5"),i=e("8496");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("4526");var s,r=e("f0c5"),d=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"4eed16b7",null,!1,o["a"],s);n["default"]=d.exports},d446:function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?e("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?e("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),e("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.h))]),e("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),e("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.i))]),e("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),e("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():e("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},a=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))},dbb3:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".question-bg[data-v-4115d348]{width:100%;height:100%;background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rule-bg.png) no-repeat;background-size:100% 100%;background-position:50%}.question-bg-1[data-v-4115d348]{width:100%;height:100%}.question-bg-2[data-v-4115d348]{width:100%;height:80%;background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rule-bg-1.png) no-repeat;background-size:100%;background-position:top\r\n\t/* background-position: center; */}.question-setval[data-v-4115d348]{text-align:center;width:%?267.05?%;\r\n\t/* height: 195.29rpx; */height:15%;margin:0 auto;padding-top:5%;font-size:%?94.11?%;font-family:Yuanti SC;font-weight:400;color:#fff}.question-c[data-v-4115d348]{width:%?602.35?%;margin:0 auto;padding-top:%?200?%}.question-c p[data-v-4115d348]{width:%?602.35?%;height:%?168.23?%;font-size:%?32.94?%;font-family:Lantinghei SC;font-weight:700;color:#fff}.question-c ul[data-v-4115d348]{margin:0;padding:0;list-style:none}.question-c ul li[data-v-4115d348]{width:%?551.76?%;height:%?89.41?%;border:%?1?% solid #eeb62c;border-radius:%?23.52?%;text-indent:%?14.11?%;margin:0 auto;margin-top:%?35.29?%}.question-c ul li span[data-v-4115d348]{line-height:%?89.41?%;font-size:%?30?%;font-family:Lantinghei SC;font-weight:600;color:#fff\r\n\t/* font-size: 30.58rpx;\n\tfont-family: Lantinghei SC;\n\tfont-weight: 600;\n\tcolor: rgba(255, 255, 255, 1);\n\t\n\tcursor: pointer; */}.question-right[data-v-4115d348]{border:%?2?% solid #1aa017!important;background:#1aa017 url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/question-right-icon.png) no-repeat 100%;background-size:%?51.76?% %?40?%}.question-wrong[data-v-4115d348]{border:%?2?% solid #ff7600!important;background:#ff7600 url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/question-wrong-icon.png) no-repeat 100%;background-size:%?35.29?% %?40?%}.modal-end[data-v-4115d348]{background-color:rgba(0,0,0,.5);background-position:top;background-size:100% 100%;width:100%;height:100%;position:fixed;z-index:10000000;top:0;left:0}.modal-end-bg[data-v-4115d348]{background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/q-end-bg.png) no-repeat;background-size:100% 100%;width:80%;height:50%;top:20%;left:10%;position:fixed;z-index:100000000}.modal-end-t[data-v-4115d348]{height:70%}.modal-end-l[data-v-4115d348]{width:60%;float:left;padding:%?89.41?% 0 %?47.05?% %?47.05?%}.modal-end-l h3[data-v-4115d348]{font-size:%?43.52?%;font-family:Lantinghei SC;font-weight:600;color:#fff}.modal-end-l h5[data-v-4115d348]{font-size:%?30.58?%;font-family:Lantinghei SC;font-weight:600;color:#333}.modal-end-l h2[data-v-4115d348]{font-size:%?44.7?%;font-family:Lantinghei SC;font-weight:600;color:#333}.modal-end-l h2 span[data-v-4115d348]{color:#fffff}.modal-end-r[data-v-4115d348]{width:30%;float:left;height:60%}.modal-end-r img[data-v-4115d348]{width:100%;height:100%}.modal-end-d[data-v-4115d348]{height:40%}.modal-end-d-button[data-v-4115d348]{width:%?492.94?%;height:%?88.23?%;margin:0 auto;text-align:center;background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/question-button.png) no-repeat;background-size:100% 100%;line-height:%?88.23?%;cursor:pointer}.modal-end-d-button span[data-v-4115d348]{font-size:%?32.94?%;font-family:Lantinghei SC;font-weight:600;color:#fff}.modal-end-d-d[data-v-4115d348]{width:100%;margin-top:%?27.05?%;text-align:center;font-size:%?25.88?%;font-family:Lantinghei SC;font-weight:600;color:#333}.modal-share[data-v-4115d348]{background-color:rgba(0,0,0,.5);background-position:top;background-size:100% 100%;width:100%;height:100%;position:fixed;z-index:10000000;top:0;left:0}.modal-share-bg[data-v-4115d348]{background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/m-share-bg.png) no-repeat;background-size:120% 100%;width:80%;\r\n\t/* height: 50%; */height:%?756.47?%;top:20%;left:10%;position:fixed;z-index:100000000}.modal-share-t[data-v-4115d348]{height:60%;padding-top:%?100?%;padding-left:%?51.76?%}.modal-share-t h3[data-v-4115d348]{font-size:%?51.76?%;font-family:Lantinghei SC;font-weight:600;color:#fff}.modal-share-t h2[data-v-4115d348]{font-size:%?60?%;font-family:Lantinghei SC;font-weight:600;color:#fff}.modal-share-t h4[data-v-4115d348]{font-size:%?42.35?%;font-family:Lantinghei SC;font-weight:600;color:#333}.modal-share-t h4 span[data-v-4115d348]{color:#fff}.modal-share-t h5[data-v-4115d348]{font-size:%?30.58?%;font-family:Lantinghei SC;font-weight:600;color:#333}.modal-share-t h5 span[data-v-4115d348]{color:#fff}.modal-share-d[data-v-4115d348]{width:100%;padding:%?35.29?% %?51.76?% 0 %?51.76?%}.modal-share-d-l[data-v-4115d348]{width:60%;float:left}.modal-share-d-r[data-v-4115d348]{width:40%;float:left}.modal-share-d-r img[data-v-4115d348]{width:%?138.82?%}.modal-msg[data-v-4115d348]{background-color:rgba(0,0,0,.5);background-position:top;background-size:100% 100%;width:100%;height:100%;position:fixed;z-index:10000000;top:0;left:0}.modal-msg-bg[data-v-4115d348]{background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/m-msg-bg.png) no-repeat;background-size:100% 100%;width:80%;height:%?564.7?%;top:20%;left:10%;position:fixed;z-index:100000000}.modal-msg-bg h3[data-v-4115d348]{font-size:%?35.29?%;font-family:Lantinghei SC;font-weight:600;color:#333;text-align:center;margin-top:%?51.76?%}.modal-msg-name[data-v-4115d348]{width:80%;margin:0 auto;margin-top:%?82.35?%}.modal-msg-mobile[data-v-4115d348]{width:80%;margin:0 auto;margin-top:%?47.05?%}.modal-msg-name span[data-v-4115d348]{font-size:%?25.88?%;font-family:Lantinghei SC;font-weight:600;color:#333;display:block;float:left;text-align:right;width:%?121.17?%}.modal-msg-name uni-input[data-v-4115d348]{padding-left:%?23.52?%;width:%?330.58?%;border-bottom:1px solid #4e4e4e}.modal-msg-mobile span[data-v-4115d348]{font-size:%?25.88?%;font-family:Lantinghei SC;font-weight:600;color:#333;display:block;float:left;text-align:right;width:%?121.17?%}.modal-msg-mobile uni-input[data-v-4115d348]{padding-left:%?23.52?%;width:%?330.58?%;border-bottom:1px solid #4e4e4e}.modal-msg-button[data-v-4115d348]{width:%?520?%;height:%?84.7?%;margin:0 auto;margin-top:%?117.64?%;text-align:center;background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/question-button.png) no-repeat;background-size:100% 100%;cursor:pointer}.modal-msg-button span[data-v-4115d348]{font-size:%?42.35?%;font-family:Lantinghei SC;font-weight:600;color:#fff}.modal-answer-error[data-v-4115d348]{background-color:rgba(0,0,0,.5);background-position:top;background-size:100% 100%;width:100%;height:100%;position:fixed;z-index:10000000;top:0;left:0}.modal-answer-error-bg[data-v-4115d348]{background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/a-error-bg.png) no-repeat;background-size:100% 100%;\r\n\t/* width: 80%; */\r\n\t/* height: 50%; */width:%?589.41?%;height:%?623.52?%;top:20%;left:10%;position:fixed;z-index:100000000}.modal-a-circle[data-v-4115d348]{width:%?232.94?%;height:%?232.94?%;margin:0 auto;margin-top:%?-94.11?%}.modal-a-circle img[data-v-4115d348]{width:100%}.modal-answer-error-bg h4[data-v-4115d348]{text-align:center;font-size:%?30.58?%;color:#666;font-family:FZLTZHK--GBK1-0;margin-top:%?61.76?%}.modal-answer-error-bg h3[data-v-4115d348]{text-align:center;font-size:%?44.7?%;color:#333;font-family:FZLTZHK--GBK1-0;margin-top:%?9.41?%}.modal-answer-error-bg h3 span[data-v-4115d348]{color:#db9031}.modal-answer-error-bg h5[data-v-4115d348]{text-align:center;font-size:%?30.58?%;color:#333;font-family:FZLTZHK--GBK1-0;margin-top:%?9.41?%}.modal-answer-error-bg h5 span[data-v-4115d348]{color:#db9031}.modal-a-button[data-v-4115d348]{width:%?492.94?%;height:%?84.7?%;margin:0 auto;margin-top:%?38.82?%;background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/a-error-button.png) no-repeat;background-size:100% 100%;text-align:center}.modal-a-button span[data-v-4115d348]{line-height:%?84.7?%;font-size:%?32.94?%;font-family:Lantinghei SC;font-weight:600;color:#fff}.modal-a-b-t[data-v-4115d348]{margin-top:%?23.52?%;text-align:center}.modal-a-b-t span[data-v-4115d348]{font-size:%?25.88?%;font-family:Lantinghei SC;font-weight:600;color:#333}.modal-answer-timeout[data-v-4115d348]{background-color:rgba(0,0,0,.5);background-position:top;background-size:100% 100%;width:100%;height:100%;position:fixed;z-index:10000000;top:0;left:0}.modal-answer-timeout-bg[data-v-4115d348]{background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/a-error-bg.png) no-repeat;background-size:100% 100%;width:80%;height:50%;top:20%;left:10%;position:fixed;z-index:100000000}.modal-t-circle[data-v-4115d348]{width:%?232.94?%;height:%?232.94?%;margin:0 auto;margin-top:%?-94.11?%}.modal-t-circle img[data-v-4115d348]{width:100%}.modal-answer-timeout-bg h4[data-v-4115d348]{text-align:center;font-size:%?30.58?%;color:#666;font-family:FZLTZHK--GBK1-0;margin-top:%?31.76?%}.modal-answer-timeout-bg h3[data-v-4115d348]{text-align:center;font-size:%?44.7?%;color:#333;font-family:FZLTZHK--GBK1-0;margin-top:%?18.82?%}.modal-answer-timeout-bg h3 span[data-v-4115d348]{color:#db9031}.modal-answer-timeout-bg h5[data-v-4115d348]{text-align:center;font-size:%?30.58?%;color:#333;font-family:FZLTZHK--GBK1-0;margin-top:%?18.82?%}.modal-answer-timeout-bg h5 span[data-v-4115d348]{color:#db9031}.modal-t-button[data-v-4115d348]{width:%?492.94?%;height:%?84.7?%;margin:0 auto;margin-top:%?47.05?%;background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/a-error-button.png) no-repeat;background-size:100% 100%;text-align:center}.modal-t-button span[data-v-4115d348]{line-height:%?84.7?%;font-size:%?32.94?%;font-family:Lantinghei SC;font-weight:600;color:#fff}.modal-t-b-t[data-v-4115d348]{text-align:center}.modal-t-b-t span[data-v-4115d348]{font-size:%?25.88?%;font-family:Lantinghei SC;font-weight:600;color:#333}[data-v-4115d348] .uni-countdown__number:first-child{display:none}[data-v-4115d348] .uni-countdown__splitor{display:none}[data-v-4115d348] .uni-countdown__number:nth-child(3){display:none}[data-v-4115d348] .uni-countdown__number:nth-child(5){background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/time-2.png) no-repeat 0;background-size:110% 120%;margin:0 auto;width:%?267.05?%;height:%?267.05?%\r\n\t/* height: 195.29rpx; */}[data-v-4115d348] .uni-countdown__number:nth-child(5) span{font-size:%?82.35?%;font-family:Yuanti SC;font-weight:400;color:#fff}",""]),t.exports=n},efcb:function(t,n,e){"use strict";var o=e("2ac4"),i=e.n(o);i.a}}]);