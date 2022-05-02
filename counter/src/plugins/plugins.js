// 숫자인지 아닌지 확인하는 함수
const valueCheck = (v) => {
  if (!Number(v) && Number(v) !== 0) {
    alert("숫자를 입력합쉬댜");
    return false;
  } else {
    return true;
  }
};

// 최대, 최소값의 범위 내에서 무작위 숫자 하나를 뽑하주는 함수
const randomValue = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default {
  install(Vue) {
    Vue.config.globalProperties.$valueCheck = valueCheck;
    Vue.config.globalProperties.$randomValue = randomValue;

    Vue.provide("plugins", { valueCheck, randomValue });
  },
};
