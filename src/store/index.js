/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-10 22:15:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-23 23:17:04
 * @FilePath: /vue02/src/store/index.js
 */

import Vue from 'vue';
// import Vuex from 'vuex';
import Vuex from '../kvuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 10,
  },
  getters: {
    count: state => {
      return state.count;
    },
  },
  mutations: {
    increment(state, payload) {
      state.count -= payload.num;
    },
  },
  actions: {
    addCount(context, payload) {
      const { getters, commit } = context;
      // 添加业务逻辑
      // if (getters.count > 0) {
        commit('increment', payload);
        return true; // 返回结果
      // }
      // return false; // 返回结果
    },
    increment(context, payload) {
      const { dispatch, commit } = context;
      // commit('increment',payload);
      // 异步逻辑返回Promise
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(dispatch('addCount', payload));
        }, 1000);
      });
    },
  },
  modules: {},
});
