<template>
  <section class="color-picker-box">
    <label>
      <h3>? > 100</h3>
      <element-select
        :value="resultColors.high"
        @change="colorStore.changeColor('high', $event.target.value)"
      ></element-select>
    </label>
    <label>
      <h3>0 {{ "<=" }} ? {{ "<=" }} 100</h3>
      <element-select
        :value="resultColors.middle"
        @change="colorStore.changeColor('middle', $event.target.value)"
      ></element-select>
    </label>
    <label>
      <h3>? {{ "<" }} 0</h3>
      <element-select
        :value="resultColors.low"
        @change="colorStore.changeColor('low', $event.target.value)"
      ></element-select>
    </label>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ElementSelect from "../elements/ElementSelect.vue";

export default defineComponent({
  components: { ElementSelect },
  name: "ColorPickerBox",
});
</script>
<script setup lang="ts">
import { ref } from "vue";
import { useColorStore } from "../../store/color";
const colorStore = useColorStore();

export interface Colors {
  high: string;
  middle: string;
  low: string;
}

const resultColors = ref<Colors>({ high: "red", middle: "black", low: "blue" });
</script>
<style lang="scss" scoped>
.color-picker-box {
  justify-content: space-between;
  gap: 20px;
  label {
    flex: 1;
  }
  select {
    margin-top: 10px;
  }
}
</style>
