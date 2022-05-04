<template>
  <color-picker-box></color-picker-box>
  <counter-box></counter-box>
  <counter-result></counter-result>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColorPickerBox from "./components/colorPicker/ColorPickerBox.vue";
import CounterBox from "./components/counter/CounterBox.vue";
import CounterResult from "./components/counter/CounterResult.vue";

export default defineComponent({
  name: "App",
  components: { CounterBox, CounterResult, ColorPickerBox },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
