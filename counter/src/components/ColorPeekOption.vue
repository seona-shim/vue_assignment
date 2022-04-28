<template>
  <select
    name="color"
    @change="changeSelect"
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
import { useStore } from "vuex";
import { storeData } from "./common";

let { resultColor } = storeData();
const props = defineProps({
  selectType: String,
});
const store = useStore();
const changeSelect = (e) => {
  store.commit("resultColor/updateResultColor", {
    type: props.selectType,
    value: e.target.value,
  });
};
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
