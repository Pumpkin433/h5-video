<template>
	<view class="uni-flex uni-column index-bg">
		<view class="flex-item flex-item-V index-banner">
			<view class="flex-item flex-item-V index-info">
				<view class="uni-flex uni-row index-info-item">
					<view class="flex-item index-info-1">
						每日阅读
						<span>3</span>
						篇文章 30积分
					</view>
					<view class="flex-item index-info-2">{{newsReadNum}}/3</view>
					<view class="flex-item index-info-3" 
					v-if="uid != '' && uid !== null">
						<button
						 v-if="newsReadStatus === 0"
						@click="getSignScore()" >做任务</button>
						<button
						 v-if="newsReadStatus === 1"
						class="index-info-3-button-ok" 
						@click="getSignScore()" >领取积分</button>
						
						<button
						 v-if="newsReadStatus == 2"
						class="index-info-3-button-score">已领取</button>
						
					</view>
					<view class="flex-item index-info-3" v-if="uid == '' || uid == null">
						<button @click="loginApp()">领取积分</button>
					</view>
				</view>
				<view class="uni-flex uni-row index-info-item">
					<view class="flex-item index-info-1">
						每日阅读
						<span>3</span>
						篇讨论帖 30积分
					</view>
					<view class="flex-item index-info-2">{{forumReadNum}}/3</view>
					<view class="flex-item index-info-3"
					v-if="uid != '' && uid !== null">
						<button
						 v-if="forumReadStatus === 0"
						@click="getSignScore()" >做任务</button>
						<button
						 v-if="forumReadStatus === 1"
						class="index-info-3-button-ok" 
						@click="getSignScore()" >领取积分</button>
						
						<button
						 v-if="forumReadStatus == 2"
						class="index-info-3-button-score">已领取</button>
						
					</view>
					<view class="flex-item index-info-3" v-if="uid == '' || uid == null">
						<button @click="loginApp()">领取积分</button>
					</view>
				</view>

				<view class="uni-flex uni-row index-info-item">
					<view class="flex-item index-info-1">
						在任意文章/讨论帖留言
						<span>3</span>
						次 30积分
					</view>
					<view class="flex-item index-info-2">{{replyNum}}/3</view>
					<view class="flex-item index-info-3"
					v-if="uid != '' && uid !== null">
						<button
						 v-if="replyStatus === 0"
						@click="getSignScore()" >做任务</button>
						<button
						 v-if="replyStatus === 1"
						class="index-info-3-button-ok" 
						@click="getSignScore()" >领取积分</button>
						
						<button
						 v-if="replyStatus == 2"
						class="index-info-3-button-score">已领取</button>
						
					</view>
					<view class="flex-item index-info-3" v-if="uid == '' || uid == null">
						<button @click="loginApp()">领取积分</button>
					</view>
				</view>

				<view class="uni-flex uni-row index-info-item">
					<view class="flex-item index-info-1">
						分享
						<span>1</span>
						篇文章/讨论帖 10积分
					</view>
					<view class="flex-item index-info-2">{{shareNum}}/1</view>
					<view class="flex-item index-info-3"
					v-if="uid != '' && uid !== null">
						<button
						 v-if="shareStatus === 0"
						@click="getSignScore()" >做任务</button>
						<button
						 v-if="shareStatus === 1"
						class="index-info-3-button-ok" 
						@click="getSignScore()" >领取积分</button>
						
						<button
						 v-if="shareStatus == 2"
						class="index-info-3-button-score">已领取</button>
						
					</view>
					<view class="flex-item index-info-3" v-if="uid == '' || uid == null">
						<button @click="loginApp()">领取积分</button>
					</view>
				</view>
			</view>
		</view>

		<view class="uni-flex uni-row index-my-score">
			<view class="flex-item index-my-score-l">我的积分：999,999,999分</view>
			<view class="flex-item index-my-score-r" @tap="turnRecord">兑换记录</view>
		</view>

		<view class=" prize-list">
			<view class="score-store-txt">积分商城</view>

			<view class="score-store-item" v-for="(prize, k) in prizeList" :key="k">
				<view class="score-store-item-1"><img :src="prize.image" :alt="prize.name" /></view>
				<view class="score-store-item-2">{{ prize.name }}</view>
				<view class="score-store-item-3">
					<view class="score-store-item-3-l">{{ prize.exchange_score }}积分</view>
					<view class="score-store-item-3-r" @click="exchange()">我要兑换</view>
				</view>
			</view>
		</view>

		<view class="uni-flex uni-column index-profile-bg">
			<view class="flex-item flex-item-V index-profile-text">活动规则</view>
			<view class="flex-item flex-item-V index-profile-1">1，活动时间：5月6日~9月6日</view>
			<view class="flex-item flex-item-V index-profile-2">2，用户可以通过完成任务获取每日积分，积分可以在积分商城内兑换商品，</view>
			<view class="flex-item flex-item-V index-profile-3">3，需要兑换奖品的用户，请添加下方客服微信，奖品将由客服为您发放； 奖品兑换时间：每月1号~10号</view>
			<view class="flex-item flex-item-V index-profile-4">
				<view><img src="https://aloss.hotforest.cn/sign/wxcode.png" alt="wxcode" /></view>
				<view class="index-profile-4-text">
					微信号:NationalSports
					<span @click="copy">复制号码</span>
				</view>
			</view>
		</view>

		<!-- 兑换弹出框 -->
		<view class="uni-flex uni-column exchange-modal" v-show="exchangeModal" @click="closeExchangeModal"></view>
		<view class="uni-flex uni-column exchange-modal-bg" v-show="exchangeModal">
			<view class="flex-item flex-item-V exchange-modal-1">兑换成功</view>
			<view class="flex-item flex-item-V exchange-modal-2">你已经成功兑换</view>
			<view class="flex-item flex-item-V exchange-modal-3">苹果 iphone 11</view>
			<view class="flex-item flex-item-V exchange-modal-4">你的兑换码： xjiejghek301</view>
			<view class="flex-item flex-item-V exchange-modal-5"><button>复制兑换码</button></view>
		</view>

		<!-- open in our app modal dialog -->
		<view class="uni-flex uni-column app-msg-modal" v-show="appMsgModal" @click="closeAppMsgModal"></view>
		<view class="uni-flex uni-column app-msg-modal-bg" v-show="appMsgModal">
			<view class="flex-item flex-item-V app-msg-modal-1">签到失败</view>
			<view class="flex-item flex-item-V app-msg-modal-2">请下载全民体育APP，参与活动</view>
			<view class="flex-item flex-item-V app-msg-modal-3" @click="downloadApp()">下载全民体育</view>
		</view>
	</view>
