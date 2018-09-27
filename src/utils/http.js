/**
 * 网络请求方法
 * get和post请求
 * 
 */
import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true

let baseUrl = ''
let imgBaseUrl = '/***'

if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://***'
} else if (process.env.NODE_ENV == 'production') {
	baseUrl = 'http://***'
}

function checkStatus(response) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data;
  } else {
    return {
      status: -404,
      msg: '网络异常'
    }
  }
}

export default {
  post(url, data) {
    return axios({
      method: 'post',
      baseURL: baseUrl,
      url,
      data: qs.stringify(data),
      timeout: 10000,
    }).then(
      (response) => {
        return checkStatus(response)
      }
    )
  },
  get(url, params) {
    return axios({
      method: 'get',
      baseURL: baseUrl,
      url,
      params, // get 请求时带的参数
      timeout: 10000,
    }).then(
      (response) => {
				return checkStatus(response)
      }
    )
  }
}