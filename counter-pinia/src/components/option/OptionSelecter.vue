<template>
  <label class="select-box">
    <h3>{{ props.label }}</h3>
    <select
      :value="modelValue"
      @change="emits('update:modelValue', ($event.target as HTMLSelectElement).value)"
      :style="{ color: modelValue }"
    >
      <option v-for="(item, index) in props.options" :key="index">
        {{ item }}
      </option>
    </select>
  </label>
</template>

<script lang="ts">
import { Ui } from "@/router/routePath";
import { ColorArray } from "@/types/color";
import { defineComponent } from "vue";

export default defineComponent({
  name: "OptionSelecter",
});
</script>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const props = defineProps<{
  label: string;
  options: ColorArray[] | Ui[];
  modelValue: string;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>
<style lang="scss" scoped>
.select-box {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  &.ui-framework {
    select {
      color: lightseagreen;
    }
  }
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightblue;
    color: white;
    width: 100%;
    height: 100%;
  }
  select {
    width: 100%;
    padding: 5px 15px;
    font-size: 18px;
    color: white;
    border: 2px solid lightblue;
  }
}
</style>
