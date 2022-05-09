<template>
  <q-card
    class="result-box"
    :style="{
      '--color-high': color.high,
      '--color-middle': color.middle,
      '--color-low': color.low,
    }"
  >
    <q-item v-for="(item, index) in counterStore.result" :key="index">
      <q-item-section>
        <q-item-label caption>{{ item.math }}</q-item-label>
        <q-item-label :class="getResultType(item.result) + ' result'">{{
          item.result
        }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script lang="ts">
export default {
  name: "ResultBox",
};
</script>

<script setup lang="ts">
import { useCounterStore, useColorStore } from "@/store";
import { getResultType } from "@/methods/getResultType";
const counterStore = useCounterStore();
const color = useColorStore().color;
</script>

<style lange="scss" scoped>
.result-box {
  overflow-y: auto;
}
.result {
  font-weight: 700;
}

.result.high {
  color: var(--color-high);
}
.result.middle {
  color: var(--color-middle);
}
.result.low {
  color: var(--color-low);
}
</style>
