/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 15:43:09
 * @LastEditTime: 2019-10-14 14:54:49
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store/index';
import './control'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios'

Vue.prototype.$axios = axios;

Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
