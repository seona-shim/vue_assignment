<template>
  <section class="grid items-center grid-cols-2 col-span-2 shadow-lg">
    <section class="px-[50px] py-[20px]">
      <label class="flex flex-col items-baseline gap-[10px]">
        <h3>UI Framework</h3>
        <SelectColor
          :value="uiValue"
          :options="uiComponent"
          @change="changeUI"
          class="h-[40px] w-full border-[1px] border-gray-300 bg-gray-50"
        ></SelectColor>
      </label>
    </section>
    <section class="px-[50px] py-[20px]">
      <label class="grid grid-cols-[200px_1fr]">
        <h3>? > 100</h3>
        <SelectColor
          :value="resultColors.high"
          @change="colorStore.changeColor('high', $event.target.value)"
          :options="colorArray"
          class="text-white"
        ></SelectColor>
      </label>
      <label class="grid grid-cols-[200px_1fr]">
        <h3>0 {{ "<=" }} ? {{ "<=" }} 100</h3>
        <SelectColor
          :value="resultColors.middle"
          @change="colorStore.changeColor('middle', $event.target.value)"
          :options="colorArray"
          class="text-white"
        ></SelectColor>
      </label>
      <label class="grid grid-cols-[200px_1fr]">
        <h3>? {{ "<" }} 0</h3>
        <SelectColor
          :value="resultColors.low"
          @change="colorStore.changeColor('low', $event.target.value)"
          :options="colorArray"
          class="text-white"
        ></SelectColor>
      </label>
      <label class="grid grid-cols-[200px_1fr]">
        <h3>Result Box Background</h3>
        <input type="color" v-model="backgroundColor" class="w-full" />
      </label>
    </section>
  </section>
</template>
<script lang="ts">
import SelectColor from "./elements/SelectColor.vue";
export default {
  name: "OptionBox",
  components: {
    SelectColor,
  },
};
</script>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { useColorStore } from "@/store";
import { Colors, ColorArray } from "@/types/color";
import useChangeView from "@/methods/useChangeView.ts";
import { uiComponent } from "@/router/routePath.ts";

const uiValue = ref<string>("tailwind");

const changeUI = (e) => {
  useChangeView(e.target.value);
};

const colorArray: ColorArray = ["black", "green", "red", "blue"];
const colorStore = useColorStore();

const resultColors = ref<Colors>({ high: "red", middle: "black", low: "blue" });

const backgroundColor = ref<string>("#ffffff");
watch(backgroundColor, (newValue, oldValue) => {
  colorStore.changeBackground(newValue);
});
</script>
<style scoped src="@/styles/tailwind/index.css" />

<style lang="scss" scoped></style>
