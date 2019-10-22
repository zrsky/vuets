/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 15:43:09
 * @LastEditTime: 2019-10-14 14:09:02
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = [{
  path: '/home',
  name: 'home_index',
  component: Home,
},
{
  path: '/login',
  name: 'login',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ './views/login.vue'),
},]

export const appRouter = [{
  path: '/about',
  name: 'about',
  icon: 'plus-circled',
  title: '配置管理',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  children: []
}];

let routes = [...otherRouter, ...appRouter];
console.log(routes)

export const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
