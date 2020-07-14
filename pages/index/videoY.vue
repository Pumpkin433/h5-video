<template>
	<view class="video-bg">
		<view class="uni-flex uni-column video-container">
			<view class="flex-item" style="height: 100%;" @touchstart="showVideoTitle" @touchend="hideVideoTitle">
				<view class="uni-padding-wrap uni-common-mt" style="height: 100%;">
					<view v-if="video" style="height: 100%;">
						<video
							id="myVideo"
							:poster="video.cover_url"
							:src="video.source_url"
							@error="videoErrorCallback"
							@play="videoPlay"
							@ended="videoEnd"
							@timeupdate="videoTimeupdate"
							:controls="controlsValue"
							:muted="mutedValue"
							enable-danmu
							danmu-btn
							:danmu-list="danmuList"
							autoplay="true"
							object-fit="contain"
							:enable-progress-gesture="false"
							:page-gesture="false"
						>
							<!-- <cover-view class="back-icon" v-if="showVideoBackIcon"> -->
							<!-- <img @click="backIndex" src="https://aloss.hotforest.cn/video/video-back-icon.png" alt="back" /> -->
							<!-- </cover-view> -->
							<!-- <cover-view class="muted-icon" v-if="showMutedIcon" :class="mutedActivited ? 'muted-icon-active' : '' ">
								<text v-if="mutedActivited" class="muted-icon-active"  @click="cancelVideoMuted">静音</text>
								<text v-if="!mutedActivited"   @click="videoMuted">静音</text>
							</cover-view> -->
							<cover-view class="video-replay" v-if="showVideoReplayIcon" @click="videoReplay">
								<img src="https://aloss.hotforest.cn/video/start.png" alt="重播" />
							</cover-view>
							<cover-view class="video-error" v-if="showVideoErrorIcon" @click="videoErrorReplay">
								<img src="https://aloss.hotforest.cn/video/start.png" alt="视频出错" />
							</cover-view>
							<!-- 修改颜色 -->
							<cover-view class="countdown-bg" v-if="showCountdown">
								<view class="countdown-1"><img src="@/static/video/qmty-logo.png" alt="logo" /></view>
								<view class="countdown-2">直播即将开始</view>
								<view class="countdown-3"><uni-countdown @timeup="timeUp" :show-day="false" :hour="hour" :minute="minute" :second="second"></uni-countdown></view>
							</cover-view>
						</video>
					</view>
				</view>
			</view>
			<!-- <view class="flex-item video-title">{{ video.title }}</view> -->
			<!-- <view class="flex-item video-description">{{ video.description }}</view> -->
		</view>
		<view class="uni-flex uni-column comment-container" id="comment-list">
			<view class="flex-item comment-t">李秋平老师做客全民体育，直播间留言有机会抽取李秋平老师签名篮球</view>

			<!-- <view v-if="!hasComemnts" class="flex-item comment-no-comments">
				<view class="comment-no-comments-img"><img src="https://aloss.hotforest.cn/video/no-comments-icon.png" alt="无评论图" /></view>
				<view class="comment-no-comments-text">暂无评论，说说你的看法</view>
			</view>
			 -->
		</view>

		<view class="comment-input-bg">
			<view class="comment-input">
				<input type="text" v-model="commentContent" placeholder="我想说的话" />
			</view>
			<!-- <view class="comment-button"><button type="default" @click="addComment()">发表</button></view> -->
			<view class="comment-button"><button type="default" @click="addDanmu()">发表</button></view>
		</view>
		
		<view class="video-refresh">
			<uni-icons type="refresh" size="30" color="#ffffff" @click="videoRefresh"></uni-icons>
		</view>
		
	</view>
</template>

