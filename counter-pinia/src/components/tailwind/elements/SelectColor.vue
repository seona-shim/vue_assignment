<template>
  <select v-model="selectBackground" :style="{ background: selectBackground }">
    <option v-for="(item, index) in props.options" :key="index">
      {{ item }}
    </option>
  </select>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectColor",
});
</script>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { ColorArray } from "@/types/color";

const props = defineProps<{
  value: ColorArray;
  options: ColorArray[];
}>();

const selectBackground = ref<ColorArray>(props.value);
</script>
