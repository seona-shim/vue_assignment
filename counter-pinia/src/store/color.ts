import { defineStore } from "pinia";

export const useColorStore = defineStore("color", {
  state: () => ({
    color: {
      high: "red",
      middle: "black",
      low: "red",
    },
  }),
  actions: {},
});
