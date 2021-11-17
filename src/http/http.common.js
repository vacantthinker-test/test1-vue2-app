import axios from "axios";

const httpCommon = axios.create({
	baseURL: 'http://localhost:3000',
	headers: { // 匹配restful风格api 这里使用json
		'Content-type': 'application/json'
	}
})
export default httpCommon
