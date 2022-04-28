<template>
  <select
    name="color"
    @change="changeSelect"
    class="color-selector"
    :style="{ background: selectBackground[props.selectType] }"
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
import { defineProps, computed } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  selectType: String,
});
const store = useStore();
const selectBackground = computed(() => store.state.resultColor.resultColor);
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
