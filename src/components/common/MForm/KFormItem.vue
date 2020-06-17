<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-17 09:15:42
 * @LastEditTime: 2020-06-17 17:15:11
 * @LastEditors: Do not edit
 * @FilePath: \vue_test\src\components\common\MForm\KFormItem.vue
 * @Description: 
-->
<template>
  <div></div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'KFormInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      error: '',
    };
  },
  mounted () {
    this.$on('validate',this.validate)
  },
  methods: {
    validate() {

    }
  },
};
</script>

<style lang="scss" scoped></style>
