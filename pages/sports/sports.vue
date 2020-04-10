<template>
	<view class="index-bg">
		<view class="index-top">
			<view class="index-top-l" @tap="turn_rule"><span>游戏规则</span></view>
			<view class="index-top-r" @tap="turn_rank"><span>排行榜</span></view>
		</view>

		<view class="index-d">
			<div class="index-d-bg" @tap="turn_question"><span>开始挑战</span></div>
		</view>
		
		

		<!-- 信息提示 弹框 -->
		<view class="msg-modal" v-show="msg_modal_share === true" @click="msg_modal_close"></view>
		<view class="msg-modal-bg" v-show="msg_modal_share === true">
			<view class="modal-msg-t">
				<!-- <h3>您今天答题的机会 <br>已经用完了</h3> -->
				<h3>请到个人中心 <br>进行登录答题</h3>
				<!-- <h5>分享可以免费获取一次答题机会</h5> -->
			
			</view>
			<view class="modal-msg-d">
				<view class="modal-msg-d-l">
					<p>
						长按保存二维码
						<br />
						下载全民体育APP 参与活动
					</p>
				</view>
				<view class="modal-msg-d-r">
					<img src="http://aloss.hotforest.cn/h5-basketball/m-share-qrcode.png" alt="" />
					</view>
			</view>
		</view>
		<!-- 信息提示弹框结束 -->
		
		<!-- 打开app 弹框 -->
		<view class="msg-modal" v-show="msg_modal_app_share === true" @click="msg_modal_app"></view>
		<view class="msg-modal-bg" v-show="msg_modal_app_share === true">
			<view class="modal-msg-t">
				<h3>打开全民体育App <br>参与答题</h3>
				<!-- <h5>分享可以免费获取一次答题机会</h5> -->
			
			</view>
			<view class="modal-msg-d">
				<view class="modal-msg-d-l">
					<p>
						长按识别二维码
						<br />
						下载全民体育APP 参与活动
					</p>
				</view>
				<view class="modal-msg-d-r">
					<img src="http://aloss.hotforest.cn/h5-basketball/m-share-qrcode.png" alt="" />
					</view>
			</view>
		</view>
		<!-- 信息提示弹框结束 -->
	</view>
</template>

<script>
import util from '@/common/util.js';
import http from '@/utils/http.js';
import base from '@/utils/base.js';
export default {
	name: 'sports',
	data() {
		return {
			msg_modal_share: false,
			msg_modal_app_share:false,
			uid: null,
			ns_device_id: null,
			now_time: new Date().getTime(),
			answer_chance: null,
			nickname:null,
			
		};
	},
	onLoad(option) {
		
		// console.log(option.from)
		let storageUid = uni.getStorageSync('uid')
		let storageDeviceId =  uni.getStorageSync('ns_device_id')
		
		
		//如果来源分享
		if(option.from){
			
			this.uid = util.randomWord(false,18)
			if(storageUid != null && storageUid != '' && storageUid){
				this.uid = storageUid
			}
			
			this.ns_device_id =  'web_share'
			
			uni.setStorageSync('uid', this.uid);
			uni.setStorageSync('ns_device_id', this.ns_device_id);
			this.add_user(this.uid, this.nickname,this.ns_device_id);
			
		}else{
			
			if(option.uid == '' || option.uid == 'null' || !option.uid ){
				
				// this.msg_modal_app_share = true
				
				this.ns_device_id =  'web'
				this.uid = util.randomWord(false,18)
				
				if(storageUid != null && storageUid != '' && storageUid){
					this.uid = storageUid
				}
				
				uni.setStorageSync('uid', this.uid);
				uni.setStorageSync('ns_device_id', this.ns_device_id);
				this.add_user(this.uid, this.nickname,this.ns_device_id);
				
			}else{
				
				// uni.setStorageSync('uid', option.uid);
				// uni.setStorageSync('ns_device_id', option.ns_device_id);
				this.uid = option.uid;
				this.ns_device_id = option.ns_device_id;
				uni.setStorageSync('uid', this.uid);
				uni.setStorageSync('ns_device_id', this.ns_device_id);
				//用户uid ns_device_id 录入
				this.add_user(this.uid, this.nickname,this.ns_device_id);
				
			}
			
		}

	},
	methods: {
		
		msg_modal_app(){
			this.msg_modal_app_share = false
		},
		msg_modal_close() {
			this.msg_modal_share = false;
		},
		turn_rank() {
			uni.reLaunch({
				url:'/pages/sports/rank?uid=' + this.uid + '&ns_device_id=' + this.ns_device_id
			});
		},
		turn_rule() {
			uni.reLaunch({
				url: '/pages/sports/rule?uid=' + this.uid + '&ns_device_id=' + this.ns_device_id
			});
		},
		add_user(uid,nickname, ns_device_id) {
			let data = {
				uid: uid,
				name:nickname,
				ns_device_id: ns_device_id
			};
			http.post(base.sq + '/api/v1.h5.Questions/addUser', data)
				.then(res => {
					console.log(res);
				})
				.catch(error => {})
				.finally(() => {});
		},
		update_answer_chance_dec(uid, chance) {
			let data = {
				uid: uid,
				chance: chance
			};
			http.post(base.sq + '/api/v1.h5.Questions/updateUserAnswerChance', data)
				.then(res => {
					console.log(res);
				})
				.catch(error => {})
				.finally(() => {});
		},
		turn_question() {
			// post 请求
			
			if(!this.uid){
				this.msg_modal_app_share = true
			}else{
				// get 请求
					http.get(base.sq + '/api/v1.h5.Questions/list', [{}])
						.then(res => {
							// console.log(res)
							// this.questionList = res.data.data.list;
							
							let that = this
							that.$question.setQusetionList(res.data.data.list)
							
							uni.reLaunch({
								url: '/pages/sports/question?uid='+this.uid,
								success(){
								let page = getCurrentPages().pop(); //跳转页面成功之后
								if (!page) return;
								page.onLoad(); //如果页面存在，则重新刷新页面
								}
							});
							// this.total_question = res.data.data.list.length;
							// this.question = res.data.data.list[this.q_key];
							
							// console.log(this.question)
						})
						.catch(error => {})
						.finally(() => {});

			}
		}
	}
};
</script>

