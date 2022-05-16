import { defineStore } from "pinia";

export interface ResultItem {
  math: string;
  result: number;
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
    result: result,
  };
};

const getRandomValue = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const useCounterStore = defineStore("counter", {
  state: (): Initialstate => ({
    count: 0,
    result: [],
  }),
  actions: {
    changeCount(type: string, value: number) {
      const prevCount = this.count;

      let mathType = type;
      let inputValue = value;
      if (type == "random") {
        mathType = ["plus", "minus"][getRandomValue(0, 1)];
        inputValue =
          mathType == "plus"
            ? getRandomValue(-100 - this.count, 200 - this.count)
            : getRandomValue(-200 + this.count, 100 + this.count);
      }

      if (mathType == "plus") {
        this.count += inputValue;
      } else if (mathType == "minus") {
        this.count -= inputValue;
      }
      const resultCount: number = this.count;
      this.result.push(getResult(prevCount, inputValue, resultCount, mathType));
    },
  },
});
