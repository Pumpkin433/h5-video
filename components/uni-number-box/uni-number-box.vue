<template>
	<view class="uni-numbox">
		<view @click="_calcValue('minus')" class="uni-numbox__minus">
			<text class="uni-numbox--text" :class="{ 'uni-numbox--disabled': inputValue <= min || disabled }">-</text>
		</view>
		
		<view class="points">
			<input :disabled="disabled"   @blur="_onBlur" class="uni-numbox__value"
			type="number" v-model="inputValue" />
			<view class="point-icon">
				<img src="https://aloss.hotforest.cn/bundesliga/point-icon.png" alt="img">
			</view>
			<view class="points-bg"></view>
		</view>
		<view @click="_calcValue('plus')" class="uni-numbox__plus">
			<text class="uni-numbox--text" :class="{ 'uni-numbox--disabled': inputValue >= max || disabled }">+</text>
		</view>
	</view>
</template>
<script>
	/**
	 * NumberBox 数字输入框
	 * @description 带加减按钮的数字输入框
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=31
	 * @property {Number} value 输入框当前值
	 * @property {Number} min 最小值
	 * @property {Number} max 最大值
	 * @property {Number} step 每次点击改变的间隔大小
	 * @property {Boolean} disabled = [true|false] 是否为禁用状态
	 * @event {Function} change 输入框值改变时触发的事件，参数为输入框当前的 value
	 */

	export default {
		name: "UniNumberBox",
		props: {
			value: {
				type: [Number, String],
				default: 1
			},
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 100
			},
			step: {
				type: Number,
				default: 1
			},
			disabled: {
				type: Boolean,
				default: false
			},
			readOnly:{
				type: Boolean,
				default:true
			}
		},
		data() {
			return {
				inputValue: 10
			};
		},
		watch: {
			value(val) {
				this.inputValue = +val;
			},
			inputValue(newVal, oldVal) {
				if (+newVal !== +oldVal) {
					this.$emit("change", newVal);
				}
			}
		},
		created() {
			this.inputValue = +this.value;
		},
		onLoad() {
		},
		methods: {
			_calcValue(type) {
				if (this.disabled) {
					return;
				}
				const scale = this._getDecimalScale();
				let value = this.inputValue * scale;
				let step = this.step * scale;
				if (type === "minus") {
					value -= step;
					if (value < (this.min * scale)) {
						return;
					}
					if (value > (this.max * scale)) {
						value = this.max * scale
					}
				} else if (type === "plus") {
					value += step;
					if (value > (this.max * scale)) {
						return;
					}
					if (value < (this.min * scale)) {
						value = this.min * scale
					}
				}

				this.inputValue = String(value / scale);
			},
			_getDecimalScale() {
				let scale = 1;
				// 浮点型
				if (~~this.step !== this.step) {
					scale = Math.pow(10, (this.step + "").split(".")[1].length);
				}
				return scale;
			},
			_onBlur(event) {
				let value = event.detail.value;
				if (!value) {
					// this.inputValue = 0;
					return;
				}
				value = +value;
				if (value > this.max) {
					value = this.max;
				} else if (value < this.min) {
					value = this.min;
				}
				this.inputValue = value;
			}
		}
	};
</script>
<style scoped>
	/* #ifdef APP-NVUE */
	/* #endif */

	.uni-numbox {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		height: 50px;
		line-height: 50px;
		width: 180px;
		margin: 0 auto;
		margin-top: 20px;
	}

	.uni-numbox__value {
		
		background-color: #ffffff;
		
		text-align: center;
		font-size: 32rpx;
		
		
		width: 230rpx;
		height: 57rpx;
		border-radius: 43rpx;
		border: 1rpx solid rgba(0, 160, 233, 1);
		margin-left: 10px;
	}

.uni-numbox__value_disabled{
	color: #333333;
}

	.uni-numbox__minus {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;

		font-size: 20px;
		color: #333;
		
		width: 43rpx;
		height: 43rpx;
		line-height: 43rpx;
		border-radius: 43rpx;
		border: 1rpx solid rgba(0, 160, 233, 1);
		margin-top: 3px;
	}

	.uni-numbox__plus {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		
		width: 43rpx;
		height: 43rpx;
		border-radius: 43rpx;
		border: 1rpx solid rgba(0, 160, 233, 1);
		
		margin-left: 10px;
		margin-top: 3px;
	}

	.uni-numbox--text {
		font-size: 40rpx;
		color: #333;
		line-height: 43rpx;
	}

	.uni-numbox--disabled {
		color: #c0c0c0;
	}
	.points-bg{
	/* 	position: fixed;
		z-index: 1000; */
		/* background-color: #000000; */
		position: absolute;
		width: 240rpx;
		height: 60rpx;
		top: 0;
	}
	.points{
		position: relative;
	}
	.point-icon {
		position: absolute;
		width: 42rpx;
		height: 42rpx;
		left: 40rpx;
		top: 10rpx;
	}
	.point-icon img{
		width: 100%;
	}
</style>