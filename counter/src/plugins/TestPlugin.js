// 전역적으로 사용되는 함수를 플러그인으로 분리해야..!

export default {
  install(vue, options) {
    console.log("plugin test");
    console.log("vue?:::", vue);
    console.log("options?:::", options);
    alert("hello");
  },
};
