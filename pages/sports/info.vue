<template>
	<view class="uni-flex uni-column " :class="infoTye === 1 ? 'rank-bg' : 'rule-bg'">
		<view class="back-position" @click="backIndex()">
			<view class="back-text" >
				返回
			</view>
			<view class="back-img">
				<img src="https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/back-icon.png" alt="">
			</view>
			
		</view>
		<view class="flex-item flex-item-V info-top">
			<view class="info-top-l" @click="toRank(1)" :class="infoClick == 1 ? 'info-click' : ''">排行榜</view>
			<view class="info-top-line"></view>
			<view class="info-top-r" @click="toRule(2)" :class="infoClick == 2 ? 'info-click' : ''">游戏规则</view>
		</view>

		<scroll-view v-if="infoClick == 1" :scroll-top="scrollTop" scroll-y="true" class=" info-c scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
			<!-- <view id="demo1" class="scroll-view-item "> -->
			<view class="rank-3-t">
				<view class="rank-3-img rank-3-img-m-1"><img src="https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/info-jin.png" alt="" /></view>
				<view class="rank-3-img rank-3-img-m-2"><img src="https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/info-yin.png" alt="" /></view>
				<view class="rank-3-img rank-3-img-m-3"><img src="https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/info-tong.png" alt="" /></view>
			</view>
			<view class="rank-3-d">
				<view class="rank-3-d-item " v-for="(r3, k) in rank_3" :key="k" :class="k == 0 ? 'rank-3-img-m-1' : ''">
					<view class="rank-3-name">{{ r3.name }}</view>
					<view class="rank-3-score">
						<span>{{ r3.score }}</span>
						积分
					</view>
				</view>
			</view>

			<view class="info-rule-info">-只显示前20的排名-</view>

			<view class="rank-4" v-for="(r4, k) in rank_4" :key="k">
				<view class="rank-4-l">{{ r4.rank }}</view>
				<view class="rank-4-m">{{ r4.name }}</view>
				<view class="rank-4-r">
					<span>{{ r4.score }}</span>
					积分
				</view>
			</view>

			<!-- </view> -->

			<view class="my-score">
				<view class="my-score-c" v-if="hasUserInfo === true">
					<view class="my-score-c-l">{{userInfo.rownum}}</view>
					<view class="my-score-c-m">{{userInfo.name}}</view>
					<view class="my-score-c-r">
						<span>{{userInfo.score}}</span>
						积分
					</view>
				</view>
				<view class="my-score-c" v-if="hasUserInfo === false">
					<view class="my-score-c-l"></view>
					<view class="my-score-c-m">暂无排名</view>
					<view class="my-score-c-r">
						<!-- <span>{{userInfo.score}}</span> -->
						<!-- 积分 -->
					</view>
				</view>
				<view class="my-score-img"><img src="https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/my-score.png" alt="" /></view>
			</view>
		</scroll-view>

		<scroll-view v-if="infoClick == 2" scroll-y="true" class="rule-rule scroll-Y" @scroll="scroll">
			<view class="rule-rule-t">游戏规则</view>
			<view class="rule-rule-c">
				1.活动时间：5月1日~5月7日
				<br />
				2.APP用户每天有3次答题机会，外部用户每天有1次答题机会
				<br />
				3.每答对1题获得1积分，答错或倒计时结束没有回答，则游戏结束
				<br />
				4.最终结果以全民体育后台数据为准
				<br />
			</view>
			<view class="rule-prize-t">游戏奖励</view>
			<view class="rule-prize-c">
				<view class="rule-prize-c-l"><img src="https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/prize-icon.png" alt="" /></view>
				<view class="rule-prize-c-r">
					奖励说明：
					<br />
					第一名：红包500元
					<br />
					第二名：红包300元
					<br />
					第三名：红包200元
					<br />
					第4~10名：红包50元
					<br />
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import http from '@/utils/http.js';
import base from '@/utils/base.js';
export default {
	name: 'rank',
	data() {
		return {
			infoTye: 1,
			infoClick: 1,
			uid: null,
			ns_device_id: null,
			userInfo: {},
			hasUserInfo:false,
			
			rank_3: [], //前3名
			rank_4: [], // 4-20名
			scrollTop: 0,
			old: {
				scrollTop: 0
			}
		};
	},
	onLoad(option) {
	
		this.infoClick = option.click
		this.uid = uni.getStorageSync('uid')
		this.ns_device_id = uni.getStorageSync('ns_device_id')
		
		this.getRankList(this.$question.activity_id);
		this.getUserRank(this.uid,this.$question.activity_id)
	},
	methods: {
		backIndex(){
			uni.reLaunch({
				url:'/'
			})
		},
		upper: function(e) {
			console.log(e);
		},
		lower: function(e) {
			console.log(e);
		},
		scroll: function(e) {
			console.log(e);
			this.old.scrollTop = e.detail.scrollTop;
		},
		toRank() {
			this.infoClick = 1;
		},
		toRule() {
			this.infoClick = 2;
		},
		getRankList(activity_id) {
			let data = {
				activity_id:activity_id
			}
			http.post(base.sq + '/activity/api.users/rankList',data)
				.then(res => {
					console.log(res);
					if (res.status == 200) {
						this.rank_3 = res.data.data.rank_3;
						this.rank_4 = res.data.data.rank_4;
					} else {
						alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		getUserRank(uid,activity_id){
			let data = {
				uid:uid,
				activity_id:activity_id
			}
			
			http.post(base.sq + '/activity/api.users/getUserRank',data)
				.then(res => {
					console.log(res);
					if (res.status == 200) {
						this.userInfo = res.data.data[0]
						// console.log((res.data.data[0]))
						if(res.data.data[0]){
							this.hasUserInfo = true
							// console.log('22222')
						}
					} else {
						alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});
		}
	}
};
</script>

<style>
.rank-bg {
	width: 100%;
	height: 100%;
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/rank-bg.png) no-repeat center;
	background-size: 100% 100%;
}
.info-top {
	height: 130rpx;
}
.info-top-l {
	width: 164rpx;
	height: 125rpx;

	float: left;
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(43, 43, 43, 1);
	line-height: 125rpx;
	text-align: center;
	margin-top: 5rpx;
	margin-left: 162rpx;
}
.info-top-line {
	width: 1rpx;
	height: 37rpx;

	background: rgba(43, 43, 43, 1);
	float: left;
	margin-left: 72rpx;
	margin-top: 45rpx;
	line-height: 125rpx;
}
.info-top-r {
	width: 164rpx;
	height: 125rpx;

	float: right;
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(43, 43, 43, 1);
	line-height: 125rpx;
	text-align: center;
	margin-top: 5rpx;
	margin-right: 150rpx;
}

.info-click {
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/info-click.png) no-repeat center;
	background-size: 100% 100%;
}
.info-c {
	height: 100%;
}
.rank-3-t {
	width: 80%;
	height: 171rpx;
	margin: 0 auto;
}
.rank-3-img {
	width: 30%;
	height: 171rpx;
	float: left;
	margin-left: 5%;
	text-align: center;
}
.rank-3-img-m-1 {
	margin-left: 0 !important;
}
.rank-3-img-m-2 {
}
.rank-3-img-m-3 {
}
.rank-3-img img {
	width: 140rpx;
}

.rank-3-d {
	width: 80%;
	height: 110rpx;
	margin: 0 auto;
}
.rank-3-d-item {
	width: 30%;
	float: left;
	margin-left: 5%;
}
.rank-3-name {
	text-align: center;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(32, 32, 32, 1);
	line-height: 48rpx;
}
.rank-3-score {
	text-align: center;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: #2d2d2d;
	line-height: 48rpx;
}
.rank-3-score span {
	color: #fc4949;
}

.info-rule-info {
	width: 197rpx;

	font-size: 18rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(144, 144, 144, 1);
	line-height: 72rpx;
	margin: 0 auto;
}

.rank-4 {
	width: 80%;
	height: 80rpx;
	margin: 0 auto;

	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(32, 32, 32, 1);
	line-height: 72rpx;
}
.rank-4-l {
	width: 20%;
	float: left;
}
.rank-4-m {
	width: 40%;
	float: left;
	margin-left: 10%;
}
.rank-4-r {
	width: 30%;
	float: right;
	text-align: right;
}
.rank-4-r span {
	color: #fc4949;
}

.my-score {
	width: 100%;
	position: fixed;
	z-index: 100;
	bottom: 53rpx;
}
.my-score-c {
	width: 600rpx;
	height: 70rpx;
	background: rgba(255, 246, 205, 1);
	border: 5px solid rgba(255, 196, 102, 1);
	border-radius: 30px;
	margin: 0 auto;

	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(32, 32, 32, 1);
}
.my-score-c-l {
	float: left;
	width: 20%;
	line-height: 70rpx;
	text-align: right;
}
.my-score-c-m {
	float: left;
	width: 40%;
	line-height: 70rpx;
	text-align: center;
}
.my-score-c-r {
	float: right;
	width: 40%;
	line-height: 70rpx;
	text-align: center;
}
.my-score-c span {
	color: #fc4949;
}
.my-score-img {
	position: absolute;
	left: 10rpx;
	bottom: 20rpx;
}
.my-score-img img {
	width: 121rpx;
	height: 86rpx;
}

.rule-rule {
	width: 80%;
	padding-top: 10%;
	height: 90%;
	margin: 0 auto;
}
.rule-rule-t {
	width: 165rpx;
	height: 55rpx;
	/* margin-top: 25rpx; */
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/rule-rule-icon.png) no-repeat center;
	background-size: 100% 100%;

	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(44, 44, 44, 1);
	line-height: 55rpx;
	text-align: center;
}
.rule-rule-c {
	margin-top: 40rpx;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(32, 32, 32, 1);
}

.rule-prize-t {
	width: 165rpx;
	height: 55rpx;
	margin-top: 45rpx;
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/rule-rule-icon.png) no-repeat center;
	background-size: 100% 100%;

	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(44, 44, 44, 1);
	line-height: 55rpx;
	text-align: center;
}
.rule-prize-c {
	width: 100%;
}
.rule-prize-c-l {
	float: left;
	width: 40%;
}
.rule-prize-c-l img {
	width: 218rpx;
	height: 290rpx;
}
.rule-prize-c-r {
	float: left;
	width: 60%;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(32, 32, 32, 1);
}

.back-position{
	position: fixed;
	z-index: 10000;
	top: 30rpx;
	left: 15rpx;
}
.back-text{
	float: left;
	font-size:18rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(32,32,32,1);
	line-height:48rpx;
}
.back-img{
	float: left;
	width: 53rpx;
	height: 49rpx;
	margin-left: 10rpx;
}
.back-img img{
	width: 100%;
	height: 100%;
}
</style>
