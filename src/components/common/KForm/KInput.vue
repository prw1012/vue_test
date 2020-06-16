<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-14 21:04:33
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-16 21:24:50
 * @FilePath: /vue02/src/components/common/KForm/Kinput.vue
--> 
<template>
  <div>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'KInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onInput(e) {
      console.log('console', e.target.value);
      this.$emit('input', e.target.value);
      // this.$emit('update:value', e.target.value)
      // 通知校验  $parent指FormItem
      this.$parent.$emit('validate');
    },
  },
};
</script>

<style scoped></style>
