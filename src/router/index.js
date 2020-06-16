/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-10 22:14:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-16 21:32:05
 * @FilePath: /vue02/src/router/index.js
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueRouter from '../k-vue-router'
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
      component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/kform',
    name: 'KForm',
    component: () => import('../components/common/KForm/index.vue'),
  },
  {
    path: '/mform',
    name: 'MForm',
    component: () => import('../components/common/MForm/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
