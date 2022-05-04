<template>
  <section>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <element-text-input></element-text-input>
    <div>
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
<style></style>
