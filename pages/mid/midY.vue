<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		name:'midY',
		data(){
			return {
				
			}
		},
		onShow(){
			
		},
		onLoad(option){
			var that = this;
			let uid = option.uid;
			let token = option.token;
			let ns_device_id = option.ns_device_id;
			let videoId = option.videoId;
			uni.setStorageSync('uid',uid)
			uni.setStorageSync('token',token)
			uni.setStorageSync('ns_device_id',ns_device_id)
			uni.setStorageSync('ns_device_id',videoId)
			
			console.log(uid)
			console.log(token)
			console.log(ns_device_id)
			uni.reLaunch({
				url:'/pages/index/videoY?uid=' + uid + '&token=' + token + '&ns_device_id=' + ns_device_id+'&id='+videoId
			})
		}
	}
</script>

<style>
</style>
