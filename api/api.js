import MinRequest from '../utils/request.js'

const minRequest = new MinRequest()

// 请求拦截器
minRequest.interceptors.request((request) => {
  return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
  return response.data
})

// 设置默认配置
minRequest.setConfig((config) => {
  config.baseURL = 'https://www.baidu.com'
  return config
})

export default {
  // 这里统一管理api请求
  apis: {
    uniapp (data) {
      return minRequest.get('/s/aaaa', data)
    },
		login (data) {
			return minRequest.post('/a/login',data)
		}
  }
}