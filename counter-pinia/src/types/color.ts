export interface ColorArray {
  [index: number]: "black" | "red" | "green" | "blue";
}

export interface ColorType {
  0: "high" | "middle" | "low";
}

export interface Colors {
  [high: string]: ColorArray[0];
  middle: ColorArray[0];
  low: ColorArray[0];
}
