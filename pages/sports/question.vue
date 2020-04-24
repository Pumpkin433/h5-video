<template>
	<view class="uni-flex uni-column question-bg">
		<view class="flex-item flex-item-V time-position ">
			<view class="time-text">时间</view>
			<view class="time-interval">
				<uni-countdown
					:show-day="false"
					background-color="transparent"
					color="white"
					:show-colon="true"
					:day="0"
					:hour="0"
					:minute="0"
					:second="this.second"
					:reset="this.reset"
					@timeup="timeUp"
				></uni-countdown>
			</view>

			<view class="time-right-icon">
				<img src="https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/question-jy.gif" alt="" /></view>
		</view>
		<view class="flex-item flex-item-V question-title">
			<p>{{ question.q_title }}</p>
		</view>

		<view class="flex-item flex-item-V question-img">
			<img :src="question.q_image" alt="" />
		</view>
		<view class="flex-item flex-item-V question-option">
			<ul>
				<li v-show="hasClickOption === true" v-for="(option, k) in question_options" :class="option.type == 2 ? 'question-right' : 'question-wrong'">
					<span>{{ option.option }}</span>
				</li>

				<li v-show="hasClickOption === false" v-for="(option, k) in question_options" @click="selectOption(option.type)">
					<span>{{ option.option }}</span>
				</li>
			</ul>
		</view>
		
	

	</view>
</template>

<script>
import uniCountdown from '@/components/linnian-CountDown/uni-countdown.vue';
import http from '@/utils/http.js';
import base from '@/utils/base.js';
import { randomOption } from '@/common/util.js';

export default {
	name: 'question',
	components: {
		uniCountdown
	},
	data() {
		return {
		
			second: 15,
			reset: false,
			questionList: [],
			q_key: 0,
			question: {},
			total_score:0,
			total_question: 0,
			
			uid: null,
			ns_device_id: null,
	
			hasClickOption: false, //是否点击了答案,
			uidStatus: false,
			question_options: []
		};
	},
	onLoad(option) {
		this.questionList = this.$question.questionList;
		this.uid = uni.getStorageSync('uid');
		this.ns_device_id = uni.getStorageSync('ns_device_id');

		// 总积分
		if (option.s != undefined) {
			this.total_score = option.s;
		}

		//下一题
		if (option.k !== undefined && option.k !== 0) {
			this.q_key = option.k;

			this.total_question = this.questionList.length;
			this.question = this.questionList[this.q_key];

			this.question_options = randomOption([this.question.option_a, this.question.option_b, this.question.option_c, this.question.correct], 4);
			// 问题回答完毕
			if (option.k === option.t) {
				this.reset = !this.reset;
				this.second = 0;
				
				uni.reLaunch({
					url:'/pages/sports/result?s='+this.total_score
				})
			}
		} else {
			this.q_key = 0;
			this.total_question = this.questionList.length;
			this.question = this.questionList[this.q_key];
			this.questionList = this.$question.questionList;
			this.question_options = randomOption([this.question.option_a, this.question.option_b, this.question.option_c, this.question.correct], 4);
		}
		// dacuo
		if (option.w !== undefined && option.w == 1) {
			this.reset = !this.reset;
			this.second = 0;
				uni.reLaunch({
					url:'/pages/sports/result?s='+this.total_score
				})
		
		}
	},
	methods: {
		
		
		// 选择答案
		selectOption(type) {
			this.q_key++;
			if (type === 2) {
				this.total_score++;
				this.hasClickOption = true;
				setTimeout(
					function(a, b, c) {
						uni.redirectTo({
							url: '/pages/sports/question?k=' + a + '&s=' + b + '&t=' + c,
							success() {},
							fail: () => {},
							complete: () => {}
						});
					},
					1000,
					this.q_key,
					this.total_score,
					this.total_question
				);
			}
			if (type === 1) {
				this.hasClickOption = true;
				setTimeout(
					function(a, b, c) {
						uni.redirectTo({
							url: '/pages/sports/question?k=' + a + '&s=' + b + '&t=' + c + '&w=1',
							success() {},
							fail: () => {},
							complete: () => {}
						});
					},
					1000,
					this.q_key,
					this.total_score,
					this.total_question
				);
			}
		},
		timeUp() {
			uni.reLaunch({
				url:'/pages/sports/result?s='+this.total_score
			})
		},
		
		turn_back() {
			// uni.navigateBack()
			uni.redirectTo({
				url: '/pages/sports/sports',
				success() {}
			});
		}
	}
};
</script>

<style scoped>
.question-bg {
	width: 100%;
	height: 100%;
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/question-bg.png) no-repeat;
	background-size: 100% 100%;
	/* background-position: center; */
	/* background-size: cover; */
}
.time-position {
	height: 143rpx;
	position: relative;
}

