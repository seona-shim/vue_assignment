const state = () => ({
  resultColor: { high: "red", middle: "black", low: "blue" },
});

const mutations = {
  updateResultColor(state, { type, value }) {
    state.resultColor[type] = value;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