</template>

<script>
// 引入文件
import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js';
import { startTime } from '@/common/util.js';
import http from '@/utils/http.js';
import base from '@/utils/base.js';

export default {
	name: 'index',
	data() {
		return {
			exchangeModal: false,
			appMsgModal: false,
			start_at: 0,
			end_at: 0,
			uid: null,
			token: null,
			ns_device_id: null,
			activity_id: 3,
			prizeList: [],
			newsReadStatus: 0, // 每日阅读文章 1
			newsReadNum:0,
			forumReadStatus:0, // 每日阅读讨论帖 2
			forumReadNum:0,
			replyStatus:0, // 留言3次状态 3
			replyNum:0,
			shareStatus:0, // 分享一次状态 4
			shareNum:0,
			
		};
	},
	onLoad(option) {
		// let nowTimestamp = Date.parse(new Date()) / 1000
		let nowTimestamp = 1598659832;
		this.start_at = startTime(nowTimestamp);
		this.end_at = nowTimestamp;

		console.log(nowTimestamp);
		console.log(startTime(nowTimestamp));

		// open this url outof app env
		if (typeof contact === 'undefined') {
			this.appMsgModal = true;
			// this.appMsgModal = false;
		} else {
			if (option.uid !== '' && option.uid !== null && option.uid !== undefined) {
				uni.setStorageSync('uid', option.uid);
				uni.setStorageSync('token', option.token);
				uni.setStorageSync('ns_device_id', option.ns_device_id);
			}
			// open this url in app env
			contact.onLoginDone = function(uid, token) {
				uni.removeStorageSync('uid');
				uni.removeStorageSync('token');
				uni.setStorageSync('uid', uid);
				uni.setStorageSync('token', token);

				let ns_device_id = uni.getStorageSync('ns_device_id');
				uni.reLaunch({
					url: '/pages/index/mid?uid=' + uid + '&token=' + token + '&ns_device_id' + ns_device_id
				});
			};
		}

		// this.uid = uni.getStorageSync('uid');
		this.uid = 468974;
		this.token = uni.getStorageSync('token');
		this.ns_device_id = uni.getStorageSync('ns_device_id');

		// 获取用户的行为日志
		this.getUserLogs('news', 'read', 'v3', this.uid, this.start_at, this.end_at, 1);
		this.getUserLogs('forum', 'read', 'v3', this.uid, this.start_at, this.end_at, 2);
		this.getUserLogs('reply', 'read', 'v3', this.uid, this.start_at, this.end_at, 3);
		
		this.getUserLogs('forum', 'share', 'v3', this.uid, this.start_at, this.end_at, 4);
		this.getUserLogs('news', 'share', 'v3', this.uid, this.start_at, this.end_at, 5);

		// 获取奖品列表
		this.getPrizeList(this.activity_id);
	},
	methods: {
		loginApp() {
			contact.requireLogin();
			console.log('relogin');
		},
		downloadApp() {
			window.location.href = 'https://www.171tiyu.com/download';
		},
		exchange() {
			this.exchangeModal = true;
		},
		closeExchangeModal() {
			this.exchangeModal = false;
		},
		closeAppMsgModal() {
			this.appMsgModal = false;
		},
		turnRecord() {
			uni.navigateTo({
				url: '/pages/index/record'
			});
		},
		getSignScore() {
			console.log('1231');
			this.newsReadStatus = 2
		},
		getUserLogs(service, behavior, version, uid, start_at, end_at, type) {
			let params = {
				service: service,
				behavior: behavior
			};

			let req_url = base.bd + '/' + version + '/' + uid + '/' + start_at + '/' + end_at + '/logs';

			http.get(req_url, { params: params }).then(res => {
				console.log(res);
				if (res.status == 200) {
					if (res.data.Status == 1) {
						//阅读新闻
						if (type == 1) {
							let news_data = res.data.Data.list;
							if (news_data.length < 3) {
								this.newsReadStatus = 0; //未满 做任务
								this.newsReadNum = news_data.length;
							}
							if (news_data.length >= 3) {
								this.newsReadStatus = 1; // 已满待领取 会闪烁
								this.newsReadNum = 3;
							}
							
						}
						//阅读帖子
						if(type == 2){
							let forum_data = res.data.Data.list;
							if (forum_data.length < 3) {
								this.forumReadStatus = 0; //未满 做任务
								this.forumReadNum = forum_data.length;
							}
							if (forum_data.length >= 3) {
								this.forumReadStatus = 1; // 已满待领取 会闪烁
								this.forumReadNum = 3;
							}
						}
						// 留言3次
						if(type == 3){
							let reply_data = res.data.Data.list;
							if (reply_data.length < 3) {
								this.replyStatus = 0; //未满 做任务
								this.replyNum = reply_data.length;
							}
							if (reply_data.length >= 3) {
								this.replyStatus = 1; // 已满待领取 会闪烁
								this.replyNum = 3;
							}
						}
						// 分享
						if(type == 4){
							let share_data = res.data.Data.list;
							if (share_data.length < 1) {
								this.shareStatus = 0; //未满 做任务
								this.shareNum = share_data.length;
							}
							if (share_data.length == 1) {
								this.shareStatus = 1; // 已满待领取 会闪烁
								this.shareNum = 1;
							}
						}
						if(type == 5){
							let share_data = res.data.Data.list;
							if (share_data.length < 1) {
								this.shareStatus = 0; //未满 做任务
								this.shareNum = share_data.length;
							}
							if (share_data.length == 1) {
								this.shareStatus = 1; // 已满待领取 会闪烁
								this.shareNum = 1;
							}
						}
						
					}
				} else {
					alert('server error');
				}
			});
		},
		getPrizeList(activity_id) {
			let data = {
				activity_id: activity_id
			};
			let req_url = base.sq + '/activity/api.prizeConfig/list';

			http.post(req_url, data).then(res => {
				console.log(res);
				if (res.status == 200) {
					if (res.data.code == 0) {
						this.prizeList = res.data.data;
					} else {
					}
				}
			});
		},
		// 触发方法
		copy() {
			let content = 'NationalSports'; // 复制内容，必须字符串，数字需要转换为字符串
			const result = h5Copy(content);
			if (result === false) {
				uni.showToast({
					title: '不支持'
				});
			} else {
				uni.showToast({
					title: '复制成功',
					icon: 'none'
				});
			}
		}
	}
};
</script>

