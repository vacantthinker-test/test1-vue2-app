// store 的计算属性

// 一个文件只做一件事

const getters = {
	getUser: (state) => (id) => {
		return state.users.find(user => user.id === id)
	},
	getAllUsersLength: (state) => {
		return state.users.length
	}
}
export default getters
