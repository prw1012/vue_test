<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-16 16:42:45
 * @LastEditTime: 2020-06-23 15:10:14
 * @LastEditors: Do not edit
 * @FilePath: \vue_test\src\views\Home.vue
 * @Description: 
--> 
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
