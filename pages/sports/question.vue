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
				<view class="modal-end" v-show="isModalEnd === true"  @click="question_modal"></view>
				<view class="modal-end-bg"  v-show="isModalEnd === true" >
					<view class="modal-end-t">
						<view class="modal-end-l">
							<h3>您实在是太棒了!</h3>
							<h5>
								您已经完成所有的问题
							</h5>
							<h2>获得了 <span>56</span> 积分</h2>
							<h5>
								您现在排名在 <span>50+</span>
							</h5>
						</view>
						<view class="modal-end-r">
							<!-- <img src="../../static/sports/jiangbei.png" alt=""> -->
						</view>
					</view>
					<view class="modal-end-d">
						<div class="modal-end-d-button" @click="question_share">
							<span>分享战绩</span>
						</div>
						
						<view class="modal-end-d-d">
							分享可以获得额外的答题机会
						</view>
				
					</view>
				</view>
				<!-- 问题答完 弹框结束 -->
				
				<!-- 分享 弹框 -->
				<view class="modal-share" v-show="isModalShare === true" @click="share_modal"></view>
				<view class="modal-share-bg" v-show="isModalShare === true">
					<view class="modal-share-t">
						<h3>快来全民体育</h3>
						<h2>答题赢大奖</h2>
						<h4>我获得了 <span>56</span>积分</h4>
						<h5>当前排名 <span>50+</span></h5>
					</view>
					<view class="modal-share-d">
						<view class="modal-share-d-l">
							<p>
                                长按识别二维码<br>下载全民体育APP 参与活动
                            </p>
						</view>
						<view class="modal-share-d-r">
							<img src="../../static/sports/m-share-qrcode.png" alt="">
						</view>
					</view>
				</view>
				<!-- 分享弹框结束 -->
				
				<!-- 信息填写弹框 -->
				<view class="modal-msg" v-show="isModalMsg === true" @click="msg_modal"></view>
				<view class="modal-msg-bg" v-show="isModalMsg === true">
					<h3>信息填写</h3>
					<view class="modal-msg-name">
						<span>用户姓名：</span>
						<input type="text">
					</view>
					<view class="modal-msg-mobile">
						<span>手机号</span>
						<input type="text">
					</view>
					<view class="modal-msg-button">
						<span>确认信息</span>
					</view>
				</view>
				<!-- 信息填写弹框 结束-->
				
			</view>

		</view>
	</view>



</template>

