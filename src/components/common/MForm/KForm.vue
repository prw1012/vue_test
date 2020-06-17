<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-17 09:15:42
 * @LastEditTime: 2020-06-17 21:15:12
 * @LastEditors: Do not edit
 * @FilePath: /vue02/src/components/common/MForm/KForm.vue
 * @Description: 
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
    return { form: this };
  },
  props: {
    model: {
      type: Object,
      default: true,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    validate(cb) {
      const validateList = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());

      console.log('validateList->', validateList);
      Promise.all(validateList)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>

<style lang="scss" scoped></style>
