/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-10 22:14:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-14 21:21:12
 * @FilePath: /vue02/src/router/index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueRouter from '../k-vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/kform',
    name: 'KForm',
    component: () => import(/* webpackChunkName: "kform" */ '../components/common/KForm/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
