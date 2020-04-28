<template>
	<view class="uni-flex uni-column result-bg">
		<view class="flex-item flex-item-V res-jb">
			<img src="https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/result-jb.png" alt="">
		</view>
		<view class="flex-item flex-item-V res-1">
			你本次获得
			<span>{{ score }}</span>
			积分
		</view>
		<view class="flex-item flex-item-V  res-2" v-if="max_score !== null">
			历史最高分 {{ max_score }} 分
			<br />
			获得称号
		</view>
		<view class="flex-item flex-item-V  res-2" v-if="max_score == null">
			历史最高分 0 分
			<br />
			获得称号
		</view>
		<view class="flex-item flex-item-V  res-3">{{honor}}</view>
		<view class="flex-item flex-item-V  res-qrcode">
			<img src="https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/result-qrcode.png" alt="">
		</view>

		<view class="flex-item flex-item-V res-4">截图分享给好友</view>
		<view class="flex-item flex-item-V res-5" @click="answerAgain(1)">再来一次</view>

		<!-- 输入信息弹框 -->
		<view class="modal-msg" v-show="isModalMsg === true" @click="closeMsgModal"></view>
		<view class="modal-msg-bg" v-show="isModalMsg === true">
			<h3>信息填写</h3>
			<view class="modal-msg-name">
				<view class="modal-msg-name-label">姓名</view>
				<view class="modal-msg-name-input"><input type="text" v-model="nickname" /></view>
			</view>
			<view class="modal-msg-mobile">
				<view class="modal-msg-mobile-label">手机号</view>

				<view class="modal-msg-mobile-input"><input type="number" v-model="mobile" /></view>
				<view class="modal-msg-mobile-button" @click="sendCode(mobile)">发送验证码</view>
			</view>
			<view class="modal-msg-qrcode">
				<view class="modal-msg-qrcode-label">验证码</view>
				<view class="modal-msg-qrcode-input"><input type="number" v-model="qrcode" /></view>
			</view>
			<view class="modal-msg-button" @click="otpLogin"><span>确认信息</span></view>
		</view>
		<!-- end -->
	</view>
</template>

