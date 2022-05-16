import { ColorType } from "@/types/color";

export const getResultType = (result: number) => {
  let type: ColorType;

  if (result < 0) {
    type = "low";
  } else if (result > 100) {
    type = "high";
  } else {
    type = "middle";
  }

  return type;
};
