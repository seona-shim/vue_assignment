<template>
  <input
    type="color"
    :value="props.value"
    @input="emits('update:value', ($event.target as HTMLTextAreaElement).value)"
    class="input-color"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ElementColorInput",
});
</script>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const props = defineProps<{
  value: string;
}>();

const emits = defineEmits(["update:value"]);
</script>
<style lang="scss">
.input-color {
  width: 100%;
  height: 80%;
}
</style>
