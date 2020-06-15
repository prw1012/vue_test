<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-14 21:04:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-15 15:56:29
 * @FilePath: /vue02/src/components/common/KForm/KForm.vue
-->

<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KForm',
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    validate(cb) {
      // 调用所有含有prop属性的子组件的validate方法并得到Promise数组
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      // 所有任务必须全部成功才算校验通过，任一失败则校验失败
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>

<style scoped></style>
