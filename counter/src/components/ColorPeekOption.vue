<template>
  <select
    name="color"
    @change="(e) => changeSelect(e, props.selectType)"
    class="color-selector"
    :style="{ background: resultColor[props.selectType] }"
  >
    <option value="blue" :selected="selectedOption('low')">blue</option>
    <option value="red" :selected="selectedOption('high')">red</option>
    <option value="green" :selected="false">green</option>
    <option value="black" :selected="selectedOption('middle')">black</option>
  </select>
</template>
<script>
export default {
  name: "ColorPeekOption",
};
</script>
<script setup>
import { defineProps } from "vue";
import { storeData, storeCommit } from "./common";

let { resultColor } = storeData();
let { changeSelect } = storeCommit();

const props = defineProps({
  selectType: String,
});

const selectedOption = (type) => {
  return props.selectType == type;
};
</script>
<style scoped>
.color-selector {
  width: 100%;
  height: 20px;
  font-weight: 700;
  color: white;
}
</style>
