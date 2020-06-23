/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-18 20:45:21
 * @LastEditors: Do not edit
<<<<<<< HEAD
 * @LastEditTime: 2020-06-22 20:32:22
 * @FilePath: /vue02/src/utils/create.js
 */

import Vue from 'vue';
=======
 * @LastEditTime: 2020-06-23 13:45:24
 * @FilePath: \vue_test\src\utils\create.js
 */

import Vue from 'vue';

>>>>>>> 4382825c94990e88ff1e3c34367851bca05cbec2
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

<<<<<<< HEAD
  const comp = vm.$children[0];
  comp.remove = function() {
    console.log('console', comp);
    document.body.removeChild(vm);
=======

  const comp = vm.$children[0];
  comp.remove = function() {
     document.body.removeChild(vm);
>>>>>>> 4382825c94990e88ff1e3c34367851bca05cbec2
    vm.$destroy();
  };

  return comp;
}
export default create;
<<<<<<< HEAD
=======

>>>>>>> 4382825c94990e88ff1e3c34367851bca05cbec2
