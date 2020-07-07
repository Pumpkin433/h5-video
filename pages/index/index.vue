<template>
	<view class="index-bg">
		<view class="uni-flex uni-column video-item" v-if="videoList" v-for="(video, k) in videoList" :key="k" 
		@click="turnVideoDetail(video.id,video.type)">
			<view class="flex-item video-item-video">
				<img :src="video.cover_url" alt="视频封面" />
				<view class="video-start-icon"><img src="https://aloss.hotforest.cn/video/start.png" alt="开始" /></view>
			</view>
			<view class="flex-item video-title">
				<text>{{ video.title }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import base from '../../utils/base.js';

export default {
	data() {
		return {
			videoList: [],
			src: '',
			uid: '', // 用户id
			token: '',
			ns_device_id: '',
			loginAppStatus: false ,//登陆app状态
			activity_id:6,
		};
	},
	onLoad(option) {
		var that = this;
		that.uid = option.uid;
		that.token = option.token;
		that.ns_device_id = option.ns_device_id;
		
		// if (typeof contact === undefined) {
		// 	uni.showToast({
		// 		title: '请下载全民体育APP观看视频',
		// 		icon: 'none',
		// 		mask: true
		// 	});
		// } else {
			// if (that.uid !== '' && that.uid !== 'null' && that.uid !== undefined) {
				// uni.setStorageSync('uid', that.uid);
				// uni.setStorageSync('token', that.token);
				// uni.setStorageSync('ns_device_id', that.ns_device_id);
				// this.loginAppStatus = true;	
				
				// let req_url = base.bd + '/v3/user/info';
				// let headers = {
				// 	ns_device_id: that.ns_device_id,
				// 	uid: that.uid,
				// 	token: that.token
				// };
				// uni.request({
				// 	url:req_url,
				// 	header:headers,
				// 	method:'GET',
				// 	success:function(res){
				// 		console.log(res);
				// 		if(res.statusCode == 200){
				// 			if (res.data.Status == 1) {
				// 				let avatar_url = res.data.Data.avatar_url;
				// 				let nickname = res.data.Data.nickname;
				// 				let mobile = res.data.Data.phone;
								
				// 				that.addUserInfo(nickname, mobile,avatar_url);
				// 			}
				// 		}else{
				// 			uni.showToast({
				// 				title: '服务器错误',
				// 				icon: 'none'
				// 			});
				// 		}
				// 	}
				// })
				
				
			// } else {
				// this.loginAppStatus = false;
				// contact.onLoginDone = function(uid, token) {
				// 	let ns_device_id = uni.getStorageSync('ns_device_id');
				// 	uni.reLaunch({
				// 		url: '/pages/mid/mid?uid=' + uid + '&token=' + token + '&ns_device_id=' + ns_device_id
				// 	});
				// };
			// }
		// }
		
		that.getVideoList();
	},
	methods: {
		getVideoList: function() {
			var that = this;
			uni.request({
				url: base.sq + '/activity/api.Video/getList',
				success: res => {
					console.log(res);
					if (res.statusCode === 200) {
						if (res.data.code == 0) {
							that.videoList = res.data.data;
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
		turnVideoDetail: function(videoId,videoType) {
			var that = this;
			// let loginAppStatus = that.loginAppStatus;
			// if(loginAppStatus){
				let data = {
					uid:that.uid,
					activity_id:that.activity_id,
					video_id:videoId
				}
				uni.request({
					url:base.sq+'/activity/api.Video/addLog',
					method:'POST',
					data:data,
					success:function(res){
						console.log(res)
						if(res.statusCode == 200){
							if(videoType===1){
								uni.navigateTo({
									url: '/pages/index/video?id=' + videoId +'&uid='+that.uid+'&token='+that.token+'&ns_device_id='+that.ns_device_id
								});
							}
							if(videoType === 2){
								uni.navigateTo({
									url: '/pages/index/videoY?id=' + videoId + '&uid='+that.uid+'&token='+that.token+'&ns_device_id='+that.ns_device_id
								});
							}
							
						}else{
							uni.showToast({
								title: '服务器错误',
								icon: 'none'
							});
						}
					}
				})
				
			// }else{
			// 	contact.requireLogin();
			// }
			
		},
		addUserInfo:function(name, mobile,avatar_url){
			var that = this;
			var uid = that.uid;
			var activity_id = that.activity_id;
			var ns_device_id = that.ns_device_id;
			
			var user_type = 1;
			
			let data = {
				uid: uid,
				name: name,
				mobile: mobile,
				avatar_url:avatar_url,
				activity_id: activity_id,
				ns_device_id: ns_device_id,
				user_type: user_type,
				activity_type:activity_id
			};
			uni.request({
				url:base.sq + '/activity/api.Users/add',
				data:data,
				method:'POST',
				success:function(res){
					if(res.statusCode == 200){
						console.log(res)
					}else{
						uni.showToast({
							title: '服务器错误',
							icon: 'none'
						});
					}
				}
			})
			
		
			
		},
	}
};
</script>

<style>
.index-bg {
	height: 100%;
	background-color: #ffffff;
}
.video-item {
	background-color: #ffffff;
	padding-bottom: 20rpx;
}
.video-item-video {
	background-color: rgba(0, 0, 0, 0.5);
	height: 420rpx;
	position: relative;
}
.video-item-video img {
	height: 100%;
	width: 100%;
}
.video-start-icon {
	width: 80rpx;
	height: 80rpx;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;

	margin: auto;
}
.video-start-icon img {
	max-width: 100%;
}

.video-title {
	font-size: 26rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	line-height:35rpx;
	color: rgba(51, 51, 51, 1);
	padding: 10rpx 33rpx  0 22rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2; 
	-webkit-box-orient: vertical;
}
</style>
