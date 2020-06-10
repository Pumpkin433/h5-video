<template>
	<view class="uni-flex uni-column index-bg">
		<view class="uni-flex uni-row index-top">
			<view class="flex-item index-top-l"><view class="left-icon" @click="changeRuleModal()">游戏规则</view></view>
			<view class="flex-item index-top-r">
				<view class="right-icon" v-if="loginAppStatus" @click="changeLogsModal()">竞猜记录</view>
				<view class="right-icon" v-if="!loginAppStatus" @click="loginApp">竞猜记录</view>
				<!-- <view class="right-icon" v-if="!loginAppStatus" @click="changeLogsModal">竞猜记录</view> -->
			</view>
		</view>

		<view class=" uni-column question-bg">
			<view class="question-bg-title">
				<!-- <view class="flex-item flex-item-V question-title">德甲第 {{ round }} 轮</view> -->
				<!-- <view class="flex-item flex-item-V question-title-2">本轮竞猜截止时间：6月6日0点</view> -->
			</view>

			<view class="flex-item flex-item-v team-item" v-for="(team, i) in teamList" :key="i">
				<view class="flex-item competition-time">{{ team.competition_format}}</view>
				<!-- <view class="flex-item  join-person-count">参与人数:1000000</view> -->
				<view class="uni-flex  question-title-3">
					<view class="flex-item question-1">
						<!-- 主队 <br> -->
						<img v-if="team.quiz_result == 1" src="https://aloss.hotforest.cn/bundesliga/virctory.png" alt="img" />
						<img v-if="team.quiz_result == 3" src="https://aloss.hotforest.cn/bundesliga/ping.png" alt="img" />
					</view>
					<view class="flex-item question-2">
						<img :src="team.home_team_icon" alt="img" />
						{{ team.home_team_name }}
					</view>
					<view class="flex-item question-3">
						<view class="question-3-vs">VS</view>
					</view>
					<view class="flex-item question-4">
						<img :src="team.guest_team_icon" alt="img" />
						{{ team.guest_team_name }}
					</view>
					<view class="flex-item question-5">
						<img v-if="team.quiz_result == 2" src="https://aloss.hotforest.cn/bundesliga/virctory.png" alt="img" />
					</view>
				</view>
				<view class="team-answer">
					<view v-for="(option,i) in team.options"
					:key="i"
					 class="flex-item flex-item-V option-item" 
					 :class="[selectOptionId == option.id ? 'option-active' : '']"
					 @click="sOption(team.id,option.id,option.odds)">
						{{option.option}}
						<br />
						{{option.odds}}
					</view>
				</view>
				<view class="flex-item flex-item-V question-button">
					<button 
					v-if="loginAppStatus == true && selectTeamId === team.id " 
					@click="showQuizModal()" type="default">
					投注
					</button>
					<button
					v-if="loginAppStatus == true &&  selectTeamId != team.id" 
					type="default">
					投注
					</button>
					<button
					v-if="loginAppStatus == false" 
					@click="loginApp"
					type="default">
					投注
					</button>
				</view>
			</view>
		</view>

		<view class="rule-modal" v-show="ruleModal" @click="closeRuleModal()"></view>
		<view class="rule-modal-bg" v-show="ruleModal">
			<view class="flex-item  rule-title">游戏规则</view>
			<view class="flex-item rule-content">
				1.本轮竞猜将于6月6日0点关闭竞猜通道
				<br />
				2.猜对任意5场比赛结果，即可进入后补中奖名单待定
				<br />
				3.系统将随机抽取10位待定中奖用户，奖励每人30元现金红包
				<br />
				4.赛事结束后3日内，将公布获奖用户名单
				<br />
				5.获奖用户，请添加全民体育官方微信（NationalSports）领取相应奖励
			</view>
			<view class="flex-item flex-item-V rule-copy"><button type="default" @click="copy('NationalSports')">复制微信号码</button></view>
		</view>

		<view class="logs-modal" v-show="logsModal" @click="closeLogsModal()"></view>
		<view class="logs-modal-bg" v-show="logsModal">
			<view class="flex-item  logs-title">竞猜记录</view>
			<view class="uni-row uni-flex logs-1 ">
				<view class="flex-item logs-1-1">时间</view>
				<view class="flex-item logs-1-2">赛事</view>
				<view class="flex-item logs-1-3">我的竞猜</view>
				<view class="flex-item logs-1-4">结果</view>
			</view>
			<view class="flex-item logs-2">第31轮</view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="logs-scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
				<view class="scroll-view-item logs-3" v-for="(log, i) in userBetList" :key="i">
					<view class="uni-row uni-flex ">
						<view class="flex-item logs-3-font logs-3-1">{{ log.competition_at }}</view>
						<view class="flex-item logs-3-font logs-3-2">
							{{ log.home_team_name }}
							<br />
							{{ log.guest_team_name }}
						</view>
						<view class="flex-item logs-3-font logs-3-3">
							{{log.option}}
						</view>
						<view class="flex-item logs-3-font logs-3-4">
							<!-- {{log.r_status}} -->
							<text v-if="log.is_right == 0">未开</text>
							<text class="logs-victory" v-if="log.is_right == 1">胜</text>
							<text class="logs-fail" v-if="log.is_right == -1">负</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<view class="info-modal" v-show="infoModal" @click="closeInfoModal()"></view>
		<view class="info-modal-bg" v-show="infoModal">
			<view class="flex-item  info-title">信息登记</view>
			<view class="flex-item info-content"><input type="text" v-model="name" placeholder="请输入姓名" /></view>
			<view class="flex-item flex-item-V info-content-mobile">
				<input type="number" v-model="mobile" placeholder="请输入手机号" />
				<button type="default" @click="sendCode(mobile)">验证码</button>
			</view>
			<view class="flex-item flex-item-V info-content-code"><input type="number" v-model="code" placeholder="请输入验证码" /></view>
			<view class="info-button"><button type="default" @click="updateUserInfo()">确定</button></view>
		</view>

		<!-- 竞猜底部弹出框 -->
		<view class="quiz-modal" v-show="quizModal" @click="closeQuizModal()"></view>
		<view class="quiz-modal-bg" v-show="quizModal">
			<view class="flex-item quiz-modal-1">我的积分：{{userPoints}} 积分</view>
			<view class="quiz-modal-2">
				<view class="quiz-modal-2-1" :class="betPoints==10 ? 'option-active' : '' " @click="changeBetPoints(10)">10积分</view>
				<view class="quiz-modal-2-2" :class="betPoints==50 ? 'option-active' : '' " @click="changeBetPoints(50)">50积分</view>
				<view class="quiz-modal-2-3" :class="betPoints==100 ? 'option-active' : '' " @click="changeBetPoints(100)">100积分</view>
			</view>
			<view class="quiz-modal-3">
				<uni-number-box @change="bindChange" :value="betPoints" :min="10" :max="100" :step="10"></uni-number-box>
			</view>
			<view class="quiz-modal-4">
				<button @click="bet()">确认投注</button>
			</view>
			<view class="quiz-modal-5">
				预计赢取：
				<span>{{expectEarnPoints}}</span>
				积分
			</view>
		</view>
	</view>
