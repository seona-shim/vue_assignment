<template>
  <section class="result-box">
    <li>result</li>
  </section>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CountResult",
});
</script>
<script setup></script>
<style lang="scss" scoped>
.result-box {
  gap: 10px;
  li {
    list-style: none;
    font-size: 18px;
    span {
      font-weight: 900;
    }
  }
}
</style>
