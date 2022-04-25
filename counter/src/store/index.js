import { createStore } from "vuex";

export default createStore({
  state: { count: 0 },
  getters: {},
  mutations: {
    addCount(state, value) {
      state.count += Number(value);
    },
    removeCount(state, value) {
      state.count -= Number(value);
    },
  },
  actions: {},
  modules: {},
});
