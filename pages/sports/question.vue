<template>
	<view class="question-bg">
		<view class="question-bg-1">
			<view class="question-bg-2">
				<view class="question-setval">
					<uni-countdown
						:show-day="false"
						background-color="transparent"
						color="white"
						:show-colon="true"
						:day="0"
						:hour="0"
						:minute="0"
						:second=this.second
						:reset=this.reset
						@timeup="timeUp"
					></uni-countdown>
				</view>

				<view class="question-c">
					<p v-if="question !== {}">{{question.q_name}}</p>
					<p v-if="question === {}"></p>
					<ul>
						<li v-show="this.correct === -1 || this.sIndex !==1"  @click="select_option('A',1)" ><span>A &nbsp;&nbsp;{{question.option_a}}</span></li>
						<li v-show="this.correct !== -1 && this.sIndex === 1"  @click="select_option('A',1)"  :class=" 'A' === this.correct ? 'question-right' : 'question-wrong'"><span>A &nbsp;&nbsp;{{question.option_a}}</span></li>
						<li v-show="this.correct === -1 || this.sIndex !== 2"  @click="select_option('B',2)"  ><span>B &nbsp;&nbsp;{{question.option_b}}</span></li>
						<li v-show="this.correct !== -1 && this.sIndex ===2 "  @click="select_option('B',2)"  :class=" 'B' === this.correct ? 'question-right' : 'question-wrong'"><span>B &nbsp;&nbsp;{{question.option_b}}</span></li>
						<li v-show="this.correct === -1 || this.sIndex !== 3"  @click="select_option('C',3)"><span>C &nbsp;&nbsp;{{question.option_c}}</span></li>
						<li v-show="this.correct !== -1 & this.sIndex ===3"  @click="select_option('C',3)" :class=" 'C' === this.correct ? 'question-right' : 'question-wrong'"><span>C &nbsp;&nbsp;{{question.option_c}}</span></li>
						<li v-show="this.correct === -1 || this.sIndex !== 4"  @click="select_option('D',4)"><span>D &nbsp;&nbsp;{{question.option_d}}</span></li>
						<li v-show="this.correct !== -1 & this.sIndex === 4"  @click="select_option('D',4)" :class=" 'D' === this.correct ? 'question-right' : 'question-wrong'"><span>D &nbsp;&nbsp;{{question.option_d}}</span></li>
						<!-- @click="modal_end" -->
					</ul>
				</view>

				<!-- 问题答完 弹框 -->
				<view class="modal-end" v-show="isModalEnd === true" @click="question_modal"></view>
				<view class="modal-end-bg" v-show="isModalEnd === true">
					<view class="modal-end-t">
						<view class="modal-end-l">
							<h3>您实在是太棒了!</h3>
							<h5>您已经完成所有的问题</h5>
							<h2>
								获得了
								<span>{{total_score}}</span>
								积分
							</h2>
							<h5>
								您现在排名在
								<span>50+</span>
							</h5>
						</view>
						<view class="modal-end-r"><!-- <img src="../../static/sports/jiangbei.png" alt=""> --></view>
					</view>
					<view class="modal-end-d">
						<div class="modal-end-d-button" @click="score_share_button"><span>分享战绩</span></div>

						<view class="modal-end-d-d">分享可以获得额外的答题机会</view>
					</view>
				</view>
				<!-- 问题答完 弹框结束 -->

				<!-- 分享 弹框 -->
				<view class="modal-share" v-show="isModalShare === true" @click="share_modal"></view>
				<view class="modal-share-bg" v-show="isModalShare === true">
					<view class="modal-share-t">
						<h3>快来全民体育</h3>
						<h2>答题赢大奖</h2>
						<h4>
							我获得了
							<span>{{total_score}}</span>
							积分
						</h4>
						<h5>
							当前排名
							<span>50+</span>
						</h5>
					</view>
					<view class="modal-share-d">
						<view class="modal-share-d-l">
							<p>
								长按识别二维码
								<br />
								下载全民体育APP 参与活动
							</p>
						</view>
						<view class="modal-share-d-r"><img src="../../static/sports/m-share-qrcode.png" alt="" /></view>
					</view>
				</view>
				<!-- 分享弹框结束 -->

				<!-- 信息填写弹框 -->
				<view class="modal-msg" v-show="isModalMsg === true" @click="msg_modal"></view>
				<view class="modal-msg-bg" v-show="isModalMsg === true">
					<h3>信息填写</h3>
					<view class="modal-msg-name">
						<span>用户姓名</span>
						<input type="text" />
					</view>
					<view class="modal-msg-mobile">
						<span>手机号</span>
						<input type="text" />
					</view>
					<view class="modal-msg-button"><span>确认信息</span></view>
				</view>
				<!-- 信息填写弹框 结束-->

				<!-- 回答错误弹出框 -->
				<view class="modal-answer-error" v-show="isModalAnswerError === true" @click="answer_error_modal"></view>
				<view class="modal-answer-error-bg" v-show="isModalAnswerError === true">
					<view class="modal-a-circle"><img src="../../static/sports/a-error-circle.png" alt="" /></view>
					<h4>很抱歉您的回答错误</h4>
					<h3>
						获得了
						<span>{{total_score}}</span>
						积分
					</h3>
					<h5>
						您现在排名在
						<span>50+</span>
					</h5>

					<view class="modal-a-button" @click="score_share_button"><span>分享战绩</span></view>
					<view class="modal-a-b-t"><span>分享可以获得额外的答题机会</span></view>
				</view>
				<!-- 回答错误弹出框结束 -->

				<!-- 回答超时弹出框 -->
				<view class="modal-answer-timeout" v-show="isModalAnswerTimeout === true" @click="answer_timeout_modal"></view>
				<view class="modal-answer-timeout-bg" v-show="isModalAnswerTimeout === true">
					<view class="modal-t-circle"><img src="../../static/sports/a-timeout-circle.png" alt="" /></view>
					<h4>很抱歉您已经超时</h4>
					<h3>
						获得了
						<span>{{total_score}}</span>
						积分
					</h3>
					<h5>
						您现在排名在
						<span>50+</span>
					</h5>

					<view class="modal-t-button" @click="score_share_button"><span>分享战绩</span></view>
					<view class="modal-t-b-t"><span>分享可以获得额外的答题机会</span></view>
				</view>
				<!-- 回答超时弹出框结束 -->
			</view>
		</view>
	</view>
