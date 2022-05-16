<template>
  <q-card
    class="result-box"
    :style="{
      '--color-high': colorStore.color.high,
      '--color-middle': colorStore.color.middle,
      '--color-low': colorStore.color.low,
      background: colorStore.background,
    }"
  >
    <q-icon name="colorize" class="cursor-pointer" size="20px">
      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
        <q-color
          v-model="resultBg"
          @update:model-value="colorStore.changeBackground(resultBg)"
        />
      </q-popup-proxy>
    </q-icon>
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
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ResultBox",
});
</script>

<script setup lang="ts">
import { useCounterStore, useColorStore } from "@/store";
import { getResultType } from "@/methods/getResultType";
const counterStore = useCounterStore();
const colorStore = useColorStore();

const resultBg = ref<string>("#ffffff");
</script>

<style lang="scss" scoped>
.result-box {
  overflow-y: auto;
  position: relative;

  .cursor-pointer {
    position: absolute;
    top: 20px;
    right: 20px;
  }
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
