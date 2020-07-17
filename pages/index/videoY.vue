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
							:autoplay="true"
							object-fit="contain"
							:enable-progress-gesture="false"
							:page-gesture="false"
							x5-video-player-type="h5-page"
						>
							<cover-view class="video-notice-2"><img src="../../static/video/notice-icon.png" alt="notice" /></cover-view>
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
		</view>
		<view class="uni-flex uni-column comment-container" id="comment-list">
			<view class="flex-item comment-t">【公告】今晚APP直播间留言的用户，将有机会赢得耐克/阿迪足球（6个），乐高曼联主场老特拉福德玩具积木（共2个）</view>
		</view>

		<view class="comment-input-bg">
			<view class="comment-input"><input type="text" request v-model="commentContent" placeholder="我想说的话" /></view>
			<view class="comment-button"><button type="default" @click="addDanmu()">发表</button></view>
		</view>

		<view class="video-refresh"><uni-icons type="refresh" size="30" color="#ffffff" @click="videoRefresh"></uni-icons></view>

		<!-- otplogin -->
		<view v-if="showLoginModal" class="video-otp-bg" @click="closeLoginModal"></view>
		<view class="video-otp" v-if="showLoginModal">
			<view class="video-otp-1">账号登录</view>
			<view class="video-otp-2">
				<input type="number" request v-model="mobile" placeholder="手机号码" />
				<button type="default" @click="sendSms(mobile)">验证码</button>
			</view>
			<view class="video-otp-3"><input type="text" v-model="code" placeholder="验证码" /></view>
			<view class="video-otp-4"><button type="default" @click="otpLogin(mobile, code)">登录</button></view>
		</view>

		<view class="video-notice"><uni-notice-bar :speed="50"  scrollable="true" background-color="rgba(0,0,0,0.5)" color="#ffffff" single="true" :text="noticeText"></uni-notice-bar></view>
	</view>
</template>

<script>
import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';
import base from '../../utils/base.js';
import Mshare from 'm-share';
import uniCountdown from '@/components/uni-countdown/uni-countdown.vue';
import { startUnix, endUnix, getKey, encryptByDES, randomWord } from '@/common/util.js';
import io from 'socket.io-client';

