<template>
  <section
    class="flex flex-col flex-nowrap items-center justify-center gap-[10px] overflow-auto shadow-lg"
    :style="{ background: backgroundColor }"
  >
    <p v-for="(item, index) in counterStore.result" :key="index">
      {{ item.math }}
      <span :class="`text-${getResultColor(item.result)}`" class="font-bold">
        {{ item.result }}
      </span>
    </p>
  </section>
</template>
<script lang="ts">
export default {
  name: "ResultBox",
};
</script>
<script lang="ts" setup>
import { computed } from "vue";
import { useCounterStore, useColorStore } from "@/store";
import { getResultType } from "@/methods/getResultType";
const counterStore = useCounterStore();
const colorStore = useColorStore();

const getResultColor = (result: number) => {
  return colorStore.color[getResultType(result)];
};

const backgroundColor = computed(() => colorStore.background);
</script>
<style scoped src="@/styles/tailwind/index.css" />

<style lang="scss" scoped></style>
