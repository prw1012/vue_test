/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-18 20:45:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-18 21:49:07
 * @FilePath: /vue02/src/utils/create.js
 */

import Vue from 'vue';

function create(component, props) {
  const vm = new Vue({
    render(h) {
      return h(component, { props });
    },
  });

  vm.$mount(); //挂在,但是没有目标节点
  document.body.appendChild(vm.$el);
  const comp = vm.$children[0];
  comp.remove = function() {
    console.log('console',999);
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };

  return comp;
}
export default create;
