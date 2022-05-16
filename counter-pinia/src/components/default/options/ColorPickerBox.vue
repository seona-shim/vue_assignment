<template>
  <section class="color-picker-box">
    <label>
      <h3>? > 100</h3>
      <element-select
        :value="resultColors.high"
        @change="colorStore.changeColor('high', ($event.target as HTMLInputElement).value)"
        :options="colorArray"
      ></element-select>
    </label>
    <label>
      <h3>0 {{ "<=" }} ? {{ "<=" }} 100</h3>
      <element-select
        :value="resultColors.middle"
        @change="colorStore.changeColor('middle', ($event.target as HTMLInputElement).value)"
        :options="colorArray"
      ></element-select>
    </label>
    <label>
      <h3>? {{ "<" }} 0</h3>
      <element-select
        :value="resultColors.low"
        @change="colorStore.changeColor('low', ($event.target as HTMLInputElement).value)"
        :options="colorArray"
      ></element-select>
    </label>
    <label>
      <h3>Result Box Background</h3>
      <element-color-input
        v-model:value="backgroundColor"
      ></element-color-input>
    </label>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ElementSelect from "../elements/ElementSelect.vue";
import ElementColorInput from "../elements/ElementColorInput.vue";

export default defineComponent({
  components: { ElementSelect, ElementColorInput },
  name: "ColorPickerBox",
});
</script>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useColorStore } from "@/store";
import { Colors } from "@/types/color";
import { ColorArray } from "@/types/color";
const colorArray: ColorArray[] = ["black", "green", "red", "blue"];
const colorStore = useColorStore();

const resultColors = ref<Colors>({ high: "red", middle: "black", low: "blue" });

const backgroundColor = ref<string>("#ffffff");
watch(backgroundColor, (newValue, oldValue) => {
  colorStore.changeBackground(newValue);
});
</script>
<style lang="scss" scoped>
.color-picker-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    flex: 1;
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 20px;
    align-items: center;
    h3 {
      text-align: left;
    }
  }
}
</style>
