import { createStore } from "vuex";
import count from "./count";
import resultColor from "./resultColor";

export default createStore({
  modules: { count, resultColor },
});
