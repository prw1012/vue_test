/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-18 20:45:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-20 10:16:26
 * @FilePath: /vue02/src/utils/create.js
 */

import Vue from 'vue';

function create(component, props) {
  const vm = new Vue({
    render(h) {
      return h(component, { props });
    },
  });

  vm.$mount(); //挂载,但是没有目标节点
  document.body.appendChild(vm.$el);

  //  方式2：Vue.extend() 返回组件构造函数
  // const Ctor = Vue.extend(Component);
  // const comp = new Ctor({ propsData: props });
  // document.body.appendChild(comp.$el)


  const comp = vm.$children[0];
  comp.remove = function() {
    console.log('console', comp);
    document.body.removeChild(vm);
    vm.$destroy();
  };

  return comp;
}
export default create;

