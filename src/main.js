import Vue from 'vue'
import App from './App.vue'
import router from './router'// 增加行 导入了 router
import store from "./store";  // 导入store

Vue.config.productionTip = false

// 如果key-value一样, 那么写一个就可以了ES6-ES10高级语法
new Vue({
  store,
  router, // 增加行 配置了router // 从第8行到第3行
  render: h => h(App)
}).$mount('#app')