export default {
	data() {
		return {
			videoId: '',
			video: '',
			src: '',
			commentContent: '',
			commentList: [],
			activity_id: 8,
			uid: '',
			nickname: '',
			token: '',
			ns_device_id: '',
			mobile: '', //手机号
			code: '', //验证码
			account: '', //账号
			password: '', // 密码
			hasComemnts: false,
			showVideoBackIcon: false,
			showVideoReplayIcon: false, // 显示重播按钮
			showVideoErrorIcon: false, //显示视频错误按钮
			loginAppStatus: false, //登陆app状态
			showLoginModal: false,
			loginWebStatus: false,
			loginFromWeb: false,
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
			danmuSockets: '',
			noticeText: '【公告】请中奖的小伙伴添加，全民体育官方微信账号：NationalSports'
		};
	},
	components: { uniCountdown, uniNoticeBar },
	onReady: function(res) {
		// #ifndef MP-ALIPAY
		this.videoContext = uni.createVideoContext('myVideo');
		// #endif
		// document.getElementById('myVideo').play();
	},
	destroyed() {
		var that = this;
		var socket = that.danmuSockets;
		socket.close();
	},
	onLoad(option) {
		var that = this;

		// that.videoId = option.id;
		that.videoId = 5;
		that.uid = option.uid;
		that.token = option.token;
		that.ns_device_id = option.ns_device_id;

		let start_time = new Date('2020/7/8  18:10:00').getTime(); //开始时间 先把时间转成默认格式，再转成时间戳
		let now_time = new Date().getTime(); //获取到当前时间，再转成时间戳
		let sec = Math.round((start_time - now_time) / 1000); //用开始时间戳减去当前时间戳 在处于 1000
		that.second = sec;
		if (sec >= 0) {
			that.showCountdown = true;
		}

		that.getVideoDetail(that.videoId);
		// that.getVideoCommentList(that.videoId);
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
								let user_type = 1;
								that.nickname = nickname;
								that.addUserInfo(nickname, mobile, avatar_url, user_type);
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
				let nickname = '游客' + randomWord(false, 5, 5);
				let mobile = '';
				let avatar_url = '';
				let user_type = 4; //游客
				that.addUserInfo(nickname, mobile, avatar_url, user_type);
				that.loginAppStatus = false;
				contact.onLoginDone = function(uid, token) {
					uni.reLaunch({
						url: '/pages/mid/midY?uid=' + uid + '&token=' + token + '&ns_device_id=' + that.ns_device_id + '&videoId=' + that.videoId
					});
				};
			}
		} else {
			that.ns_device_id = 'web';
			var showLoginModal = uni.getStorageSync('showLoginModal');
			var loginWebStatus = uni.getStorageSync('loginWebStatus');
			if (loginWebStatus) {
				that.uid = uni.getStorageSync('uid');
				that.nickname = uni.getStorageSync('nickname');
				that.token = uni.getStorageSync('token');
				that.loginWebStatus = loginWebStatus;
				that.showLoginModal = showLoginModal;
			}
		}

		that.danmuSockets = io(that.ioUrl);
		var socket = that.danmuSockets;
		socket.on('connect', function() {
			console.log('connect');
		});
		socket.on('danmu message', function(msg) {
			console.log(msg);
			let text = msg.content;
			let nickname = msg.nickname;

			if (text !== '' && nickname !== '') {
				var obj = document.getElementById('comment-list');
				var str = '<view style="color:#ffffff;font-size:16px;padding-left:10px;">' + nickname + ' ：' + text + '</view>';
				document.getElementById('comment-list').innerHTML += str;
				obj.scrollTop = obj.scrollHeight;
			}

			// that.videoContext.sendDanmu({
			// 	text: nickname + '：' + text,
			// 	color: that.getRandomColor()
			// });
		});

		socket.on('disconnect', function() {
			console.log('disconnect');
		});
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
		addUserInfo: function(name, mobile, avatar_url, user_type) {
			var that = this;
			var uid = that.uid;
			var activity_id = that.activity_id;

			var ns_device_id = that.ns_device_id;

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
			var commentContent = that.commentContent;
			
			if (typeof contact === 'undefined') {
				if (that.loginWebStatus) {
					if (commentContent !== '') {
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
											content: that.commentContent,
											nickname: that.nickname
										};
										sockets.emit('danmu message', danmu_data);
										// that.getVideoCommentList(that.videoId);
										that.commentContent = '';
									} else {
										// uni.showToast({
										// 	title: res.data.info,
										// 	icon: 'none'
										// });
									}
								} else {
									uni.showToast({
										title: '服务出错',
										icon: 'none'
									});
								}
							}
						});
					}
				} else {
					that.showLoginModal = true;
				}
			} else {
				let loginAppStatus = that.loginAppStatus;
				if (loginAppStatus) {
					if (commentContent != '') {
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
											content: that.commentContent,
											nickname: that.nickname
										};
										sockets.emit('danmu message', danmu_data);
										// that.getVideoCommentList(that.videoId);
										that.commentContent = '';
									} else {
										// uni.showToast({
										// 	title: res.data.info,
										// 	icon: 'none'
										// });
									}
								} else {
									uni.showToast({
										title: '服务出错',
										icon: 'none'
									});
								}
							}
						});
					}
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
		videoRefresh: function() {
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
			return '#FFFFFF';
		},
		sendSms: function(mobile) {
			//发送手机验证码
			var that = this;
			var headers = {
				ns_device_id: that.ns_device_id,
				phone: mobile,
				country_code: '+86'
			};
			uni.request({
				url: base.bd + '/SendLoginSms',
				method: 'GET',
				header: headers,
				success: res => {
					console.log(res);
					if (res.statusCode == 200) {
						if (res.data.Status == 1) {
							uni.showToast({
								title: '验证码发送成功',
								icon: 'success'
							});
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
		otpLogin: function(mobile, code) {
			var that = this;
			var key = getKey();
			var ns_device_id = 'web';

			var headers = {
				ns_device_id: ns_device_id,
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'text/plain'
			};
			var data = {
				ns_device_id: ns_device_id,
				phone: mobile,
				country_code: '+86',
				code: code,
				device_id: 'website',
				platform: 'web'
			};

			var text = encryptByDES(JSON.stringify(data), key);

			uni.request({
				url: base.bd + '/v3/otp/login',
				method: 'POST',
				data: text,
				header: headers,
				success: res => {
					// console.log(res)
					if (res.statusCode == 200) {
						if (res.data.Status == 1) {
							let account = res.data.Data.account;
							let password = res.data.Data.password;
							that.webLogin(account, password);
						} else {
							uni.showToast({
								title: res.data.ErrMsg,
								icon: 'none'
							});
						}
					} else {
						uni.showToast({
							title: '服务错误',
							icon: 'none'
						});
					}
				}
			});
		},
		webLogin: function(account, password) {
			var that = this;
			var key = getKey();
			var ns_device_id = 'web';
			var headers = {
				ns_device_id: ns_device_id,
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'text/plain'
			};
			let data = {
				ns_device_id: ns_device_id,
				type: 1,
				account: account,
				password: password,
				secret: 'web'
			};
			var text = encryptByDES(JSON.stringify(data), key);

			uni.request({
				url: base.bd + '/v3/user/login',
				method: 'POST',
				header: headers,
				data: text,
				success: res => {
					console.log(res);
					if (res.statusCode == 200) {
						if (res.data.Status == 1) {
							that.avatar_url = res.data.Data.avatar_url;
							that.uid = res.data.Data.uid;
							that.token = res.data.Data.token;

							var nickname = res.data.Data.nickname;
							if (nickname == '') {
								that.nickname = that.mobile;
							} else {
								that.nickname = nickname;
							}

							uni.setStorageSync('uid', that.uid);
							uni.setStorageSync('mobile', that.mobile);
							uni.setStorageSync('nickname', that.nickname);
							uni.setStorageSync('token', that.token);
							uni.setStorageSync('loginWebStatus', true);
							uni.setStorageSync('showLoginModal', false);

							that.addUserInfo(that.nickname, that.mobile, that.avatar_url, 2);
							that.loginWebStatus = true;
							that.showLoginModal = false;
						} else {
							uni.showToast({
								title: res.data.ErrMsg,
								icon: 'none'
							});
						}
					} else {
						uni.showToast({
							title: '服务错误',
							icon: 'none'
						});
					}
				}
			});
		},
		closeLoginModal: function() {
			var that = this;
			that.showLoginModal = false;
		}
	}
};
</script>

<style>
.video-container {
	width: 100%;
	height: 100%;
	/* background-color: #ffffff; */
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
}

.video-bg {
	height: 100%;
	background-color: #ffffff;
}
#myVideo {
	width: 100% !important;
	height: 100% !important;
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
	z-index: 140;

	bottom: 10%;
	height: 400rpx;
	border-top-right-radius: 40rpx;

	width: 90%;
	overflow: scroll;
	white-space: normal;
	word-wrap: break-word;
	word-break: break-all;
	background-color: rgba(0, 0, 0, 0.3);
}
.comment-item {
	padding-top: 22rpx;
	padding-left: 22rpx;
	padding-right: 22rpx;
	padding-bottom: 22rpx;
	border-bottom: 1px solid #f2f2f2;
}
.comment-t {
	color: #ffffff;
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
	color: #ffffff;
	/* color: rgba(102, 102, 102, 1); */
}
.comment-r-2 {
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 200;
	color: #ffffff;
	/* color: rgba(51, 51, 51, 1); */
}

.comment-input-bg {

	position: fixed;
	z-index: 110;
	bottom: 0rpx;
	
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

.video-refresh {
	position: fixed;
	z-index: 100;
	right: 0;
	bottom: 14%;
	width: 10%;
	text-align: center;
}
.video-otp-bg {
	position: fixed;
	z-index: 200;
	background-color: rgba(0, 0, 0, 0.2);
	width: 100%;
	height: 100%;
	top: 0;
}
.video-otp {
	position: fixed;
	z-index: 220;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 505rpx;
	height: 503rpx;
	background: url(../../static/video/video-otp.png) no-repeat center;
	background-size: 100% 100%;
}
.video-otp-1 {
	font-size: 36rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 45rpx;
	text-align: center;
	margin-top: 35rpx;
}
.video-otp-2 {
	margin-top: 50rpx;
	position: relative;
}
.video-otp-2 input {
	width: 450rpx;
	height: 70rpx;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0);
	border: 2px solid rgba(255, 255, 255, 1);
	border-radius: 30rpx;
	color: #ffffff;
}

.video-otp-2 button {
	position: absolute;
	width: 137rpx;
	height: 55rpx;
	line-height: 55rpx;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	background: rgba(216, 73, 73, 1);
	border-radius: 28rpx;
	top: 12rpx;
	right: 30rpx;
}
/deep/ .video-otp-2 .uni-input-placeholder {
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 35rpx;
	text-indent: 12rpx;
}
/deep/ .video-otp-3 .uni-input-placeholder {
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 35rpx;
	text-indent: 12rpx;
}

.video-otp-3 {
	margin-top: 33rpx;
}
.video-otp-3 input {
	width: 450rpx;
	height: 70rpx;
	background: rgba(255, 255, 255, 0);
	border: 2px solid rgba(255, 255, 255, 1);
	border-radius: 30rpx;
	margin: 0 auto;
	color: #ffffff;
}

.video-otp-4 {
	margin-top: 70rpx;
}
.video-otp-4 button {
	width: 440rpx;
	height: 70rpx;
	line-height: 70rpx;
	background: rgba(253, 208, 70, 1);
	border-radius: 30rpx;

	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	-webkit-text-stroke: 1px undefined;
	text-stroke: 1px undefined;
}

.video-notice {
	position: fixed;
	z-index: 120;
	top: 0rpx;
	width: 100%;
}
.video-notice-2 {
	position: fixed;
	z-index: 110;
	top: 30rpx;
	width: 100%;
}
.video-notice-2 img {
	width: 100%;
	
}
</style>
