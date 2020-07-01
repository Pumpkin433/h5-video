<template>
	<view class="video-bg">
		<view class=" uni-flex uni-column back-icon">
			<img @click="backIndex" src="https://aloss.hotforest.cn/video/back-icon.png" alt="back">
		</view>
		<view class="uni-flex uni-column">
			<view class="flex-item">
				<view class="uni-padding-wrap uni-common-mt">
					<view v-if="video">
						<video
							id="myVideo"
							:poster="video.cover_url"
							:src="video.source_url"
							:title="video.title"
							@error="videoErrorCallback"
							controls
							object-fit="contain"
						></video>
					</view>
				
				</view>
			</view>
			<view class="flex-item video-title">
				{{video.title}}
			</view>
			<view class="flex-item video-description">
				{{video.description}}
			</view>
		</view>
		<view class="uni-flex uni-column">
			<view class="flex-item comment-t">
				最新评论 
			</view>
			
			<view class="flex-item comment-item">
				<view class="comment-l">
					<img src="https://aloss.hotforest.cn/video/back-icon.png" alt="avatar">
				</view>
				<view class="comment-r">
					<view class="flex-item">
						xxx
					</view>
					<view class="flex-item">
						xxxxxxxxxxxxxxxxxxxx
					</view>
				</view>
			</view>
		</view>
		
		<view class="comment-input-bg">
			<view class="comment-input">
				<input type="text" v-model="commentContent" placeholder="我想说的话" />
			</view>
			<view class="comment-button">
				<button type="default" @click="addComment()">发表</button>
			</view>
			<view class="comment-share">
				
				<img @click="share" src="https://aloss.hotforest.cn/video/share-icon.png" alt="share">
			</view>
			<div class="m-share"></div>
		</view>
		
		
	</view>
</template>

<script>
	import base from '../../utils/base.js';
	import Mshare from '../../common/m-share/dist/m-share.js'
	
	export default{
		data(){
			return {
				videoId:'',
				video:'',
				src: '',
				commentContent:'',
				activityId:6,
				uid:1,
				
			}
		},
		onReady: function(res) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo');
			// #endif
		},
		onLoad(option) {
			var that= this;
			that.videoId = option.id;
			that.getVideoDetail(that.videoId);
		},
		methods:{
			share:function(){
				console.log(Mshare);
				
				const config = {
				  link:  'http://www.qq.com', // 网址，默认使用window.location.href
				  title: '标题',  // 标题，默认读取document.title 
				  desc:  '分享描述', // 描述, 默认读取<meta name="description" content="desc" />
				  imgUrl: 'http://www.dearhaoge.com/project/m-share/demo1.png' ,
				  types: ['wx', 'wxline', 'qq', 'qzone', 'sina'], // 启用的社交分享,默认为全部启用
				  infoMap: { 
				    wx: {
				      link: '分享到微信的链接', // 覆盖分享到微信的链接
				      title: '分享到微信的标题', // 覆盖分享到微信的标题
				      desc: '分享到微信的描述', // 覆盖分享到微信的标题
				      imgUrl: '分享到微信的图片链接' // 覆盖分享到微信的图片链接
				    }
				  },
				  fnDoShare(type) {
				    // 执行分享的回调，type为'wx', 'wxline', 'qq', 'qzone', 'sina'
				  }
				};
				Mshare.init(config);
			},
			backIndex:function(){
				uni.navigateTo({
					url:'/'
				})
			},
			getVideoDetail:function(videoId){
				var that=this;
				var data = {
					videoId:videoId
				}
				uni.request({
					url: base.sq + '/activity/api.Video/getVideoDetail',
					data:data,
					success: res => {
						console.log(res);
						if (res.statusCode === 200) {
							if (res.data.code == 0) {
								that.video = res.data.data;
							} else {
								uni.showToast({
									title: res.data.info,
									icon: 'none'
								});
							}
						} else {
							uni.showToast({
								title: '服务出错',
								icon: 'none'
							});
						}
					}
				});
			},
			addComment:function(){
				var that = this;
				let data = {
					activity_id:that.activityId,
					uid:that.uid,
					video_id:that.videoId,
					parent_id:0,
					content:that.commentContent
					
				}
				uni.request({
					url: base.sq + '/activity/api.Video/addComment',
					data:data,
					method:'POST',
					success: res => {
						console.log(res);
						if (res.statusCode === 200) {
							if (res.data.code == 0) {
								
							} else {
								uni.showToast({
									title: res.data.info,
									icon: 'none'
								});
							}
						} else {
							uni.showToast({
								title: '服务出错',
								icon: 'none'
							});
						}
					}
				});
			},
			sendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: this.getRandomColor()
				});
				this.danmuValue = '';
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				});
			},
			getRandomColor: function() {
				const rgb = [];
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16);
					color = color.length == 1 ? '0' + color : color;
					rgb.push(color);
				}
				return '#' + rgb.join('');
			},
		}
	}
</script>

<style>
	/deep/ .uni-video-cover-play-button{
		width: 180rpx;
		height: 180rpx;
		border-radius: 180rpx;
		background-image: url(https://aloss.hotforest.cn/video/start.png) !important;
	}
	/deep/ .uni-video-cover-duration{
		display: none;
	}
	.video-bg{
		height: 100%;
		background-color: #FFFFFF;
	}
	#myVideo{
		width: 100% !important;
		/* height: 420rpx; */
	}
	.uni-padding-wrap{
		width: 100%;
		padding: 0;
		margin: 0;
	}
	.video-title{
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:600;
		color:rgba(51,51,51,1);
		padding: 26rpx 33rpx 0 22rpx;
	}
	.video-description{
		font-size:22rpx;
		font-family:Lantinghei SC;
		font-weight:200;
		color:rgba(102,102,102,1);
		line-height:35px;
		padding: 0rpx 33rpx 0 22rpx;
		border-bottom:1px solid #F2F2F2;
	}
	.comment-item {
		
		padding-left: 22rpx;
		padding-right: 22rpx;
		padding-bottom: 22rpx;
		border-bottom: 1px solid #F2F2F2;
	}
	.comment-t {
		padding-left: 22rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	.comment-l{
		width: 14%;
		float: left;
	}
	.comment-l img{
		width: 68rpx;
		height: 68rpx;
		border-radius: 68rpx;
	}
	.comment-r{
		width: 86%;
		float: left;
	}
	
	
	.comment-input-bg{
		position: fixed;
		z-index: 100;
		bottom: 40rpx;
		width: 100%;
		background-color: #FFFFFF;
	}
	.comment-input {
		width: 70%;
		float: left;
	}
	.comment-input input{
		width: 90%;
		margin: 0 auto;
		height:55rpx;
		background:rgba(241,241,241,1);
		border-radius:28rpx;
		text-indent: 30rpx;
	}
	.comment-button{
		width: 18%;
		float: left;
	}
	.comment-button button{
		width:137rpx;
		height:55rpx;
		background:rgba(216,73,73,1);
		border-radius:28rpx;
		line-height: 55rpx;
		font-size:24rpx;
		font-family:Lantinghei SC;
		font-weight:200;
		color:rgba(255,255,255,1);
	}
	.comment-share{
		width: 12%;
		float: left;
		text-align: center;
	}
	.comment-share img{
		width: 46rpx;
		height: 41rpx;
		margin-top: 8rpx;
	}
	
	.back-icon {
		padding-top: 20rpx;
		padding-left: 26rpx;
		padding-bottom: 20rpx;
	}
	.back-icon img {
		width: 55rpx;
		height: 55rpx;
	}
</style>
