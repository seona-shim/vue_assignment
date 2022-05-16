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
import { ColorArray, Colors, ColorType } from "@/types/color";
const props = defineProps<{
  type: ColorType;
  title: string;
}>();
const resultColors = ref<Colors>({ high: "red", middle: "black", low: "blue" });
const colorOptions: ColorArray[] = ["red", "green", "blue", "black"];

const changeResultColor = (value: ColorArray) => {
  useColorStore().changeColor(props.type, value);
};
</script>
<style lang="scss" scoped></style>
