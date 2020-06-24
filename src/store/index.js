/*
 * @Author: RONGWEI PENG
 * @Date: 2020-06-10 22:15:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-06-24 10:15:58
 * @FilePath: \vue_test\src\store\index.js
 */

import Vue from 'vue';
// import Vuex from 'vuex';
import Vuex from '../kvuex';

Vue.use(Vuex);

const count = {
  namespaced: true,
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
};

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
  modules: {
    // counter: count,
  },
});
