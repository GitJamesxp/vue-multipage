import '../../asset/css/public.css'
import '../../asset/js/public.js'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
})