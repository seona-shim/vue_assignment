<template>
  <section class="option-box">
    <div class="option-box-inner">
      <div>
        <option-selecter
          label="UI framework"
          :options="uiComponent"
          v-model="uiFrameworks"
          @change="useChangeView(uiFrameworks)"
          class="ui-framework"
        ></option-selecter>
      </div>
      <div>
        <option-selecter
          label="? > 100"
          :options="resultOptions"
          v-model="resultColor.high"
          @change="colorStore.changeColor('high', resultColor.high)"
        ></option-selecter>
        <option-selecter
          label="0 <= ? <= 100"
          :options="resultOptions"
          v-model="resultColor.middle"
          @change="colorStore.changeColor('middle', resultColor.middle)"
        ></option-selecter>
        <option-selecter
          label="? < 0"
          :options="resultOptions"
          v-model="resultColor.low"
          @change="colorStore.changeColor('low', resultColor.low)"
        ></option-selecter>
        <option-selecter
          label="MIX"
          :options="resultOptions"
          v-model="resultColor.mix"
          @change="colorStore.changeColor('mix', resultColor.mix)"
        ></option-selecter>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Ui } from "@/router/routePath";
import { defineComponent, reactive, ref } from "vue";
import OptionSelecter from "./OptionSelecter.vue";

export default defineComponent({
  name: "OptionBox",
  components: { OptionSelecter },
});
</script>
<script setup lang="ts">
import { uiComponent } from "@/router/routePath";
import useChangeView from "@/methods/useChangeView";
import { ColorArray, Colors } from "@/types/color";
import { useColorStore } from "@/store";

// change ui framework
const uiFrameworks = ref<Ui>("default");

// change result colors
const resultColor = reactive<Colors>({
  high: "red",
  middle: "black",
  low: "blue",
  mix: "green",
});
const resultOptions: ColorArray[] = ["black", "blue", "green", "red"];
const colorStore = useColorStore();
</script>
<style lang="scss" scoped>
.option-box {
  padding: 40px 40px 10px;

  .option-box-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    justify-content: center;
    border: 2px solid lightblue;
    border-radius: 10px;
    padding: 10px 20px;
    box-sizing: border-box;
    background: lightblue;
  }
}
</style>