.time-right-icon {
	position: absolute;
	right: 20rpx;
	top: 10rpx;
}
.time-text {
	/* padding-top: 10rpx; */
	width: 100%;
	text-align: center;
	font-size: 36rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: bold;
	color: rgba(255, 255, 255, 1);
}
.time-interval {
	width: 100%;
}
.time-right-icon {
	width: 241rpx;
	height: 133rpx;
	float: right;
}
.time-right-icon img {
	width: 100%;
	height: 100%;
}

.question-title {
	width: 530rpx;
	margin: 0 auto;
	margin-top: 40rpx;
}
.question-title p {
	width: 100%;
	font-size: 36rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(48, 48, 48, 1);
	line-height: 48rpx;
}

.question-img {
	width: 570rpx;
	height: 355rpx;
	margin: 0 auto;
	margin-top: 62rpx;
	border: 1px solid red;
}

.question-img img {
	width: 100%;
	height: 100%;
}

.question-option {
	width: 523rpx;
	margin: 0 auto;
	margin-top: 40rpx;
}
.question-option ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

.question-option ul li {
	width: 523rpx;
	height: 94rpx;

	margin: 0 auto;
	margin-top: 15rpx;
	text-indent: 40rpx;
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/question-option.png) no-repeat center;
	background-size: 100% 100%;
}

.question-option ul li span {
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 94rpx;
}

.question-right {
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/question-right.png) no-repeat !important;
	background-size: 100% 100% !important;
	background-position: center !important;
}

