<template>
  <option-box></option-box>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OptionBox from "@/components/OptionBox.vue";

export default defineComponent({
  name: "App",
  components: { OptionBox },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h3 {
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
  }
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
  padding: 20px;
  height: 100vh;
  > section {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
      grid-column: 1/3;
      grid-row: 1/2;
    }
    &:nth-child(2) {
      grid-column: 1/2;
      grid-row: 2/3;
      flex-direction: column;
    }
    &:nth-child(3) {
      grid-column: 2/3;
      grid-row: 2/3;
      flex-direction: column;
    }
  }
}
</style>
