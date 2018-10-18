/**
 * @ 入口文件
 * @author shan-er
 */
import Vue from 'vue';
import index from './app.vue';
import router from './routes.js';
require('./assets/scss/common.scss');
require('./assets/scss/jad.css');
new Vue({
	router,
	el: '#main',
	render: h => h(index)
});