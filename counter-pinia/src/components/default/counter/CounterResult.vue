<template>
  <section class="result-box" :style="{ background: backgroundColor }">
    <li v-for="(item, index) in counterStore.result" :key="index">
      <p :isDnd="item.isDnd">{{ item.math }}</p>
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
const dndColor = computed(() => colorStore.color.mix);
</script>
<style lang="scss" scoped>
.result-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;

  border: 2px solid lightblue;
  border-radius: 3%;
  text-align: center;
  li {
    list-style: none;
    font-size: 18px;
    display: flex;
    gap: 5px;
    border-bottom: 1px solid lightblue;
    padding: 20px 20px 0;
    width: 100%;
    justify-content: space-between;
    p[isDnd="true"] {
      color: v-bind(dndColor);
    }
    span {
      font-weight: 900;
    }
  }
}
</style>
