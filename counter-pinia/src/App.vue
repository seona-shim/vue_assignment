<template>
  <main class="app-content">
    <option-box></option-box>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OptionBox from "@/components/option/OptionBox.vue";

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
</style>
<style lang="scss" scoped>
.app-content {
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 100vh;
  gap: 20px;
}
</style>