<style>
a {
	text-decoration: none;
}

.msg-modal-bg {
	background: url(http://aloss.hotforest.cn/h5-basketball/question-end-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 80%;
	height: 756.47rpx;
	top: 20%;
	left: 10%;
	position: fixed;
	z-index: 100000000;
}

.msg-modal {
	background-color: rgba(0, 0, 0, 0.5);
	background-position: top;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 10000000;
	top: 0;
	left: 0;
}
.modal-msg-t {
	text-align: center;
	height: 50%;
	padding: 20% 10% 0% 10%;
}
.modal-msg-t h3{
	color: white;
	width: 100%;
	margin:  0 auto;
	font-size: 51.76rpx;
	
	
}
.modal-msg-t h5{
	color: #333333;
	font-size: 29.41rpx;
	margin-top: 30px;
}
.modal-msg-d{
	height: 30%;
}
.modal-msg-d-l{
	padding-left: 10%;
	padding-top: 10%;
	width: 50%;
	float: left;
}
.modal-msg-d-l p{
	font-size:25.88rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(51,51,51,1);

}
.modal-msg-d-r {
	width: 30%;
	margin-left: 10%;
	padding-top: 5%;
	float: left;
}
.modal-msg-d-r img{
	width: 138.82rpx;
	height: 100%;
	}
.msg-modal span {
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: white;
}

.index-bg {
	background: url(http://aloss.hotforest.cn/h5-basketball/index-bg.png) no-repeat;
	width: 100%;
	height: 100%;
	background-size: 100% 100%;
	/* position: absolute; */
	/* filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png', sizingMethod='scale'); */
}

.index-top {
	height: 76rpx;
	padding-top: 33rpx;
}

.index-top-l {
	float: left;
	width: 141rpx;
	height: 77rpx;
	background: url('http://aloss.hotforest.cn/h5-basketball/index-t-l.png') no-repeat;
	background-size: 110% 100%;
	background-position: right;
	line-height: 77rpx;
	text-align: left;
	cursor: pointer;
}

.index-top-l span {
	font-size: 26rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(240, 208, 108, 1);
	margin-left: 10rpx;
}

.index-top-r {
	float: right;
	width: 141rpx;
	height: 77rpx;
	line-height: 77rpx;
	background: url('http://aloss.hotforest.cn/h5-basketball/index-t-r.png') no-repeat;
	background-size: 110% 100%;
	background-position: left;
	text-align: right;
	cursor: pointer;
}

.index-top-r span {
	font-size: 26rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(240, 208, 108, 1);
	margin-right: 10rpx;
}

.index-d {
	position: absolute;
	width: 100%;
	height: 115rpx;
	bottom: 121rpx;
}

.index-d-bg {
	width: 471rpx;
	height: 115rpx;
	background: url(http://aloss.hotforest.cn/h5-basketball/index-d.png) no-repeat;
	text-align: center;
	margin: 0 auto;

	line-height: 115rpx;
	background-size: 100% 100%;
}
.index-d-bg span {
	font-size: 44rpx;
	font-family: Lantinghei SC;
	font-weight: bold;
	color: white;
}
</style>
