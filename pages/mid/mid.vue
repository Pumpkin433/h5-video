<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		name:'mid',
		onShow(){
			
		},
		onLoad(option){
			let uid = option.uid;
			let token = option.token;
			let ns_device_id = option.ns_device_id;
			uni.setStorageSync('uid',uid)
			uni.setStorageSync('token',token)
			uni.setStorageSync('ns_device_id',ns_device_id)
			
			console.log(uid)
			console.log(token)
			console.log(ns_device_id)
			uni.reLaunch({
				url:'/pages/index/index?uid=' + uid + '&token=' + token + '&ns_device_id=' + ns_device_id
			})
		}
	}
</script>

<style>
</style>
