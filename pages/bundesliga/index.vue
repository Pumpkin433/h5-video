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
							<!-- {{team.home_team_name}} -->
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

					<view class="flex-item flex-item-V ">
						<radio-group @change="radioChange" :data-id="team.id">
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
								<view class="option-name-2 uni-radio-input uni-radio-input-checked">{{ item.name }}</view>
								<view class="option-name-1">
									<radio class="option-radio" :name="item.name" :value="item.value" :checked="index === current && team.id === radio_id" />
								</view>
							</label>
						</radio-group>
					</view>
				</view>
			</scroll-view>
		</view>

		<view class="flex-item flex-item-V question-button"><button @click="addUserQuizLog(selectList)" type="default">确认选择</button></view>
		
		<view class="rule-modal" v-show="ruleModal" @click="closeRuleModal()"></view>
		<view class="rule-modal-bg" v-show="ruleModal">
			<view class="flex-item  rule-title">游戏规则</view>
			<view class="flex-item rule-content" >
				1.竞猜将于比赛开始前关闭竞猜通道 <br>
				2.系统将随机抽取10位答对竞猜的用户，<br>
				3.下期活动开始时，将公布获奖用户名单<br>
				4.获奖用户，请添加全民体育官方微信<br>
				（NationSports）领取相应奖励
				                            
			</view>
		</view>
		
		<view class="logs-modal" v-show="logsModal" @click="closeLogsModal()"></view>
		<view class="logs-modal-bg" v-show="logsModal">
			<view class="flex-item  logs-title">竞猜记录</view>
			<view class="flex-item  logs-content" >
				1.竞猜将于比赛开始前关闭竞猜通道 <br>
				2.系统将随机抽取10位答对竞猜的用户，<br>
				3.下期活动开始时，将公布获奖用户名单<br>
				4.获奖用户，请添加全民体育官方微信<br>
				（NationSports）领取相应奖励
				                            
			</view>
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
			items: [
				{
					value: '1',
					name: '主队赢',
					checked: 'false'
				},
				{
					value: '3',
					name: '平',
					checked: 'false'
				},
				{
					value: '2',
					name: '客队赢',
					checked: 'false'
				}
			],
			current: -1,
			radio_id: -1,
			ruleModal:false,
			logsModal:false,
		};
	},
	onLoad(option) {
		this.getTeamList();
	},
	methods: {
		closeRuleModal(){
			this.ruleModal = false;
		},
		changeRuleModal(){
			this.ruleModal = true;
		},
		closeLogsModal(){
			this.logsModal = false;
		},
		changeLogsModal(){
			this.logsModal = true;
		},
		radioChange: function(evt) {
			let index = evt.currentTarget.dataset.id;
			this.radio_id = index;

			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].value === evt.target.value) {
					this.current = i;
					break;
				}
			}

			var optionObject = {
				quiz_id: index,
				option: evt.target.value
			};
			var selectList = this.selectList;
			for (var i = 0; i < selectList.length; i++) {
				// console.log(selectList[i]);
				var quiz_id = selectList[i]['quiz_id'];
				if (quiz_id == index) {
					selectList.splice(i, 1);
				}
			}
			selectList.push(optionObject);
			console.log(selectList);
			this.selectList = selectList;
			
		},
		addUserQuizLog: function(logs) {
			uni.request({
				url: base.sq + '/activity/api.quiz/addUserQuizLog',
				data:{
					uid:1,
					activity_id:5,
					logs:JSON.stringify(logs)
				},
				method:'POST',
				success: res => {
					console.log(res)
					if (res.statusCode === 200) {
						if (res.data.code === 0) {
							
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
	text-align: right;
	width: 100%;
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(50, 141, 255, 1);
}
.option-name-2 {
	text-align: center;
	width: 100%;
	font-size: 30rpx;
	font-family: Lantinghei SC;
	font-weight: 600;
	color: rgba(50, 141, 255, 1);
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
.option-active {
	background-color: #007aff;
	color: white;
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
	background-color: rgba(0,0,0,0.6);
}
.rule-modal-bg{
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
.rule-title{
	font-size:30rpx;
	font-family:MF LingHei (Noncommercial);
	font-weight:400;
	color:rgba(255,255,255,1);
	line-height:35rpx;
	padding-top: 31rpx;
	padding-left: 34rpx;
}
.rule-content{
	padding-left: 34rpx;
	padding-top: 80rpx;
	font-size:24rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(255,255,255,1);
}


.logs-modal {
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0,0,0,0.6);
}
.logs-modal-bg{
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
.logs-title{
	font-size:30rpx;
	font-family:MF LingHei (Noncommercial);
	font-weight:400;
	color:rgba(255,255,255,1);
	line-height:35rpx;
	padding-top: 31rpx;
	padding-left: 34rpx;
}
.logs-content{
	padding-left: 34rpx;
	padding-top: 80rpx;
	font-size:24rpx;
	font-family:Lantinghei SC;
	font-weight:600;
	color:rgba(255,255,255,1);
}
</style>
