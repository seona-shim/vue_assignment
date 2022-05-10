<template>
  <section
    class="flex flex-col items-center justify-center gap-[40px] shadow-lg"
  >
    <img alt="Vue logo" src="@/assets/logo.png" class="object-contain" />
    <input
      type="number"
      class="border-black-500 h-[40px] w-[300px] border-2 bg-gray-100"
      v-model="countValue"
    />
    <div class="flex justify-center gap-[10px]">
      <button
        @click="changeCount('plus')"
        class="h-[40px] w-[50px] rounded-lg bg-red-500 text-lg font-bold text-white active:bg-red-700"
      >
        +
      </button>
      <button
        @click="changeCount('minus')"
        class="h-[40px] w-[50px] rounded-lg bg-blue-500 text-lg font-bold text-white active:bg-blue-700"
      >
        -
      </button>
      <button
        @click="changeCount('random')"
        class="h-[40px] w-[100px] rounded-lg bg-purple-500 text-lg font-bold text-white active:bg-purple-700"
      >
        Random
      </button>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  name: "CounterBox",
  components: {},
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
import { useCounterStore } from "@/store";
const counterStore = useCounterStore();

const countValue = ref<number>(0);

const changeCount = (type: string) => {
  counterStore.changeCount(type, countValue.value);
};
</script>
<style scoped src="@/styles/tailwind/index.css" />
