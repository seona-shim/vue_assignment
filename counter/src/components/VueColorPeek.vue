<template>
  <section class="color-option-box">
    <label>
      <h3>? > 100</h3>
      <color-peek-option selectType="high"></color-peek-option>
    </label>
    <label>
      <h3>0 {{ "<=" }} ? {{ "<=" }} 100</h3>
      <color-peek-option selectType="middle"></color-peek-option>
    </label>
    <label>
      <h3>? {{ "<" }} 0</h3>
      <color-peek-option selectType="low"></color-peek-option>
    </label>
  </section>
</template>
<script>
import ColorPeekOption from "./ColorPeekOption.vue";
export default {
  components: { ColorPeekOption },
  name: "VueColorPeek",
};
</script>
<style scoped>
.color-option-box {
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px 6%;
  gap: 20px;
}
.color-option-box label {
}
.color-option-box label h3 {
}
</style>