</template>

<script>
import uniCountdown from '@/components/linnian-CountDown/uni-countdown.vue';
import http from '@/utils/http.js'
import base from '@/utils/base.js'

export default {
	name: 'question',
	components: {
		uniCountdown
	},
	data() {
		return {
			isModalEnd: false,
			isModalShare: false,
			isModalMsg: false,
			isModalAnswerError: false,
			isModalAnswerTimeout: false,
			second: 10,
			reset: false,
			questionList:[],
			q_key:0,
			question:{},
			correct:-1,
			sIndex:0,
			option_is_true:'',
			total_score:0, 
			total_question:0
		};
	},
	onLoad(option) {
		// console.log(option.q_key+'aaaaa')
		//我的项目中只赋值一次, 所以直接设为true了
		// this.reset = !this.reset;
		//如果还要设置天, 时, 秒, 在上面声明绑定后, 在这里赋值即可
		// this.second = 15;
		if(option.q_key !== undefined && option.q_key !== 0){
			this.q_key = option.q_key
			
			
			// this.question = this.questionList[option.q_key]
			// console.log(option.q_key)
			this.getQuestionList()
		}else{
			this.q_key = 0
			this.getQuestionList()
		}
		
		if(option.score != undefined){
			this.total_score = option.score
		}
		
		if(option.t !== undefined  & option.q_key !== undefined){
			console.log(option.t)
			console.log(option.q_key)
			if(option.q_key === option.t){
				this.isModalEnd = true
				this.reset = !this.reset
				this.second = 0
				this.question = {}
			}
		}
		
	
		
		
		
	},
	methods: {
		select_option(option,i){
			this.sIndex = i
			this.correct = this.question.correct
			this.q_key++
			
			// console.log(option)
			// console.log(this.correct)
			if(option === this.question.correct){
				this.total_score++
				setTimeout(function(a,b,c) {
					console.log(a)
					console.log(b)
					uni.redirectTo({
						url: '/pages/sports/question?q_key='+ a+'&score='+b+'&t='+c,
						success: res => {},
						fail: () => {},
						complete: () => {}
					})
				}, 1000,this.q_key,this.total_score,this.total_question);
			}else{
				this.isModalAnswerError = true
				this.reset = !this.reset
				this.second = 0
				this.isModalAnswerTimeout = false
				
			}
			
			
			
			// this.q_key += 1
			// console.log(this.q_key)
			
			
		},
		score_share_button(){
				this.isModalShare = true
				this.isModalAnswerError = false
				this.isModalAnswerTimeout = false
				this.isModalEnd = false
				this.isModalMsg = false
		},
		modal_end() {
			this.isModalEnd = true;
		},
		question_modal() {
			uni.reLaunch({
				url:'/pages/sports/sports'
			}
				
			)
		},
		share_modal() {
			uni.reLaunch({
				url:'/pages/sports/sports'
			}
				
			)
		},
		msg_modal() {
			uni.reLaunch({
				url:'/pages/sports/sports'
			}
				
			)
		},
		answer_error_modal() {
			// this.isModalAnswerError = false;
			uni.reLaunch({
				url:'/pages/sports/sports'
			}
				
			)
		},
		answer_timeout_modal() {
			uni.reLaunch({
				url:'/pages/sports/sports'
			}
				
			)
		},
		timeUp(){
			if(this.isModalAnswerError === true){
				this.isModalAnswerTimeout = false
			}else{
				this.isModalAnswerTimeout = true
			}
			
		},
		// 获取问题列表
		getQuestionList(){
		
			// get 请求
			http.get(base.sq+'/api/v1.h5.Questions/list', [{}]).then((res) => {
			    // console.log(res)
				this.questionList = res.data.data.list
				this.total_question = res.data.data.list.length
				this.question = res.data.data.list[this.q_key]
				
				// console.log(this.question)
			
			}).catch(error => {
			    
			}).finally(() => {
			    
			})
			
		}
	}
};
</script>

