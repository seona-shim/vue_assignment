<template>
  <select
    :value="props.modelValue"
    @change="emits('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option v-for="(item, index) in math" :key="index">{{ item }}</option>
  </select>
</template>
<script lang="ts">
import { defineComponent, defineEmits, defineProps } from "vue";
export default defineComponent({
  name: "MathSelector",
});
</script>
<script setup lang="ts">
const math = ["+", "-", "/", "*", "%"];

const props = defineProps<{
  modelValue: string;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>
<style scoped></style>
