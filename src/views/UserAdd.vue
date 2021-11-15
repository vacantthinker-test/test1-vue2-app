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

  </div>
</template>

<script>
// import axios from "axios";// 导入axios模块
// @这里的at符号 别名是 src/
// import httpCommon from "@/http/http-common";
// import UserDataService from "@/services/UserDataService";

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
      // 视图提交操作
      this.$store.dispatch('addUser', {user})
      this.$router.push({name: 'user-list'})
    }
  }
}
</script>

<style scoped>

</style>
