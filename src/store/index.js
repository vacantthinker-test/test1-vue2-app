import Vue from 'vue' // 导入vue
import Vuex from 'vuex'

import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations"; // 导入vuex

Vue.use(Vuex) // Vue显示使用Vuex

// 拆分为单独的文件
// vuex 状态管理模式
const store = new Vuex.Store({ // new关键字 创建一个Store实例对象 options指配置
	state, // 所有的数据放在state里
	getters, // 获取数据的信息
	actions, // 异步操作放在这里
	mutations // 更改state 同步方式 即排队
})

export default store

