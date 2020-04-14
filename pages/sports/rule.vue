<template>
	<view class="rule-bg">
		
		<view class="rule-bg-1">
			<view class="index-top">
				<view class="index-top-l"><span @tap="turn_back">返回</span></view>
				<view class="index-top-r"><span @tap="turn_rank">排行榜</span></view>
			</view>
			<view class="rule-scroll">
				<view class="rule-profile">
					<view class="rule-profile-bg">活动规则</view>

					<p>1. 活动时间：4月15日~4月23日</p>
					<p>2. 每答对1题获得1积分，答错或倒计时结束没有回答，则游戏结束</p>
					<p>3. 系统将取玩家最高分进入排行榜</p>
					<p>4. 活动结果以“全民体育”APP内排行榜数据为准</p>
					<p>5. 获得奖励的玩家请联系全民体育客服领取奖励</p>
				</view>
				<view class="prize-profile">
					<view class="prize-profile-bg">奖励说明</view>
					<view class="prize-profile-shoes">
						<!-- https://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rule-qxk.png -->
						<image src="http://aloss.hotforest.cn/h5-basketball/rule-qxk.png"></image>
					</view>
					<view class="prize-profile-shoes-detail">
						<p>第一名：帕尼尼球星卡15包</p>
						<p>第二名：帕尼尼球星卡10包</p>
						<p>第三名：帕尼尼球星卡8包 </p>
						<p>第四名：帕尼尼球星卡5包</p>
						<p>第五名：帕尼尼球星卡3包</p>
						<p>6~10名：帕尼尼球星卡1包</p>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'rule',
	data() {
		return {
			uid: null,
			ns_device_id: null
		};
	},
	onLoad(option) {
		
		this.$uid = option.uid;
		this.uid = option.uid;
		this.ns_device_id = option.ns_device_id
		// this.ns_device_id = uni.getStorageSync('ns_device_id')
	},
	methods: {
		turn_rank() {
			uni.navigateTo({
				url: '/pages/sports/rank?uid=' + this.uid + '&ns_device_id=' + this.ns_device_id,
				success(){
				
				}
			});
		},
		turn_back() {
			// uni.navigateBack()
			uni.reLaunch({
				url: '/pages/sports/sports?uid=' + this.uid + '&ns_device_id=' + this.ns_device_id,
				success(){
				
				}
			});
		}
	}
};
</script>

<style>

.rule-bg {
	width: 100%;
	height: 100%;
	background: url(http://aloss.hotforest.cn/h5-basketball/index-bg.png) no-repeat;
	background-size: 100% 100%;
	background-position: center;
}
.rule-bg-1 {
	width: 100%;
	height: 100%;
	/* overflow-y: scroll; */
	background: url(http://aloss.hotforest.cn/h5-basketball/rule-bg-1.png) no-repeat;
	background-size: 100% 100%;
	background-position: top;
}

.index-top {
		height: 76rpx;
		padding-top: 33rpx;

	}

	.index-top-l {
		float: left;
		width: 141rpx;
		height: 77rpx;
		background: url('http://aloss.hotforest.cn/h5-basketball/index-t-l.png') no-repeat left;
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
		background: url('http://aloss.hotforest.cn/h5-basketball/index-t-r.png') no-repeat right;
		background-size: 110% 100%;
		background-position: left;
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

.rule-profile {
	/* padding-top: 120rpx; */
	margin-top: 28.23rpx;
	width: 80%;
	margin: 0 auto;
}
.rule-profile-bg {
	width: 221.17rpx;
	height: 68.23rpx;
	margin-bottom: 28rpx;
	line-height: 68.23rpx;
	font-size: 38.82rpx;
	text-align: center;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(254, 254, 254, 1);
	background: url(http://aloss.hotforest.cn/h5-basketball/r-b-1-t.png) no-repeat;
	background-size: 100% 100%;
	background-position: center;
}
.rule-profile p {
	line-height: 56rpx;
	font-size: 30.58rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: #FFD368;
}
.rule-time {
	width: 80%;
	margin: 34rpx auto;
}
.rule-time-bg {
	width: 162rpx;
	height: 50rpx;
	margin-bottom: 10rpx;
	line-height: 50rpx;
	font-size: 28rpx;
	text-align: center;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(254, 254, 254, 1);
	background: url(http://aloss.hotforest.cn/h5-basketball/r-b-1-t.png) no-repeat;
	background-size: 100% 100%;
	background-position: center;
}
.rule-time ul {
	margin: 0;
	padding: 20rpx;
	list-style: none;
}
.rule-time ul li {
	width: 50%;
	float: left;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(226, 177, 60, 1);
}
.prize-profile {

	width: 80%;
	height: 160px;
	margin: 0 auto;
	padding-top: 43.52rpx;
}
.prize-profile-bg {
	width: 221.17rpx;
	height: 68.23rpx;
	margin-bottom: 28rpx;
	line-height: 68.23rpx;
	font-size: 38.82rpx;
	text-align: center;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(254, 254, 254, 1);
	background: url(http://aloss.hotforest.cn/h5-basketball/r-b-1-t.png) no-repeat;
	background-size: 100% 100%;
	background-position: center;
}
.prize-profile-shoes {
	float: left;
	width: 25%;
	height: 200rpx;
	/* background: url('http://aloss.hotforest.cn/h5-footerball/rule-hongbao.png') no-repeat; */
	/* background-size: 100% 100%; */
}

.prize-profile-shoes image{
	max-width: 100%;
	max-height: 100%;
}

.prize-profile-shoes-detail {
	width: 65%;
	/* width: 447.05rpx; */
	padding-left:49.41rpx;
	float: left;
}

.prize-profile-shoes-detail p {
	font-size: 30.58rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: #FFD368;
}

.rule-scroll {
	overflow: scroll;
	height: 70%;
	margin-top: 20%;
}
</style>
