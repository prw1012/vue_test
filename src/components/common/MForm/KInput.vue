<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-17 19:44:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-17 20:18:00
 * @FilePath: /vue02/src/components/common/MForm/KInput.vue
-->

<template>
  <div>
    <input :type="type" :value="value" @input="onInput" :bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'KInput',
  inheritAttrs: false,
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
      this.$parent.validate();
    },
  },
};
</script>

<style lang="scss" scoped></style>
