<template>
  <section class="result-box">
    <li v-for="(item, index) in counterStore.result" :key="index">
      {{ item.math }}
      <span :style="getResultColor(item.result)">{{ item.result }}</span>
    </li>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CountResult",
});
</script>
<script setup lang="ts">
import { useCounterStore } from "../../store/counter";
import { useColorStore } from "../../store/color";
const counterStore = useCounterStore();
const colorStore = useColorStore();

const getResultColor = (result: number) => {
  let type;

  if (result < 0) {
    type = "low";
  } else if (result > 100) {
    type = "high";
  } else {
    type = "middle";
  }

  return { color: colorStore.color[type] };
};
</script>
<style lang="scss" scoped>
.result-box {
  gap: 10px;
  li {
    list-style: none;
    font-size: 18px;
    span {
      font-weight: 900;
    }
  }
}
</style>
