/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-23 20:57:05
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-23 20:57:43
 * @FilePath: /vue02/src/utils/create.js
 */ 
import Vue from 'vue';

function create(components, props) {
  let vm = new Vue({
    render(h) {
      return h(components, { props });
    },
  });

  vm.$mount();
  document.body.appendChild(vm.$el);

  console.log('vm.$children', vm.$children);
  let Comp = vm.$children[0];
  vm.remove = function() {
    document.body.removeChild(vm);
    vm.destroy();
  };
  return Comp;
}

export default create;
