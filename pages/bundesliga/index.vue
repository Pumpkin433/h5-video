<template>
	<view class="uni-flex uni-column index-bg">
		<view class="uni-flex uni-row index-top">
			<view class="flex-item index-top-l"><view class="left-icon" @click="changeRuleModal()">游戏规则</view></view>
			<view class="flex-item index-top-r"><view class="right-icon" @click="changeLogsModal()">竞猜记录</view></view>
		</view>

		<view class="question-bg">
			<view class="flex-item flex-item-V question-title">德甲第 1 轮</view>
			<view class="flex-item flex-item-V question-title-2">本场竞猜截止到5月3日 12:00之前</view>

			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y " @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
				<view class="scroll-view-item " v-for="(team, i) in teamList" :key="i">
					<view class="uni-flex uni-row question-title-3">
						<view class="flex-item question-1">主队</view>
						<view class="flex-item question-2">
							<img :src="team.home_team_icon" alt="img" />
							{{ team.home_team_name }}
						</view>
						<view class="flex-item question-3">
							VS
							<br />
							<span>{{ team.competition_time }}</span>
							<br />
							<span>{{ team.home_team_score }} : {{ team.guest_team_score }}</span>
						</view>
						<view class="flex-item question-4">
							<img :src="team.guest_team_icon" alt="img" />
							{{ team.guest_team_name }}
						</view>
						<view class="flex-item question-5">客队</view>
					</view>

					<view>
						<view class="flex-item flex-item-V option-item" :class="[team.id + '_' + 1 == team.checkValue ? 'option-active' : '']" @click="sOption(team.id, 1)">
							主队胜
						</view>
						<view class="flex-item flex-item-V option-item " :class="[team.id + '_' + 3 == team.checkValue ? 'option-active' : '']" @click="sOption(team.id, 3)">
							平
						</view>
						<view class="flex-item flex-item-V option-item " :class="[team.id + '_' + 2 == team.checkValue ? 'option-active' : '']" @click="sOption(team.id, 2)">
							客队胜
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<view class="flex-item flex-item-V question-button">
			<button @click="addUserQuizLog(selectList)" type="default">确认选择</button>
		</view>

		<view class="rule-modal" v-show="ruleModal" @click="closeRuleModal()"></view>
		<view class="rule-modal-bg" v-show="ruleModal">
			<view class="flex-item  rule-title">游戏规则</view>
			<view class="flex-item rule-content">
				1.竞猜将于比赛开始前关闭竞猜通道
				<br />
				2.系统将随机抽取10位答对竞猜的用户，
				<br />
				3.下期活动开始时，将公布获奖用户名单
				<br />
				4.获奖用户，请添加全民体育官方微信
				<br />
				（NationSports）领取相应奖励
			</view>
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
			<view class="flex-item logs-2">第一轮</view>
			<scroll-view :scroll-top="scrollTop" 
			scroll-y="true" 
			@scrolltoupper="upper" 
			@scrolltolower="lower" 
			@scroll="scroll">
				<view class="scroll-view-item logs-3" v-for="(log, i) in userQuizLogs" :key="i">
					<view class="uni-row uni-flex ">
						<view class="flex-item logs-3-font logs-3-1">{{log.detail.competition_time}}</view>
						<view class="flex-item logs-3-font logs-3-2">
						{{log.detail.home_team_name}} <br>
						{{log.detail.guest_team_name}}
						</view>
						<view class="flex-item logs-3-font logs-3-3">
							<text v-if="log.result == 1">{{log.detail.home_team_name}}</text>
							<text v-if="log.result == 2">{{log.detail.guest_team_name}}</text>
							<text v-if="log.result == 3">平</text>
							<!-- {{log.result}} -->
						</view>
						<view class="flex-item logs-3-font logs-3-4">
							<!-- {{log.r_status}} -->
							<text v-if="log.r_status == -1">未开</text>
							<text v-if="log.r_status == 1">胜</text>
							<text v-if="log.r_status == 0">负</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import base from '@/utils/base.js';

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
			teamId: 0,
			userQuizLogs:[],
			loginAppStatus: false,
			uid: null,
			token: null,
			ns_device_id: null,
			activity_id: 4,
			
		};
	},
	onLoad(option) {
		
		// open this url outof app env
		if (typeof contact === 'undefined') {
			this.appMsgModal = true;
			// this.appMsgModal = false;
		} else {
			if (option.uid !== '' && option.uid !== 'null' && option.uid !== undefined) {
				uni.setStorageSync('uid', option.uid);
				uni.setStorageSync('token', option.token);
				uni.setStorageSync('ns_device_id', option.ns_device_id);
				this.loginAppStatus = true;
			} else {
				this.loginAppStatus = false;
				// open this url in app env
				contact.onLoginDone = function(uid, token) {
					uni.removeStorageSync('uid');
					uni.removeStorageSync('token');
					uni.setStorageSync('uid', uid);
					uni.setStorageSync('token', token);
					uni.setStorageSync('loginAppStatus', true);
		
					let ns_device_id = uni.getStorageSync('ns_device_id');
					uni.reLaunch({
						url: '/pages/index/mid?uid=' + uid + '&token=' + token + '&ns_device_id=' + ns_device_id
					});
				};
			}
			//
			this.getTeamList();
		}
		
		if (this.uid !== '' && this.uid !== 'null' && this.uid !== undefined) {
			//加载用户信息
			this.loadUserInfo();
		}
		
		this.uid = uni.getStorageSync('uid');
		// this.uid = 468974;
		this.token = uni.getStorageSync('token');
		this.ns_device_id = uni.getStorageSync('ns_device_id');
		
	},
	methods: {
		loginApp() {
			contact.requireLogin();
			console.log('relogin');
		},
		loadUserInfo() {
			// 加载页面首先获取用户信息 如果用户没有注册则帮忙注册一下
			let data = {
				uid: this.uid,
				activity_id: this.$question.activity_id
			};
			http.post(base.sq + '/activity/api.users/checkUidStatus', data)
				.then(res => {
					console.log(res);
					if (res.status == 200) {
						// console.log(res.data.data.count);
						let count = res.data.data.count;
		
						// 检查用户是否在数据库中
						if (count <= 0) {
							let req_url = base.bd + '/v3/user/info';
							let headers = {
								ns_device_id: this.ns_device_id,
								uid: this.uid,
								token: this.token
							};
							http.get(req_url, { headers: headers }).then(res => {
								console.log(res);
								// alert(res.data.Status)
		
								if (res.status == 200) {
									if (res.data.Status == 1) {
										let nickname = res.data.Data.nickname;
										let mobile = res.data.Data.phone;
										console.log(res);
										this.addUser(this.uid, nickname, mobile, this.$question.activity_id, 0, this.ns_device_id, 1);
									} else {
										// return alert(res.data.ErrorMsg);
										// return uni.showToast({
										// 	title: res.data.ErrorMsg,
										// 	icon: 'none',
										// 	mask: true,
										// 	duration: 2000
										// });
									}
								} else {
									return alert('server error');
								}
							});
						} else {
							// 获取用户信息
							this.getUserInfo(this.uid, this.$question.activity_id);
						}
					} else {
						return alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		addUser(uid, name, mobile, activity_id, sign_score, ns_device_id, user_type) {
			let data = {
				uid: uid,
				name: name,
				mobile: mobile,
				activity_id: activity_id,
				sign_score: sign_score,
				ns_device_id: ns_device_id,
				user_type: user_type
			};
		
			http.post(base.sq + '/activity/api.Users/add', data)
				.then(res => {
					if (res.status == 200) {
						console.log(res);
						// alert(res.data.data)
						// location.reload()
					} else {
						return alert('server error');
					}
				})
				.catch(error => {})
				.finally(() => {});
		},
		getUserInfo(uid, activity_id) {
			let data = {
				uid: uid,
				activity_id: activity_id
			};
			let req_url = base.sq + '/activity/api.users/getUserInfo';
			http.post(req_url, data).then(res => {
				console.log(res);
				if (res.status == 200) {
					let data = res.data.data;
					
				} else {
					alert('server error');
				}
			});
		},
		getUserQuizLogs(){
			uni.request({
				url: base.sq + '/activity/api.quiz/getUserQuizLogs',
				data: {
					uid: 1,
					activity_id: 5,
				},
				method: 'POST',
				success: res => {
					console.log(res);
					if (res.statusCode === 200) {
						if (res.data.code === 0) {
							this.userQuizLogs = res.data.data;
							console.log(this.userQuizLogs);
						}else{
							alert(res.data.info);
						}
					} else {
						alert('server error');
					}
				}
			});
		},
		sOption(teamId, result) {
			let that = this;
			that.teamId = teamId;

			var key = 'team_' + teamId;
			var teamList = this.teamList;
			var a = teamId + '_' + result;

			teamList.forEach(item => {
				if (item.id === teamId) {
					item.checkValue = a;
				}
			});
			// todos  two days
			this.$forceUpdate((this.teamList = teamList));
			// this.teamList = teamList;
			
			var selectList = this.selectList;
			var optionObject = {
				team_id: teamId,
				result: result
			};
			
			for (var i = 0; i < selectList.length; i++) {
				var team_id = selectList[i]['team_id'];
				if (team_id == teamId) {
					selectList.splice(i, 1);
				}
			}
			selectList.push(optionObject);
			this.selectList = selectList;
		
		},
		closeRuleModal() {
			this.ruleModal = false;
		},
		changeRuleModal() {
			this.ruleModal = true;
		},
		closeLogsModal() {
			this.logsModal = false;
		},
		changeLogsModal() {
			this.logsModal = true;
			this.getUserQuizLogs();
		},
		addUserQuizLog: function(logs) {
			uni.request({
				url: base.sq + '/activity/api.quiz/addUserQuizLog',
				data: {
					uid: 1,
					activity_id: 5,
					logs: JSON.stringify(logs)
				},
				method: 'POST',
				success: res => {
					console.log(res);
					if (res.statusCode === 200) {
						if (res.data.code === 0) {
							alert('添加成功');
						}else{
							alert(res.data.info);
						}
					} else {
						alert('server error');
					}
				}
			});
		},
		getTeamList: function() {
			uni.request({
				url: base.sq + '/activity/api.quiz/teamList',
				success: res => {
					// console.log(res)
					if (res.statusCode === 200) {
						if (res.data.code === 0) {
							var list = res.data.data;
							list.forEach(item => {
								item.items = this.items;
							});
							this.teamList = list;
							console.log(list);
						}
					} else {
						alert('server error');
					}
				}
			});
		},
		upper: function(e) {
			// console.log(e);
		},
		lower: function(e) {
			// console.log(e);
		},
		scroll: function(e) {
			// console.log(e);
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
	background: url(https://aloss.hotforest.cn/bundesliga/question-bg.png) no-repeat center;
	background-size: 100% 100%;
	width: 708rpx;
	height: 700rpx;
	margin: auto;
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
	margin-top: 30rpx;
	padding-bottom: 30rpx;
}

.question-1 {
	width: 10%;
	margin-left: 2%;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
}
.question-5 {
	width: 10%;
	margin-left: 2%;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(51, 51, 51, 1);
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
	/* width: 148rpx;
	height: 110rpx; */
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
	/* width: 148rpx;
	height: 110rpx; */
}

.question-3 {
	text-align: center;
	width: 30%;
	font-size: 40rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: 400;
	color: rgba(50, 141, 255, 1);
	text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.29);
}
.question-3 span {
	font-size: 24rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: 400;
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
	background-color: #007aff;
	color: #ffffff !important;
}

.option-item {
	width: 600rpx;

	height: 62rpx;
	border: 1px solid rgba(0, 160, 233, 1);
	border-radius: 30rpx;
	margin: 0 auto;
	margin-top: 20rpx;
	text-align: center;

	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(50, 141, 255, 1);
}

.question-button {
	position: absolute;
	bottom: 45rpx;
	left: 0;
	right: 0;
	margin: auto;
	/* text-align: center; */
}
.question-button button {
	background: url(https://aloss.hotforest.cn/bundesliga/button-y.png) no-repeat center;
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
	height: 560rpx;
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
	width: 552rpx;
	height: 452rpx;
	background: url(https://aloss.hotforest.cn/bundesliga/modal-1.png) no-repeat center;
	background-size: 100% 100%;
}
.rule-title {
	font-size: 30rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	line-height: 35rpx;
	padding-top: 31rpx;
	padding-left: 34rpx;
}
.rule-content {
	padding-left: 34rpx;
	padding-top: 80rpx;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
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
	width: 552rpx;
	height: 80%;
	/* height: 452rpx; */
	background: url(https://aloss.hotforest.cn/bundesliga/modal-2.png) no-repeat center;
	background-size: 100% 100%;
}
.logs-title {
	font-size: 30rpx;
	font-family: MF LingHei (Noncommercial);
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	line-height: 35rpx;
	padding-top: 31rpx;
	padding-left: 34rpx;
}
.logs-content {
	padding-left: 34rpx;
	padding-top: 80rpx;
	font-size: 24rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(255, 255, 255, 1);
}

.logs-1{
	padding:20rpx 20rpx 10rpx 20rpx;
	border-bottom: 1px solid #39B8BF;
	font-size:24rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(255,255,255,1);
	
}
.logs-1-1{
	width: 35%;
}
.logs-1-2{
	width: 20%;
}
.logs-1-3{
	width: 25%;
}
.logs-1-4{
	width: 20%;
}
.logs-2{
	padding:20rpx 20rpx 10rpx 20rpx;
	font-size:18rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(255,255,255,1);
	border-bottom: 1px dashed  #39B8BF;
}

.logs-3{
	padding:20rpx 20rpx 10rpx 20rpx;
	border-bottom: 1px solid #39B8BF;
}
.logs-3-font{
	font-size:18rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(255,255,255,1);
}
.logs-3-1{
	width: 35%;
}
.logs-3-2{
	width: 20%;
}
.logs-3-3{
	width: 25%;
	text-align: center;
}
.logs-3-4{
	width: 20%;
}
</style>
