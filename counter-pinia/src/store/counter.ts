import { defineStore } from "pinia";

export interface ResultItem {
  id: number;
  math: string;
  result: string;
}

export interface Initialstate {
  count: number;
  result: ResultItem[];
}

const getResult = (
  prev: number,
  next: number,
  result: number,
  type: string
) => {
  const mathType = type == "plus" ? "+" : "-";
  return {
    math: String(prev) + mathType + String(next) + "=",
    result: String(result),
  };
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
      this.result.push({
        id: this.result.length,
        ...getResult(prevCount, value, resultCount, type),
      });
    },
  },
});
