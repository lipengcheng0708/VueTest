// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'iview/dist/styles/iview.css' // 引入iview CSS样式
import App from './App.vue'
import router from './router'
//引入iview
import iView from 'iview'
import axios from 'axios' //引入axios，用axios来发送异步请求。
//引入login.vue组件

Vue.config.productionTip = false

Vue.use(iView)

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = 'http://39.97.246.223:8082'
// 将API方法绑定到全局
Vue.prototype.$axios = axios

/* eslint-disable no-new */
//创建和挂载根实例，通过router配置参数注入路由，从而让整个应用都有路由功能
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
