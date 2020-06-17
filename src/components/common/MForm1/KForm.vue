<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-16 21:35:41
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-17 09:37:14
 * @FilePath: \vue_test\src\components\common\MForm\KForm.vue
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
      Promise.all(validateList)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>

<style scoped></style>
