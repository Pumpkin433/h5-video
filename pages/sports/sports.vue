<template>
	<view class="uni-flex uni-column index-bg">
		<view class="flex-item flex-item-V index-top">
			<view class="index-top-l" @tap="turn_rule"></view>
			<view class="index-top-r" @tap="turn_rank"></view>
		</view>

		<view class="flex-item flex-item-V index-d">
			<div v-if="contactExists == true">
				<div v-show="login_app_status == false" class="index-d-bg" @click="loginApp"><span>我要答题</span></div>
				<div v-show="login_app_status == true" class="index-d-bg" @click="turnQuestion(1)"><span>我要答题</span></div>
			</div>

			<div v-if="contactExists == false" class="index-d-bg" @click="turnQuestion(2)"><span>我要答题</span></div>
		</view>

		<!-- 信息提示 弹框 -->
		<view class="msg-modal" v-show="msg_modal_share === true" @click="msg_modal_close"></view>
		<view class="msg-modal-bg" v-show="msg_modal_share === true">
			<view class="modal-msg-t">
				<view class="modal-msg-t-1">骚年 !</view>
				<view class="modal-msg-t-2">
					您今天答题的机会
					<br />
					已经用完啦!
				</view>
				<view class="modal-msg-t-3">
					下载全民体育app
					<br />
					分享活动 答题机会+1！
				</view>
				<view class="modal-msg-t-4"><img src="https://aloss.hotforest.cn/basketball-v2/modal-end-qrcode.png" alt="" /></view>
			</view>
		</view>
		<!-- 信息提示弹框结束 -->
	</view>
</template>

<script>
import util from '@/common/util.js';
import http from '@/utils/http.js';
import base from '@/utils/base.js';
import qs from 'qs';