<style>
.question-bg {
	width: 100%;
	height: 100%;
	background: url(../../static/sports/rule-bg.png) no-repeat;
	background-size: 100% 100%;
	background-position: center;
}

.question-bg-1 {
	width: 100%;
	height: 100%;
	background: url(../../static/sports/index-bg.png) no-repeat;
	background-size: 100% 100%;
	background-position: center;
}

.question-bg-2 {
	width: 100%;
	height: 100%;
	background: url(../../static/sports/rule-bg-1.png) no-repeat;
	background-size: 100% 80%;
	background-position: center;
}

.question-setval {
	text-align: center;
	width: 227rpx;
	height: 166rpx;
	margin: 0 auto;
	padding-top: 40rpx;
	font-size: 80rpx;
	font-family: Yuanti SC;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
}

.question-c {
	width: 512rpx;
	margin: 0 auto;
	padding-top: 200rpx;
}

.question-c p {
	font-size: 28rpx;
	font-family: Lantinghei SC;
	font-weight: bold;
	color: rgba(255, 255, 255, 1);
}

.question-c ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

.question-c ul li {
	width: 469rpx;
	height: 76rpx;
	border: 1rpx solid rgba(238, 182, 44, 1);
	border-radius: 20rpx;
	text-indent: 12rpx;
	margin-top: 25rpx;
}

.question-c ul li span {
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	line-height: 76rpx;
	cursor: pointer;
}

.question-right {
	background-color: #1aa017;
	border: 2rpx solid rgba(26, 160, 23, 1) !important;
}

