import Vue from 'vue'
import App from './App'

// 引入全局uView
import uView from 'uview-ui'

import store from './store/index.js'
import MinRequest from './utils/request.js'
import minRequest from './api/api.js'
import MinCache from './utils/MinCache.js'

import MinRouter from './MinRouter'
import minRouter from './router'


Vue.prototype.$store = store

global.log = console.log
// 添加到全局


Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(MinRequest)
Vue.use(uView);
Vue.use(MinCache)
Vue.use(MinRouter)

const app = new Vue({
    ...App,
		minRequest,
		minRouter
})
app.$mount()
