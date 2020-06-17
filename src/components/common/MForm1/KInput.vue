<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-16 21:26:11
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-17 10:56:19
 * @FilePath: \vue_test\src\components\common\MForm\KInput.vue
-->
<template>
  <div class="kinput-box">
    <input :type="type" :value="value" @input="onInput" :v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'KInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
      // this.$emit('input', e.target.value);
      this.$parent.$emit('validate');
    },
  },
};
</script>

<style scoped>
.kinput-box {
  display: inline;
}
</style>