<script>
import http from '@/utils/http.js';
import base from '@/utils/base.js';
export default {
	name: 'result',
	data() {
		return {
			score: 0,
			max_score: 0,
			uid: '',
			token: '',
			ns_device_id: '',
			isModalMsg: false,
			nickname: '',
			mobile: '',
			qrcode: '',
			country_code: '+86',
			user_type: null,
			honor:'',//积分对应的称号
		};
	},
	onLoad(option) {
		
		this.score = option.s;
		this.user_type = uni.getStorageSync('user_type');
		
		this.uid = uni.getStorageSync('uid');
		this.token = uni.getStorageSync('token');
		this.ns_device_id = uni.getStorageSync('ns_device_id');
		
		//获取用户最高分
		this.getUserMaxScore(this.uid, this.$question.activity_id);

		// 用户积分称号
		if( this.score>= 0 && this.score <= 10){
			this.honor = '菜鸟飞飞'
		}else if(this.score >= 11 && this.score<=30){
			this.honor = '略知一二'
		}else if(this.score >= 31 && this.score <=49){
			this.honor = '入门球迷'
		}else if(this.score >= 50 && this.score <= 60){
			this.honor = '资深老鸟'
		}else if(this.score >= 61 && this.score <= 79){
			this.honor = '小有名气'
		}else if(this.score >= 80 && this.score <= 90){
			this.honor = '意见领袖'
		}else if(this.score >=91 && this.score <= 99){
			this.honor = '无所不知'
		}else if(this.score == 100){
			this.honor = 'NBA英雄'
		}
		console.log(this.user_type)
		// app 用户 第一种情况
		if (this.user_type == 1) {
			
			
			let data = {
				uid: this.uid,
				activity_id: this.$question.activity_id
			}
			
			http.post(base.sq + '/activity/api.users/checkUidStatus', data)
				.then(res => {
					// console.log(res);
					if (res.status == 200) {
						// console.log(res.data.data.count);
						let count = res.data.data.count;
						
						// 检查用户是否在数据库中
						if (count <= 0) {
							
							let req_url = base.bd + '/v3/user/info';
							let headers = {
								ns_device_id: this.ns_device_id,
								uid: this.uid,
								token: this.token
							};
							http.get(req_url, { headers:headers }).then(res => {
								console.log(res);
								// alert(res.data.Status)
								
								if (res.status == 200) {
									if (res.data.Status == 1) {
										let nickname = res.data.Data.nickname;
										let mobile = res.data.Data.phone;
										console.log(res)
										if(mobile == ''){
											this.isModalMsg = true;
											this.user_type = 3 // 3代表来自app 但是未绑定手机号
											uni.removeStorageSync('user_type')
											uni.setStorageSync('user_type',3)
										}else{
											this.addUser(this.uid, nickname,mobile,
											 this.$question.activity_id, 
											 this.score, this.ns_device_id, 1);
										}
										// alert(this.uid+'--'+res.data.Data.nickname+'--'+ res.data.Data.phone)
										
									} else {
										// return alert(res.data.ErrorMsg);
										return uni.showToast({
										    title: res.data.ErrorMsg,
											icon:'none',
											mask:true,
										    duration: 2000
										});
										
									}
								} else {
									return alert('server error');
								}
							})
							
						} else {
							// 更新用户积分
							this.updateUserScore(this.uid, this.$question.activity_id, this.score,2);
						}
					} else {
						return alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});

		
		}
		// 如果外部用户  此时跳出信息填写框  第二种情况
		if (this.user_type == 2) {
			this.answerAgain(2)
		}
	},
	methods: {
		closeMsgModal() {
			this.isModalMsg = false;
		},
		// 发送验证码
		sendCode(mobile) {
			let header = {
				ns_device_id: this.ns_device_id,
				phone: mobile,
				country_code: this.country_code
			};
			let req_url = base.bd + '/SendLoginSms';
			http.get(req_url, { headers: header })
				.then(res => {
					console.log(res);
					if (res.status == 200) {
						if (res.data.Status === 1) {
							// alert('验证码 发送成功');
							uni.showToast({
							    title: '验证码 发送成功',
								mask:true,
							    duration: 2000
							});
						} else {
							// alert('验证码 发送失败');
						
							uni.showToast({
							    title: '验证码发送失败',
								icon:'none',
								mask:true,
							    duration: 2000
							});
						}
					} else {
						alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		// 登陆 用此登陆 外部用户判断status =1   但是会同步注册and存入全民体育用户数据库
		otpLogin() {
			if (this.nickname == '') {
				// return alert('请输入昵称');
				return uni.showToast({
				    title: '请输入昵称',
					icon:'none',
					mask:true,
				    duration: 2000
				});
			}
			if (this.mobile == '') {
				return uni.showToast({
				    title: '请输入昵称',
					icon:'none',
					mask:true,
				    duration: 2000
				});
				// return alert('请输入手机号');
			}

			if (this.qrcode == '') {
			
				return uni.showToast({
				    title: '请输入验证码',
					icon:'none',
					mask:true,
				    duration: 2000
				});
			}
			//检查手机号是否存在 针对外部用户  user_type 2代表外部用户  3代表来自app 但是未绑定手机号
			if (this.mobile != '') {
				let data = {
					mobile: this.mobile,
					activity_id: this.$question.activity_id,
					user_type: this.user_type
				}
				
				http.post(base.sq + '/activity/api.users/checkMobileExits', data)
					.then(res => {
						console.log(res);
						if (res.status == 200) {
							if (res.data.code == 0) {
								//手机已经注册
								let answer_chance = res.data.data.answer_chance;
								if (answer_chance <= 0) {
									return uni.showToast({
									    title: '此手机号无答题机会',
										icon:'none',
										mask:true,
									    duration: 2000
									});
									
								} else {
									uni.removeStorageSync('uid');
									uni.setStorageSync('uid', res.data.data.uid);
									this.uid = res.data.data.uid;
									// 更新用户积分
									this.updateUserScore(this.uid, this.$question.activity_id, this.score,1);
								}
							} else {
								// 手机未注册
								let header = {
									ns_device_id: this.ns_device_id
								};
								let data = {
									phone: this.mobile,
									country_code: this.country_code,
									code: this.qrcode,
									device_id: 'website',
									platform: 'web'
								};
								let req_url = base.bd+'/OTPLogin'
								
								http.post(req_url, data, { headers: header })
									.then(res => {
										// console.log(res);
										if (res.status == 200) {
											if(res.data.Status == 1){
											// 添加用户 外部用户 user_type 2
											let data = {
												uid: this.uid,
												name: this.nickname,
												mobile: this.mobile,
												activity_id: this.$question.activity_id,
												score: this.score,
												ns_device_id: this.ns_device_id,
												user_type: this.user_type
											};
											http.post(base.sq + '/activity/api.users/add', data)
												.then(res => {
													console.log(res);
													if (res.status == 200) {
														this.isModalMsg = false
														// location.reload()
													} else {
														return alert('server error');
													}
												})
												.catch(error => {})
												.finally(() => {});
											}else{
											
												return uni.showToast({
												    title: '验证码错误',
													icon:'none',
													mask:true,
												    duration: 2000
												});
											}
										} else {
											return alert('server error');
										}
									})
									.catch(error => {})
									.finally(() => {});
							}
						} else {
							return alert('server error');
						}
					})
					.catch(error => {})
					.finally(() => {});
			}
		},

		answerAgain(answer_type) {
		
			if(this.user_type == 2 || this.user_type == 3){
				let data = {
					uid: this.uid,
					activity_id:this.$question.activity_id
				}
				http.post(base.sq + '/activity/api.users/checkUidStatus', data)
					.then(res => {
						// console.log(res);
						if (res.status == 200) {
							// console.log(res.data.data.count);
							let count = res.data.data.count;
							if (count <= 0) {
								this.isModalMsg = true;
							} else {
								// 更新用户积分
								this.updateUserScore(this.uid, this.$question.activity_id, this.score,answer_type);
							}
						} else {
							return alert('server error');
						}
					})
					.catch(error => {})
					.finally(() => {});
			}
			
			if(this.user_type == 1){
				uni.reLaunch({
					url: '/?uid='+this.uid
				});
			}
			
		},
		addUser(uid, name, mobile, activity_id, score, ns_device_id, user_type) {
			let data = {
				uid: uid,
				name: name,
				mobile: mobile,
				activity_id: activity_id,
				score: score,
				ns_device_id: ns_device_id,
				user_type: user_type
			};

			http.post(base.sq + '/activity/api.Users/add', data)
				.then(res => {
					// console.log(res);
					if (res.status == 200) {
						// alert(res.data.data)
						// location.reload()
					} else {
						return alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		updateUserScore(uid, activity_id, score,answer_type) {
			let data = {
				uid: uid,
				activity_id: activity_id,
				score: score
			};
			http.post(base.sq + '/activity/api.users/updateScore', data)
				.then(res => {
					console.log(res);
					if (res.status == 200) {
						if(answer_type == 1){
							uni.reLaunch({
								url: '/?uid='+this.uid
							});
						}
						
					} else {
						return alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		getUserMaxScore(uid, activity_id) {
			let data = {
				uid: uid,
				activity_id: activity_id
			};
			http.post(base.sq + '/activity/api.users/getUserMaxScore', data)
				.then(res => {
					console.log(res);
					if (res.status == 200) {
						this.max_score = res.data.data.maxScore;
						console.log(this.max_score)
					} else {
						return alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});
		}
	}
};
</script>

<style>
.result-bg {
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/result-bg.png) no-repeat center;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
}
.res-jb{
	width: 270rpx;
	height: 286rpx;
	margin: 0 auto;
	margin-top: 80rpx;
	
}
.res-jb img{
	width: 100%;
	height: 100%;
}
.res-1 {
	margin-top: 17rpx;
	text-align: center;
	font-size: 29rpx;
	font-family: Lantinghei SC;
	font-weight: bold;
	color: rgba(51, 51, 51, 1);
	line-height: 36rpx;
}
.res-1 span {
	color: #ee4d67;
	font-size: 36rpx;
}
.res-2 {
	margin-top: 40rpx;
	text-align: center;
	font-size: 29rpx;
	font-family: Lantinghei SC;
	font-weight: bold;
	color: rgba(51, 51, 51, 1);
}
.res-qrcode{
	width: 192rpx;
	height: 189rpx;
	margin: 0 auto;
	margin-top: 62rpx;
}
.res-qrcode img{
	width: 100%;
	height: 100%;
}
.res-3 {
	width: 417rpx;
	height: 82rpx;
	margin: 0 auto;
	margin-top: 80rpx;
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/res-button.png) no-repeat center;
	background-size: 100% 100%;

	text-align: center;
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: bold;
	color: rgba(238, 77, 103, 1);
	line-height: 82rpx;
}

.res-4 {
	margin-top: 22rpx;
	text-align: center;
	font-size: 18rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(102, 102, 102, 1);
}

.res-5 {
	width: 330rpx;
	height: 100rpx;
	margin: 0 auto;
	margin-top: 40rpx;

	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/result-again.png) no-repeat center;
	background-size: 100% 100%;
	text-align: center;
	font-size: 44rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	text-shadow: 0px 3px 8px rgba(223, 28, 88, 1);
}

.modal-msg {
	background-color: rgba(0, 0, 0, 0.5);
	background-position: top;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
}

.modal-msg-bg {
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/msg-modal-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 516rpx;
	height: 546rpx;

	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;

	position: fixed;
	z-index: 120;
}

.modal-msg-bg h3 {
	font-size: 36rpx;
	font-family: wawaw5;
	font-weight: bold;
	color: rgba(41, 41, 41, 1);
	text-align: center;
}

.modal-msg-name {
	width: 90%;
	height: 80rpx;
	margin: 0 auto;
	margin-top: 20rpx;
}
.modal-msg-name-label {
	float: left;
	width: 19%;
	text-align: right;
	font-family: wawaw5;
}
.modal-msg-name-input {
	float: left;
	width: 79%;
	border-bottom: 1px solid #000000;
}

.modal-msg-mobile {
	width: 90%;
	height: 80rpx;
	margin: 0 auto;
}
.modal-msg-mobile-label {
	float: left;
	width: 19%;
	text-align: right;
	font-family: wawaw5;
}
.modal-msg-mobile-input {
	float: left;
	width: 79%;
	border-bottom: 1px solid #000000;
}

.modal-msg-mobile-button {
	position: absolute;
	right: 18rpx;

	font-size: 24rpx;
	font-family: wawaw5;
	font-weight: 400;
	color: rgba(61, 117, 210, 1);
}

.modal-msg-qrcode {
	width: 90%;
	height: 80rpx;
	margin: 0 auto;
}

.modal-msg-qrcode-label {
	float: left;
	width: 19%;
	font-family: wawaw5;
	text-align: right;
}
.modal-msg-qrcode-input {
	float: left;
	width: 79%;
	border-bottom: 1px solid #000000;
}

.modal-msg-button {
	width: 330rpx;
	height: 100rpx;
	margin: 0 auto;
	margin-top: 40rpx;

	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/result-again.png) no-repeat center;
	background-size: 100% 100%;
	text-align: center;
	font-size: 44rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	text-shadow: 0px 3px 8px rgba(223, 28, 88, 1);
}

@font-face {
	font-family: 'wawaw5';
	src: url(https://aloss.hotforest.cn/basketball-v2/huakangwawaW5.ttf);
}
</style>
