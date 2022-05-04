import { defineStore } from "pinia";

export interface Initialstate {
  count: number;
  result: Array<string>;
}

const getResult = (
  prev: number,
  next: number,
  result: number,
  type: string
) => {
  const mathType = type == "plus" ? "+" : "-";
  return String(prev) + mathType + String(next) + "=" + String(result);
};

export const useCounterStore = defineStore("counter", {
  state: (): Initialstate => ({
    count: 0,
    result: [],
  }),
  actions: {
    changeCount(type: string, value: number) {
      const prevCount = this.count;
      if (type == "plus") {
        this.count += value;
      } else if (type == "minus") {
        this.count -= value;
      } else if (type == "random") {
        console.log("random");
      }
      const resultCount = this.count;
      this.result.push(getResult(prevCount, value, resultCount, type));
      console.log(this.result);
    },
  },
});
