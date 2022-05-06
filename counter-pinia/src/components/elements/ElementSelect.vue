<template>
  <select
    class="select-color"
    v-model="selectBackground"
    :style="{ background: selectBackground }"
  >
    <option v-for="(item, index) in props.options" :key="index">
      {{ item }}
    </option>
  </select>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ElementSelect",
});
</script>
<script setup lang="ts">
import { ref, defineProps } from "vue";
import { ColorArray } from "@/types/color.ts";

const props = defineProps<{
  value: string;
  options: [];
}>();

const selectBackground = ref<string>(props.value);
</script>
<style lang="scss" scoped>
.select-color {
  width: 100%;
  padding: 10px 20px;
  color: white;
}
</style>
