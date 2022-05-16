<template>
  <main
    class="grid gap-[20px] grid-rows-1 grid-cols-2 overflow-hidden p-[20px] pt-0"
  >
    <counter-box />
    <result-box />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResultBox from "@/components/tailwind/ResultBox.vue";
import CounterBox from "@/components/tailwind/CounterBox.vue";
export default defineComponent({
  name: "CounterQuasar",
  components: { CounterBox, ResultBox },
});
</script>
<style scoped src="@/styles/tailwind/index.css" />
