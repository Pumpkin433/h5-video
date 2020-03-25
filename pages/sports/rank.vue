<template>
	<view class="rank-bg">
		<view class="rank-bg-1">
			<view class="index-top">
				<view class="index-top-l" @tap="turn_back">
					<span>返回</span>
				</view>
				<view class="index-top-r" @tap="turn_rule">
					<span>游戏规则</span>
				</view>
			</view>
			<view class="rank-bg-11">
				<view class="r-b-1-t">
					<span>排行榜</span>
				</view>
				<view class="r-b-1-d">
					<ul>
						<li>
							<span>1</span>
							<span>菟安妮小宝贝</span>
							<span>100积分</span>
						</li>
						<li>
							<span>1</span>
							<span>菟安妮小宝贝</span>
							<span>100积分</span>
						</li>
						<li>
							<span>1</span>
							<span>菟安妮小宝贝</span>
							<span>100积分</span>
						</li>
						<li>
							<span>1</span>
							<span>菟安妮小宝贝</span>
							<span>100积分</span>
						</li>
						<li>
							<span>1</span>
							<span>菟安妮小宝贝</span>
							<span>100积分</span>
						</li>
						<li>
							<span>1</span>
							<span>菟安妮小宝贝</span>
							<span>100积分</span>
						</li>
						<li>
							<span>1</span>
							<span>菟安妮小宝贝</span>
							<span>100积分</span>
						</li>
						<li>
							<span>1</span>
							<span>菟安妮小宝贝</span>
							<span>100积分</span>
						</li>
						<li>
							<span>9</span>
							<span>菟安妮小宝贝</span>
							<span>100积分</span>
						</li>
						<li>
							<span>10</span>
							<span>菟安妮小宝贝</span>
							<span>100积分</span>
						</li>
						
					</ul>
				</view>
			</view>
			<view class="rank-bg-2">
				<view class="rank-bg-2-c">
					<span>我的积分</span>
					<span>89积分</span>
					<span>排名未进前50</span> 
				</view>
				
			</view>
			
		</view>
		

	
	</view>
</template>

<script>
	export default {
		name:'rank',
		data(){
			return {
				
			}
		},
		onLoad() {
			
		},
		methods:{
			turn_back(){
				uni.navigateBack()
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
	.rank-bg {
		background: url(../../static/sports/rank-bg.png) no-repeat;
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
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

	.rank-bg-1 {
		background: url(../../static/sports/rank-bg-1.png) no-repeat;
		background-size: 100% 100%;
		background-position:top;
		height: 80%;
	}
	
	.rank-bg-11{
		margin-top: 100rpx;
	}

	.r-b-1-t {
		background: url(../../static/sports/r-b-1-t.png) no-repeat;
		background-size: 100% 100%;
		width: 162rpx;
		height: 50rpx;
		/* border: 1rpx solid red; */
		margin-left: 80rpx;
		text-align: center;
	}

	.r-b-1-t span {
		font-size: 28rpx;
		font-family: Lantinghei SC;
		font-weight: 600;
		color: rgba(254, 254, 254, 1);

	}
	
	.r-b-1-d ul {
		list-style: none;
		/* width: 524rpx; */
		width: 80%;
		padding: 0;
		margin: 0 auto;
	}
	.r-b-1-d ul li {
		
		height: 55rpx;
		margin-top: 13rpx;
		text-align: center;
		
	}
	.r-b-1-d ul li span {
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(240,208,108,1);
	}
	
	.r-b-1-d ul li:first-child{
		background:rgba(227,149,49,1);
		border-radius:21rpx;
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		
		line-height:55rpx;
	}
	.r-b-1-d ul li:first-child span{
		color:rgba(51,51,51,1) !important;
	}
	.r-b-1-d ul li:nth-child(2) span{
		color:rgba(51,51,51,1) !important;
	}
	.r-b-1-d ul li:nth-child(3) span{
		color:rgba(51,51,51,1) !important;
	}
	.r-b-1-d ul li:nth-child(2){
		background:rgba(221,210,197,1);
		border-radius:21px;
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		
		line-height:55rpx;
	}
	.r-b-1-d ul li:nth-child(3){
		background:#836A49;
		border-radius:21px;
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		
		line-height:55rpx;
	}

	.r-b-1-d ul li span:first-child{
		/* width: 28rpx; */
		width: 10%;
		display: block;
		float: left;
		
	}
	.r-b-1-d ul li span:nth-child(2){
		/* width: 28rpx; */
		width: 60%;
		display: block;
		float: left;
	
	}
	
	.r-b-1-d ul li span:nth-child(3){
		/* width: 92rpx; */
		width: 30% ;
		height: 55rpx;
		display: block;
		float: right;
	
	}
	
	.rank-bg-2 {
		width: 100%;
		height: 200rpx;
		background:url(../../static/sports/rank-bg-2.png) no-repeat;
		background-size: 90% 100%;
		background-position: center;
		position: absolute;
		bottom: 60rpx;
	}
	.rank-bg-2-c {
		/* border: 1px solid red; */
		width: 80%;
		margin: 0 auto;
		padding-top: 100rpx;
		  display: flex;
		    align-items: center;
		    justify-content: center;
		    vertical-align: middle;
	}
	.rank-bg-2 span:first-child{
		display: block;
		float: left;
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(223,142,63,1);
	}
	.rank-bg-2 span:nth-child(2){
		display: block;
		float: left;
		font-size:30rpx;
		font-family:Lantinghei SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		margin-left: 22rpx;
	}
	.rank-bg-2 span:nth-child(3){
		display: block;
		float: right;
		width: 180rpx;
		height: 51rpx;
		background:rgba(225,9,180,0.27);
		line-height: 51rpx;
		/* opacity:0.27; */
		border-radius:26rpx;
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(234,234,234,1);
		margin-left: 22rpx;
		text-align: center;
	}

</style>
