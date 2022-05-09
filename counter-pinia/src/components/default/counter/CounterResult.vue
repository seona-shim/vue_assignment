<template>
  <section class="result-box" :style="{ background: backgroundColor }">
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
import { computed } from "vue";
import { useCounterStore, useColorStore } from "@/store";
import { getResultType } from "@/methods/getResultType";
const counterStore = useCounterStore();
const colorStore = useColorStore();

const getResultColor = (result: number) => {
  return { color: colorStore.color[getResultType(result)] };
};

const backgroundColor = computed(() => colorStore.background);
</script>
<style lang="scss" scoped>
.result-box {
  gap: 10px;
  overflow-y: auto;
  li {
    list-style: none;
    font-size: 18px;
    span {
      font-weight: 900;
    }
  }
}
</style>
