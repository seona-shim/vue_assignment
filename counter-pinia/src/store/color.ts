import { defineStore } from "pinia";

export interface Color {
  [high: string]: string;
  middle: string;
  low: string;
}
export interface Initialstate {
  color: Color;
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
