<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-16 21:25:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-17 09:56:13
 * @FilePath: \vue_test\src\components\common\MForm\index.vue
-->
<template>
  <div>
    <KForm :model="model" :rules="rules" ref="form">
      <KFormItem label="用户名" prop="username">
        <KInput type="text" v-model="model.username" />
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput type="password" v-model="model.password" />
      </KFormItem>
      <KFormItem>
        <button @click="onSubmit">提交</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from './KInput.vue';
import KFormItem from './KFormItem.vue';
import KForm from './KForm.vue';
export default {
  name: 'Form',
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      model: {
        username: '张无忌',
        password: '111',
      },
      rules: {
        username: [{ required: true, message: '用户名必填' }],
        password: [{ required: true, message: '密码必填' }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate(isValidate => {
         if (isValidate) {
          alert('登录中。。。');
        } else {
          alert('错误，需重新输入');
        }
      });
    },
  },
};
</script>

<style scoped></style>
