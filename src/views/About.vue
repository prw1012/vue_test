<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-10 22:14:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-24 10:33:04
 * @FilePath: \vue_test\src\views\About.vue
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>store:{{ this.$store.getters.count }}</p>
    <p>store:{{ this.$store.state.count }}</p>
    <button @click="increment(5)">incerment</button>
    <button @click="incrementAction(5)">incrementAction</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    increment(num) { 
      console.log('this.$store',this.$store.state);
      this.$store.commit('increment', { num });
    },
    incrementAction(num) {
      this.$store.dispatch('increment', { num });
    },
  },
};
</script>

<style lang="scss" scoped></style>
