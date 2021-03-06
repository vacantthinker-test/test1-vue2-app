#### vue2 增删改查

---

 - 目标
   - 使用axios, router 实现 增删改查
     - router
 - 配合koa2 使用

---
---

使用vue create 命令 创建一个vue模板项目
```cmd
vue create vueProjectName
```

添加vue-router模块 --cached如果有缓存那么使用缓存
```cmd
yarn add vue-router --cached
```

如果你当前有一个使用vue cli创建的vue项目 即vue create创建的vue项目
那么使用 vue add router 命令 会在当前项目中添加基本router配置
vue create创建的vue项目 默认配置了git
文件显示蓝色 表示文件已经被更改 但是没有提交更改
文件显示红色 表示文件是新创建的 但是没有提交
```cmd
vue add router
```

vue是默认的单页面应用, 即不会刷新
 - 只有一个index.html
 - 更多的页面显示, 只是组件的替换. 有其他html文件么? 没有. 完全没有.
 - 每次看到的页面更新, 只是JavaScript对象的替换, 浏览器的刷新按钮 动都不带动的

使用该命令, 可编译把vue处理成浏览器理解的html css javascript
```text
   "build": "vue-cli-service build",
```


懒惰加载
如果没有懒惰加载, 那么会加载所有的组件, 哪怕组件有1000个或者更多. 这会导致加载极其缓慢
有了懒惰加载 我想看这个商品的详情页. 服务器一看 来了请求了, 等着啊, 给你拿数据. 打包成响应 发给浏览器
```javascript
() => import(/* webpackChunkName: "about" */ '../views/About.vue')
```

---

##### 流程走

 - 1 添加路由导航
 - 2 添加路由
 - 3 添加路由需要的组件
   - views存放
   - 1 先写数据与方法
   - 2 后写视图

axios发送请求至服务器 restful风格的api
一一对应关系 post 对 post
    
    - 前端浏览器
        - axios.post('/users', user)
    - 后端服务器
        - router.post('/users', (ctx, next) => { // 增加

启动vue 查看效果
    接下来会报错CORS错误

CORS （Cross-Origin Resource Sharing，跨域资源共享）是一个系统，
它由一系列传输的HTTP头组成，
这些HTTP头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应。

跨域访问会有问题. 默认情况下 同源访问是安全的. 
怎么解决呢?
这就需要http://localhost:3000 允许 http://localhost:8080 访问.
    如果没有这个允许的权限, 那么报错CORS错误.
    - 滴 公交卡 滴 学生卡 滴 老人卡 ... 你拿个身份证, 这怎么行? 也许未来可以.

@ 别名 指的是vue src文件夹
用@代指 vue src文件夹
```text
alias: {
    "@": path.resolve(__dirname, vueSrc)
},
```



---

增删改查
跨域
VueRouter
koa-router
axios

---

part01- finished...

---

使用vuex

有在线英文课程 交互式学习 注册个账号就可以学习了
https://scrimba.com/g/gvuex

ES2015 也叫ES6

SSOT 必须保证唯一

---

```text
单项数据流, 只能顺着走

vue视图转发[dispatch] --> 一个action
    this.$store.dispatch('getAllUsers')
    
action提交[commit]    --> 一个mutation
    context.commit(GET_ALL_USERS, {users}) // 提交至mutations 携带users数据
    
mutation             --> 更改state
    state.users = users
    
state渲染[render]     --> vue视图
    

```

```javascript
//    "git-add": "git add . && git branch && git commit -m 'add' " 这么做也是可以的
// 同步[方式] 执行 命令行脚本 --> 从子线程child_process 中获取
const {execSync} = require('child_process') // 使用node.js 子线程 执行 Windows命令行
// 解构语法 获取 execSync Sync同步的意思

// 队列命令行, 每次执行一个, 依次按顺序执行命令
// 整合成一个数组
const queueCommand = [
	'git add . ', // git添加项目所有命令, 除了.gitignore文件中忽略的
	'git branch', // git切换分支, 必需行, 不然直接执行下一行, 必然出错
	`git commit -m \" update \" ` // git提交 携带信息 message
]
// 队列执行命令 同步方式
// 每次从数组中拿出一个来, 使用execSync执行当前的数组项字符串
//  即依次执行.
//  git add .
//  git branch
//  git commit -m 'update'
queueCommand.forEach(item => execSync(item))


```

---

vuex 已添加

---

finished














