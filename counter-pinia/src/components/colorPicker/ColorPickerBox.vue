<template>
  <section>
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
<style></style>
