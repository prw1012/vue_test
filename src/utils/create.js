/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-18 20:45:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-22 21:21:45
 * @FilePath: /vue02/src/utils/create.js
 */

import Vue from 'vue';

function create(component, props) {
  const vm = new Vue({
    render(h) {
      return h(component, { props });
    },
  });
  vm.$mount();
  document.body.appendChild(vm.$el);
  const Comp = vm.$children[0];
  Comp.remove = function() {
    document.body.removeChild(vm);
    vm.$destroy();
  };

  return Comp;
}

export default create;
