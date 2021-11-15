import UserDataService from "@/services/UserDataService";
import {ADD_USER, DELETE_USER, GET_ALL_USERS, UPDATE_USER} from "./mutation-types";

// 异步请求
const actions = {
	deleteUser({commit},{id}){ // 异步删除用户根据ID
		UserDataService.deleteUser(id)
			.then(response => {
				console.log(response.data);
				commit(DELETE_USER, {id})
			})
			.catch(error => {
				console.log(error)
			})
	},
	updateUser({commit},{user}) { // 更新用户 异步 远程服务器
		UserDataService.updateUser(user)
			.then(res => {
				console.log(res.data)
				commit(UPDATE_USER, {user})
			})
			.catch(err => {
				console.log(err)
			})
		
	},
	getAllUsers(context) { // 解构 ES6高级用法
		UserDataService.getAllUsers()
			.then(response => {
				console.log('actions 处理异步请求 当前请求 users')
				const users = response.data // 请求成功的users数据
				context.commit(GET_ALL_USERS, {users}) // 提交至mutations 携带users数据
			})
			.catch(error => {
				console.log(error)
			})
	},
	addUser({commit}, {user}) { // 添加用户的操作
		UserDataService.addUser(user)
			.then(function (response) {
				console.log('actions addUser')
				const user = response.data //
				commit(ADD_USER, {user})
			})
			.catch(function (error) {
				console.log(error);
			});
	}
}
export default actions
