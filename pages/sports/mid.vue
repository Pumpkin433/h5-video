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
			console.log("mid----"+option.ns_device_id)
			uni.setStorageSync('ns_device_id',option.ns_device_id)
			
			uni.reLaunch({
				url:'/'
			})
		}
	}
</script>

<style>
</style>
