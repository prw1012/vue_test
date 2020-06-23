<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-23 21:12:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-23 21:29:58
 * @FilePath: /vue02/src/components/common/Tree/index.vue
-->
<template>
  <li>
    <div @click="toggle">
      {{ model.title }}
      <span v-if="isFolder" class="tree-icon">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-if="isFolder" v-show="open">
      <item class="item" v-for="model in model.children" :model="model" :key="model.title"></item>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    model: {
      type: Object,
      default: () => {},
    },
  },

  data: function() {
    return {
      open: false,
    };
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length;
    },
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tree-icon {
  cursor: pointer;
  color: #000000;
}
</style>
