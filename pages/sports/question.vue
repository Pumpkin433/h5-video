<template>
	<view class="question-bg">
		<view class="question-bg-1">
			<view class="question-bg-2">
				<view class="question-setval"> 
					15
				</view>
				
				<view class="question-c">
					<p>
						 NBA一共有多少个球队？NBA一共有多少个球队？NBA一共有多少个球队？
						少个球队？NBA一共有多少个球队？                          
					</p>
					
					<ul>
						<li class="question-right"><span>A &nbsp;&nbsp;24个</span></li>
						<li class="question-wrong"><span>A &nbsp;&nbsp;24个</span></li>
						<li><span>A &nbsp;&nbsp;24个</span></li>
						<li @click="modal_end"><span>A &nbsp;&nbsp;24个</span></li>
					</ul>
				</view>
				<!-- 问题答完 弹框 -->
				<view class="modal-end" v-show="isModalEnd === true">
					<view class="modal-end-bg">
						<h3>您实在是太棒了！</h3>
					</view>
				</view>
			</view>
			
		</view>
	</view>
	
	
	
</template>

<script>
	export default{
		name:'question',
		data(){
			return {
				isModalEnd:false
			}
		},
		onLoad(){
			
		},
		methods:{
			modal_end(){
				this.isModalEnd = true
			}
		},
		
		
	}
</script>

<style>
	.question-bg {
		width: 100%;
		height: 100%;
		background: url(../../static/sports/rule-bg.png) no-repeat;
		background-size: 100% 100%;
		background-position: center;
	}
	.question-bg-1 {
		width: 100%;
		height: 100%;
		background: url(../../static/sports/index-bg.png) no-repeat;
		background-size: 100% 100%;
		background-position: center;
	}
	.question-bg-2 {
		width: 100%;
		height: 100%;
		background: url(../../static/sports/rule-bg-1.png) no-repeat;
		background-size: 100% 80%;
		background-position: center;
	}
	.question-setval{
		text-align: center;
		width: 227rpx;
		height: 166rpx;
		margin: 0 auto;
		font-size:80rpx;
		font-family:Yuanti SC;
		font-weight:400;
		color:rgba(255,255,255,1);
	}
	
	.question-c{
		width: 512rpx;
		margin: 0 auto;;
		padding-top: 200rpx;
	}
	.question-c p{
		
		font-size:28rpx;
		font-family:Lantinghei SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
	}
	.question-c ul{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.question-c ul li{
		width:469rpx;
		height:76rpx;
		border:1rpx solid rgba(238,182,44,1);
		border-radius:20rpx;
		text-indent: 12rpx;
		margin-top: 25rpx;
	}
	.question-c ul li span{
		font-size:22rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(255,255,255,1);
		line-height: 76rpx;
		cursor: pointer;
		
	}
	
	.question-right {
		background-color: #1AA017;
		border:2rpx solid rgba(26, 160, 23, 1) !important;
	}
	
	.question-wrong{
		background-color: #FF7600;
		border:2rpx solid  #FF7600 !important;
	}
	
	.modal-end{
		background-color: rgba(0,0,0,0.5);
		background-position: top;
		background-size: 100% 100%;
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 100rpx;
		top: 0;
		left: 0;
	}
	.modal-end-bg {
		background: url(../../static/sports/question-end-bg.png) no-repeat;
		background-size: 100% 100%;
		width: 80%;
		height: 50%;
		margin: 0 auto;
		margin-top: 40%;
	}
	
</style>
