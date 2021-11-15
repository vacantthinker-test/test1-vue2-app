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
import {mapState} from "vuex";

export default {
  name: 'UserList',
  components: {},
  computed: {...mapState(['users'])}, // 映射store中state属性 map指映射
  methods: {
    jumpToUserAdd() { // 跳转到user-add页面
      this.$router.push({name: 'user-add'})
    },
    jumpToUserUpdate(id) { // 跳转至user-update页面
      this.$router.push({name: 'user-update', params: {id: id}})
    },
    clickToUserDelete(id) { // 点击去执行user删除
      this.$store.dispatch('deleteUser',{id})
    }
  },
  mounted() { // 视图渲染完成后, 请求数据
    // 异步请求移动到了vuex中store中action 异步操作里 代码精简了
    this.$store.dispatch('getAllUsers')
  }
}
</script>

<style scoped>
li {
  list-style: none
}
</style>
