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
    clickToUserUpdate() { // 点击提交更新
      // 1 获取数据 检查格式
      if (!this.user.userName || !this.user.password) {
        console.log(`userName 或者 password 是空的, 请不要那么做`)
        return
      }
      // 2 提交数据
      const user = this.user
      this.$store.dispatch('updateUser', {user})
      this.$router.push({name: 'user-list'})
      // 3 清空容器 [输入框一类]
    }
  },
  mounted() {
    console.log('user-update', this.$route.params); // 拿到了id
    const {id} = this.$route.params // es6 解构语法

    if (0 === this.$store.getters.getAllUsersLength) { // 如果没有数据 跳转到user-list页面
      this.$router.push({name: 'user-list'})
    } else { // 如果有数据 根据id 从store中state中 根据id 从users拿到数据
      this.user = this.$store.getters.getUser(id)
    }
  }
}
</script>

<style scoped>

</style>
