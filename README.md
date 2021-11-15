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

finished...




















