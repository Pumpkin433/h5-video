<template>
	<view class="uni-flex uni-column result-bg">
		<view class="flex-item flex-item-V res-1">
			你本次获得
			<span>{{ total_score }}</span>
			积分
		</view>
		<view class="flex-item flex-item-V  res-2">
			历史最高分 {{ max_score }} 分
			<br />
			获得称号
		</view>
		<view class="flex-item flex-item-V  res-3">菜鸟飞飞</view>

		<view class="flex-item flex-item-V res-4">截图分享给好友</view>
		<view class="flex-item flex-item-V res-5" @click="answerAgain()">再来一次</view>

		<!-- 输入信息弹框 -->
		<view class="modal-msg" v-show="isModalMsg === true" @click="closeMsgModal"></view>
		<view class="modal-msg-bg" v-show="isModalMsg === true">
			<h3>信息填写</h3>
			<view class="modal-msg-name">
				<span>姓名&nbsp;&nbsp;&nbsp;&nbsp;</span>
				<input type="text" v-model="name" />
			</view>
			<view class="modal-msg-mobile">
				<span>手机号&nbsp;&nbsp;&nbsp;&nbsp;</span>
				<input type="number" v-model="mobile" />
			</view>
			<view class="modal-msg-button" @click="user_msg_add"><span>确认信息</span></view>
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
			total_score: 0,
			max_score: 0,
			uid: '',
			ns_device_id: '',
			isModalMsg:false,
			name:'',
			mobile:'',
			
		};
	},
	onLoad(option) {
		this.total_score = option.s;
		this.uid = uni.getStorageSync('uid');
		this.ns_device_id = uni.getStorageSync('ns_device_id');
		//获取用户最高分
		this.getUserMaxScore(this.uid);
	},
	methods: {
		closeMsgModal(){
			this.isModalMsg = false
		},
		answerAgain() {
			let uid = this.uid;
			let data = {
				uid: uid
			};
			http.post(base.sq + '/activity/api.users/checkUidStatus', data)
				.then(res => {
					console.log(res);
					if (res.status == 200) {
						console.log(res.data.data.count);
						let count = res.data.data.count;
						if (count <= 0) {
							this.isModalMsg = true
						} else {
							uni.reLaunch({
								url: '/'
							});
						}
					} else {
						return alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		checkUidStatus(uid) {},
		getUserMaxScore(uid) {
			let data = {
				uid: uid
			};
			http.post(base.sq + '/activity/api.users/getUserMaxScore', data)
				.then(res => {
					console.log(res);
					if (res.status == 200) {
						this.max_score = res.data.data.maxScore ? null : 0;
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
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/result.png) no-repeat center;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
}
.res-1 {
	margin-top: 64%;
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
.res-3 {
	width: 417rpx;
	height: 82rpx;
	margin: 0 auto;
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
	margin-top: 252rpx;
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

	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/result-again.png) no-repeat center;
	background-size: 100% 100%;
	text-align: center;
	font-size: 44rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	text-shadow: 0px 3px 8px rgba(223, 28, 88, 1);
}
</style>
