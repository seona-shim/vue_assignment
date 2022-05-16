<template>
  <button class="button"><slot /></button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ElementButton",
});
</script>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.button {
  padding: 5px 15px;
  font-size: 18px;
}
</style>
