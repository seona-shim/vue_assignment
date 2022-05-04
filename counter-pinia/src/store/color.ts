import { defineStore } from "pinia";
import { Colors } from "@/types/color";

export interface Initialstate {
  color: Colors;
}

export const useColorStore = defineStore("color", {
  state: (): Initialstate => ({
    color: {
      high: "red",
      middle: "black",
      low: "blue",
    },
  }),
  actions: {
    changeColor(type: string, color: string) {
      this.color[type] = color;
    },
  },
});
