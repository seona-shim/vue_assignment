<template>
  <section
    class="flex-1 flex flex-col flex-nowrap items-center justify-center gap-[10px] shadow-lg overflow-y-scroll h-full border-2 border-sky-300 rounded-[3%]"
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
import { defineComponent } from "vue";
export default defineComponent({
  name: "ResultBox",
});
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
