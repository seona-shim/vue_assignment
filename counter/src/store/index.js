import { createStore } from "vuex";

export default createStore({
  state: { count: 0 },
  getters: {},
  mutations: {
    addCount(state) {
      state.count++;
    },
    removeCount(state) {
      state.count--;
    },
  },
  actions: {},
  modules: {},
});
