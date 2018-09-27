/**
 * 常用方法
 * 
 */

//地址栏或者输入地址转换成json对象
export function param2Json(url) {
	if(!url){
		url = location.href;
	}
	var search = url.split('?')[1]
	if(!search){
		return;
	}
	return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}