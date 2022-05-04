<template>
  <section class="color-picker-box">
    <label>
      <h3>? > 100</h3>
      <element-select></element-select>
    </label>
    <label>
      <h3>0 {{ "<=" }} ? {{ "<=" }} 100</h3>
      <element-select></element-select>
    </label>
    <label>
      <h3>? {{ "<" }} 0</h3>
      <element-select></element-select>
    </label>
  </section>
</template>
<script>
import { defineComponent } from "vue";
import ElementSelect from "../elements/ElementSelect.vue";

export default defineComponent({
  components: { ElementSelect },
  name: "ColorPickerBox",
});
</script>
<script setup></script>
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
