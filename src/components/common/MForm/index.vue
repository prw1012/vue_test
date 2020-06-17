<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-17 09:15:42
 * @LastEditTime: 2020-06-17 17:37:47
 * @LastEditors: Do not edit
 * @FilePath: \vue_test\src\components\common\MForm\index.vue
 * @Description: 
-->
<template>
  <KForm :model="model" :rules="rules">
    <KFormItem label="用户名" prop="username">
      <KInput v-model="model.username" />
    </KFormItem>
    <KFormItem label="密码" prop="password">
      <KInput v-model="model.password" />
    </KFormItem>
  </KForm>
</template>

<script>
import KInput from './KInput';
import KFormItem from './KFormItem';
import KForm from './KForm';

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
        username: '',
        password: '',
      },
      rules: {
        username: { required: true, message: '用户名不能为空！' },
        password: { required: true, message: '密码不能为空！' },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
