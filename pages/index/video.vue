<template>
	<view class="video-bg">
		<!-- <view class=" uni-flex uni-column back-icon">
			<img @click="backIndex" src="https://aloss.hotforest.cn/video/back-icon.png" alt="back">
		</view> -->
		<view class="uni-flex uni-column video-container">
			<view class="flex-item" @touchstart="showVideoTitle" @touchend="hideVideoTitle">
				<view class="uni-padding-wrap uni-common-mt">
					<view v-if="video">
						<video
							id="myVideo"
							:poster="video.cover_url"
							:src="video.source_url"
							@error="videoErrorCallback"
							@play="videoPlay"
							@ended="videoEnd"
							:controls="controlsValue"
							:muted="mutedValue"
							autoplay="true"
							duration="null"
							object-fit="contain"
						>
							<cover-view class="back-icon" v-if="showVideoBackIcon">
								<!-- <img @click="backIndex" src="https://aloss.hotforest.cn/video/video-back-icon.png" alt="back" /> -->
							</cover-view>
							<cover-view class="muted-icon" v-if="showMutedIcon" :class="mutedActivited ? 'muted-icon-active' : '' ">
								<text v-if="mutedActivited" class="muted-icon-active"  @click="cancelVideoMuted">静音</text>
								<text v-if="!mutedActivited"   @click="videoMuted">静音</text>
							</cover-view>
							<cover-view class="video-replay" v-if="showVideoReplayIcon" @click="videoReplay">
								<img src="https://aloss.hotforest.cn/video/start.png" alt="重播" />
							</cover-view>
						</video>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-flex uni-column comment-container">
			<view class="flex-item video-title">{{ video.title }}</view>
			<view class="flex-item video-description">{{ video.description }}</view>
			<view class="flex-item comment-t">最新评论</view>

			<view v-if="!hasComemnts" class="flex-item comment-no-comments">
				<view class="comment-no-comments-img"><img src="https://aloss.hotforest.cn/video/no-comments-icon.png" alt="无评论图" /></view>
				<view class="comment-no-comments-text">暂无评论，说说你的看法</view>
			</view>
			<view class="flex-item comment-item" v-if="hasComemnts" v-for="(comment, k) in commentList" :key="k">
				<view class="comment-l">
					<img v-if="comment.avatar_url != ''" :src="comment.avatar_url" alt="avatar" />
					<img v-if="comment.avatar_url == ''" src="https://aloss.hotforest.cn/web/default-header.png" alt="avatar" />
				</view>
				<view class="comment-r">
					<view class="flex-item comment-r-1">{{ comment.name }}</view>
					<view class="flex-item comment-r-2">{{ comment.content }}</view>
				</view>
			</view>
		</view>

		<view class="comment-input-bg">
			<div class="m-share"></div>
			<view class="comment-input"><input type="text" v-model="commentContent" placeholder="我想说的话" /></view>
			<view class="comment-button"><button type="default" @click="addComment()">发表</button></view>

			<!-- <view class="comment-share"> -->
			<!-- <img @click="share" src="https://aloss.hotforest.cn/video/share-icon.png" alt="share"> -->
			<!-- </view> -->
		</view>
	</view>
</template>

<script>
import base from '../../utils/base.js';
import Mshare from 'm-share';

