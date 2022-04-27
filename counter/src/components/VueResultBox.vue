<template>
  <section class="result-box" :style="cssColor">
    <p v-for="item in resultList" :key="item.id">
      {{ item.prevValue + item.math + item.nextValue + "=" }}
      <span
        :class="
          item.result > 100
            ? 'highColor'
            : item.result < 0
            ? 'lowColor'
            : 'middleColor'
        "
        class="result"
        >{{ item.result }}</span
      >
    </p>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "VueResultBox",
  computed: mapState({
    resultList: (state) => state.count.result,
    resultColor: (state) => state.resultColor.resultColor,
    cssColor() {
      const color = this.resultColor;
      return {
        "--high-color": color.high,
        "--middle-color": color.middle,
        "--low-color": color.low,
      };
    },
  }),
};
</script>
<style scoped>
.result-box {
  --high-color: red;
  --middle-color: black;
  --low-color: blue;
  overflow-y: auto;
}
.result {
  font-weight: 700;
}
.highColor {
  color: var(--high-color);
}
.middleColor {
  color: var(--middle-color);
}
.lowColor {
  color: var(--low-color);
}
</style>
