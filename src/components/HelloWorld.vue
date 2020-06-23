<!--
 * @Author: RONGWEI PENG
 * @Date: 2020-06-10 22:11:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-23 21:27:48
 * @FilePath: /vue02/src/components/HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>hello tree</h1>
    <h1>{{ msg }}</h1>
    <ul>
      <item class="item" :model="treeData"></item>
    </ul>
  </div>
</template>

<script>
import Item from './common/Tree/index.vue';
export default {
  name: 'HelloWorld',
  components: { Item },
  props: {
    msg: String,
  },
  data() {
    return {
      treeData: {
        title: 'Web全栈架构师',
        children: [
          {
            title: 'Java架构师',
          },
          {
            title: 'JS高级',
            children: [
              {
                title: 'ES6',
              },

              {
                title: '动效',
              },
            ],
          },
          {
            title: 'Web全栈',
            children: [
              {
                title: 'Vue训练营',
                expand: true,
                children: [
                  {
                    title: '组件化',
                  },
                  {
                    title: '源码',
                  },
                  {
                    title: 'docker部署',
                  },
                ],
              },
              {
                title: 'React',
                children: [
                  {
                    title: 'JSX',
                  },
                  {
                    title: '虚拟DOM',
                  },
                ],
              },
              {
                title: 'Node',
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.item {
  text-align: left;
}
</style>
