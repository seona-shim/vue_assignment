import { defineStore } from "pinia";
import { Colors, ColorArray, ColorType } from "@/types/color";

export interface Initialstate {
  color: Colors;
  background: string;
}

export const useColorStore = defineStore("color", {
  state: (): Initialstate => ({
    color: {
      high: "red",
      middle: "black",
      low: "blue",
    },
    background: "#ffffff",
  }),
  actions: {
    changeColor(type: ColorType, color: ColorArray) {
      this.color[type] = color;
    },
    changeBackground(color: string) {
      this.background = color;
    },
  },
});
