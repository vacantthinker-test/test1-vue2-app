import Vue from 'vue' // 导入vue
import VueRouter from 'vue-router' // 导入vue-router
// import Home from '../views/Home.vue' // 导入组件 Home组件

Vue.use(VueRouter) // vue使用vuerouter

const routes = [ // 一个路由数组 即多个路由
  { // 每一个路由都是一个对象
    path: '/', // 访问 http://localhost:8080 加上 '/' 会显示一个组件, 哪个组件
    name: 'home', // 当前这个路由对象的名称, 等下会用到. 比如页面的跳转
    // 如何返回首页 --> this.$router.push('home')
    component: ()=>import('../views/Home') // component组件 Home组件
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user-add',
    name: 'user-add',
    component: () => import(/* webpackChunkName: "user-add" */ '../views/UserAdd.vue')
  },
  {
    path: '/user-list',
    name: 'user-list',
    component: () => import(/* webpackChunkName: "user-list" */ '../views/UserList.vue')
  },
  {
    path: '/user-update/:id',
    name: 'user-update',
    component: () => import(/* webpackChunkName: "user-list" */ '../views/UserUpdate.vue')
  },
]

const router = new VueRouter({ // 创建一个router实例对象
  mode: 'history', // 模式历史模式 还有另外一种模式 hash # 读 哈市
  base: process.env.BASE_URL, // 基本URL
  routes
})

export default router
