<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-23 14:02:01
 * @LastEditTime: 2020-06-23 14:02:15
 * @LastEditors: Do not edit
 * @FilePath: \vue_test\src\components\Detail.vue
 * @Description: 
-->
<template>
  <div>
    <h2>商品详情</h2>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'Detail',
};
</script>

<style lang="scss" scoped></style>
