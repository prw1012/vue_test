/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-23 21:12:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-24 09:18:27
 * @FilePath: \vue_test\src\router\index.js
 */ 
import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueRouter from '../kvue-router.js';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // children: [
    //   {
    //     path: '/detail/:id',
    //     name: 'Detail',
    //     component: () => import('../views/Detail.vue'),
    //   },
    // ],
  },
// TODO   
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/kform',
    name: 'KForm',
    component: () => import('../components/common/KForm/index.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
