import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    result: [],
    resultColor: { high: "blue", middle: "black", low: "minus" },
  },
  getters: {},
  mutations: {
    // 계산할 때마다 결과 저장
    countResult(state, { type, value }) {
      let newResult = {
        prevValue: state.count,
        nextValue: value,
        math: type == "add" ? "+" : "-",
        id: state.result[state.result.length - 1] + 1,
        result: 0,
      };
      type == "add"
        ? (state.count += Number(value))
        : (state.count -= Number(value));
      newResult.result = state.count;
      state.result.push(newResult);
      if (state.result[0].id == -1) {
        state.result.shift();
      }
    },
    updateResultColor(state, { type, value }) {
      state.resultColor[type] = value;
    },
  },
  actions: {},
  modules: {},
});
