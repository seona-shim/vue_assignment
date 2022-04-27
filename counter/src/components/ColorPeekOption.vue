<template>
  <select
    name="color"
    @change="changeSelect"
    class="color-selector"
    :style="{ background: selectBackground[this.selectType] }"
  >
    <option value="blue" :selected="selectedOption('low')">blue</option>
    <option value="red" :selected="selectedOption('high')">red</option>
    <option value="green" :selected="false">green</option>
    <option value="black" :selected="selectedOption('middle')">black</option>
  </select>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "ColorPeekOption",

  props: {
    selectType: String,
  },
  computed: mapState({
    selectBackground: (state) => state.resultColor.resultColor,
  }),
  methods: {
    ...mapMutations("resultColor", ["updateResultColor"]),
    changeSelect(e) {
      this.updateResultColor({
        type: this.selectType,
        value: e.target.value,
      });
    },
    selectedOption(type) {
      return this.selectType == type;
    },
  },
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
