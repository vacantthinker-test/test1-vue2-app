import httpCommon from "@/http/http-common";

const url = '/users'

class UserService {
	/**
	 * 增加User方法
	 * @param user
	 */
	addUser(user) {
		return httpCommon.post(url, user)
	}
	
	getUser(id) {
		return httpCommon.get(`${url}/${id}`)
	}
	/**
	 * 获取所有user
	 */
	getAllUsers() {
		return httpCommon.get(url)
	}
	
	updateUser(user) {
		return httpCommon.put(`${url}/${user.id}`, user)
	}
	
	/**
	 * 删除用户根据一个ID
	 * @param id
	 */
	deleteUser(id) {
		return httpCommon.delete(`${url}/${id}`)
	}
}

export default new UserService(); // 默认是单例模式, 不会每次调用方法
// 就创建一个新的UserDataService对象实例

