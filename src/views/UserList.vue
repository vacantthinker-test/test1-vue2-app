<template>
  <div>
    <ul>
      <li v-for="(user,index) in users" :key="index">
        {{ user }}
        <button @click="clickToUserDelete(user.id)">删除-{{ user.id }}</button>
        <button @click="jumpToUserUpdate(user.id)">更新-{{ user.id }}</button>
      </li>
    </ul>
    <hr>
    <button @click="jumpToUserAdd">去添加更多</button>
  </div>
</template>

<script>
// 想要的效果 访问user-list 就直接显示users数据
// 需要用到生命周期
import UserDataService from "@/services/UserDataService";

export default {
  name: 'UserList',
  components: {},
  data() {
    return {
      users: []
    }
  },
  methods: {
    jumpToUserAdd() { // 跳转到user-add页面
      this.$router.push({name: 'user-add'})
    },
    jumpToUserUpdate(id) { // 跳转至user-update页面
      console.log('jump to update', id)
      // es6中 如果 key=id value=id key和value一样, 那么写一个就可以了
      this.$router.push({name: 'user-update', params: {id: id}})
    },
    clickToUserDelete(id) { // 点击去执行user删除
      console.log('delete 前端', id)
      const foundUser = this.users.filter(function (user) {
        // console.log(typeof user.id, typeof id)
        // console.log(user.id, id)
        return user.id === id
      }) // === 是全等判断 即类型和数据
      console.log('foundUser', foundUser[0])

      const foundIndex = this.users.indexOf(foundUser[0]) // 找到要删除User的index下标
      this.users.splice(foundIndex, 1) // 使用splice删除该下标元素

      // 当前演示还是删除delete
      // 根据id删除一个数据, 表面看是删除, 实际中是数据隐藏, 用户不可见.
      UserDataService.deleteUser(id)
          .then(response => {
            console.log(response.data);
            // 服务器删除成功了, 还有一个步骤需要做. 更新页面 把要删除的那一项删除掉

          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  mounted() { // 挂在模板成功后, 执行下列代码 异步 ajax 等
    // 1获取users
    // console.log('user-list mounted')
    UserDataService.getAllUsers()
        .then(response => {
          // console.log('user-list 请求数据')
          this.users = response.data
        })
        .catch(error => {
          console.log(error)
        })
    // 2填充this.users
    // 2.1因为vue中数据是响应式的, 现在this.users更新了, 使用了this.users的视图也会跟着更新
  }
}
</script>

<style scoped>
li {
  list-style: none
}
</style>
