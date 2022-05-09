<template>
  <button class="button"><slot /></button>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ElementButton",
});
</script>
<script setup></script>
<style lang="scss" scoped>
.button {
  padding: 5px 15px;
  font-size: 18px;
}
</style>
