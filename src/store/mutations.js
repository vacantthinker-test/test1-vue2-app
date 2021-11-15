import {ADD_USER, DELETE_USER, GET_ALL_USERS, UPDATE_USER} from "./mutation-types";

// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
const mutations = {
	[DELETE_USER](state,{id}){ // 删除一个用户根据ID 本地
		const foundUser = state.users.filter(user => (+user.id) === (+id))
		const foundIndex = state.users.indexOf(foundUser[0])
		state.users.splice(foundIndex, 1)
	},
	[UPDATE_USER](state, {user}){ // 更新用户 同步 本地
		const {id} = user
		const foundUser = state.users.filter(user => (+user.id) === (+id)) // === 是全等判断 即类型和数据
		const foundIndex = state.users.indexOf(foundUser[0]) // 找到要删除User的index下标
		state.users[foundIndex] = user
	},
	[GET_ALL_USERS](state, {users}) { // 更新所有用户 数据
		state.users = users
		console.log(state.users)
	},
	[ADD_USER](state, {user}){ // 更新state 添加一个user
		state.users.push(user);
	}
}
export default mutations
