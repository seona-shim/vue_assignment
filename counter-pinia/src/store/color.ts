import { defineStore } from "pinia";
import { Colors, ColorArray, ColorType } from "@/types/color";

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
    changeColor(type: ColorType[0], color: ColorArray[0]) {
      this.color[type] = color;
    },
  },
});