<style>
.index-bg {
	background: url(https://aloss.hotforest.cn/sign/index-bg.png) no-repeat center;
	background-size: 100% 110%;
	width: 100%;
	height: 2882rpx;
}
.index-banner {
	width: 752rpx;
	height: 870rpx;
	margin: 0 auto;
	background: url(https://aloss.hotforest.cn/sign/index-banner.png) no-repeat center;
	background-size: 100% 100%;
	text-align: center;
}

.index-info {
	width: 658rpx;
	height: 456rpx;
	margin: 0 auto;
	margin-top: 520rpx;
}
.index-info-item {
	width: 617rpx;
	height: 85rpx;
	margin: 0 auto;
	border-bottom: 1rpx dashed rgba(253, 110, 105, 1);
}

.index-info-1 {
	width: 65%;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	line-height: 85rpx;
	text-align: left;
}
.index-info-1 span {
	color: #fd6e69;
	font-size: 30rpx;
}
.index-info-2 {
	width: 15%;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	line-height: 85rpx;
}
.index-info-3 {
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.index-info-3 button {
	width: 110rpx;
	height: 40rpx;
	outline: none;
	border: 1rpx solid transparent;
	background: url(https://aloss.hotforest.cn/sign/button.png) no-repeat center;
	background-size: 100% 100%;
	font-size: 14rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 40rpx;
	padding: 0;
}
.index-info-3-button-ok{
	background: url(https://aloss.hotforest.cn/sign/button.gif) no-repeat center !important;
	background-size: 100% 100% !important;
}
.index-info-3-button-score{
	background:rgba(187,187,187,1) !important;
	/* border-radius:5px; */
}


.index-my-score {
	margin-top: 35rpx;
	padding-left: 50rpx;
	padding-right: 47rpx;
	margin-bottom: 35rpx;
}
.index-my-score-l {
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 35rpx;
	width: 80%;
	text-align: left;
}
.index-my-score-r {
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 35rpx;
	width: 20%;
	text-align: right;
}

.prize-list {
	width: 659rpx;
	height: 1367rpx;
	margin: 0 auto;
	background: url(https://aloss.hotforest.cn/sign/prize-list-bg.png) no-repeat center;
	background-size: 100% 100%;
}

.score-store-txt {
	text-align: center;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	position: absolute;
	left: 330rpx;
}
.score-store-item {
	width: 50%;
	height: 269rpx;
	text-align: center;
	float: left;
}
.score-store-item-1 {
	width: 206rpx;
	height: 100rpx;
	padding-top: 40rpx;
	margin: 0 auto;
}
.score-store-item-1 img {
	max-width: 100%;
	max-height: 100%;
}

.score-store-item-2 {
	font-size: 20rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 35rpx;
	margin-top: 10rpx;
}

.score-store-item-3 {
	width: 80%;
	margin: 0 auto;
	margin-top: 10rpx;
}
.score-store-item-3-l {
	width: 50%;
	float: left;

	font-size: 20rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 35rpx;
}
.score-store-item-3-r {
	width: 50%;
	float: right;

	font-size: 20rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 35rpx;

	background: rgba(253, 109, 101, 1);
	border-radius: 17px;
}

.index-profile-bg {
	width: 594rpx;
	height: 481rpx;
	margin: 0 auto;
	margin-top: 20rpx;
	padding-left: 26rpx;
	padding-right: 40rpx;
	background: url(https://aloss.hotforest.cn/sign/index-profile-bg.png) no-repeat center;
	background-size: 100% 100%;
}
.index-profile-text {
	text-align: center;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	/* line-height:62rpx; */
}
.index-profile-1 {
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	line-height: 35rpx;
	margin-top: 33rpx;
}
.index-profile-2 {
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	line-height: 35rpx;
}
.index-profile-3 {
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	line-height: 35rpx;
}

.index-profile-4 {
	margin-top: 10rpx;
	text-align: center;
}
.index-profile-4-text {
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	line-height: 35rpx;
}
.index-profile-4 img {
	width: 142rpx;
	height: 143rpx;
}
.index-profile-4 span {
	margin-left: 30rpx;
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(67, 147, 255, 1);
	line-height: 35rpx;
}

.exchange-modal {
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}
.exchange-modal-bg {
	width: 601rpx;
	height: 490rpx;
	position: fixed;
	z-index: 1100;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	background: url(https://aloss.hotforest.cn/sign/exchange-modal.png) no-repeat center;
	background-size: 100% 100%;
}
.exchange-modal-1 {
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	text-align: center;
	margin-top: 50rpx;
}
.exchange-modal-2 {
	font-size: 20rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	text-align: center;
	margin-top: 106rpx;
}
.exchange-modal-3 {
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: #fd6e69;
	text-align: center;
	margin-top: 10rpx;
}
.exchange-modal-4 {
	font-size: 20rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	text-align: center;
	margin-top: 50rpx;
}
.exchange-modal-5 {
	text-align: center;
}
.exchange-modal-5 button {
	background: url(https://aloss.hotforest.cn/sign/exchange-modal-button.png) no-repeat center;
	background-size: 100% 100%;
	width: 170rpx;
	height: 55rpx;

	font-size: 18rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);

	margin-top: 20rpx;
}

.app-msg-modal {
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}
.app-msg-modal-bg {
	width: 601rpx;
	height: 490rpx;
	position: fixed;
	z-index: 1100;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	background: url(https://aloss.hotforest.cn/sign/exchange-modal.png) no-repeat center;
	background-size: 100% 100%;
}
.app-msg-modal-1 {
	width: 100%;
	text-align: center;
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	margin-top: 50rpx;
}

.app-msg-modal-2 {
	width: 100%;
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(253, 110, 105, 1);
	margin-top: 100rpx;
	text-align: center;
}

.app-msg-modal-3 {
	width: 187rpx;
	height: 54rpx;
	margin: 0 auto;
	background: linear-gradient(0deg, rgba(253, 102, 108, 1), rgba(255, 160, 46, 1));
	border: 2px solid rgba(255, 160, NaN, 1);
	border-radius: 5px;
	line-height: 54rpx;
	text-align: center;
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	margin-top: 84rpx;
}
</style>
