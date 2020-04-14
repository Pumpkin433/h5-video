<template>
	<view class="question-bg">
		<view class="question-bg-1">
			<view class="question-setval">
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

			<view class="question-bg-2">
				<view class="question-c">
					<p>{{ question.q_name }}</p>

					<ul>
						<li v-show="this.correct === -1 || this.sIndex !== 1" @click="hasClickOption && select_option('A', 1)">
							<span>A &nbsp;&nbsp;{{ question.option_a }}</span>
						</li>
						<li
							v-show="this.correct !== -1 && this.sIndex === 1"
							@click="hasClickOption && select_option('A', 1)"
							:class="'A' === this.correct ? 'question-right' : 'question-wrong'"
						>
							<span>A &nbsp;&nbsp;{{ question.option_a }}</span>
						</li>
						<li v-show="this.correct === -1 || this.sIndex !== 2" @click="hasClickOption && select_option('B', 2)">
							<span>B &nbsp;&nbsp;{{ question.option_b }}</span>
						</li>
						<li
							v-show="this.correct !== -1 && this.sIndex === 2"
							@click="hasClickOption && select_option('B', 2)"
							:class="'B' === this.correct ? 'question-right' : 'question-wrong'"
						>
							<span>B &nbsp;&nbsp;{{ question.option_b }}</span>
						</li>
						<li v-show="this.correct === -1 || this.sIndex !== 3" @click="hasClickOption && select_option('C', 3)">
							<span>C &nbsp;&nbsp;{{ question.option_c }}</span>
						</li>
						<li
							v-show="(this.correct !== -1) & (this.sIndex === 3)"
							@click="hasClickOption && select_option('C', 3)"
							:class="'C' === this.correct ? 'question-right' : 'question-wrong'"
						>
							<span>C &nbsp;&nbsp;{{ question.option_c }}</span>
						</li>
						<li v-show="this.correct === -1 || this.sIndex !== 4" @click="hasClickOption && select_option('D', 4)">
							<span>D &nbsp;&nbsp;{{ question.option_d }}</span>
						</li>
						<li
							v-show="(this.correct !== -1) & (this.sIndex === 4)"
							@click="hasClickOption && select_option('D', 4)"
							:class="'D' === this.correct ? 'question-right' : 'question-wrong'"
						>
							<span>D &nbsp;&nbsp;{{ question.option_d }}</span>
						</li>
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
								<span>{{ total_score }}</span>
								积分
							</h2>
							<h5>
								您现在排名
								<span v-show="(user_rank <= 100) & (user_rank != 0)">{{ user_rank }}</span>
								<span v-show="user_rank > 100 || user_rank === 0">100+</span>
							</h5>
						</view>
						<view class="modal-end-r"><!-- <img src="http://aloss.hotforest.cn/h5-basketball/jiangbei.png" alt=""> --></view>
					</view>
					<view class="modal-end-d">
						<div class="modal-end-d-button" @click="answer_question_again"><span>再来一次</span></div>
						<!-- <div class="modal-end-d-button" @click="score_share_button"><span>再来一次</span></div> -->

						<view class="modal-end-d-d">下载全民体育,参加更多活动</view>
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
							<span>{{ total_score }}</span>
							积分
						</h4>
						<h5>
							当前排名
							<span v-show="(user_rank <= 100) & (user_rank != 0)">{{ user_rank }}</span>
							<span v-show="user_rank > 100 || user_rank === 0">100+</span>
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
						<view class="modal-share-d-r"><img src="http://aloss.hotforest.cn/h5-basketball/m-share-qrcode.png" alt="" /></view>
					</view>
				</view>
				<!-- 分享弹框结束 -->

				<!-- 信息填写弹框 -->
				<view class="modal-msg" v-show="isModalMsg === true" @click="msg_modal"></view>
				<view class="modal-msg-bg" v-show="isModalMsg === true">
					<h3>信息填写</h3>
					<view class="modal-msg-name">
						<span>姓名&nbsp;&nbsp;&nbsp;&nbsp;</span>
						<input type="text" v-model="name" />
					</view>
					<view class="modal-msg-mobile">
						<span>手机号&nbsp;&nbsp;&nbsp;&nbsp;</span>
						<input type="number" v-model="mobile" />
					</view>
					<view class="modal-msg-button" @click="user_msg_add"><span>确认信息</span></view>
				</view>
				<!-- 信息填写弹框 结束-->

				<!-- 回答错误弹出框 -->
				<view class="modal-answer-error" v-show="isModalAnswerError === true" @click="answer_error_modal"></view>
				<view class="modal-answer-error-bg" v-show="isModalAnswerError === true">
					<view class="modal-a-circle"><img src="http://aloss.hotforest.cn/h5-basketball/a-error-circle.png" alt="" /></view>
					<h4>很抱歉您的回答错误</h4>
					<h3>
						获得了
						<span>{{ total_score }}</span>
						积分
					</h3>
					<h5>
						您现在排名
						<span v-show="(user_rank <= 100) & (user_rank != 0)">{{ user_rank }}</span>
						<span v-show="user_rank > 100 || user_rank === 0">100+</span>
					</h5>

					<view class="modal-a-button" @click="answer_question_again"><span>再来一次</span></view>
					<!-- <view class="modal-a-button" @click="score_share_button"><span>再来一次</span></view> -->
					<view class="modal-a-b-t"><span>下载全民体育,参加更多活动</span></view>
				</view>
				<!-- 回答错误弹出框结束 -->

				<!-- 回答超时弹出框 -->
				<view class="modal-answer-timeout" v-show="isModalAnswerTimeout === true" @click="answer_timeout_modal"></view>
				<view class="modal-answer-timeout-bg" v-show="isModalAnswerTimeout === true">
					<view class="modal-t-circle"><img src="http://aloss.hotforest.cn/h5-basketball/a-timeout-circle.png" alt="" /></view>
					<h4>很抱歉您已经超时</h4>
					<h3>
						获得了
						<span>{{ total_score }}</span>
						积分
					</h3>
					<h5>
						您现在排名
						<span v-show="(user_rank <= 100) & (user_rank != 0)">{{ user_rank }}</span>
						<span v-show="user_rank > 100 || user_rank === 0">100+</span>
					</h5>
					<view class="modal-t-button" @click="answer_question_again"><span>再来一次</span></view>
					<!-- <view class="modal-t-button" @click="score_share_button"><span>分享战绩</span></view> -->
					<view class="modal-t-b-t"><span>下载全民体育,参加更多活动</span></view>
				</view>
				<!-- 回答超时弹出框结束 -->

				<!-- hai bao -->
				<!-- <view class="modal-answer-timeout" v-show="isModalShareCanvas === true" ></view>
				<view v-show="isModalShareCanvas === true" 
				style="width:588.23rpx;position: fixed !important;
				z-index: 999999999;
				height: 756.47rpx;
				top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;">
					<posters-layer style="position: fixed !important;" :postersData="postersData" @success="onSuccessCreatePosters" @error="onPostersError">
					</posters-layer>
					<img style="width: 100%;" :src="posterImg.path" />
				</view> -->
				<!-- hai bao end -->
			</view>
		</view>
	</view>
