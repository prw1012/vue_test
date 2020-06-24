import Vue from 'vue';
import VueRouter from 'vue-router';
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
