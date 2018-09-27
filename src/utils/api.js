/**
 * 接口请求文件
 * http.get/http.post请求
 */

import http from './http'

//测试接口
export const apiName= (param1,param2,...) => http.get('/***', {
	param1,param2,...
})