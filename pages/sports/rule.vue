<template>
	<view class="rule-bg">
		<view class="rule-bg-1">
			<view class="index-top">
				<view class="index-top-l" @tap="turn_back">
					<span>返回</span>
				</view>
				<view class="index-top-r" @tap="turn_rank">
					<span>排行榜</span>
				</view>
			</view>
			
			<view class="rule-scroll">
				<view class="prize-profile">
					<view class="prize-profile-bg">奖品介绍</view>
					<view class="prize-profile-shoes">
						<!-- <image :src="'/static/sports/shoes.png'"></image> -->
					</view>
					<view class="prize-profile-shoes-detail">
						<h4>男士UA Anatomix Spawn Low篮球鞋</h4>
						<h5>价值： 899元</h5>
						<span>颜色以实物为准</span>
					</view>
				</view>
				
				<view class="rule-profile">
					<view class="rule-profile-bg">游戏规则</view>
				
					<p>
						1. 2月27日，在三星旗舰新品中国线上发布会中三星Galaxy Z Flip正式登陆中国市场。 
					
					</p>
					<p>
						1. 2月27日，在三星旗舰新品中国线上发布会中三星Galaxy Z Flip正式登陆中国市场。 
					
					</p>
					<p>
						1. 2月27日，在三星旗舰新品中国线上发布会中三星Galaxy Z Flip正式登陆中国市场。 
					
					</p>
					<p>
						1. 2月27日，在三星旗舰新品中国线上发布会中三星Galaxy Z Flip正式登陆中国市场。 
					</p>
				</view>
				
				<view class="rule-time">
					<view class="rule-time-bg">时间表</view>
					<ul>
						<li>第一轮  4.16-4.23</li>
						<li>第一轮  4.16-4.23</li>
						<li>第一轮  4.16-4.23</li>
						<li>第一轮  4.16-4.23</li>
						<li>第一轮  4.16-4.23</li>
						<li>第一轮  4.16-4.23</li>
						<li>第一轮  4.16-4.23</li>
						<li>第一轮  4.16-4.23</li>
						<li>第一轮  4.16-4.23</li>
						<li>第一轮  4.16-4.23</li>
						
					</ul>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:'rule',
		data(){
			return {
				
			}
		},
		onLoad() {
			
		},
		methods:{
			turn_rank(){
				uni.navigateTo({
					url:'rank'
				})
			},
			turn_back(){
				uni.navigateBack()
			}
			
		},
		
		
	}
</script>

<style>
	.rule-bg{
		width: 100%;
		height: 100%;
		background: url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rule-bg.png) no-repeat;
		background-size: 100% 100%;
		background-position: center;
	}
	.rule-bg-1 {
		width: 100%;
		height: 90%;
		/* overflow-y: scroll; */
		background: url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rule-bg-1.png) no-repeat;
		background-size: 100% 100%;
		background-position: center;
	}
	
	.index-top {
		height: 76rpx;
		padding-top: 33rpx;
	
	}
	
	.index-top-l {
		float: left;
		width: 131rpx;
		height: 67rpx;
		background: url('http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/index-t-l.png') no-repeat left;
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
		background: url('http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/index-t-r.png') no-repeat right;
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
	
	.rule-profile{
		/* padding-top: 120rpx; */
		width: 80%;
		margin: 0 auto;
	}
	.rule-profile-bg{
		width: 162rpx;
		height: 50rpx;
		margin-bottom: 28rpx;
		line-height: 50rpx;
		font-size:28rpx;
		text-align: center;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(254,254,254,1);
		background: url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/r-b-1-t.png) no-repeat;
		background-size: 100% 100%;
		background-position: center;
	}
	.rule-profile p{
		line-height: 56rpx;
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(199,153,43,1);
	}
	.rule-time{
		width: 80%;
		margin: 34rpx auto;
	}
	.rule-time-bg{
		width: 162rpx;
		height: 50rpx;
		margin-bottom: 10rpx;
		line-height: 50rpx;
		font-size:28rpx;
		text-align: center;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(254,254,254,1);
		background: url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/r-b-1-t.png) no-repeat;
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
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(226,177,60,1);
	}
	.prize-profile{
		/* border: 1px solid red; */
		/* padding-top: 120rpx; */
		width: 80%;
		height: 160px;
		margin: 0 auto;
	}
	.prize-profile-bg{
		width: 162rpx;
		height: 50rpx;
		margin-bottom: 28rpx;
		line-height: 50rpx;
		font-size:28rpx;
		text-align: center;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(254,254,254,1);
		background: url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/r-b-1-t.png) no-repeat;
		background-size: 100% 100%;
		background-position: center;
	}
	.prize-profile-shoes{
		float: left;
		/* width: 280rpx; */
		width: 50%;
		height: 190rpx;
		background: url('http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/shoes.png') no-repeat;
		background-size: 100% 100%;
		
	}
	.prize-profile-shoes image{
		max-width: 100%;
		max-height: 100%;
	}
	.prize-profile-shoes-detail{
		width: 45%;
		padding-left: 5%;
		float: left;
	}
	.prize-profile-shoes-detail h4{
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(199,153,43,1)
	}
	.prize-profile-shoes-detail h5{
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(199,153,43,1);
	}
	.prize-profile-shoes-detail span{
		font-size:18rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(148,111,23,1);
	}
	.rule-scroll {
		overflow: scroll;
		height: 70%;
		margin-top: 20%;
	}
</style>
