<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-16 21:35:41
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-16 22:52:09
 * @FilePath: /vue02/src/components/common/MForm/KFormItem.vue
-->

<template>
  <div>
    <label v-if="label">{{ label }}&nbsp; : &nbsp;</label>
    <slot></slot>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator';
export default {
  name: 'KFromItem',
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
    this.$on('validate', () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      console.log('this.prop===',this.form.rules,this.prop);
      const rule = this.form.rules[this.prop],
        value = this.form.model[this.prop],
        descriptor = { [this.prop]: rule },
        schema = new Schema(descriptor);
      return schema.validate({ [this.prop]: value },
       (errors, fields) => {
        console.log('errors, fields', errors, fields);
        if (errors) {
          this.error ='*'+ errors[0].message;
        } else {
          this.error = '';
        }
      });
    },
  },
};
</script>

<style scoped></style>
