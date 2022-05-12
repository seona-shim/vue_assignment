export type ColorArray = "black" | "red" | "green" | "blue";

export type ColorType = "high" | "middle" | "low";

export type Colors = {
  [key in ColorType]: ColorArray
}
