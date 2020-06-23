/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-23 22:49:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-23 23:17:19
 * @FilePath: /vue02/src/kvuex.js
 */

let Vue = null;

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

class Store {
  constructor(options = {}) {
    console.log('options===', options);
    this.state = new Vue({
      data: options.state,
    });

    // this.getters = options.getters || {};
    this.mutations = options.mutations || {};
    this.actions = options.actions || {};
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

export default { Store, install };