export default {
	name: 'sports',
	data() {
		return {
			msg_modal_share: false,
			msg_modal_app_share: false,
			uid: null,
			token: null,
			ns_device_id: null,

			answer_chance: null,
			nickname: null,

			login_app_status: true, //在app中是否登录
			contactExists: false,
			isModalMsg: false,
			name: '',
			user_type: 1, //用户类型  1 app  2 外部网页

			hasShareDone: false // 是否分享了
		};
	},
	onLoad(option) {
		let uid = uni.getStorageSync('uid');
		let ns_device_id = uni.getStorageSync('ns_device_id');

		//通过判断contact是否被定义来区分 活动是通过app打开的 还是通过web打开的
		if (typeof contact === 'undefined') {
			// 表示在外部网页打开

			this.contactExists = false;
			this.user_type = 2; // 2代表web网页用户
			uni.setStorageSync('user_type', 2);

			if (!uid || uid == null || uid == '' || uid === undefined) {
				this.uid = util.randomWord(false, 18);
				uni.setStorageSync('uid', this.uid);
			} else {
				this.uid = uid;
			}

			if (!ns_device_id || ns_device_id == null || ns_device_id == '' || ns_device_id === undefined) {
				this.ns_device_id = 'web';
				uni.setStorageSync('ns_device_id', this.ns_device_id);
			} else {
				this.ns_device_id = ns_device_id;
			}
		} else {
			//通过app打开
			this.contactExists = true;
			let hasUserType = uni.getStorageSync('user_type');
			console.log(hasUserType+'--hasUserType');
			if (hasUserType) {
				uni.setStorageSync('user_type', hasUserType);
			} else {
				this.user_type = 1; //1  app 用户
				uni.setStorageSync('user_type', 1);
			}

			//  表示在app中打开 登陆完成之后的回调
			contact.onLoginDone = function(uid, token) {
				uni.removeStorageSync('uid');
				uni.removeStorageSync('token');
				uni.setStorageSync('uid', uid);
				uni.setStorageSync('token', token);
				uni.setStorageSync('login_app_status', true);

				uni.reLaunch({
					url: '/pages/sports/mid?ns_device_id='+uni.getStorageSync('ns_device_id')
				});
			};

			console.log(uni.getStorageSync('login_app_status')+'--storageLogin_app_status');
			if (option.uid === 'null' || option.uid === '' || option.uid === undefined || option.uid === null) {
				uni.setStorageSync('ns_device_id', option.ns_device_id);

				let hasLogin = uni.getStorageSync('login_app_status');

				if (hasLogin == true) {
					this.login_app_status = true;
				} else {
					this.login_app_status = false;
				}
			} else {
				uni.removeStorageSync('uid');
				uni.removeStorageSync('token');
				uni.removeStorageSync('ns_device_id');
				uni.setStorageSync('uid', option.uid);
				uni.setStorageSync('token', option.token);
				uni.setStorageSync('ns_device_id', option.ns_device_id);
				this.login_app_status = true;
				console.log('3a--'+this.login_app_status)
			}
		}
		
		this.uid = uni.getStorageSync('uid');
		this.token = uni.getStorageSync('token');
		this.ns_device_id = uni.getStorageSync('ns_device_id');
		console.log(this.uid);
		console.log(this.token);
		console.log(this.ns_device_id+'--ns_device_id');
		console.log(this.login_app_status+'--login_app_status')
		
	},

	methods: {
		loginApp() {
			contact.requireLogin();
		},
		turnQuestion(from) {
			// 获取用户的答题机会
			let data = {
				uid: this.uid,
				activity_id: this.$question.activity_id,
				from: from
			};

			http.post(base.sq + '/activity/api.usersAnswerChance/getAnswerChance', data)
				.then(res => {
					console.log(res);
					if (res.status == 200) {
						let answer_chance = res.data.data.answer_chance;
						// 答题机会用完
						if (answer_chance <= 0) {
							this.msg_modal_share = true;
						} else {
							this.getQuestionList(this.$question.activity_id);
						}
					} else {
						return alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		getQuestionList(activity_id) {
			let data = {
				activity_id: activity_id
			};

			http.post(base.sq + '/activity/api.questions/list', data)
				.then(res => {
					// console.log(res);
					if (res.status == 200) {
						this.$question.setQusetionList(res.data.data);
						this.updateAnswerChance(this.uid, activity_id, 2);
					} else {
						return alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		updateAnswerChance(uid, activity_id, type) {
			let data = {
				uid: uid,
				activity_id: activity_id,
				type: type
			};
			http.post(base.sq + '/activity/api.UsersAnswerChance/update', data)
				.then(res => {
					console.log(res);
					if (res.status == 200) {
						uni.redirectTo({
							url: '/pages/sports/question',
							success() {}
						});
						// alert(res.data.data.updateRow)
					} else {
						return alert('server error');
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
				url: '/pages/sports/info?click=1',
				success() {}
			});
		},
		turn_rule() {
			uni.reLaunch({
				url: '/pages/sports/info?click=2',
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
	background: url(https://aloss.hotforest.cn/basketball-v2/modal-end-bg.png) no-repeat;
	background-size: 100% 100%;
	/* width: 80%; */
	width: 516rpx;
	height: 653rpx;
	/* height: 756.47rpx; */
	position: fixed;
	z-index: 100000000;
	margin: auto;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
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
	height: 100%;
	padding: 5% 5% 0% 5%;
}

.modal-msg-t-1 {
	font-size: 48rpx;
	font-family: wawaw5;
	font-weight: bold;
	color: rgba(41, 41, 41, 1);
}
.modal-msg-t-2 {
	font-size: 44rpx;
	font-family: wawaw5;
	font-weight: bold;
	color: rgba(229, 63, 42, 1);
	-webkit-text-stroke: 1rpx rgba(0, 0, 0, 0.5);
}

.modal-msg-t-3 {
	width: 420rpx;
	height: 142rpx;
	margin: 0 auto;
	background: url(https://aloss.hotforest.cn/basketball-v2/modal-end-line.png) no-repeat center;
	background-size: 100% 100%;
	font-size: 34rpx;
	font-family: wawaw5;
	font-weight: bold;
	color: rgba(51, 51, 51, 1);
}
.modal-msg-t-4 {
	margin-top: 22rpx;
}
.modal-msg-t-4 img {
	width: 192rpx;
	height: 189rpx;
}
.index-bg {
	background: url(https://aloss.hotforest.cn/basketball-v2/index-bg.png) no-repeat;
	width: 100%;
	height: 100%;
	background-size: 100% 100%;
	/* background-size: cover; */
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
	background: url('https://aloss.hotforest.cn/basketball-v2/index-top-l.png') no-repeat;
	background-size: 100% 100%;
	background-position: left;
	margin-left: 20rpx;
	cursor: pointer;
}

.index-top-r {
	float: right;
	width: 193rpx;
	height: 108rpx;
	background: url('https://aloss.hotforest.cn/basketball-v2/index-top-r.png') no-repeat;
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
	background: url(https://aloss.hotforest.cn/basketball-v2/index-button.png) no-repeat;
	text-align: center;
	margin: 0 auto;
	line-height: 156rpx;
	background-size: 100% 100%;
}
.index-d-bg span {
	font-size: 74rpx;
	font-family: wawaw5;
	font-weight: bold;
	color: #2a64d0;
	line-height: 62rpx;
	-webkit-text-stroke: 1rpx rgba(16, 16, 16, 0.8);
	text-stroke: 1rpx rgba(16, 16, 16, 0.8);
}

@font-face {
	font-family: 'wawaw5';
	src: url(https://aloss.hotforest.cn/basketball-v2/huakangwawaW5.ttf);
}
</style>
