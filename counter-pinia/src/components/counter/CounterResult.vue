<template>
  <section class="result-box">
    <li v-for="(item, index) in counterStore.result" :key="index">
      {{ item.math }}
      <span>{{ item.result }}</span>
    </li>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CountResult",
});
</script>
<script setup lang="ts">
import { useCounterStore } from "../../store/counter";
const counterStore = useCounterStore();
</script>
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
