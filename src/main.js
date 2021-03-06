import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'


// 全局样式表
import "./assets/css/base.css"


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
