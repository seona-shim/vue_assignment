<template>
  <select class="select-color">
    <option>black</option>
    <option>green</option>
    <option>red</option>
    <option>blue</option>
  </select>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ElementSelect",
});
</script>
<script setup></script>
<style lang="scss" scoped>
.select-color {
  width: 100%;
  padding: 10px 20px;
}
</style>
