<template>
	<view>
		<view class="logs-top">
			<view class="logs-top-back" @click="backIndex()"></view>
			竞猜记录
		</view>
		
		<view class="logs-list">
			<view class="logs-list-top">
				<view class="logs-list-top-item">时间</view>
				<view class="logs-list-top-item">赛事</view>
				<view class="logs-list-top-item">我的竞猜</view>
				<view class="logs-list-top-item">结果</view>
			</view>
			
			<view class="logs-list-content" v-for="(bet,i)  in userBetList" :key="i">
				<view class="logs-list-content-item">
					<!-- {{bet.competition_at}} -->
					{{bet.competition_format}}
				</view>
				<view class="logs-list-content-item">
					{{bet.home_team_name}} <br>
					{{bet.guest_team_name}}
				</view>
				<view class="logs-list-content-item">
					{{bet.option}}
				</view>
				<view class="logs-list-content-item">
					<text v-if="bet.is_right == -1" class="logs-wrong">-{{bet.bet_points}}  <br> <span>投注 {{bet.bet_points}}</span></text>
					<text v-if="bet.is_right == 1" class="logs-right">+{{bet.expect_earn_points}}  <br> <span>投注 {{bet.bet_points}}</span></text>
					<text v-if="bet.is_right == 0">待开奖 <br> <span>投注 {{bet.bet_points}}</span></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import base from '@/utils/base.js';
	import http from '@/utils/http.js';
	export default {
		data() {
			return {
				userBetList:[], // 用户下注记录
			}
		},
		onLoad(option) {
			this.uid = option.uid;
		
			this.getUserBetLogs(this.uid,this.$question.activity_id);
		},
		methods: {
			backIndex:function(){
				var uid = uni.getStorageSync('uid');
				uni.navigateTo({
					url:'/?uid='+uid
				})
			},
			getUserBetLogs(uid, activity_id){
				uni.request({
					url: base.sq + '/activity/api.QuizLog/userBetList',
					data: {
						uid: uid,
						activity_id: activity_id
					},
					method: 'POST',
					success: res => {
						console.log(res);
						if (res.statusCode === 200) {
							if (res.data.code === 0) {
								this.userBetList = res.data.data;
							
							} else {
								uni.showToast({
									title: res.data.info,
									icon: 'none'
								});
							}
						} else {
							uni.showToast({
								title: 'server error',
								icon: 'none'
							});
						}
					}
				});
			},
		}
	}
</script>

<style>
	
.logs-top{
	height: 100rpx;
	font-size:36rpx;
	font-family:MF LingHei (Noncommercial);
	font-weight:400;
	color:rgba(51,51,51,1);
	line-height:100rpx;
	text-align: center;
	position: relative;
}

.logs-top-back{
	position: absolute;
	left: 40rpx;
	top: 20rpx;
	width: 45rpx;
	height: 45rpx;
	background: url(https://aloss.hotforest.cn/bundesliga/button-back.png) no-repeat center;
	background-size: 100% 100%;
}


.logs-list-top{
	width: 90%;
	height: 50rpx;
	margin: 0 auto;
	background:rgba(51,142,255,1);
	border-radius:25rpx;
}

.logs-list-top-item {
	float: left;
	width: 25%;
	height: 50rpx;
	text-align: center;
	
	font-size:26rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(255,255,255,1);
}

.logs-list-content{
	width:90%;
	margin: 0 auto;
}
.logs-list-content-item{
	float: left;
	width: 25%;
	height: 115rpx;
	text-align: center;
	border-bottom:1px solid  #39B8BF;
	margin-top: 20rpx;
	font-size:26rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(51,51,51,1);
}	
.logs-list-content-item span{
	font-size:24rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(153,153,153,1);
}
.logs-right{
	color: #F42F2F;
}
.logs-wrong{
	color: #20a11c;
}
</style>
