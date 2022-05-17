<template>
  <div class="content">
    <counter-box></counter-box>
    <counter-result></counter-result>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CounterBox from "@/components/default/counter/CounterBox.vue";
import CounterResult from "@/components/default/counter/CounterResult.vue";

export default defineComponent({
  name: "CounterDefault",
  components: { CounterBox, CounterResult },
});
</script>

<style lang="scss" scoped>
.content {
  padding: 0 40px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
</style>
