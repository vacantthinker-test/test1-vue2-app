import Vue from 'vue'
import App from './App.vue'
import router from './router' // 增加行 导入了 router

Vue.config.productionTip = false

new Vue({
  router, // 增加行 配置了router // 从第8行到第3行
  render: h => h(App)
}).$mount('#app')
