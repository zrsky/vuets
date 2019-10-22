/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 15:54:12
 * @LastEditTime: 2019-10-18 15:54:12
 * @LastEditors: your name
 */
import Vue from 'vue';
import Vuex from 'vuex';
import appVuex from './modules/app';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appVuex,
  },
});