export type ColorArray = "black" | "red" | "green" | "blue";

export type ColorType = "high" | "middle" | "low" | "mix";

export type Colors = {
  [colorType in ColorType]: ColorArray;
};
