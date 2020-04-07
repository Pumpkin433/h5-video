<template>
	<view class="rank-bg">
		<view class="index-top">
			<view class="index-top-l" @tap="turn_back">
				<span>返回</span>
			</view>
			<view class="index-top-r" @tap="turn_rule">
				<span>游戏规则</span>
			</view>
		</view>
		<view class="rank-bg-1">
			
			<view class="rank-bg-11">
				<view class="r-b-1-t">
					<span>排行榜</span>
				</view>
				<view class="r-b-1-d">
					<ul>
						<li v-for="(r,i) in rankList" :key="i">
							<span>{{r.rank}}</span>
							<span>{{r.name}}</span>
							<span>{{r.score}}积分</span>
						</li>
					
						
					</ul>
				</view>
				
				<view class="rank-bg-2-c" v-show="this.user_rank > 100 || this.user_rank === 0">
					<span>我的积分</span>
					<span>{{userInfo.score}}积分</span>
					<span>当前排名100+</span> 
				</view>
				<view class="rank-bg-2-c" v-show="this.user_rank < 100 & this.user_rank!=0">
					<span>我的积分</span>
					<span>{{userInfo.score}}积分</span>
					<span>当前排名:{{user_rank}}</span> 
				</view>
			</view>
		
			
		</view>
	</view>
</template>

<script>
	import http from '@/utils/http.js'
	import base from '@/utils/base.js'
	export default {
		name:'rank',
		data(){
			return {
				rankList:[],
				uid:null,
				ns_device_id:null,
				userInfo:{},
				user_rank:0
			
				
				
			}
		},
		onLoad(option) {
			// this.$uid = option.uid
			this.uid = option.uid
			// this.ns_device_id = uni.getStorageSync('ns_device_id')
			// console.log(this.uid)
			this.get_user_info(this.uid)
			this.getRankList()
			
		},
		methods:{
			get_user_info(uid){
				let data = {
					uid:uid
				}
				http.post(base.sq + '/api/v1.h5.Questions/getUserInfo',data).then((res) => {
				    console.log(res)
					this.score = res.data.data.info.score
					this.userInfo =  res.data.data.info
					
					// this.user_rank = res.data.data.info.rank
					//实时获取用户积分
					this.get_user_rank(uid,0)
				
				}).catch(error => {
				    
				}).finally(() => {
				    
				})
			},
			turn_back(){
				// uni.navigateBack()
				uni.reLaunch({
					url:'/pages/sports/sports?uid=' + this.uid + '&ns_device_id=' + this.ns_device_id
				})
			},
			turn_rule(){
				uni.navigateTo({
					url:'/pages/sports/rule?uid=' + this.uid + '&ns_device_id=' + this.ns_device_id
				})
			},
			getRankList(){
				// get 请求
				http.get(base.sq + '/api/v1.h5.Questions/getRankList', [{}]).then((res) => {
				    console.log(res)
					this.rankList = res.data.data.list
					
				
				}).catch(error => {
				    
				}).finally(() => {
				    
				})
			},
			get_user_rank(uid, total_score) {
				let data = {
					uid: uid,
					score: total_score
				};
				http.post(base.sq + '/api/v1.h5.Questions/getUserRank', data)
					.then(res => {
						// console.log(res)
						this.user_rank = res.data.data.rank;
					})
					.catch(error => {})
					.finally(() => {});
			},
			
		},
		
		
	}
</script>

<style>
	.rank-bg {
		background: url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rank-bg.png) no-repeat;
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
		width: 141rpx;
		height: 77rpx;
		background: url('http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/index-t-l.png') no-repeat left;
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
		background: url('http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/index-t-r.png') no-repeat right;
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

	.rank-bg-1 {
		background: url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rank-bg-1-2.png) no-repeat;
		background-size: 100% 110%;
		background-position:bottom;
		height: 80%;
	}
	
	.rank-bg-11{
		/* margin-top: 100rpx; */
		padding-top: 100rpx;
	}

	.r-b-1-t {
		background: url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/r-b-1-t.png) no-repeat;
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
	.r-b-1-d {
		/* height: 320px; */
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
		background:rgba(227,149,49,1) url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rank-one.png) no-repeat;
		background-size: 32rpx  32rpx ;
		background-position: left 38rpx top 0;
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
		background:rgba(221,210,197,1) url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rank-two.png) no-repeat;
		background-size:  32rpx  32rpx ;
		background-position: left 38rpx top 0;
		border-radius:21px;
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		
		line-height:55rpx;
	}
	.r-b-1-d ul li:nth-child(3){
	
		background:#836A49 url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rank-third.png) no-repeat;
		background-size:  32rpx  32rpx ;
		background-position: left 38rpx top 0;
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
		text-indent: 16.47rpx;
		width: 60%;
		display: block;
		float: left;
		text-align: left;
	
	}
	
	.r-b-1-d ul li span:nth-child(3){
		/* width: 92rpx; */
		width: 30% ;
		height: 55rpx;
		display: block;
		float: right;
	
	}
	
/* 	.rank-bg-2 {
		width: 100%;
		height: 200rpx;
		background:url(http://h5-activity.oss-cn-shanghai.aliyuncs.com/h5-basketball/rank-bg-2.png) no-repeat;
		background-size: 90% 100%;
		background-position: center;
		position: absolute;
		bottom: 60rpx;
	} */
	.rank-bg-2-c {
		/* border: 1px solid red; */
		width: 80%;
		
		  display: flex;
		    align-items: center;
		    justify-content: center;
		    vertical-align: middle;
			position: absolute;
			bottom: 16%;
			left: 10%;
	}
	
	
	.rank-bg-2-c span:first-child{
		display: block;
		float: left;
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(223,142,63,1);
	}
	.rank-bg-2-c span:nth-child(2){
		display: block;
		float: left;
		font-size:30rpx;
		font-family:Lantinghei SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		margin-left: 22rpx;
	}
	.rank-bg-2-c span:nth-child(3){
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
