<template>
	<view class="index-bg">
		<view class="index-top">
			<view class="index-top-l" @tap="turn_rule">
				<span>游戏规则</span>
			</view>
			<view class="index-top-r" @tap="turn_rank">
				<span>排行榜</span>
			</view>
		</view>

		<view class="index-d">
			<div class="index-d-bg">
				<span>开始挑战</span>
			</div>
		</view>

	</view>
</template>

<script>
	export default {
		name:'sports',
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
			turn_rule(){
				uni.navigateTo({
					url:'rule'
				})
			}
			
		},
		
		
	}
</script>

<style>
	a {
		text-decoration: none;
	}

	.index-bg {
		background: url(../../static/sports/index-bg.png) no-repeat;
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
		background: url('../../static/sports/index-t-l.png') no-repeat center;
		background-size: contain;
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
		background: url('../../static/sports/index-t-r.png') no-repeat center;
		background-size: contain;
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
	
	.index-d{
		position: absolute;
		width: 100%;
		height: 115rpx;
		bottom: 121rpx;
	}

	.index-d-bg {
		
		width: 471rpx;
		height: 115rpx;
		background: url(../../static/sports/index-d.png) no-repeat;
		text-align: center;
		margin: 0 auto;
		
		line-height: 115rpx;
		background-size: 100% 100%;
	
		
	}
	.index-d-bg span{
		font-size:40rpx;
		font-family:Lantinghei SC;
		font-weight:bold;
		color:rgba(106,59,14,1);
		text-shadow:0rpx 2rpx 0rpx rgba(0, 0, 0, 0.49);
		-webkit-text-stroke:1rpx undefined;
		text-stroke:1rpx undefined;
	}
</style>
