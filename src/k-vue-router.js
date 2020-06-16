/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-14 06:58:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-16 21:22:09
 * @FilePath: /vue02/src/k-vue-router.js
 */ 
let Vue;

export default class KVueRouter {
  constructor(options) {
    this.$options = options;
    this.routeMap = {};

    // url响应化处理：只要url变化，用到url的组件就会重新render
    // vue-router跟Vue强耦合，只能用于vue
    this.app = new Vue({
      data: {
        current: '/',
      },
    });
  }

  // 声明初始化函数
  init() {
    // 1. 事件监听
    this.bindEvents();

    // 2. 路由映射操作
    this.createRouteMap();

    // 3. 组件声明和注册
    this.initComponent();
  }

  bindEvents() {
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    window.addEventListener('load', this.onHashChange.bind(this));
  }
  onHashChange() {
    // #/index
    this.app.current = window.location.hash.slice(1) || '/';
  }

  createRouteMap() {
    this.$options.routes.forEach(item => {
      this.routeMap[item.path] = item;
    });
  }

  initComponent() {
    Vue.component('router-link', {
      props: {
        to: String,
      },
      render(h) {
        // console.log('console',  this.$slots);
        return h('a', { attrs: { href: '#' + this.to } }, [
          this.$slots.default,
        ]);
      },
    });
    Vue.component('router-view', {
      render: h => {
        // 拿出要渲染的组件
        // this希望是Router实例
        const component = this.routeMap[this.app.current].component;
        return h(component);
      },
    });
  }
}

KVueRouter.install = function(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        // 这里this是vue实例
        Vue.prototype.$router = this.$options.router;
        // 执行初始化
        this.$options.router.init();
      }
    },
  });
};
