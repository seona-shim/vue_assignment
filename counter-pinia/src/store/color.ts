import { defineStore } from "pinia";
import { ref } from "vue";

export const useColorStore = defineStore("color", () => {
  const color = ref({
    high: "red",
    middle: "black",
    low: "red",
  });

  return { color };
});