.question-wrong {
	background: url(https://h5-activity.oss-cn-shanghai.aliyuncs.com/basketball-v2/question-wrong.png) no-repeat !important;
	background-size: 100% 100% !important;
	background-position: center !important;
}

.modal-end {
	background-color: rgba(0, 0, 0, 0.5);
	background-position: top;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 10000000;
	top: 0;
	left: 0;
}

.modal-end-bg {
	background: url(http://aloss.hotforest.cn/h5-basketball/q-end-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 80%;
	height: 50%;

	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;

	position: fixed;
	z-index: 100000000;
}

.modal-end-t {
	height: 70%;
}

.modal-end-l {
	width: 60%;
	float: left;
	padding: 89.41rpx 0 47.05rpx 47.05rpx;
}

.modal-end-l h3 {
	font-size: 43.52rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-end-l h5 {
	font-size: 30.58rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}

.modal-end-l h2 {
	font-size: 44.7rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}

.modal-end-l h2 span {
	color: #fffff;
}

.modal-end-r {
	width: 30%;
	float: left;
	height: 60%;
}

.modal-end-r img {
	width: 100%;
	height: 100%;
}

.modal-end-d {
	height: 40%;
}

.modal-end-d-button {
	width: 492.94rpx;
	height: 88.23rpx;
	margin: 0 auto;
	text-align: center;
	background: url(http://aloss.hotforest.cn/h5-basketball/question-button.png) no-repeat;
	background-size: 100% 100%;
	line-height: 88.23rpx;
	cursor: pointer;
}

.modal-end-d-button span {
	font-size: 32.94rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-end-d-d {
	width: 100%;
	margin-top: 27.05rpx;
	text-align: center;
	font-size: 25.88rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}

.modal-share {
	background-color: rgba(0, 0, 0, 0.5);
	background-position: top;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 10000000;
	top: 0;
	left: 0;
}

.modal-share-bg {
	background: url(http://aloss.hotforest.cn/h5-basketball/m-share-bg.png) no-repeat;
	background-size: 120% 100%;
	width: 80%;
	/* height: 50%; */
	height: 756.47rpx;

	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;

	position: fixed;
	z-index: 100000000;
}

.modal-share-t {
	height: 60%;
	padding-top: 100rpx;
	padding-left: 51.76rpx;
}

.modal-share-t h3 {
	font-size: 51.76rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-share-t h2 {
	font-size: 60rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-share-t h4 {
	font-size: 42.35rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: #333333;
}

.modal-share-t h4 span {
	color: #ffffff;
}

.modal-share-t h5 {
	font-size: 30.58rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: #333333;
}

.modal-share-t h5 span {
	color: #ffffff;
}

.modal-share-d {
	width: 100%;
	padding: 35.29rpx 51.76rpx 0 51.76rpx;
}

.modal-share-d-l {
	width: 60%;
	float: left;
}

.modal-share-d-r {
	width: 40%;
	float: left;
}

.modal-share-d-r img {
	width: 138.82rpx;
}

.modal-msg {
	background-color: rgba(0, 0, 0, 0.5);
	background-position: top;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 10000000;
	top: 0;
	left: 0;
}

.modal-msg-bg {
	background: url(http://aloss.hotforest.cn/h5-basketball/m-msg-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 80%;
	height: 564.7rpx;

	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;

	position: fixed;
	z-index: 100000000;
}

.modal-msg-bg h3 {
	font-size: 35.29rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	text-align: center;
	margin-top: 51.76rpx;
}

.modal-msg-name {
	width: 80%;
	margin: 0 auto;
	margin-top: 82.35rpx;
}

.modal-msg-mobile {
	width: 80%;
	margin: 0 auto;
	margin-top: 47.05rpx;
}

.modal-msg-name span {
	font-size: 25.88rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	display: block;
	float: left;
	text-align: right;
	width: 121.17rpx;
}

.modal-msg-name input {
	padding-left: 23.52rpx;
	width: 330.58rpx;
	border-bottom: 1px solid #4e4e4e;
}

.modal-msg-mobile span {
	font-size: 25.88rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	display: block;
	float: left;
	text-align: right;
	width: 121.17rpx;
}

.modal-msg-mobile input {
	padding-left: 23.52rpx;
	width: 330.58rpx;
	border-bottom: 1px solid #4e4e4e;
}

.modal-msg-button {
	width: 520rpx;
	height: 84.7rpx;
	margin: 0 auto;
	margin-top: 117.64rpx;
	text-align: center;
	background: url(http://aloss.hotforest.cn/h5-basketball/question-button.png) no-repeat;
	background-size: 100% 100%;
	cursor: pointer;
}

.modal-msg-button span {
	font-size: 42.35rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-answer-error {
	background-color: rgba(0, 0, 0, 0.5);
	background-position: top;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 10000000;
	top: 0;
	left: 0;
}

.modal-answer-error-bg {
	background: url(http://aloss.hotforest.cn/h5-basketball/a-error-bg.png) no-repeat;
	background-size: 100% 100%;
	/* width: 80%; */
	/* height: 50%; */
	width: 589.41rpx;
	height: 623.52rpx;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	position: fixed;
	z-index: 100000000;
}

.modal-a-circle {
	width: 232.94rpx;
	height: 232.94rpx;
	margin: 0 auto;
	margin-top: -94.11rpx;
}

.modal-a-circle img {
	width: 100%;
}

.modal-answer-error-bg h4 {
	text-align: center;
	font-size: 30.58rpx;
	color: #666666;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 61.76rpx;
}

.modal-answer-error-bg h3 {
	text-align: center;
	font-size: 44.7rpx;
	color: #333333;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 9.41rpx;
}

.modal-answer-error-bg h3 span {
	color: #db9031;
}

.modal-answer-error-bg h5 {
	text-align: center;
	font-size: 30.58rpx;
	color: #333333;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 9.41rpx;
}

.modal-answer-error-bg h5 span {
	color: #db9031;
}

.modal-a-button {
	width: 492.94rpx;
	height: 84.7rpx;
	margin: 0 auto;
	margin-top: 38.82rpx;
	background: url(http://aloss.hotforest.cn/h5-basketball/a-error-button.png) no-repeat;
	background-size: 100% 100%;
	text-align: center;
	cursor: pointer;
}

.modal-a-button span {
	line-height: 84.7rpx;
	font-size: 32.94rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-a-b-t {
	margin-top: 23.52rpx;
	text-align: center;
}

.modal-a-b-t span {
	font-size: 25.88rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}

.modal-answer-timeout {
	background-color: rgba(0, 0, 0, 0.5);
	background-position: top;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 10000000;
	top: 0;
	left: 0;
}

.modal-answer-timeout-bg {
	background: url(http://aloss.hotforest.cn/h5-basketball/a-error-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 80%;
	height: 50%;
	/* marign:auto 0; */
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;

	position: fixed;
	z-index: 100000000;
}

.modal-t-circle {
	width: 232.94rpx;
	height: 232.94rpx;
	margin: 0 auto;
	margin-top: -94.11rpx;
}

.modal-t-circle img {
	width: 100%;
}

.modal-answer-timeout-bg h4 {
	text-align: center;
	font-size: 30.58rpx;
	color: #666666;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 31.76rpx;
}

.modal-answer-timeout-bg h3 {
	text-align: center;
	font-size: 44.7rpx;
	color: #333333;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 18.82rpx;
}

.modal-answer-timeout-bg h3 span {
	color: #db9031;
}

.modal-answer-timeout-bg h5 {
	text-align: center;
	font-size: 30.58rpx;
	color: #333333;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 18.82rpx;
}

.modal-answer-timeout-bg h5 span {
	color: #db9031;
}

.modal-t-button {
	width: 492.94rpx;
	height: 84.7rpx;
	margin: 0 auto;
	margin-top: 47.05rpx;
	background: url(http://aloss.hotforest.cn/h5-basketball/a-error-button.png) no-repeat;
	background-size: 100% 100%;
	text-align: center;
	cursor: pointer;
}

.modal-t-button span {
	line-height: 84.7rpx;
	font-size: 32.94rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-t-b-t {
	text-align: center;
}

.modal-t-b-t span {
	font-size: 25.88rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}

/deep/ .uni-countdown__number:first-child {
	display: none;
}

/deep/ .uni-countdown__splitor {
	display: none;
}

/deep/ .uni-countdown__number:nth-child(3) {
	display: none;
}

/deep/ .uni-countdown__number:nth-child(5) {
	margin: 0 auto;
	width: 77rpx;
	height: 59rpx;
}

/deep/ .uni-countdown__number:nth-child(5) span {
	font-size: 80rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: bold;
	color: rgba(255, 255, 255, 1);
}
</style>
