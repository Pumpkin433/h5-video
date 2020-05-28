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
			
			uni.setStorageSync('uid',option.uid)
			uni.setStorageSync('token',option.token)
			uni.setStorageSync('ns_device_id',option.ns_device_id)
			let uid = uni.getStorageSync('uid');
			let token = uni.getStorageSync('token');
			let ns_device_id = uni.getStorageSync('ns_device_id');
			
			uni.reLaunch({
				url:'/?uid=' + uid + '&token=' + token + '&ns_device_id=' + ns_device_id
			})
		}
	}
</script>

<style>
</style>