</template>

<script>
import base from '@/utils/base.js';
import http from '@/utils/http.js';
import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js';
import { startUnix, endUnix } from '@/common/util.js';
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';

export default {
	data() {
		return {
			scrollTop: 0,
			old: {
				scrollTop: 0
			},
			teamList: [],
			selectList: [],
			ruleModal: false,
			logsModal: false,
			infoModal: false,
			appMsgModal: false,
			teamId: 0,
			userQuizLogs: [],
			loginAppStatus: false,
			uid: null,
			token: null,
			ns_device_id: null,
			country_code: '+86',
			activity_id: 4,
			name: '',
			mobile: '',
			code: '', // 验证码
			quizStatus: false,
			round: 30, //德甲竞猜场次
			endAnswer: false,
			quizModal: false,
			betPoints:10, // 投注积分 默认是10
			selectOptionId:0, // 选择的选项id 
			selectTeamId:0, //正在操作的竞猜teamid
			selectOdds:0, // 选择的选项的赔率
			userPoints:0, //用户积分
			expectEarnPoints:0, // 预计赢取积分
			userBetList:[], // 用户下注记录
		};
	},
	components: { uniNumberBox },
	onLoad(option) {
		var nowTimeStamp = Date.parse(new Date()) / 1000; //当前时间戳

		let myDate = new Date();
		var tYear = myDate.getFullYear();
		var tMonth = myDate.getMonth() + 1;
		// 当月一号
		var month_one = tYear + '-' + tMonth + '-' + '16';
		let one_start_at = startUnix(month_one);
		if (nowTimeStamp > one_start_at) {
			this.endAnswer = true;
		}
		
		// if (typeof contact === 'undefined') {
		// 	uni.showToast({
		// 		title: '请下载全民体育APP参与活动',
		// 		icon: 'none',
		// 		mask: true
		// 	});
		// } else {
			if (option.uid !== '' && option.uid !== 'null' && option.uid !== undefined) {
				uni.setStorageSync('uid', option.uid);
				uni.setStorageSync('token', option.token);
				uni.setStorageSync('ns_device_id', option.ns_device_id);
				this.loginAppStatus = true;

				this.uid = uni.getStorageSync('uid');
				this.token = uni.getStorageSync('token');
				this.ns_device_id = uni.getStorageSync('ns_device_id');
				this.getUserPointDetail(this.uid);
				this.getTeamList();
				// this.checkQuizStatus(this.uid, this.$question.activity_id);
			} else {
				this.getTeamList();
				this.loginAppStatus = false;
				// open this url in app env
				contact.onLoginDone = function(uid, token) {
					uni.setStorageSync('loginAppStatus', true);
					let ns_device_id = uni.getStorageSync('ns_device_id');
					uni.reLaunch({
						url: '/pages/bundesliga/mid?uid=' + uid + '&token=' + token + '&ns_device_id=' + ns_device_id
					});
				};
			}
		// }
		// this.getTeamList();
	},
	methods: {
		bet:function(){
			let that = this;
			let data = {
				uid:that.uid,
				activity_id:that.$question.activity_id,
				team_quiz_id:that.selectTeamId,
				option_id:that.selectOptionId,
				expect_earn_points:that.expectEarnPoints,
				user_points:that.userPoints,
				bet_points:that.betPoints
			}
			uni.request({
				url:base.sq + '/activity/api.quiz/addQuizLog',
				data:data,
				method:'POST',
				success:res=>{
					console.log(res)
					if(res.statusCode == 200){
						if(res.data.code == 0){
							uni.showToast({
								title:'success',
								icon:'none'
							})
							that.quizModal = false;
							that.getUserPointDetail(that.uid);
						}else{
							uni.showToast({
								title:res.data.info,
								icon:'none'
							})
						}
						
					}else{
						uni.showToast({
							title:res.errMsg,
							icon:'none'
						})
					}
				}
			})
		},
		changeBetPoints:function(point){
			let that =this;
			that.betPoints = point;
			that.expectEarnPoints = point*that.selectOdds;
		},
		bindChange:function(e){
			console.log(e)
			let that = this;
			that.expectEarnPoints = e*that.selectOdds;
		},
		showQuizModal: function() {
			let that = this;
			that.quizModal = true;
			that.expectEarnPoints = that.betPoints*that.selectOdds;
		},
		closeQuizModal: function() {
			this.quizModal = false;
		},
		loginApp() {
			contact.requireLogin();
		},
		// 发送验证码
		sendCode(mobile) {
			let header = {
				ns_device_id: this.ns_device_id,
				phone: mobile,
				country_code: this.country_code
			};
			let req_url = base.bd + '/SendLoginSms';
			http.get(req_url, { headers: header })
				.then(res => {
					// console.log(res);
					if (res.status == 200) {
						if (res.data.Status === 1) {
							uni.showToast({
								title: '验证码 发送成功',
								icon: 'none'
							});
						} else {
							uni.showToast({
								title: '验证码发送失败',
								icon: 'none'
							});
						}
					} else {
						uni.showToast({
							title: 'service error',
							icon: 'none'
						});
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		// 手机号为空时
		updateUserInfo: function() {
			var that = this;

			var uid = that.uid;
			var activity_id = that.$question.activity_id;
			var ns_device_id = that.ns_device_id;
			var mobile = that.mobile;
			var country_code = that.country_code;
			var code = that.code;
			var name = that.name;
			var logs = that.selectList;

			if (name.length < 1 || name.length > 20) {
				uni.showToast({
					title: '请输入1到20个字符长度的名字',
					icon: 'none'
				});
				return;
			}
			if (mobile.length != 11) {
				uni.showToast({
					title: '请输入11位手机号码',
					icon: 'none'
				});
				return;
			}
			if (code == '') {
				uni.showToast({
					title: '请输入验证码',
					icon: 'none'
				});
				return;
			}

			let data = {
				phone: mobile,
				country_code: country_code,
				code: code,
				device_id: 'website',
				platform: 'android'
			};

			let req_url = base.bd + '/OTPLogin';
			uni.request({
				url: req_url,
				data: data,
				header: {
					ns_device_id: 'ns_device_id',
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				method: 'POST',
				success: function(res) {
					console.log(res);
					if (res.statusCode == 200) {
						// console.log(res);
						if (res.data.Status == 1) {
							// 此时验证码是正确的
							let data = {
								uid: uid,
								name: name,
								mobile: mobile,
								activity_id: activity_id,
								ns_device_id: ns_device_id,
								user_type: 3
							};

							http.post(base.sq + '/activity/api.Users/add', data)
								.then(res => {
									if (res.status == 200) {
										console.log(res);
										//用户信息添加之后 添加用户竞猜日志
										uni.request({
											url: base.sq + '/activity/api.quiz/addUserQuizLog',
											data: {
												uid: uid,
												activity_id: activity_id,
												logs: JSON.stringify(logs)
											},
											method: 'POST',
											success: res => {
												console.log(res);
												if (res.statusCode === 200) {
													if (res.data.code === 0) {
														uni.showToast({
															title: '竞猜成功',
															icon: 'none',
															success: function() {
																console.log(123);
																that.quizStatus = true;
																that.infoModal = false;
															}
														});
														// this.quizStatus = true;
														// this.infoModal = false;
													} else {
														uni.showToast({
															title: res.data.info,
															icon: 'none',
															success: function() {
																that.quizStatus = true;
																that.infoModal = false;
															}
														});
														return;
													}
												} else {
													uni.showToast({
														title: 'server error',
														icon: 'none'
													});
													return;
												}
											}
										});
									} else {
										uni.showToast({
											title: 'server error',
											icon: 'none'
										});
										return;
									}
								})
								.catch(error => {})
								.finally(() => {});
						} else {
							var _self = this;
							uni.showToast({
								title: res.data.ErrMsg,
								icon: 'none',
								success: function() {}
							});
							return;
						}
					} else {
						uni.showToast({
							title: '验证码错误',
							icon: 'none'
						});
						return;
					}
				}
			});
			// this.quizStatus =
			console.log(that.infoModal);
			console.log(that.quizStatus);
		},
		// 手机号非空时
		addUserInfo: function(name, mobile) {
			var that = this;
			var uid = that.uid;
			var activity_id = that.$question.activity_id;
			var ns_device_id = that.ns_device_id;

			var logs = that.selectList;
			var user_type = 1;

			let data = {
				uid: uid,
				name: name,
				mobile: mobile,
				activity_id: activity_id,
				ns_device_id: ns_device_id,
				user_type: user_type
			};

			http.post(base.sq + '/activity/api.Users/add', data)
				.then(res => {
					if (res.status == 200) {
						// console.log(res);
						//用户信息添加之后 添加用户竞猜日志
						uni.request({
							url: base.sq + '/activity/api.quiz/addUserQuizLog',
							data: {
								uid: uid,
								activity_id: activity_id,
								logs: JSON.stringify(logs)
							},
							method: 'POST',
							success: res => {
								console.log(res);
								if (res.statusCode === 200) {
									if (res.data.code === 0) {
										uni.showToast({
											title: '竞猜成功',
											icon: 'none'
										});
										// console.log(this.quizStatus);
									} else {
										uni.showToast({
											title: res.data.info,
											icon: 'none'
										});
										return;
									}
								} else {
									uni.showToast({
										title: 'server error',
										icon: 'none'
									});
									return;
								}
							}
						});
					} else {
						uni.showToast({
							title: 'server error',
							icon: 'none'
						});
						return;
					}
				})
				.catch(error => {})
				.finally(() => {});

			this.infoModal = false;
			this.quizStatus = true;
		},
		getUserPointDetail:function(uid){
			let data = {
				uid:uid
			}
			uni.request({
				url:base.sq + '/activity/api.UserPoints/detail',
				data:data,
				method:"GET",
				success:res=> {
					console.log(res)
					if(res.statusCode == 200){
						if(res.data.code == 0){
							let that = this;
							that.userPoints = res.data.data.points;
						}
					}else{
						uni.showToast({
							title:res.errMsg,
							icon:'none'
						})
					}
				}
			})
			
		},
		checkQuizStatus: function(uid, activity_id) {
			let data = {
				uid: uid,
				activity_id: activity_id
			};
			http.post(base.sq + '/activity/api.Quiz/checkUserQuizStatus', data).then(res => {
				console.log(res);
				if (res.status == 200) {
					this.quizStatus = res.data.data.status;

					if (res.data.data.status == true) {
						this.quizStatus = true;
						this.getUserQuizTeamList(uid, activity_id);
					} else {
						this.getTeamList();
					}
				} else {
					uni.showToast({
						title: 'server error',
						icon: 'none'
					});
				}
			});
		},
		getUserBetLogs(uid, activity_id){
			uni.request({
				url: base.sq + '/activity/api.QuizLog/userBetList',
				data: {
					uid: uid,
					activity_id: activity_id
				},
				method: 'POST',
				success: res => {
					console.log(res);
					if (res.statusCode === 200) {
						if (res.data.code === 0) {
							this.userBetList = res.data.data;
						
						} else {
							uni.showToast({
								title: res.data.info,
								icon: 'none'
							});
						}
					} else {
						uni.showToast({
							title: 'server error',
							icon: 'none'
						});
					}
				}
			});
		},
		// 选择答案
		sOption(teamId,optionId,odds) {
			let that = this;
			that.selectOptionId = optionId;
			that.selectTeamId = teamId;
			that.selectOdds = odds;
			
		},
		closeRuleModal() {
			this.ruleModal = false;
			let cssStr = 'overflow-y: auto; height: 100%;';
			document.getElementsByTagName('html')[0].style.cssText = cssStr;
			document.body.style.cssText = cssStr;
			// 下面需要这两行代码，兼容不同浏览器
			document.body.scrollTop = this.pageScrollYoffset;
			window.scroll(0, this.pageScrollYoffset);
		},
		changeRuleModal() {
			this.ruleModal = true;
			let cssStr = 'overflow-y: hidden; height: 100%;';
			document.getElementsByTagName('html')[0].style.cssText = cssStr;
			document.body.style.cssText = cssStr;
			// 下面需要这两行代码，兼容不同浏览器
			document.body.scrollTop = this.pageScrollYoffset;
			window.scroll(0, this.pageScrollYoffset);
		},
		closeLogsModal() {
			this.logsModal = false;
			let cssStr = 'overflow-y: auto; height: 100%;';
			document.getElementsByTagName('html')[0].style.cssText = cssStr;
			document.body.style.cssText = cssStr;
			// 下面需要这两行代码，兼容不同浏览器
			document.body.scrollTop = this.pageScrollYoffset;
			window.scroll(0, this.pageScrollYoffset);
		},
		changeLogsModal() {
			this.logsModal = true;
			this.getUserBetLogs(this.uid,this.$question.activity_id);
			
			let cssStr = 'overflow-y: hidden; height: 100%;';
			document.getElementsByTagName('html')[0].style.cssText = cssStr;
			document.body.style.cssText = cssStr;
			// 下面需要这两行代码，兼容不同浏览器
			document.body.scrollTop = this.pageScrollYoffset;
			window.scroll(0, this.pageScrollYoffset);
		},
		closeInfoModal() {
			this.infoModal = false;
		},
		addUserQuizLog: function() {
			var that = this;

			var uid = that.uid;
			var activity_id = that.activity_id;
			var ns_device_id = that.ns_device_id;
			var token = that.token;

			// 判断题目是否全部答完
			var teamLength = that.teamList.length;
			var selectLength = that.selectList.length;
			if (teamLength > selectLength) {
				uni.showToast({
					title: '请继续答题',
					icon: 'none'
				});
				return;
			}

			let data = {
				uid: uid,
				activity_id: activity_id
			};
			http.post(base.sq + '/activity/api.users/checkUidStatus', data)
				.then(res => {
					// console.log(res);
					if (res.status == 200) {
						// console.log(res.data.data.count);
						let count = res.data.data.count;

						// 检查用户是否在数据库中
						if (count <= 0) {
							let req_url = base.bd + '/v3/user/info';
							let headers = {
								ns_device_id: ns_device_id,
								uid: uid,
								token: token
							};
							http.get(req_url, { headers: headers }).then(res => {
								// console.log(res);
								if (res.status == 200) {
									if (res.data.Status == 1) {
										let nickname = res.data.Data.nickname;
										let mobile = res.data.Data.phone;
										console.log(res);
										if (mobile == '') {
											this.infoModal = true;
										} else {
											this.addUserInfo(nickname, mobile);
										}
									}
								} else {
									uni.showToast({
										title: 'server error',
										icon: 'none'
									});
								}
							});
						}
					} else {
						uni.showToast({
							title: 'server error',
							icon: 'none'
						});
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		getTeamList: function() {
			uni.request({
				url: base.sq + '/activity/api.quiz/getTeamQuizList',
				data: {
					// round: this.round
				},
				method: 'GET',
				success: res => {
					console.log(res);
					if (res.statusCode === 200) {
						if (res.data.code === 0) {
							var list = res.data.data;
							this.teamList = list;
							// console.log(list);
						}
					} else {
						uni.showToast({
							title: 'server error',
							icon: 'none'
						});
					}
				}
			});
		},
		copy: function(text) {
			let content = text; // 复制内容，必须字符串，数字需要转换为字符串
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
		}
	}
};
</script>

<style>
.index-bg {
	background: url(https://aloss.hotforest.cn/bundesliga/index-bg.png) no-repeat center;
	background-size: 100% 100%;
	height: 100%;
}

.index-top {
	margin-top: 114rpx;
}
.index-top-l {
	width: 50%;
	text-align: left;
}
.index-top-r {
	width: 50%;
	vertical-align: text-bottom;
}
.left-icon {
	text-align: center;
	background: url(https://aloss.hotforest.cn/bundesliga/left-icon.png) no-repeat center;
	background-size: 100% 100%;
	width: 134rpx;
	height: 55rpx;

	font-size: 22rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: 400;
	color: rgba(146, 251, 255, 1);
	line-height: 55rpx;
}
.right-icon {
	margin-left: auto;
	text-align: center;
	background: url(https://aloss.hotforest.cn/bundesliga/right-icon.png) no-repeat center;
	background-size: 100% 100%;
	width: 134rpx;
	height: 55rpx;
	font-size: 22rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: 400;
	color: rgba(146, 251, 255, 1);
	line-height: 55rpx;
}

.question-bg {
	background-size: 100% 100%;
	width: 100%;
	margin: 0 auto;
	margin-top: 40%;
	background-color: rgb(56, 30, 128);
}
.question-bg-title {
	width: 708rpx;
	margin: 0 auto;
	margin-top: 20rpx;
	border-radius: 30rpx;
	background-color: rgba(50, 141, 255, 1);
}
.team-item {
	background-color: #ffffff;
	width: 708rpx;
	/* height: 700rpx; */
	margin: 30rpx auto;
	padding-bottom: 10rpx;
	border-radius: 30rpx;
}
.join-person-count {
	float: right;
	width: 40%;
	height: 80rpx;
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(153, 153, 153, 1);
	line-height: 80rpx;
	text-align: right;
	margin-right: 10%;
}
.competition-time {
	float: left;
	width: 40%;
	height: 80rpx;
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(153, 153, 153, 1);
	line-height: 80rpx;
	margin-left: 10%;
}
.team-answer {
	width: 90%;
	height: 100rpx;
	margin: 0 auto;
	margin-top: 24rpx;
}

.question-title-p {
	margin: auto;
}

.question-title {
	text-align: center;
	font-size: 40rpx;
	line-height: 60rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: 400;
	color: rgba(254, 254, 254, 1);
	text-shadow: 0px 3rpx 2rpx rgba(0, 0, 0, 0.29);
}
.question-title-2 {
	text-align: center;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 241, 161, 1);
}

.question-title-3 {
	width: 100%;
}

.question-1 {
	width: 10%;
	margin-left: 2%;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}
.question-1 img {
	width: 100%;
}
.question-5 {
	width: 10%;
	margin-left: 2%;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}
.question-5 img {
	width: 100%;
}
.question-2 {
	width: 20%;
	margin-left: 2%;
	text-align: center;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}
.question-2 img {
	max-width: 100%;
	max-height: 100%;
}
.question-4 {
	width: 20%;
	margin-left: 2%;
	text-align: center;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}
.question-4 img {
	width: 100%;
}

.question-3 {
	text-align: center;
	width: 30%;
	padding-top: 30rpx;
}
.question-3-vs {
	font-size: 46rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: bolder;
	color: rgba(50, 141, 255, 1);
}
.question-3-home-score {
	font-size: 32rpx !important;
	font-family: MF LingHei (Noncommercial) !important;
	font-weight: bolder !important;
	color: rgba(250, 59, 22, 1) !important;
}
.question-3-guest-score {
	font-size: 32rpx !important;
	font-family: MF LingHei (Noncommercial) !important;
	font-weight: bolder !important;
	color: rgba(0, 0, 0, 1) !important;
}

.question-3 span {
	font-size: 28rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: bolder;
	color: rgba(50, 141, 255, 1);
}
.option-name-1 {
	text-align: center;
	width: 100%;
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(50, 141, 255, 1);
}

.option-active {
	background-color: #fa6c1e !important;
	color: #ffffff !important;
	border: none !important;
}

.option-item {
	float: left;
	width: 30%;
	margin-left: 2%;

	border: 1px solid rgba(0, 160, 233, 1);
	border-radius: 30rpx;
	text-align: center;

	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: bolder;
	color: rgba(50, 141, 255, 1);
}

.question-button {
	margin-top: 50rpx;
	margin-bottom: 30rpx;
}
.question-button button {
	background: url(https://aloss.hotforest.cn/bundesliga/quiz-button.png) no-repeat center;
	background-size: 100% 100%;
	width: 365rpx;
	height: 92rpx;

	font-size: 36rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);

	text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.75);
	-webkit-text-stroke: 3px undefined;
	text-stroke: 3px undefined;
}
.scroll-Y {
	width: 100%;
}

.rule-modal {
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
}
.rule-modal-bg {
	position: fixed;
	z-index: 110;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	width: 652rpx;
	height: 700rpx;
	background: url(https://aloss.hotforest.cn/bundesliga/modal-1.png) no-repeat center;
	background-size: 100% 100%;
}
.rule-title {
	font-size: 32rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: bolder;
	color: rgba(255, 255, 255, 1);
	line-height: 35rpx;
	padding-top: 41rpx;
	padding-left: 34rpx;
}
.rule-content {
	padding-left: 34rpx;
	padding-top: 80rpx;
	padding-right: 30rpx;
	font-size: 28rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}
.rule-copy button {
	width: 200rpx;
	height: 60rpx;
	margin-top: 20rpx;
	font-size: 24rpx;
	line-height: 60rpx;
	background: url(https://aloss.hotforest.cn/bundesliga/button-y.png) no-repeat center;
	background-size: 100% 100%;
	color: #ffffff;
}
.logs-modal {
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
}
.logs-modal-bg {
	position: fixed;
	z-index: 110;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	width: 90%;
	height: 80%;
	background: url(https://aloss.hotforest.cn/bundesliga/modal-2.png) no-repeat center;
	background-size: 100% 100%;
}
.logs-title {
	font-size: 30rpx;
	font-family: MF LingHei (Noncommercial);
	color: rgba(255, 255, 255, 1);
	line-height: 80rpx;
	width: 85%;
	height: 80rpx;
	text-indent: 30rpx;
	font-weight: bolder;
}
.logs-content {
	padding-left: 34rpx;
	padding-top: 80rpx;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.logs-1 {
	width: 99%;
	height: 60rpx;
	line-height: 60rpx;
	border-bottom: 1px solid #39b8bf;
	font-size: 26rpx;
	font-family: Lantinghei SC;
	color: #ffffff;
	font-weight: bolder;
}
.logs-1-1 {
	width: 35%;
	text-indent: 20rpx;
}
.logs-1-2 {
	width: 20%;
}
.logs-1-3 {
	width: 25%;
}
.logs-1-4 {
	width: 20%;
	text-align: center;
}
.logs-2 {
	width: 99%;
	height: 50rpx;
	line-height: 50rpx;
	text-indent: 20rpx;
	font-size: 26rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	border-bottom: 1px dashed #39b8bf;
}

.logs-3 {
	padding: 20rpx 20rpx 10rpx 20rpx;
	border-bottom: 1px solid #39b8bf;
}
.logs-3-font {
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}
.logs-3-1 {
	width: 35%;
}
.logs-3-2 {
	width: 20%;
}
.logs-3-3 {
	width: 25%;
	text-align: center;
}
.logs-3-4 {
	width: 20%;
	text-align: center;
}
.logs-victory {
	font-weight: bolder !important;
	font-size: 30rpx !important;
	color: rgba(250, 59, 22, 1) !important ;
}
.logs-fail {
	font-weight: bolder !important;
	font-size: 30rpx !important;
	color: #ffffff !important;
}

.info-modal {
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
}
.info-modal-bg {
	position: fixed;
	z-index: 110;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	width: 552rpx;
	height: 700rpx;
	background: url(https://aloss.hotforest.cn/bundesliga/modal-1.png) no-repeat center;
	background-size: 100% 100%;
}
.info-title {
	font-size: 30rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	line-height: 35rpx;
	padding-top: 31rpx;
	padding-left: 34rpx;
}
.info-content {
	width: 90%;
	padding-left: 34rpx;
	padding-top: 80rpx;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}
.info-content-mobile {
	width: 90%;
	height: 80rpx;
	padding-left: 34rpx;
	margin-top: 40rpx;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	position: relative;
}
.info-content-code {
	width: 90%;
	height: 80rpx;
	padding-left: 34rpx;
	margin-top: 40rpx;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.info-content-mobile button {
	position: absolute;
	right: 10rpx;
	top: 15rpx;
	width: 147rpx;
	height: 50rpx;
	line-height: 50rpx;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	text-shadow: 0px 1px 0px rgba(130, 66, 0, 0.26);
	background: #0a98d5;
}
.info-content-mobile input {
	height: 80rpx;
	border-bottom: 1rpx solid #39b8bf;
}
.info-content input {
	height: 80rpx;
	border-bottom: 1rpx solid #39b8bf;
}
.info-content-code input {
	height: 80rpx;
	border-bottom: 1rpx solid #39b8bf;
}

/deep/ .uni-input-placeholder {
	color: #ffffff !important;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
}

.info-button {
	margin-top: 80rpx;
}
.info-button-quiz-active {
	background: #888888 !important;
}
.info-button button {
	margin: 0 auto;
	width: 147rpx;
	height: 50rpx;
	line-height: 50rpx;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	text-shadow: 0px 1px 0px rgba(130, 66, 0, 0.26);
	background: url(https://aloss.hotforest.cn/bundesliga/info-button.png) no-repeat center;
}
.logs-scroll-Y {
	width: 99%;
	height: 70%;
}

.quiz-modal {
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
}
.quiz-modal-bg {
	position: fixed;
	z-index: 110;
	width: 100%;
	height: 500rpx;
	bottom: 0;
	background-color: #ffffff;
	background-size: 100% 100%;
}
.quiz-modal-1 {
	padding: 30rpx 40rpx;
	font-size: 28rpx;
	font-family: Lantinghei SC;
	font-weight: bolder;
	color: rgba(51, 51, 51, 1);
}
.quiz-modal-2 {
	width: 100%;
	height: 80rpx;
	/* padding: 0rpx 40rpx; */
}
.quiz-modal-2-1 {
	float: left;
	width: 20%;
	height: 100%;
	line-height: 80rpx;
	margin-left: 10%;
	background: rgba(255, 255, 255, 1);
	border: 1px solid rgba(0, 160, 233, 1);
	border-radius: 29rpx;
	text-align: center;

	font-size: 28rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}
.quiz-modal-2-2 {
	float: left;
	width: 20%;
	height: 100%;
	line-height: 80rpx;
	margin-left: 10%;
	background: rgba(255, 255, 255, 1);
	border: 1px solid rgba(0, 160, 233, 1);
	border-radius: 29rpx;
	text-align: center;

	font-size: 28rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}
.quiz-modal-2-3 {
	float: left;
	width: 20%;
	height: 100%;
	line-height: 80rpx;
	margin-left: 10%;
	background: rgba(255, 255, 255, 1);
	border: 1px solid rgba(0, 160, 233, 1);
	border-radius: 29rpx;
	text-align: center;

	font-size: 28rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}

.quiz-modal-3{
	width: 100%;
	height: 100rpx;
}
.uni-numbox{
	margin: 0 auto;
	margin-top: 20rpx;
}
.quiz-modal-4{
	width: 100%;
}
.quiz-modal-4 button{
	background: url(https://aloss.hotforest.cn/bundesliga/quiz-button.png) no-repeat center;
	background-size: 100% 100%;
	width: 365rpx;
	height: 92rpx;
	
	font-size: 36rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
	
	text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.75);
	-webkit-text-stroke: 3px undefined;
	text-stroke: 3px undefined;
}
.quiz-modal-5{
	width: 100%;
	text-align: center;
	font-size:28rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(51,51,51,1);
	line-height:80rpx;
}
.quiz-modal-5 span{
	color: #FF4242;
}
</style>
