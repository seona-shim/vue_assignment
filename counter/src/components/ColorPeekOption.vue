<template>
  <select name="color" @change="changeSelect">
    <option value="blue" :selected="selectedOption('low')">blue</option>
    <option value="red" :selected="selectedOption('high')">red</option>
    <option value="green" :selected="false">green</option>
    <option value="black" :selected="selectedOption('middle')">black</option>
  </select>
</template>
<script>
export default {
  name: "ColorPeekOption",
  props: {
    selectType: String,
  },
  methods: {
    changeSelect(e) {
      this.$store.commit("updateResultColor", {
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
