<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-14 21:04:33
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-15 16:29:40
 * @FilePath: /vue02/src/components/common/KForm/KFormItem.vue
-->
<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p class="form-error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator';
export default {
  name: 'KFormItem',
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
    // 监听校验事件
    this.$on('validate', () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      // 获取对应FormItem校验规则
      const rule = this.form.rules[this.prop];
      // 获取校验值
      const value = this.form.model[this.prop];
      // 校验描述对象
      const descriptor = { [this.prop]: rule };
      // 创建校验器
      const schema = new Schema(descriptor);
      //  校验返回Promise
      return schema.validate({ [this.prop]: value }, (errors, fields) => {
        if (errors) {
          // 有错
          this.error ='*'+ errors[0].message;
        } else {
          this.error = '';
        }
      });
    },
  },
};
</script>

<style scoped>
.form-error {
  color: red;
}
</style>
