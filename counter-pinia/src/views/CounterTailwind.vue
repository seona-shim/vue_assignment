<template>
  <main
    class="grid h-screen grid-cols-2 grid-rows-[auto_1fr] gap-[20px] p-[20px]"
  >
    <option-box />
    <counter-box />
    <result-box />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OptionBox from "@/components/tailwind/OptionBox.vue";
import ResultBox from "@/components/tailwind/ResultBox.vue";
import CounterBox from "@/components/tailwind/CounterBox.vue";
export default defineComponent({
  name: "CounterQuasar",
  components: { OptionBox, CounterBox, ResultBox },
});
</script>
<style scoped src="@/styles/tailwind/index.css" />
