<template>
	<view class="index-bg">
		<view class="index-top">
			<view class="index-top-l" @tap="turn_rule"><span>游戏规则</span></view>
			<view class="index-top-r" @tap="turn_rank"><span>排行榜</span></view>
		</view>

		<view class="index-d">
			<div class="index-d-bg" @tap="turn_question"><span>开始挑战</span></div>
		</view>

		<view class="msg-modal-bg" v-show="msg_modal_share === true" @click="msg_modal_close"></view>
		<view class="msg-modal" v-show="msg_modal_share === true">
			<span>
				您今天答题的机会已经用完
				<br />
				分享可以免费获取一次答题机会
			</span>
		</view>
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
			uid: null,
			ns_device_id: null,
			now_time: new Date().getTime(),
			answer_chance: null
		};
	},
	onNavigationBarButtonTap(event) {
		// console.log(event)
		if (event.type === 'share') {
			this.update_answer_chance(this.uid, 1);
		}
	},
	onLoad(option) {
		// console.log(option)
		let uid = util.randomWord(false,18)
		this.uid = uid
		this.ns_device_id = 'test'
		uni.setStorageSync('uid', this.uid);
		
		uni.setStorageSync('ns_device_id', this.ns_device_id);
		
		//用户uid ns_device_id 录入
		this.add_user(this.uid, this.ns_device_id);

		// if (!option.uid && !option.ns_device_id) {
		// 	return alert('打开全民体育,参与问答活动');
		// } else {
		// 	uni.setStorageSync('uid', option.uid);
		// 	uni.setStorageSync('ns_device_id', option.ns_device_id);
		// 	this.uid = option.uid;
		// 	this.ns_device_id = option.ns_device_id;
		// 	//用户uid ns_device_id 录入
		// 	this.add_user(this.uid, this.ns_device_id);
		// }
	},
	methods: {
		msg_modal_close() {
			this.msg_modal_share = false;
		},
		turn_rank() {
			uni.navigateTo({
				url: '/pages/sports/rank'
			});
		},
		turn_rule() {
			uni.navigateTo({
				url: '/pages/sports/rule'
			});
		},
		add_user(uid, ns_device_id) {
			let data = {
				uid: uid,
				ns_device_id: ns_device_id
			};
			http.post(base.sq + '/api/v1.h5.Questions/addUser', data)
				.then(res => {
					console.log(res);
				})
				.catch(error => {})
				.finally(() => {});
		},
		update_answer_chance(uid, chance) {
			let data = {
				uid: uid,
				chance: chance
			};
			http.post(base.sq + '/api/v1.h5.Questions/updateUserAnswerChance', data)
				.then(res => {
					console.log(res);
					let data = {
						uid: uid
					};
					http.post(base.sq + '/api/v1.h5.Questions/questionShare', data)
						.then(res => {
							console.log(res);
							let insert = res.data.data.insert;

							if (insert > 0) {
								console.log(insert);
							} else {
								alert('分享失败');
							}
						})
						.catch(error => {})
						.finally(() => {});
						
						
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
			console.log(this.now_time);
			// post 请求

			let data = {
				uid: this.uid,
				timestamp: this.now_time
			};
			http.post(base.sq + '/api/v1.h5.Questions/getUserAnswerChance', data)
				.then(res => {
					console.log(res);
					let answer_chance = res.data.data.chance;
					if (answer_chance == 0) {
						this.msg_modal_share = true;
					} else {
						this.update_answer_chance_dec(this.uid, -1);
						uni.navigateTo({
							url: '/pages/sports/question'
						});
					}
				})
				.catch(error => {})
				.finally(() => {});
		}
	}
};
</script>

<style>
a {
	text-decoration: none;
}

.msg-modal-bg {
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

.msg-modal {
	background-color: #000000;
	width: 60%;
	/* height: 20%; */

	top: 40%;
	left: 20%;
	position: fixed;
	z-index: 100000000;
	text-align: center;
	border-radius: 20rpx;
}
.msg-modal span {
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: white;
}

.index-bg {
	background: url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/index-bg.png) no-repeat;
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
	width: 131rpx;
	height: 67rpx;
	background: url('http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/index-t-l.png') no-repeat;
	background-size: 100% 100%;
	line-height: 67rpx;
	text-align: left;
	cursor: pointer;
}

.index-top-l span {
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(240, 208, 108, 1);
	margin-left: 10rpx;
}

.index-top-r {
	float: right;
	width: 125rpx;
	height: 67rpx;
	line-height: 67rpx;
	background: url('http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/index-t-r.png') no-repeat;
	background-size: 100% 100%;
	text-align: right;
	cursor: pointer;
}

.index-top-r span {
	font-size: 24rpx;
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
	background: url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/index-d.png) no-repeat;
	text-align: center;
	margin: 0 auto;

	line-height: 115rpx;
	background-size: 100% 100%;
}
.index-d-bg span {
	font-size: 40rpx;
	font-family: Lantinghei SC;
	font-weight: bold;
	color: #6a3b0e;
	text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.59);
	-webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
	text-stroke: 1px rgba(255, 255, 255, 0.2);
}
</style>
