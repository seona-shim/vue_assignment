<template>
  <main class="content">
    <counter-box />
    <result-box />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResultBox from "@/components/quasar/ResultBox.vue";
import CounterBox from "@/components/quasar/CounterBox.vue";
export default defineComponent({
  name: "CounterQuasar",
  components: { CounterBox, ResultBox },
});
</script>
<script setup lang="ts"></script>

<style lang="scss">
.content {
  .q-card {
    padding: 20px 50px;
  }
  .q-card:nth-child(1) {
    grid-column: 1/3;
    grid-row: 1/2;
  }
  .q-card:nth-child(2) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .q-card:nth-child(3) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
}
</style>
