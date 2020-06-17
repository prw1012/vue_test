<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-17 09:15:42
 * @LastEditTime: 2020-06-17 21:15:43
 * @LastEditors: Do not edit
 * @FilePath: /vue02/src/components/common/MForm/index.vue
 * @Description: 
-->
<template>
  <div>
    <KForm :model="model" :rules="rules" ref="form">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username" />
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput v-model="model.password" />
      </KFormItem>
      <KFormItem>
        <button @click="submit">submit</button>
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
        username: '',
        password: '',
      },
      rules: {
        username: { required: true, message: '用户名不能为空！' },
        password: { required: true, message: '密码不能为空！' },
      },
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate(isValidate => {
        if (isValidate) {
          alert('登陆成功');
        } else {
          alert('登陆失败');
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
