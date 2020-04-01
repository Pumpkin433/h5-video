import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import store from './store'

import http from '@/utils/http.js';
import base from '@/utils/base.js';


Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

// Vue.prototype.$uid = 0

// Vue.prototype.contact.onShareDone = function(){
// 	console.log('basketball--------contact')
// 	let uid = this.$uid
// 	// let ns_device_id = uni.getStorageSync('ns_device_id')
// 	console.log(uid)
// 	let data = {
// 		uid:uid,
// 		chance:1
// 	}
	
// 	http.post('http://p.hotforest.cn/api/v1.h5.Questions/updateUserAnswerChance', data)
// 		.then(res => {
// 			console.log(res);
// 			console.log('onshareDone')
			
	
// 		})
// 		.catch(error => {})
// 		.finally(() => {});
	
// }
Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