<script>
	export default {
		name: 'question',
		data() {
			return {
				isModalEnd: false,
				isModalShare:false,
				isModalMsg:true,
			}
		},
		onLoad() {

		},
		methods: {
			modal_end() {
				this.isModalEnd = true
			},
			question_modal(){
				this.isModalEnd = false
			},
			question_share(){
				this.isModalEnd = false
				this.isModalShare = true
			},
			share_modal(){
				this.isModalShare = false
			
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

	.question-setval {
		text-align: center;
		width: 227rpx;
		height: 166rpx;
		margin: 0 auto;
		font-size: 80rpx;
		font-family: Yuanti SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
	}

	.question-c {
		width: 512rpx;
		margin: 0 auto;
		;
		padding-top: 200rpx;
	}

	.question-c p {

		font-size: 28rpx;
		font-family: Lantinghei SC;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
	}

	.question-c ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.question-c ul li {
		width: 469rpx;
		height: 76rpx;
		border: 1rpx solid rgba(238, 182, 44, 1);
		border-radius: 20rpx;
		text-indent: 12rpx;
		margin-top: 25rpx;
	}

	.question-c ul li span {
		font-size: 22rpx;
		font-family: Lantinghei SC;
		font-weight: 600;
		color: rgba(255, 255, 255, 1);
		line-height: 76rpx;
		cursor: pointer;

	}

	.question-right {
		background-color: #1AA017;
		border: 2rpx solid rgba(26, 160, 23, 1) !important;
	}

	.question-wrong {
		background-color: #FF7600;
		border: 2rpx solid #FF7600 !important;
	}

	.modal-end {
		background-color: rgba(0, 0, 0, 0.5);
		background-position: top;
		background-size: 100% 100%;
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 10000000;
		top: 0;
		left: 0;
	}

	.modal-end-bg {
		background: url(../../static/sports/question-end-bg.png) no-repeat;
		background-size: 100% 100%;
		width: 80%;
		height: 50%;
	
		top: 20%;
		left: 10%;
		position: fixed ;
		z-index: 100000000;
		
	}

	.modal-end-t {
		height: 70%;
		
	}
	.modal-end-l {
		width: 60%;
		float: left;
		padding: 76rpx 0 40rpx 40rpx;

	}

	.modal-end-l h3 {
		font-size: 37rpx;
		font-family: Lantinghei SC;
		font-weight: 600;
		color: rgba(255, 255, 255, 1);
	}

	.modal-end-l h5 {
		font-size: 26rpx;
		font-family: Lantinghei SC;
		font-weight: 600;
		color: rgba(51, 51, 51, 1);
	}

	.modal-end-l h2 {
		font-size: 38rpx;
		font-family: Lantinghei SC;
		font-weight: 600;
		color: rgba(51, 51, 51, 1);
	}

	.modal-end-l h2 span {
		color: #fffff;
	}

	.modal-end-r {
		width: 30%;
		float: left;
		height: 60%;
	}

	.modal-end-r img {
		width: 100%;
		height: 100%;
	}
	
	.modal-end-d {
		height: 40%;
		
	}
	.modal-end-d-button{
		width: 419rpx;
		height: 75rpx;
		margin: 0 auto;
		text-align: center;
		background: url(../../static/sports/question-button.png) no-repeat;
		background-size: 100%  100%;
		line-height: 75rpx;
		cursor: pointer;
	}
	.modal-end-d-button span{
		font-size:28rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(255,255,255,1);
	}
	.modal-end-d-d{
	
		width: 100%;
		margin-top: 23rpx;
		text-align: center;
		font-size:22rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(51,51,51,1);
	}
	
	.modal-share {
		background-color: rgba(0, 0, 0, 0.5);
		background-position: top;
		background-size: 100% 100%;
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 10000000;
		top: 0;
		left: 0;
	}
	
	.modal-share-bg {
		background: url(../../static/sports/m-share-bg.png) no-repeat;
		background-size: 120% 100%;
		width: 80%;
		height: 50%;
	
		top: 20%;
		left: 10%;
		position: fixed ;
		z-index: 100000000;
		
	}
	
	.modal-share-t{
		height: 60%;
		padding: 85rpx 270rpx 0 44rpx;
	}
	.modal-share-t h3{
		font-size:44rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(255,255,255,1);
	}
	.modal-share-t h2{
		font-size:51rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(255,255,255,1);
	}
	.modal-share-t h4{
		font-size:36rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:#333333;
	}
	.modal-share-t h4 span{
		color: #FFFFFF;
	}
	.modal-share-t h5{
		font-size:26rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:#333333;
	}
	.modal-share-t h5 span{
		color: #FFFFFF;
	}
	
	.modal-share-d {
		width: 100%;
		padding:30rpx  44rpx 0 44rpx;
	}
	.modal-share-d-l {
		width: 60%;
		float: left;
	}
	.modal-share-d-r {
		width: 40%;
		float: left;
	}
	.modal-share-d-r img{
		width: 118rpx;
	}
	
	.modal-msg {
		background-color: rgba(0, 0, 0, 0.5);
		background-position: top;
		background-size: 100% 100%;
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 10000000;
		top: 0;
		left: 0;
	}
	
	.modal-msg-bg {
		background: url(../../static/sports/m-msg-bg.png) no-repeat;
		background-size: 100% 100%;
		width: 80%;
		height: 50%;
	
		top: 20%;
		left: 10%;
		position: fixed ;
		z-index: 100000000;
		
	}
	
	.modal-msg-bg h3{
		font-size:30rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(51,51,51,1);
		text-align: center;
		margin-top: 44rpx;
	}
	
	
</style>
