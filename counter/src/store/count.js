const state = () => ({
  count: 0,
  result: [],
});

const mutations = {
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
};

export default {
  namespaced: true,
  state,
  mutations,
};
