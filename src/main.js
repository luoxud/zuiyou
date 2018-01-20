// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import './assets/css/global.css'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.prototype.store = new Vuex.Store({
	state: {
		$homeTab: 'tuijian',
		$genpaiTab: 'guanzhu',
		$footModule: 'home', // 当前的底部模板
		$isFoot: true, // 是否显示foot
		$topicTab: 0, // 话题显示
		$isMenu: true // 是否显示Menu
	},
	mutations: {
		setState (state, info) {
			state[info.attr] = info.value
		}
	}
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
