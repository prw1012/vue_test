/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-23 22:49:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-24 11:23:56
 * @FilePath: \vue_test\src\kvuex.js
 */

let Vue = null;

class Store {
  constructor(options = {}) {
    this.state = new Vue({
      data: options.state,
    });
    this.mutations = options.mutations || {};
    this.actions = options.actions || {};
    options.getters && this.handleGetters(options.getters);
  }
  handleGetters(getters) {
    this.getters = {}; 
    //遍历getters选项，为this.getters定义property
    //属性名就是选项中的key，只需定义get函数保证其只读性
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {// 箭头函数
          return getters[key](this.state);
        },
      });
    });
  }
  commit = (type, arg) => {
    this.mutations[type](this.state, arg);
  };
  dispatch = (type, arg) => {
    this.actions[type](
      {
        dispatch: this.dispatch,
        commit: this.commit,
        getters: this.getters,
        state: this.state,
      },
      arg
    );
  };
}

function install(_Vue) {
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default { Store, install };
