<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-16 21:25:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-16 22:54:36
 * @FilePath: /vue02/src/components/common/MForm/index.vue
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
      rules: [
        { required: true, message: '用户名不能为空' },
        { required: true, message: '密码不能为空' },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log(" this.$refs['form']->", this.$refs['form']);
      // this.$refs['form']
    },
  },
};
</script>

<style scoped></style>
