import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    result: [],
    resultColor: { high: "red", middle: "black", low: "blue" },
  },
  getters: {},
  mutations: {
    // 계산할 때마다 결과 저장
    countResult(state, { type, value }) {
      let newResult = {
        prevValue: state.count,
        nextValue: value,
        math: type == "add" ? "+" : "-",
        id: state.result.length,
        result: 0,
      };
      type == "add"
        ? (state.count += Number(value))
        : (state.count -= Number(value));
      newResult.result = state.count;
      state.result.push(newResult);
    },
    updateResultColor(state, { type, value }) {
      state.resultColor[type] = value;
    },
  },
  actions: {},
  modules: {},
});
