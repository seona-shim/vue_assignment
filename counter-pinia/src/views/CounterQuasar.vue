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

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
