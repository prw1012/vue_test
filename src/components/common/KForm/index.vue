<!--
 * @Author: RONGWEI PENG
 * @Date: 2019-09-28 22:11:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-15 16:40:17
 * @FilePath: /vue02/src/components/common/KForm/index.vue
-->
<template>
  <div>
    <h2>KForm Test</h2>
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username" placeholder="abc"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput
          type="password"
          v-model="model.password"
          placeholder="abc"
        ></KInput>
      </KFormItem>

      <KFormItem>
        <button @click="submit">登录</button>
      </KFormItem>
    </KForm>
    <!-- <KInput value="model.username" @input="model.username=$event"></KInput> -->
    <!-- .sync -->
    <!-- <KInput :value.sync="model.username"></KInput> -->
    {{ model }}
  </div>
</template>

<script>
import KInput from '@/components/common/KForm/KInput.vue';
import KFormItem from '@/components/common/KForm/KFormItem.vue';
import KForm from '@/components/common/KForm/KForm.vue';
// import create from '@/utils/create'
// import Notice from '@/components/Notice'

export default {
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      model: { username: '', password: '' },
      rules: {
        username: [{ required: true, message: '用户名必填' }],
        password: [{ required: true, message: '密码必填' }],
      },
    };
  },
  methods: {

    submit() {
      this.$refs.loginForm.validate(isValidate => {
        // 创建弹窗实例
        // const comp = create(Notice, {
        //   title: "社会你杨哥喊你来搬砖",
        //   message: isValidate ? "请求登录!" : "校验失败!",
        //   duration: 3000
        // })

        // comp.show();
        if (isValidate) {
          alert("登录中。。。");
        } else {
          alert("错误，需重新输入");
        }
      });
    },
  },
};
</script>

<style scoped></style>
