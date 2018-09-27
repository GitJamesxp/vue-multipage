<template>
	<div id="app">
		<div>{{json}}</div>
	</div>
</template>

<script>
	import {getOrgCount} from '../../utils/api.js';
	
	export default {
		// 变量
		data() {
			return {
				json: "",
			}
		},
		// 初始化(调接口)
		created() {
			this.getOrgCount();
		},
		// 初始化(渲染元素)
		mounted() {
			
		},
		// 方法
		methods: {
			//测试接口
			async getOrgCount() {
				let msg = await getOrgCount(110);
				this.json = msg;
				console.log(msg);
			},

		},
		
	}
</script>

<style scoped>

</style>