<script>
import base from '../../utils/base.js';
import Mshare from 'm-share';
import uniCountdown from '@/components/uni-countdown/uni-countdown.vue';
import { startUnix, endUnix } from '@/common/util.js';
import io from 'socket.io-client';

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
			nickname: '',
			token: '',
			ns_device_id: '',
			hasComemnts: false,
			showVideoBackIcon: false,
			showVideoReplayIcon: false, // 显示重播按钮
			showVideoErrorIcon: false, //显示视频错误按钮
			loginAppStatus: false, //登陆app状态
			mutedValue: false, //静音
			controlsValue: true,
			mutedActivited: true,
			showMutedIcon: false,
			hour: 0,
			minute: 0,
			second: 0,
			showCountdown: false,
			showCommentInput: true,
			danmuList: [],
			danmuValue: '',
			videoCurrentTime: '',
			// ioUrl: 'http://localhost:3000',
			ioUrl: 'http://websockets.hotforest.cn',
			danmuSockets: ''
		};
	},
	components: { uniCountdown },
	onReady: function(res) {
		// #ifndef MP-ALIPAY
		this.videoContext = uni.createVideoContext('myVideo');
		// #endif
	},
	destroyed() {
		var that  = this;
		var socket = that.danmuSockets;
		socket.close();
	},
	onLoad(option) {
		var that = this;
		// var socket = io(that.ioUrl);
		if(that.danmuSockets == ''){
			that.danmuSockets = io(that.ioUrl);
		}
		var socket = that.danmuSockets;
		socket.on('connect', function() {
			console.log('connect');
			// let nickname = msg.nickname ?? '游客';
			// var obj = document.getElementById('comment-list');
			// var str = '<view style="width:100%;color:#ffffff;font-size:16px;">欢迎'+ nickname +'，光临全民体育直播间！'+ '</view>'	
			// document.getElementById("comment-list").innerHTML+=str
			// obj.scrollTop = obj.scrollHeight;
					
		});
		socket.on('danmu message', function(msg) {
			console.log(msg);
			let text = msg.content;
			let nickname = msg.nickname;
		
			
			var obj = document.getElementById('comment-list');
			var str = '<view style="color:#ffffff;font-size:16px;padding-left:10px;">'+ nickname +' ：' + text +'</view>'	
			document.getElementById("comment-list").innerHTML+=str
			obj.scrollTop = obj.scrollHeight;
		
			// that.videoContext.sendDanmu({
			// 	text: nickname + '：' + text,
			// 	color: that.getRandomColor()
			// });
		});

		socket.on('disconnect', function() {
			console.log('disconnect');
		});

		// that.videoId = option.id;
		that.videoId = 4;
		that.uid = option.uid;
		// that.uid = 470225;
		that.token = option.token;
		that.ns_device_id = option.ns_device_id;

		let start_time = new Date('2020/7/8  18:10:00').getTime(); //开始时间 先把时间转成默认格式，再转成时间戳
		let now_time = new Date().getTime(); //获取到当前时间，再转成时间戳
		let sec = Math.round((start_time - now_time) / 1000); //用开始时间戳减去当前时间戳 在处于 1000
		that.second = sec;
		if (sec >= 0) {
			that.showCountdown = true;
		}
		if (that.controlsValue) {
			// that.getVideoDanmuList(that.videoId);
		}
		that.getVideoDetail(that.videoId);
		that.getVideoCommentList(that.videoId);
		that.addVideoLog();

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
								that.nickname = nickname;
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
					uni.reLaunch({
						url: '/pages/mid/midY?uid=' + uid + '&token=' + token + '&ns_device_id=' + that.ns_device_id + '&videoId=' + that.videoId
					});
				};
			}
		}
	},
	onPullDownRefresh() {
		var that = this;
		let uid = that.uid;
		let token = that.token;
		let ns_device_id = that.ns_device_id;
		let videoId = that.videoId;

		setTimeout(function() {
			uni.reLaunch({
				url: '/pages/mid/midY?uid=' + uid + '&token=' + token + '&ns_device_id=' + ns_device_id + '&videoId=' + videoId
			});
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		bindTextAreaBlur: function() {
			console.log('focus');
		},
		focusInput: function() {
			console.log('input focus');
			this.showCommentInput = false;
		},
		timeUp: function() {
			console.log('timeup');
			this.showCountdown = false;
		},
		showVideoTitle: function() {
			console.log('show');
			this.showVideoBackIcon = true;
			this.showMutedIcon = true;
		},
		hideVideoTitle: function() {
			console.log('hide');
			var that = this;
			that.showCommentInput = true;
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
		addDanmu: function() {
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
						content: that.commentContent,
						color: that.getRandomColor(),
						danmu_time: that.videoCurrentTime
					};
					uni.request({
						url: base.sq + '/activity/api.Video/addComment',
						data: data,
						method: 'POST',
						success: res => {
							// console.log(res);
							if (res.statusCode === 200) {
								if (res.data.code == 0) {
									var sockets = that.danmuSockets;
									let danmu_data = {
										'content':that.commentContent,
										'nickname':that.nickname
									}
									sockets.emit('danmu message', danmu_data);
									that.getVideoCommentList(that.videoId);
									that.commentContent = '';
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
						content: that.commentContent,
						color: that.getRandomColor(),
						danmu_time: that.videoCurrentTime
					};
					uni.request({
						url: base.sq + '/activity/api.Video/addComment',
						data: data,
						method: 'POST',
						success: res => {
							console.log(res);
							if (res.statusCode === 200) {
								if (res.data.code == 0) {
									that.videoContext.sendDanmu({
										text: that.uid + ':' + that.commentContent,
										color: that.getRandomColor()
									});
									that.getVideoDanmuList(that.videoId);
									that.commentContent = '';
									// uni.showToast({
									// 	title: '留言成功',
									// 	icon: 'none',
									// 	success: () => {
									// 		that.getVideoCommentList(that.videoId);
									// 		that.commentContent = '';
									// 	}
									// });
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
		getVideoDanmuList: function(videoId) {
			var that = this;
			let data = {
				activity_id: that.activity_id,
				video_id: videoId
			};
			uni.request({
				url: base.sq + '/activity/api.Video/getVideoDanmuList',
				data: data,
				method: 'GET',
				success: function(res) {
					if (res.statusCode == 200) {
						if (res.data.code == 0) {
							that.danmuList = res.data.data;
							console.log(that.danmuList);
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
					if (res.statusCode == 200) {
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
			that.showVideoErrorIcon = true;
			that.mutedValue = true;
		},
		addVideoLog: function() {
			var that = this;
			let data = {
				uid: that.uid,
				activity_id: that.activity_id,
				video_id: that.videoId
			};
			uni.request({
				url: base.sq + '/activity/api.Video/addLog',
				method: 'POST',
				data: data,
				success: function(res) {
					console.log(res);
					if (res.statusCode == 200) {
					} else {
						uni.showToast({
							title: '服务器错误',
							icon: 'none'
						});
					}
				}
			});
		},
		videoTimeupdate: function(event) {
			this.videoCurrentTime = Math.floor(event.detail.currentTime);
		},
		cancelVideoMuted: function() {
			this.mutedValue = false;
			this.mutedActivited = false;
		},
		videoMuted: function() {
			this.mutedValue = true;
			this.mutedActivited = true;
		},
		videoPlay: function() {
			console.log('video-play');
		},
		videoEnd: function() {
			console.log('video-end');
			var that = this;
			this.showVideoReplayIcon = true;
		},
		videoRefresh:function(){
			var that = this;
			let uid = that.uid;
			let token = that.token;
			let ns_device_id = that.ns_device_id;
			let videoId = that.videoId;
			
			uni.reLaunch({
				url: '/pages/mid/midY?uid=' + uid + '&token=' + token + '&ns_device_id=' + ns_device_id + '&videoId=' + videoId
			});
		},
		videoReplay: function() {
			console.log('replay');
			this.videoContext.play();
			this.showVideoReplayIcon = false;
		},
		videoErrorReplay: function() {
			var that = this;
			that.showVideoErrorIcon = false;
			let uid = that.uid;
			let token = that.token;
			let ns_device_id = that.ns_device_id;
			let videoId = that.videoId;

			uni.reLaunch({
				url: '/pages/mid/midY?uid=' + uid + '&token=' + token + '&ns_device_id=' + ns_device_id + '&videoId=' + videoId
			});
		},
		getRandomColor: function() {
			const rgb = [];
			for (let i = 0; i < 3; ++i) {
				let color = Math.floor(Math.random() * 256).toString(16);
				color = color.length == 1 ? '0' + color : color;
				rgb.push(color);
			}
			// return '#' + rgb.join('');
			return '#FFFFFF'
		}
	}
};
</script>

<style>
.video-container {
	width: 100%;
	height: 100%;
	background-color: #ffffff;
}
/deep/ .uni-video-container{
	
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
/deep/ .uni-video-video {
	height: auto !important;
	/* -webkit-transform: rotate(90deg) !important;
		    -moz-transform: rotate(90deg) !important;
		    -o-transform: rotate(90deg) !important;
		    -ms-transform: rotate(90deg) !important;
		    transform: rotate(90deg) !important; */
}
.video-bg {
	height: 100%;
	background-color: #ffffff;
}
#myVideo {
	width: 100% !important;
	height: 90% !important;
	overflow: unset;
}

.uni-padding-wrap {
	width: 100%;
	padding: 0;
	margin: 0;
}
.video-title {
	height: 50rpx;
	margin-top: 20rpx;
	font-size: 28rpx;
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
	font-size: 26rpx;
	font-family: Lantinghei SC;
	font-weight: 200;
	color: rgba(102, 102, 102, 1);
	line-height: 35rpx;
	padding: 0 33rpx 0 22rpx;
	height: 120rpx;

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
}
.comment-container {
	position: fixed;
	z-index: 100;

	bottom: 10%;
	height: 400rpx;
	border-top-right-radius: 40rpx;
	
	width: 90%;
	overflow: scroll;
	white-space:normal;
	word-wrap:break-word;
	word-break:break-all;
	background-color: rgba(0,0,0,0.3);
}
.comment-item {
	padding-top: 22rpx;
	padding-left: 22rpx;
	padding-right: 22rpx;
	padding-bottom: 22rpx;
	border-bottom: 1px solid #f2f2f2;
}
.comment-t {
	color: #FFFFFF;
	padding-left: 22rpx;
	font-size: 32rpx;
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
	color: #FFFFFF;
	/* color: rgba(102, 102, 102, 1); */
}
.comment-r-2 {
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 200;
	color: #FFFFFF;
	/* color: rgba(51, 51, 51, 1); */
}

.comment-input-bg {
	/* display: none; */
	position: fixed;
	z-index: 100;
	bottom: 0rpx;
	/* padding-top: 20rpx; */
	/* padding-bottom: 40rpx; */
	width: 100%;
	height: 10%;
	background-color: #ffffff;
}
.comment-input {
	width: 78%;
	height: 100%;
	float: left;
	display: flex;
	align-items: center;
}
.comment-input textarea {
	width: 90%;
	margin: 0 auto;
	/* height: 55rpx !important; */
	line-height: 55rpx !important;
	background: rgba(241, 241, 241, 1);
	border-radius: 20rpx;
	text-indent: 30rpx;
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
	height: 100%;
	display: flex;
	align-items: center;
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
	width: 61rpx;
	height: 65rpx;
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
.video-error {
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
.video-error img {
	width: 100%;
}
.muted-icon {
	position: absolute;
	width: 80rpx;
	height: 40rpx;
	bottom: 80rpx;
	right: 20rpx;
	font-size: 28rpx;
	text-align: center;
	line-height: 40rpx;
	background-color: rgba(0, 0, 0, 0.5);
	color: #eeeeee;
}
.muted-icon-active {
	color: #0a98d5;
}

.countdown-bg {
	position: absolute;
	top: 0;
	background-color: rgba(0, 0, 0, 1);
	z-index: 1;
	width: 100%;
	height: 100%;
	text-align: center;
	/* display: none; */
}
.countdown-1 {
	margin-top: 240rpx;
}
.countdown-1 img {
	width: 230rpx;
	height: 175rpx;
}
.countdown-2 {
	margin-top: 82rpx;
	font-size: 104rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 104rpx;
}
.countdown-3 {
	margin-top: 97rpx;
}
/deep/ .uni-countdown {
	justify-content: center;
}
/deep/ .uni-countdown__number {
	font-size: 130rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 130rpx;
	width: auto;
	height: auto;
	color: #ffffff !important;
	background-color: unset !important;
}
/deep/ .uni-countdown__splitor {
	color: #ffffff !important;
	font-size: 130rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 100rpx;
	width: auto;
	height: auto;
}
/deep/ .uni-video-danmu p {
	font-size: 36rpx !important;
}
/deep/ .uni-video-danmu-item {
	font-size: 36rpx !important;
}

.video-refresh{
	position: fixed;
	z-index: 100;
	right: 0;
	bottom: 14%;
	width: 10%;
	text-align: center;
}
</style>
