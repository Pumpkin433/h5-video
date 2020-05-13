<template>
	<scroll-view :scroll-top="scrollTop" 
	scroll-y="true" class="scroll-Y record-bg" 
	@scroll="scroll">
		<view id="record-top" class="scroll-view-item ">
			<view class="uni-flex uni-row record-top">
				<view class="flex-item record-top-back" @click="recordBack()">
					<img src="https://aloss.hotforest.cn/sign/record-back.png" alt="back">
				</view>
				<view class="flex-item record-top-title">兑换记录</view>
			</view>
		</view>
		<view id="record-c" class="scroll-view-item ">
			<view class="uni-flex uni-row record-c-top">
				<view class="flex-item record-c-top-l">兑换奖品</view>
				<view class="flex-item record-c-top-r">兑换码</view>
			</view>
			<view class="uni-flex uni-row record-c-item" v-for="(record,k) in exchangeRecords" :key="k">
				<view class="flex-item record-c-item-1">{{record.prize_name}}</view>
				<view class="flex-item record-c-item-2">{{record.exchange_code}}</view>
				<view class="flex-item record-c-item-3" @click="copyCode(record.exchange_code)">复制</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
// 引入文件
import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js';
import http from '@/utils/http.js';
import base from '@/utils/base.js';

export default {
	name: 'index',
	data() {
		return {
			scrollTop: 0,
			old: {
				scrollTop: 0
			},
			exchangeRecords:[],
		};
	},
	onLoad(option) {
		// this.uid = uni.getStorageSync('uid');
		this.uid = 468974;
		this.getUserExchangeRecord(this.$question.activity_id,this.uid);
	},
	methods: {
		getUserExchangeRecord(activity_id, uid) {
			let data = {
				activity_id: activity_id,
				uid: uid
			};
			let req_url = base.sq + '/activity/api.Users/getUserExchangeRecord';
			http.post(req_url, data).then(res => {
				console.log(res)
				if (res.status == 200) {
					if(res.data.code == 0){
						this.exchangeRecords = res.data.data;
					}
				} else {
					alert('serror error ');
				}
			});
		},
		// 触发方法
		copyCode(exchangeCode) {
			let content = exchangeCode; // 复制内容，必须字符串，数字需要转换为字符串
			const result = h5Copy(content);
			if (result === false) {
				uni.showToast({
					title: '不支持'
				});
			} else {
				uni.showToast({
					title: '复制成功',
					icon: 'none'
				});
			}
		},
		upper: function(e) {
			console.log(e);
		},
		lower: function(e) {
			console.log(e);
		},
		scroll: function(e) {
			console.log(e);
			this.old.scrollTop = e.detail.scrollTop;
		},
		goTop: function(e) {
			this.scrollTop = this.old.scrollTop;
			this.$nextTick(function() {
				this.scrollTop = 0;
			});
			uni.showToast({
				icon: 'none',
				title: '纵向滚动 scrollTop 值已被修改为 0'
			});
		},
		recordBack(){
			uni.navigateTo({
				url:'/'
			})
		}
	}
};
</script>

<style>
.record-c-top {
	width: 682rpx;
	height: 60rpx;
	background: rgba(255, 222, 191, 1);
	border-radius: 26rpx;
	margin: 0 auto;
}
.record-c-top-l {
	font-size: 26rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	line-height: 60rpx;
	width: 50%;
	text-align: left;
	text-indent: 40rpx;
}
.record-c-top-r {
	font-size: 26rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	line-height: 60rpx;
	width: 50%;
	text-align: left;
}

.record-c-item {
	width: 682rpx;
	height: 90rpx;
	margin: 0 auto;
	border-bottom: 1rpx solid rgba(222, 219, 219, 1);
}
.record-c-item-1 {
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	line-height: 90rpx;
	text-indent: 40rpx;
	width: 44%;
}
.record-c-item-2 {
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	line-height: 90rpx;
	width: 40%;
}
.record-c-item-3 {
	width: 16%;
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(67, 147, 255, 1);
	line-height: 90rpx;
}

#record-top{
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	width: 100%;
	height: 80rpx;
	background-color: #f9f6ed;
	
}
#record-c{
	padding-top: 100rpx;
	/* background-color: #FFFFFF; */
}

.record-top{	
	width: 100%;
	height: 80rpx;
}
.record-top-back{
	position: absolute;
	left: 20rpx;
	top: 20rpx;
	width: 34rpx;
	height: 33rpx;
	
}
.record-top-back img{
	width: 100%;
	height: 100%;
}
.record-top-title{
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	font-size:32rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(51,51,51,1);
	text-align: center;
}
.record-bg{
	background: url(https://aloss.hotforest.cn/sign/record-bg.png) no-repeat center;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
}
</style>
