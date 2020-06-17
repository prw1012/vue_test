<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-17 09:15:42
 * @LastEditTime: 2020-06-17 21:16:18
 * @LastEditors: Do not edit
 * @FilePath: /vue02/src/components/common/MForm/KFormItem.vue
 * @Description: 
-->
<template>
  <div>
    <label v-if="label">{{ label }}&nbsp; : &nbsp;</label>
    <slot></slot>
    <span class="form-error" v-if="error">&nbsp;{{ error }}</span>
  </div>
</template>

<script>
import Schema from 'async-validator';
export default {
  name: 'KFormInput',
  inject: ['form'],
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
  mounted() {
    this.$on('validate', this.validate);
  },
  methods: {
    validate() {
      const value = this.form.model[this.prop],
        rule = this.form.rules[this.prop],
        obj = { [this.prop]: rule },
        schema = new Schema(obj);
      return schema.validate({ [this.prop]: value }, (errors, fileds) => {
        if (errors) {
          //存在错误,则显示错误❌信息
          this.error = '*' + errors[0].message;
        } else {
          this.error = '';
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-error {
  color: red;
}
</style>