.question-wrong {
	background-color: #ff7600;
	border: 2rpx solid #ff7600 !important;
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
	background: url(../../static/sports/q-end-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 80%;
	height: 50%;

	top: 20%;
	left: 10%;
	position: fixed;
	z-index: 100000000;
}

.modal-end-t {
	height: 70%;
}

.modal-end-l {
	width: 60%;
	float: left;
	padding: 76rpx 0 40rpx 40rpx;
}

.modal-end-l h3 {
	font-size: 37rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-end-l h5 {
	font-size: 26rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}

.modal-end-l h2 {
	font-size: 38rpx;
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
	width: 419rpx;
	height: 75rpx;
	margin: 0 auto;
	text-align: center;
	background: url(../../static/sports/question-button.png) no-repeat;
	background-size: 100% 100%;
	line-height: 75rpx;
	cursor: pointer;
}

.modal-end-d-button span {
	font-size: 28rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-end-d-d {
	width: 100%;
	margin-top: 23rpx;
	text-align: center;
	font-size: 22rpx;
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
	background: url(../../static/sports/m-share-bg.png) no-repeat;
	background-size: 120% 100%;
	width: 80%;
	height: 50%;

	top: 20%;
	left: 10%;
	position: fixed;
	z-index: 100000000;
}

.modal-share-t {
	height: 60%;
	padding: 85rpx 270rpx 0 44rpx;
}

.modal-share-t h3 {
	font-size: 44rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-share-t h2 {
	font-size: 51rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-share-t h4 {
	font-size: 36rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: #333333;
}

.modal-share-t h4 span {
	color: #ffffff;
}

.modal-share-t h5 {
	font-size: 26rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: #333333;
}

.modal-share-t h5 span {
	color: #ffffff;
}

.modal-share-d {
	width: 100%;
	padding: 30rpx 44rpx 0 44rpx;
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
	width: 118rpx;
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
	background: url(../../static/sports/m-msg-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 80%;
	height: 50%;

	top: 20%;
	left: 10%;
	position: fixed;
	z-index: 100000000;
}

.modal-msg-bg h3 {
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	text-align: center;
	margin-top: 44rpx;
}

.modal-msg-name {
	width: 80%;
	margin: 0 auto;
	margin-top: 70rpx;
}

.modal-msg-mobile {
	width: 80%;
	margin: 0 auto;
	margin-top: 40rpx;
}

.modal-msg-name span {
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	display: block;
	float: left;
	text-align: right;
	width: 120rpx;
}

.modal-msg-name input {
	width: 281rpx;
	border-bottom: 1px solid #4e4e4e;
}

.modal-msg-mobile span {
	font-size: 22rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
	display: block;
	float: left;
	text-align: right;
	width: 120rpx;
}

.modal-msg-mobile input {
	width: 281rpx;
	border-bottom: 1px solid #4e4e4e;
}

.modal-msg-button {
	width: 442rpx;
	height: 72rpx;
	margin: 0 auto;
	margin-top: 100rpx;
	text-align: center;
	background: url(../../static/sports/question-button.png) no-repeat;
	background-size: 100% 100%;
	cursor: pointer;
}

.modal-msg-button span {
	font-size: 36rpx;
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
	background: url(../../static/sports/a-error-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 80%;
	height: 50%;

	top: 20%;
	left: 10%;
	position: fixed;
	z-index: 100000000;
}

.modal-a-circle {
	width: 198rpx;
	height: 198rpx;
	margin: 0 auto;
	margin-top: -80rpx;
}

.modal-a-circle img {
	width: 100%;
}

.modal-answer-error-bg h4 {
	text-align: center;
	font-size: 26rpx;
	color: #666666;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 27px;
}

.modal-answer-error-bg h3 {
	text-align: center;
	font-size: 38rpx;
	color: #333333;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 8px;
}

.modal-answer-error-bg h3 span {
	color: #db9031;
}

.modal-answer-error-bg h5 {
	text-align: center;
	font-size: 26rpx;
	color: #333333;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 8px;
}

.modal-answer-error-bg h5 span {
	color: #db9031;
}

.modal-a-button {
	width: 419rpx;
	height: 72rpx;
	margin: 0 auto;
	margin-top: 20px;
	background: url(../../static/sports/a-error-button.png) no-repeat;
	background-size: 100% 100%;
	text-align: center;
}

.modal-a-button span {
	line-height: 72rpx;
	font-size: 28rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-a-b-t {
	text-align: center;
}

.modal-a-b-t span {
	font-size: 22rpx;
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
	background: url(../../static/sports/a-error-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 80%;
	height: 50%;

	top: 20%;
	left: 10%;
	position: fixed;
	z-index: 100000000;
}

.modal-t-circle {
	width: 198rpx;
	height: 198rpx;
	margin: 0 auto;
	margin-top: -80rpx;
}

.modal-t-circle img {
	width: 100%;
}

.modal-answer-timeout-bg h4 {
	text-align: center;
	font-size: 26rpx;
	color: #666666;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 27px;
}

.modal-answer-timeout-bg h3 {
	text-align: center;
	font-size: 38rpx;
	color: #333333;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 8px;
}

.modal-answer-timeout-bg h3 span {
	color: #db9031;
}

.modal-answer-timeout-bg h5 {
	text-align: center;
	font-size: 26rpx;
	color: #333333;
	font-family: FZLTZHK--GBK1-0;
	margin-top: 8px;
}

.modal-answer-timeout-bg h5 span {
	color: #db9031;
}

.modal-t-button {
	width: 419rpx;
	height: 72rpx;
	margin: 0 auto;
	margin-top: 20px;
	background: url(../../static/sports/a-error-button.png) no-repeat;
	background-size: 100% 100%;
	text-align: center;
}

.modal-t-button span {
	line-height: 72rpx;
	font-size: 28rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.modal-t-b-t {
	text-align: center;
}

.modal-t-b-t span {
	font-size: 22rpx;
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
	background: url(../../static/sports/time.png) no-repeat;
	background-size: 100% 100%;
	margin: 0 auto;
	width: 227rpx;
	height: 166rpx;
}
/deep/ .uni-countdown__number:nth-child(5) span {
	font-size: 80rpx;
	font-family: Yuanti SC;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
}
</style>
