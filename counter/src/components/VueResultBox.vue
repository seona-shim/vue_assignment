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
export default {
  name: "VueResultBox",
};
</script>
<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const resultList = computed(() => store.state.count.result);
const resultColor = computed(() => store.state.resultColor.resultColor);

const cssColor = computed(() => {
  return {
    "--high-color": resultColor.value.high,
    "--middle-color": resultColor.value.middle,
    "--low-color": resultColor.value.low,
  };
});
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
