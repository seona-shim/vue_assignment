<template>
  <button @click="clickEvent" class="math-button"><slot /></button>
</template>
<script>
export default {
  name: "VueCounterButton",
  props: {
    clickEvent: Function,
  },
};
</script>
<style scoped>
.math-button {
  padding: 6px 10px;
}
</style>
