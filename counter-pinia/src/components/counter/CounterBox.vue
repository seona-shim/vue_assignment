<template>
  <section class="counter-box">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <div class="input-box">
      <element-text-input></element-text-input>
    </div>
    <div class="button-box">
      <element-button>+</element-button>
      <element-button>-</element-button>
      <element-button>Random</element-button>
    </div>
  </section>
</template>
<script>
import { defineComponent } from "vue";
import ElementButton from "../elements/ElementButton.vue";
import ElementTextInput from "../elements/ElementTextInput.vue";

export default defineComponent({
  components: { ElementTextInput, ElementButton },
  name: "CounterBox",
});
</script>
<script setup></script>
<style lang="scss" scoped>
.counter-box {
  gap: 20px;
}
.input-box {
  width: 80%;
}
.button-box {
  display: flex;
  gap: 10px;
}
</style>
