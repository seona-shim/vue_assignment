import router from "@/router";
const useChangeView = (value: string) => {
  if (value !== "default") {
    router.push(value);
  } else {
    router.push("/");
  }
};

export default useChangeView;