export default {
	data() {
		return {
			videoId: '',
			video: '',
			src: '',
			commentContent: '',
			commentList: [],
			activity_id: 7,
			uid: '',
			token: '',
			ns_device_id: '',
			hasComemnts: false,
			showVideoBackIcon: false,
			showVideoReplayIcon: false,
			loginAppStatus: false, //登陆app状态
			mutedValue: true,
			mutedActivited:true,
			showMutedIcon:false,
			controlsValue: true
		};
	},
	onReady: function(res) {
		// #ifndef MP-ALIPAY
		this.videoContext = uni.createVideoContext('myVideo');
		// #endif
	},
	onLoad(option) {
		var that = this;
		// that.videoId = option.id;
		that.videoId = 1;
		that.uid = option.uid;
		// that.uid = 470225;
		that.token = option.token;
		that.ns_device_id = option.ns_device_id;

		that.getVideoDetail(that.videoId);
		that.getVideoCommentList(that.videoId);
		// console.log(typeof contact);
		if (typeof contact !== 'undefined') {
			if (that.uid !== '' && that.uid !== 'null' && that.uid !== undefined) {
				uni.setStorageSync('uid', that.uid);
				uni.setStorageSync('token', that.token);
				uni.setStorageSync('ns_device_id', that.ns_device_id);
				this.loginAppStatus = true;

				let req_url = base.bd + '/v3/user/info';
				let headers = {
					ns_device_id: that.ns_device_id,
					uid: that.uid,
					token: that.token
				};
				uni.request({
					url: req_url,
					header: headers,
					method: 'GET',
					success: function(res) {
						console.log(res);
						if (res.statusCode == 200) {
							if (res.data.Status == 1) {
								let avatar_url = res.data.Data.avatar_url;
								let nickname = res.data.Data.nickname;
								let mobile = res.data.Data.phone;

								that.addUserInfo(nickname, mobile, avatar_url);
							}
						} else {
							uni.showToast({
								title: '服务器错误',
								icon: 'none'
							});
						}
					}
				});
			} else {
				var that = this;
				that.loginAppStatus = false;
				contact.onLoginDone = function(uid, token) {
					// let ns_device_id = uni.getStorageSync('ns_device_id');
					uni.reLaunch({
						url: '/pages/mid/mid?uid=' + uid + '&token=' + token + '&ns_device_id=' + that.ns_device_id + '&videoId=' + that.videoId
					});
				};
			}
		}
	},
	methods: {
		showVideoTitle: function() {
			console.log('show');
			this.showVideoBackIcon = true;
			this.showMutedIcon = true;
		},
		hideVideoTitle: function() {
			console.log('hide');
			var that = this;
			setTimeout(function() {
				that.showVideoBackIcon = false;
				that.showMutedIcon = false;
			}, 5000);
		},
		share: function() {
			const config = {
				types: ['wx', 'wxline', 'qq', 'qzone', 'sina'], // 启用的社交分享,默认为全部启用
				fnDoShare(type) {
					// 执行分享的回调，type为'wx', 'wxline', 'qq', 'qzone', 'sina'
				}
			};
			Mshare.popup(config);
		},
		backIndex: function() {
			uni.navigateTo({
				url: '/'
			});
		},
		addUserInfo: function(name, mobile, avatar_url) {
			var that = this;
			var uid = that.uid;
			var activity_id = that.activity_id;
			var ns_device_id = that.ns_device_id;

			var user_type = 1;

			let data = {
				uid: uid,
				name: name,
				mobile: mobile,
				avatar_url: avatar_url,
				activity_id: activity_id,
				ns_device_id: ns_device_id,
				user_type: user_type,
				activity_type: activity_id
			};
			uni.request({
				url: base.sq + '/activity/api.Users/add',
				data: data,
				method: 'POST',
				success: function(res) {
					if (res.statusCode == 200) {
						console.log(res);
					} else {
						uni.showToast({
							title: '服务器错误',
							icon: 'none'
						});
					}
				}
			});
		},
		getVideoDetail: function(videoId) {
			var that = this;
			var data = {
				videoId: videoId
			};
			uni.request({
				url: base.sq + '/activity/api.Video/getVideoDetail',
				data: data,
				success: res => {
					console.log(res);
					if (res.statusCode === 200) {
						if (res.data.code == 0) {
							that.video = res.data.data;
							if (that.video.is_live == 1) {
								that.controlsValue = false;
							
							}
							if (that.video.is_live == 0) {
								that.controlsValue = true;
							}
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
		addComment: function() {
			var that = this;
			if (typeof contact === 'undefined') {
				uni.showModal({
					title: '如需留言请下载全民体育',
					content: 'APP留言还可以参加抽奖活动哦~',
					success: function(res) {
						if (res.confirm) {
							//openinstall app唤醒
							var data = OpenInstall.parseUrlParams();
							new OpenInstall(
								{
									/*appKey必选参数，openinstall平台为每个应用分配的ID*/
									appKey: 'y346df',
									/*openinstall初始化完成的回调函数，可选*/
									onready: function() {
										var m = this;
										/*在app已安装的情况尝试拉起app*/
										m.wakeupOrInstall();
									}
								},
								data
							);

							console.log('确定');
						} else if (res.cancel) {
							console.log('取消');
						}
					}
				});
			} else {
				let loginAppStatus = that.loginAppStatus;
				if (loginAppStatus) {
					let data = {
						activity_id: that.activity_id,
						uid: that.uid,
						video_id: that.videoId,
						parent_id: 0,
						content: that.commentContent
					};
					uni.request({
						url: base.sq + '/activity/api.Video/addComment',
						data: data,
						method: 'POST',
						success: res => {
							console.log(res);
							if (res.statusCode === 200) {
								if (res.data.code == 0) {
									uni.showToast({
										title: '留言成功',
										icon: 'none',
										success: () => {
											that.getVideoCommentList(that.videoId);
											that.commentContent = '';
										}
									});
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
				} else {
					contact.requireLogin();
				}
			}
		},
		getVideoCommentList: function(videoId) {
			var that = this;
			let data = {
				activity_id: that.activity_id,
				video_id: videoId
			};
			uni.request({
				url: base.sq + '/activity/api.Video/getVideoCommentList',
				data: data,
				method: 'GET',
				success: function(res) {
					console.log(res);
					if (res.statusCode === 200) {
						if (res.data.code == 0) {
							that.commentList = res.data.data;
							if (that.commentList.length > 0) {
								that.hasComemnts = true;
							}
						}
					} else {
						uni.showToast({
							title: '服务器错误',
							icon: 'none'
						});
					}
				}
			});
		},
		videoErrorCallback: function(e) {
			console.log(e);
			var that = this;
			let uid = that.uid;
			let token = that.token;
			let ns_device_id = that.ns_device_id;
			let videoId = that.videoId;
			
			uni.showModal({
				title: '视频播放出错',
				content: '是否重新加载',
				success: function(res) {
					if (res.confirm) {
						uni.reLaunch({
							url: '/pages/mid/midY?uid=' + uid + '&token=' + token + '&ns_device_id=' + ns_device_id+'&videoId='+videoId
						});
						console.log('确定');
					} else if (res.cancel) {
						console.log('取消');
					}
				}
			});
		},
		videoTimeUpdate:function(){
			
		},
		cancelVideoMuted:function(){
			this.mutedValue=false
			this.mutedActivited = false;
			console.log(this.mutedValue)
		},
		videoMuted:function(){
			this.mutedValue=true
			this.mutedActivited = true;
			console.log(this.mutedValue)
		},
		videoPlay: function() {
			console.log('video-play')
		},
		videoEnd: function() {
			console.log('video-end');
			this.showVideoReplayIcon = true;
		},
		videoReplay: function() {
			console.log('replay');
			this.videoContext.play();
			this.showVideoReplayIcon = false;
		}
	}
};
</script>

<style>
.video-container {
	width: 100%;
	height: auto;
	position: fixed;
	z-index: 100;
	top: 0;
	background-color: #ffffff;
	/* padding-bottom: 18rpx; */
}
/deep/ .uni-video-cover-play-button {
	width: 180rpx;
	height: 180rpx;
	border-radius: 180rpx;
	background-image: url(https://aloss.hotforest.cn/video/start.png) !important;
}
/deep/ .uni-video-cover-duration {
	display: none;
}
.video-bg {
	height: 100%;
	background-color: #ffffff;
}
#myVideo {
	width: 100% !important;
	/* height: 420rpx; */
}

.uni-padding-wrap {
	width: 100%;
	padding: 0;
	margin: 0;
}
.video-title {
	font-size: 26rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	line-height: 35rpx;
	padding: 0 33rpx 0 22rpx;

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}
.video-description {
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 200;
	color: rgba(102, 102, 102, 1);
	line-height: 35rpx;
	padding: 18rpx 33rpx 0 22rpx;
	height: 120rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
}
.comment-container {
	padding-top: 480rpx;
	padding-bottom: 100rpx;
}
.comment-item {
	padding-top: 22rpx;
	padding-left: 22rpx;
	padding-right: 22rpx;
	padding-bottom: 22rpx;
	border-bottom: 1px solid #f2f2f2;
	background-color: #ffffff;
}
.comment-t {
	margin-top: 20rpx;
	border-top: 1px solid #f2f2f2;
	padding-left: 22rpx;
	padding-top: 10rpx;
}
.comment-l {
	width: 14%;
	float: left;
}
.comment-l img {
	margin-top: 6rpx;
	width: 68rpx;
	height: 68rpx;
	border-radius: 68rpx;
}
.comment-r {
	width: 86%;
	float: left;
}
.comment-r-1 {
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 200;
	color: rgba(102, 102, 102, 1);
}
.comment-r-2 {
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 200;
	color: rgba(51, 51, 51, 1);
}

.comment-input-bg {
	position: fixed;
	z-index: 100;
	bottom: 0rpx;
	padding-top: 20rpx;
	padding-bottom: 40rpx;
	width: 100%;
	background-color: #ffffff;
}
.comment-input {
	width: 78%;
	float: left;
}
.comment-input input {
	width: 90%;
	margin: 0 auto;
	height: 55rpx;
	background: rgba(241, 241, 241, 1);
	border-radius: 28rpx;
	text-indent: 30rpx;
}
.comment-button {
	width: 18%;
	float: left;
}
.comment-button button {
	width: 137rpx;
	height: 55rpx;
	background: rgba(216, 73, 73, 1);
	border-radius: 28rpx;
	line-height: 55rpx;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 200;
	color: rgba(255, 255, 255, 1);
}
/* .comment-share{
		width: 12%;
		float: left;
		text-align: center;
	}
	.comment-share img{
		width: 46rpx;
		height: 41rpx;
		margin-top: 8rpx;
	} */

.back-icon {
	/* background-color: rgba(0,0,0,1); */
	padding-top: 20rpx;
	padding-left: 26rpx;
	padding-bottom: 20rpx;
}
.back-icon img {
	width: 41rpx;
	height: 45rpx;
}
.muted-icon {
	position: absolute;
	width: 80rpx;
	height: 40rpx;
	bottom: 40rpx;
	right: 40rpx;
	font-size: 28rpx;
	text-align: center;
	line-height: 40rpx;
	background-color: rgba(0,0,0,0.5);
	color: #EEEEEE;
}
.muted-icon-active{
	color: #0a98d5;
}

.comment-no-comments {
	margin-top: 100rpx;
}
.comment-no-comments-img {
	text-align: center;
}
.comment-no-comments-img img {
	width: 146rpx;
	height: 134rpx;
}
.comment-no-comments-text {
	text-align: center;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 200;
	color: rgba(153, 153, 153, 1);
}

.video-replay {
	width: 100rpx;
	height: 100rpx;
	position: absolute;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	font-size: 28rpx;
	color: #0a98d5;
}
.video-replay img {
	width: 100%;
}
</style>
