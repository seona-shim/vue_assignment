<template>
  <input type="text" class="text-input" />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ElementTextInput",
});
</script>
<script setup></script>
<style lang="scss" scoped>
.text-input {
  width: 100%;
  padding: 5px 15px;
  font-size: 18px;
}
</style>
