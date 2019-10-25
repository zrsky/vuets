/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 15:53:55
 * @LastEditTime: 2019-10-18 16:03:41
 * @LastEditors: Please set LastEditors
 */
import { Commit } from 'vuex';
import { appRouter } from '../../router'

const state: any = {
  menuList: [],
  cachePage: []
};

const mutations: any = {
  saveMenuList(states: any) {
    states.menuList = appRouter;
  },
};

const actions: any = {
  saveMenuListFN(context: { commit: Commit }, params: object) {
    context.commit('saveMenuList', params);
  },
};

const getters: any = {
  getMenuList(states: any) {
    return states.menuList;
  }
}

export default {
    namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
    state,
    mutations,
    actions,
    getters
};