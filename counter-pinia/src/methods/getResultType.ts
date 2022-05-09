export const getResultType = (result: number) => {
  let type;

  if (result < 0) {
    type = "low";
  } else if (result > 100) {
    type = "high";
  } else {
    type = "middle";
  }

  return type;
};
