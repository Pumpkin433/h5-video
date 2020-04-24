<template>
	<view class="uni-flex uni-column index-bg">
		<view class="flex-item flex-item-V index-top">
			<view class="index-top-l" @tap="turn_rule"></view>
			<view class="index-top-r" @tap="turn_rank"></view>
		</view>

		<view class="flex-item flex-item-V index-d">
			<div v-show="open_from_app === true && login_app_status === false"  class="index-d-bg" @tap="requireLogin"><span>开始挑战</span></div>
			<div v-show="open_from_app === true && login_app_status === true "  class="index-d-bg" @tap="turnQuestion(1)"><span>开始挑战</span></div>
			<div v-show="open_from_app === false" class="index-d-bg" @tap="turnQuestion(2)"><span>我要答题</span></div>
		</view>

		<!-- 信息提示 弹框 -->
		<view class="msg-modal" v-show="msg_modal_share === true" @click="msg_modal_close"></view>
		<view class="msg-modal-bg" v-show="msg_modal_share === true">
			<view class="modal-msg-t">
				<h3>您今天答题的机会 <br>已经用完了</h3>
			</view>
			<view class="modal-msg-d">
				<view class="modal-msg-d-l">
					<p>
						长按保存二维码
						<br />
						下载全民体育APP 参与活动
					</p>
				</view>
				<view class="modal-msg-d-r"><img src="http://aloss.hotforest.cn/h5-basketball/m-share-qrcode.png" alt="" /></view>
			</view>
		</view>
		<!-- 信息提示弹框结束 -->

		<!-- 打开app 弹框 -->
		<view class="msg-modal" v-show="msg_modal_app_share === true" @click="msg_modal_app"></view>
		<view class="msg-modal-bg" v-show="msg_modal_app_share === true">
			<view class="modal-msg-t">
				<h3>
					打开全民体育App
					<br />
					参与答题
				</h3>
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
				<view class="modal-msg-d-r"><img src="http://aloss.hotforest.cn/h5-basketball/m-share-qrcode.png" alt="" /></view>
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
			msg_modal_app_share: false,
			uid: null,
			ns_device_id: null,
			now_time: new Date().getTime(),
			answer_chance: null,
			nickname: null,
			login_app_status: true, //在app中是否登录
			open_from_app:false,
			
		};
	},
	onLoad(option) {
		let uid = uni.getStorageSync('uid');
		let ns_device_id = uni.getStorageSync('ns_device_id');
		
		
		//通过判断contact是否被定义来区分 活动是通过app打开的 还是通过web打开的
		if (typeof contact === 'undefined') {
			// 表示在外部网页打开

			if (!uid || uid == null || uid == '') {
				this.uid = util.randomWord(false, 18);
				uni.setStorageSync('uid', this.uid);
			} else {
				this.uid = uid;
			}

			if (!ns_device_id || ns_device_id == null || ns_device_id == '') {
				this.ns_device_id = 'web';
				uni.setStorageSync('ns_device_id', this.ns_device_id);
			} else {
				this.ns_device_id = ns_device_id;
			}
	
		} else {
			alert('sldklsalf')
			if(typeof option.uid === 'undefined' ){
				this.login_app_status = false
			}
			
			//  表示在app中打开
			contact.onLoginDone = function(uid, token) {
				this.login_app_status = true;
				uni.setStorageSync('uid', uid);
			};
		}

		

	},
	methods: {
		
		requireLogin(){
			contact.requireLogin();
		},
		turnQuestion(from){
			// 获取用户的答题机会
			let data = {
				uid: this.uid,
				activity_id: this.$question.activity_id,
				from: from
			};
			
			http.post(base.sq + '/activity/api.usersAnswerChance/getAnswerChance', data)
				.then(res => {
					console.log(res);
					if(res.status == 200){
						let answer_chance = res.data.data.answer_chance
						// 答题机会用完
						if(answer_chance <= 0 ){
							this.msg_modal_share = true
						
						}else{
							this.getQuestionList(this.$question.activity_id)
						}
						
					}else{
						return alert('server error')
					}
				})
				.catch(error => {})
				.finally(() => {});
			
		},
		getQuestionList(activity_id){
			let data = {
				'activity_id':activity_id
			}
			
			http.post(base.sq + '/activity/api.questions/list', data)
				.then(res => {
					// console.log(res);
					if(res.status == 200){
						this.$question.setQusetionList(res.data.data)
						this.updateAnswerChance(this.uid,activity_id,2)
						uni.redirectTo({
							url: '/pages/sports/question',
							success() {}
						});
					}else{
						return alert('server error')
					}
				})
				.catch(error => {})
				.finally(() => {});
			
		},
		updateAnswerChance(uid,activity_id,type){
			let data = {
				'uid':uid,
				'activity_id':activity_id,
				'type':type
			}
			http.post(base.sq + '/activity/api.UsersAnswerChance/update', data)
				.then(res => {
					console.log(res);
					if(res.status == 200){
						
					}else{
						return alert('server error')
					}
				})
				.catch(error => {})
				.finally(() => {});
			
		},
		msg_modal_app() {
			this.msg_modal_app_share = false;
		},
		msg_modal_close() {
			this.msg_modal_share = false;
		},
		turn_rank() {
			uni.reLaunch({
				url: '/pages/sports/rank',
				success() {}
			});
		},
		turn_rule() {
			uni.reLaunch({
				url: '/pages/sports/rule',
				success() {}
			});
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
.modal-msg-t h3 {
	color: white;
	width: 100%;
	margin: 0 auto;
	font-size: 51.76rpx;
}
.modal-msg-t h5 {
	color: #333333;
	font-size: 29.41rpx;
	margin-top: 30px;
}
.modal-msg-d {
	height: 30%;
}
.modal-msg-d-l {
	padding-left: 10%;
	padding-top: 10%;
	width: 50%;
	float: left;
}
.modal-msg-d-l p {
	font-size: 25.88rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}
.modal-msg-d-r {
	width: 30%;
	margin-left: 10%;
	padding-top: 5%;
	float: left;
}
.modal-msg-d-r img {
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
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/index-bg.png) no-repeat;
	width: 100%;
	height: 100%;
	/* background-size: 100% 100%; */
	background-size: cover;
	/* position: absolute; */
	/* filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png', sizingMethod='scale'); */
}

.index-top {
	height: 76rpx;
	padding-top: 33rpx;
}

.index-top-l {
	float: left;
	width: 214rpx;
	height: 104rpx;
	background: url('https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/index-top-l.png') no-repeat;
	background-size: 100% 100%;
	background-position: left;
	margin-left: 20rpx;
	cursor: pointer;
}


.index-top-r {
	float: right;
	width: 193rpx;
	height: 108rpx;
	background: url('https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/index-top-r.png') no-repeat;
	background-size: 100% 100%;
	background-position: right;
	cursor: pointer;
	margin-right: 20rpx;
}

.index-d {
	position: absolute;
	width: 100%;
	height: 156rpx;
	bottom: 186rpx;
}

.index-d-bg {
	width: 490rpx;
	height: 156rpx;
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/index-button.png) no-repeat;
	text-align: center;
	margin: 0 auto;
	line-height: 156rpx;
	background-size: 100% 100%;
}
.index-d-bg span {
	font-size:74rpx;
	font-family:Wawati SC;
	font-weight:bold;
	color:rgba(42,100,208,1);
	line-height:62rpx;
	-webkit-text-stroke:8rpx rgba(16, 16, 16, 0.7);
	text-stroke:8rpx rgba(16, 16, 16, 0.7);
}
</style>
