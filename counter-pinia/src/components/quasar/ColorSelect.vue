<template>
  <label class="color-select">
    <q-select
      outlined
      v-model="resultColors[props.type]"
      :options="colorOptions"
      @update:model-value="changeResultColor"
      :label="props.title"
      :input-style="{ color: 'pink' }"
    />
  </label>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ColorSelect",
});
</script>
<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useColorStore } from "@/store";
const props = defineProps<{
  type: string;
  title: string;
}>();
const resultColors = ref({ high: "red", middle: "black", low: "blue" });
const colorOptions = ["red", "green", "blue", "black"];

const changeResultColor = (value) => {
  useColorStore().changeColor(props.type, value);
};
</script>
<style lang="scss" scoped>
.color-select {
}
</style>
