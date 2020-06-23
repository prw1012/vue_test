let Vue = null;

export default class VueRouter {
  constructor(options) {
    this.$options = options;
    this.routerMap = {};
    this.app = new Vue({
      data: {
        current: '/',
      },
    });
  }

  init() {
    this.bindEvents();
    this.createRouteMap();
    this.initComponent();
  }
  bindEvents() {
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    window.addEventListener('load', this.onHashChange.bind(this));
  }
  onHashChange() {
    this.app.current = window.location.hash.slice(1) || '/';
  }
  createRouteMap() {
    this.$options.routes.forEach(route => {
      this.routerMap[route.path] = route;
    });
  }
  initComponent() {
    // TODO 
    const that = this;
    Vue.component('router-link', {
      props: {
        to: String,
      },
      render(h) {
        return h('a', { attrs: { href: '#' + this.to } }, [this.$slots.default]);
      },
    });
    Vue.component('router-view', {
      render(h) {
        const component = that.routerMap[that.app.current].component;
        return h(component);
      },
    });
  }
}

VueRouter.install = function(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
        this.$options.router.init();
      }
    },
  });
};