</template>

<script>
import uniCountdown from '@/components/linnian-CountDown/uni-countdown.vue';
import postersLayer from '@/components/posters-layer/index';
import http from '@/utils/http.js';
import base from '@/utils/base.js';

export default {
	name: 'question',
	components: {
		uniCountdown,
		postersLayer
	},
	data() {
		return {
			isModalEnd: false,
			isModalShare: false,
			isModalShareCanvas: false,
			isModalMsg: false,
			isModalAnswerError: false,
			isModalAnswerTimeout: false,
			second: 15,
			reset: false,
			questionList: [],
			q_key: 0,
			question: {},
			correct: -1,
			sIndex: 0,
			total_score: 0,
			total_question: 0,
			user_rank: 0,
			uid: null,
			ns_device_id: null,
			name: '',
			mobile: '',
			isAnswerEnd: false,
			isAnswerError: false,
			isAnswerTimeout: false,

			postersData: {},
			posterImg: {},

			hasClickOption:true, //是否点击了答案

		};
	},
	onLoad(option) {
		this.questionList = this.$question.questionList
		console.log(this.$question.questionList)
		// this.$uid = option.uid
		// this.uid = uni.getStorageSync('uid');
		this.uid = option.uid;
		this.ns_device_id = option.ns_device_id
		
		console.log(this.ns_device_id)
		
		// 总积分
		if (option.s != undefined) {
			this.total_score = option.s;
		}
		
		//下一题
		if (option.k !== undefined && option.k !== 0) {
			this.q_key = option.k;
			
			this.total_question = this.questionList.length;
			this.question = this.questionList[this.q_key];
			
			// 问题回答完毕
			if (option.k === option.t) {
				
				this.reset = !this.reset;
				this.second = 0;
				this.get_user_rank(this.uid, this.total_score);
				this.isModalEnd = true;
				this.isModalAnswerError = false
				this.isModalAnswerTimeout = false
				this.question = {
					q_name: '1',
					option_a: '1',
					option_b: '1',
					option_c: '1',
					option_d: '1',
					correct: '1'
				};
			
			}
		} else {
			this.q_key = 0;
			this.total_question = this.questionList.length;
			this.question = this.questionList[this.q_key];
			this.questionList = this.$question.questionList
		}
		// dacuo
		// console.log(option)
		if (option.w !== undefined && option.w == 1) {
			
			this.reset = !this.reset;
			this.second = 0;
			this.get_user_rank(this.uid, option.s);
			this.isModalAnswerError = true;
			this.isModalEnd = false;
			this.isModalAnswerTimeout = false;
		}

		this.ns_device_id = option.ns_device_id
		// this.initPostersConfig();
	},
	methods: {
		initPostersConfig() {
			const config = {
				clear: true,
				width: 400,
				height: 448,
				background: 'rgba(0,0,0,0)',
				views: [{
						type: 'image',
						width: 400,
						height: 448,
						top: 0,
						left: 0,
						// 封面图，测试的时候填上
						url: 'http://h5.hotforest.cn/canvas/m-share-bg.png'
					},
					{
						type: 'text',
						width: 200,
						height: 50,
						left: 20,
						top: 90,
						fontSize: 30,
						lineHeight: 40,
						color:'#fff',
						bolder: true,
						breakWord: true,
						content: '快来全民体育',
						MaxLineNumber: 2
					},
					{
						type: 'text',
						width: 200,
						height: 50,
						left: 20,
						top: 140,
						color:"#fff",
						fontSize: 34,
						lineHeight: 40,
						bolder: true,
						breakWord: true,
						content: '答题赢大奖',
						MaxLineNumber: 2
					},

					{
						type: 'text',
						width: 200,
						height: 50,
						left: 20,
						top: 210,
						fontSize: 24,
						lineHeight: 40,
						bolder: true,
						breakWord: true,
						content: '我获得了 ',
						color: '#333333',
						MaxLineNumber: 2
					},
					{
						type: 'text',
						width: 200,
						height: 50,
						left: 120,
						top: 210,
						fontSize: 24,
						lineHeight: 40,
						bolder: true,
						breakWord: true,
						content: this.total_score+'',
						color: '#fff',
						MaxLineNumber: 2
					},
					{
						type: 'text',
						width: 200,
						height: 50,
						left: 130,
						top: 210,
						fontSize: 24,
						lineHeight: 40,
						bolder: true,
						breakWord: true,
						content: ' 积分',
						color: '#333333',
						MaxLineNumber: 2
					},
					{
						type: 'text',
						width: 400,
						left: 20,
						top: 250,
						fontSize: 18,
						bolder: true,
						breakWord: true,
						content: '当前排名 ',
						color: '#333333',
						MaxLineNumber: 2
					},
					{
						type: 'text',
						width: 400,
						left: 100,
						top: 250,
						fontSize: 18,
						bolder: true,
						breakWord: true,
						content: this.user_rank+'',
						color: '#fff',
						MaxLineNumber: 2
					},
					{
						type: 'text',
						width: 400,
						left: 20,
						top: 360,
						fontSize: 16,
						bolder: true,
						breakWord: true,
						content: '长按识别二维码',
						color: '#333333',
						MaxLineNumber: 2
					},

					{
						type: 'text',
						width: 400,
						left: 20,
						top: 400,
						fontSize: 16,
						bolder: true,
						breakWord: true,
						content: '下载全民体育APP参与活动',
						color: '#333333',
						MaxLineNumber: 2
					},
					{
						type: 'image',
						width: 90,
						height: 90,
						top: 340,
						left: 260,
						// 二维码图片路径，测试的时候填上
						url: 'http://h5.hotforest.cn/canvas/m-share-qrcode.png'
					},
				]
			};
			this.postersData = config;
		},
		onSuccessCreatePosters(res) {
			console.log(res);
			this.posterImg = res;
		},
		onPostersError(res) {},
		answer_question_again(){
			let data = {
				uid: this.uid
			};
			http.post(base.sq + '/api/v1.h5.Questions/uidIsExists', data)
				.then(res => {
					// console.log(res)
					let status = res.data.data.status;
					console.log(status)
					if (status == 0) {

						this.reset = !this.reset;
						this.second = 0
						this.isModalMsg = true;

						this.isModalAnswerError = false;
						this.isModalAnswerTimeout = false;
						this.isModalEnd = false;

					}
					
					if(status == 1){
						this.editUserScore(this.uid,this.total_score,this.user_rank)
					}

				})
				.catch(error => {})
				.finally(() => {});

		},
		editUserScore(uid,total_score,user_rank){
			let data = {
					uid:uid,
					score:total_score,
					rank:user_rank
				}
				
				http.post(base.sq + '/api/v1.h5.Questions/changeUserScore', data)
					.then(res => {
					
						// uni.reLaunch({
						// 	url:'/pages/sports/sports?uid='+this.uid
						// })
						
						if (res.data.data.updateRow == 1) {

							uni.reLaunch({
								url:'/pages/sports/sports?uid='+this.uid+'&ns_device_id='+this.ns_device_id,
								success(){
								
								}
							}

							)
						}else{
							alert('积分更新失败')
						}

					})
					.catch(error => {})
					.finally(() => {});

		},
		user_msg_add() {
			
			
			if(this.name == '' || this.name == null){
				alert('请填写名字')
				return false
			}
			if(this.mobile == '' || this.mobile == null){
				alert('请填写手机号')
				return false
			}
			if(this.name.length > 10){
				alert('名字不要超过10个字')
				return false
			}
			
			if(this.mobile.length != 11){
				alert('请填写正确的手机号')
				return false;
			}
			
			this.add_user(this.uid, this.name, this.ns_device_id)
			
			let data = {
				uid: this.uid,
				name: this.name,
				mobile: this.mobile,
				score: this.total_score,
				rank: this.user_rank
			};
			// console.log(data)
			http.post(base.sq + '/api/v1.h5.Questions/updateUserInfo', data)
				.then(res => {
					
					if(res.data.errorCode == 0){
						this.isModalAnswerError = false
						this.isModalAnswerTimeout = false
						this.isModalEnd = false
						this.isModalMsg = false
						
						uni.reLaunch({
							url:'/pages/sports/sports?uid='+this.uid+'&ns_device_id='+this.ns_device_id,
							success(){
								
							}
						})
					}else{
						return alert(res.data.msg)
					}
					
				})
				.catch(error => {})
				.finally(() => {});
		},
		// 选择答案
		select_option(option, i) {
			this.sIndex = i;
			this.correct = this.question.correct;
			this.q_key++;

			if (option === this.question.correct) {
				this.total_score++;
				this.hasClickOption = false

				setTimeout(
					function(a, b, c,uid,ns) {
						uni.redirectTo({
							url: '/pages/sports/question?k=' + a + '&s=' + b + '&t=' + c+'&uid='+uid+'&ns_device_id='+ns,
							success(){},
							fail: () => {},
							complete: () => {}
						});
					},
					1000,
					this.q_key,
					this.total_score,
					this.total_question,
					this.uid,
					this.ns_device_id
				);
			} else {
				this.hasClickOption = false
				setTimeout(
					function(a, b, c, uid,ns) {
						// console.log(a)
						// console.log(b)
						uni.redirectTo({
							url: '/pages/sports/question?k=' + a + '&s=' + b + '&t=' + c+'&uid='+uid + '&w=1'+'&ns_device_id='+ns,
							success(){
							
							},
							fail: () => {},
							complete: () => {}
						});
					},
					1000,
					this.q_key,
					this.total_score,
					this.total_question,
					this.uid,
					this.ns_device_id
				);
			}
		},
		get_user_rank(uid, total_score) {
			let data = {
				uid: uid,
				score: total_score
			};
			http.post(base.sq + '/api/v1.h5.Questions/getUserRank', data)
				.then(res => {
					// console.log(res)
					this.user_rank = res.data.data.rank;
				})
				.catch(error => {})
				.finally(() => {});
		},
		score_share_button() {
			//
			let data = {
				uid: this.uid
			};
			http.post(base.sq + '/api/v1.h5.Questions/uidIsExists', data)
				.then(res => {
					// console.log(res)
					let status = res.data.data.status;
					// console.log(status)
					if (status === 0) {

						this.reset = !this.reset;
						this.isModalMsg = true;

						this.isModalAnswerError = false;
						this.isModalAnswerTimeout = false;
						this.isModalEnd = false;
						this.isModalShareCanvas = false;



					}
					if (status === 1) {
						this.initPostersConfig();
						this.isModalShareCanvas = true;
						// this.update_user_score(uid,this.total_score,this.user_rank)

						this.isModalAnswerError = false;
						this.isModalAnswerTimeout = false;
						this.isModalEnd = false;
						this.isModalMsg = false;
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		question_modal() {
			let data = {
				uid: this.uid
			};
			http.post(base.sq + '/api/v1.h5.Questions/uidIsExists', data)
				.then(res => {
					// console.log(res)
					let status = res.data.data.status;
					// console.log(status)
					if (status === 0) {
						this.reset = !this.reset;
						// this.second = 0
						this.isModalMsg = true;

						this.isModalAnswerError = false;
						this.isModalAnswerTimeout = false;
						this.isModalEnd = false;
						this.isModalShareCanvas = false;

					}
					if (status === 1) {
					
						this.editUserScore(this.uid,this.total_score,this.user_rank)
						
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		share_modal() {
			let data = {
				uid: this.uid
			};
			http.post(base.sq + '/api/v1.h5.Questions/uidIsExists', data)
				.then(res => {
					// console.log(res)
					let status = res.data.data.status;
					// console.log(status)
					if (status === 0) {
						this.reset = !this.reset;
						// this.second = 0
						this.isModalMsg = true;



						this.isModalAnswerError = false;
						this.isModalAnswerTimeout = false;
						this.isModalEnd = false;
					}
					if (status === 1) {
						this.editUserScore(this.uid,this.total_score,this.user_rank)
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		msg_modal() {
			
		},
		answer_error_modal() {
			let data = {
				uid: this.uid
			};
			http.post(base.sq + '/api/v1.h5.Questions/uidIsExists', data)
				.then(res => {
					// console.log(res)
					let status = res.data.data.status;
					// console.log(status)
					if (status === 0) {
						this.reset = !this.reset;
						// this.second = 0
						this.isModalMsg = true;
						this.isModalAnswerError = false;
						this.isModalAnswerTimeout = false;
						this.isModalEnd = false;
						this.isModalShareCanvas = false;

					}
					if (status === 1) {
						this.editUserScore(this.uid,this.total_score,this.user_rank)
					
					}
				})
				.catch(error => {})
				.finally(() => {});


		},
		answer_timeout_modal() {

			let data = {
				uid: this.uid
			};
			http.post(base.sq + '/api/v1.h5.Questions/uidIsExists', data)
				.then(res => {
					// console.log(res)
					let status = res.data.data.status;
					// console.log(status)
					if (status === 0) {
						this.reset = !this.reset;
						// this.second = 0
						this.isModalMsg = true;
						this.isModalAnswerError = false;
						this.isModalAnswerTimeout = false;
						this.isModalEnd = false;
						this.isModalShareCanvas = false;

					}
					if (status === 1) {
						this.editUserScore(this.uid,this.total_score,this.user_rank)
					
					}
				})
				.catch(error => {})
				.finally(() => {});

		},
		timeUp() {
			this.get_user_rank(this.uid, this.total_score);
			// this.update_user_score(uid,this.total_score,this.user_rank)
			if (this.isModalAnswerError === true) {
				this.isModalAnswerTimeout = false;
			} else {
				this.isModalAnswerTimeout = true;
			}
		},
		add_user(uid, nickname, ns_device_id) {
			let data = {
				uid: uid,
				name: nickname,
				ns_device_id: ns_device_id
			};
			http.post(base.sq + '/api/v1.h5.Questions/addUser', data)
				.then(res => {
					console.log(res);
				})
				.catch(error => {})
				.finally(() => {});
		},
		// 获取问题列表
		getQuestionList() {
			// get 请求
			http.get(base.sq + '/api/v1.h5.Questions/list', [{}])
				.then(res => {
					// console.log(res)
					this.questionList = res.data.data.list;
					
					let that = this
					that.$question.setQusetionList(res.data.data.list)
					
					this.total_question = res.data.data.list.length;
					this.question = res.data.data.list[this.q_key];
					if (this.isModalEnd === true) {
						this.question = {
							q_name: '1',
							option_a: '1',
							option_b: '1',
							option_c: '1',
							option_d: '1',
							correct: '1'
						};
					}
					// console.log(this.question)
				})
				.catch(error => {})
				.finally(() => {});
		},
		turn_back() {
			// uni.navigateBack()
			uni.redirectTo({
				url: '/pages/sports/sports?uid=' + this.uid + '&ns_device_id=' + this.ns_device_id,
				success(){
			
				}
			});
		}
	}
};
</script>

<style scoped>
.question-bg {
	width: 100%;
	height: 100%;
	background: url(http://aloss.hotforest.cn/h5-basketball/index-bg.png) no-repeat;
	background-size: 100% 100%;
	background-position: center;
}

.question-bg-1 {
	width: 100%;
	height: 100%;
}

.question-bg-2 {
	width: 100%;
	height: 80%;
	background: url(http://aloss.hotforest.cn/h5-basketball/rule-bg-1.png) no-repeat;
	background-size: 100%;
	background-position: top;
	/* background-position: center; */
}

.question-setval {
	text-align: center;
	width: 267.05rpx;
	/* height: 195.29rpx; */
	height: 15%;
	margin: 0 auto;
	padding-top: 5%;

	font-size: 94.11rpx;
	font-family: Yuanti SC;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
}

.question-c {
	width: 602.35rpx;
	margin: 0 auto;
	padding-top: 200rpx;
}

.question-c p {
	width: 602.35rpx;
	height: 168.23rpx;
	font-size: 32.94rpx;
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
	width: 551.76rpx;
	height: 89.41rpx;
	border: 1rpx solid rgba(238, 182, 44, 1);
	border-radius: 23.52rpx;
	text-indent: 14.11rpx;
	margin: 0 auto;
	margin-top: 35.29rpx;
}

.question-c ul li span {
	line-height: 89.41rpx;
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	/* font-size: 30.58rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	
	cursor: pointer; */
}

.question-right {
	border: 2rpx solid rgba(26, 160, 23, 1) !important;
	background: #1aa017 url(http://aloss.hotforest.cn/h5-basketball/question-right-icon.png) no-repeat ;
	background-size: 51.76rpx 40rpx;
	background-position: right 23.52rpx top 23.52rpx;
}

.question-wrong {
	border: 2rpx solid #ff7600 !important;
	background: #ff7600 url(http://aloss.hotforest.cn/h5-basketball/question-wrong-icon.png) no-repeat ;
	background-size: 35.29rpx 40rpx;
	background-position: right 23.52rpx top 23.52rpx;
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
	background: url(http://aloss.hotforest.cn/h5-basketball/time-2.png) no-repeat left;
	background-size: 110% 120%;
	margin: 0 auto;
	width: 267.05rpx;
	height: 267.05rpx;
	/* height: 195.29rpx; */
}

/deep/ .uni-countdown__number:nth-child(5) span {
	font-size: 82.35rpx;
	font-family: Yuanti SC;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
}
</style>
