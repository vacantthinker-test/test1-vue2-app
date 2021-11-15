<template>
  <div>
    <label for="userName">
      <input type="text" id="userName" name="userName" placeholder="请更新您的用户名"
             v-model="user.userName"><br>
    </label>
    <label for="password">
      <input type="password" id="password" name="password" placeholder="请更新您的密码"
             v-model="user.password"><br>
    </label>
    <button @click="clickToUserUpdate">更新</button>

  </div>
</template>

<script>
import UserDataService from "@/services/UserDataService";

export default {
  name: 'UserUpdate',
  components: {},
  data() {
    return {
      user: {
        id: -1,
        userName: '', // 加上默认值 方便测试一下代码
        password: '',
      }
    }
  },
  methods: {
    clickToUserUpdate() {
      if (!this.user.userName || !this.user.password) {
        console.log(`userName 或者 password 是空的, 请不要那么做`)
        return
      }
      const user = this.user
      UserDataService.updateUser(user)
          .then(res => {
            console.log(res.data)
            if (res.data.message === 'success') {
              this.$router.push({name: 'user-list'})
            }
          })
          .catch(err => {
            console.log(err)
          })
    }
  },
  mounted() {
    // 这里使用vuex会更好 vuex是状态管理工具 由一个全局唯一的store对象 来管理 组件的数据
    console.log('user-update', this.$route.params); // 拿到了id
    const {id} = this.$route.params // es6 解构语法
    UserDataService.getUser(id)
        .then(res => {
          console.log(res.data);
          this.user = res.data
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style scoped>

</style>
