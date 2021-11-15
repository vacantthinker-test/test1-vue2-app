<template>
  <div>
    <label for="userName">
      <input type="text" id="userName" name="userName" placeholder="请输入您的用户名"
             v-model="user.userName"><br>
    </label>
    <label for="password">
      <input type="password" id="password" name="password" placeholder="请输入您的密码"
             v-model="user.password"><br>
    </label>
    <button @click="clickToUserAdd">提交</button>

    <hr>
    <button @click="backToHomePage">回首页</button>
  </div>
</template>

<script>
// import axios from "axios";// 导入axios模块
// @这里的at符号 别名是 src/
// import httpCommon from "@/http/http-common";
import UserDataService from "@/services/UserDataService";

export default {
  name: 'UserAdd',
  components: {},
  data() { // 数据
    return {
      user: {
        userName: '明月1', // 加上默认值 方便测试一下代码
        password: '123',
      }
    }
  },
  methods: { // 方法
    clickToUserAdd() {
      // 1 收集信息 判断信息格式
      if (!this.user.userName || !this.user.password) {
        console.log(`userName 或者 password 是空的, 请不要那么做`)
        return
      }
      const user = this.user
      // 2 发送信息 这里使用axios
      //    这里有个问题, 每次都需要 http://localhost:3000/users 这么一长串么?
      //    不会, 代码拆分
      // const url = 'http://localhost:3000/users'
      // axios.post(url, user)
      // '/users' 每次都要写?
      //  不会. 拆分出UserDataService
      // httpCommon.post('/users', user)

      UserDataService.addUser(user)
          .then(function (response) {
            // 服务器 发送的东西都打包成了response,
            // ctx.response.body = ctx.request.body;
            // response.data 是 ctx.response.body 传递过来的
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

      // 3 清空收集信息的容器 方便测试 第三步先注释掉
      // this.user.userName = ''
      // this.user.password = ''
    }
    , backToHomePage() {
      // 这里 name 指的是 路由对象中 name: 'home' 匹配 'home' 的路由
      // 具体实现就是用的History
      // History 接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录
      this.$router.push({name: 'home'}) // 推荐使用对象 来使用. 理由：容易使用 容易查找 一一对应关系
    }
  }
}
</script>

<style scoped>

</style>
