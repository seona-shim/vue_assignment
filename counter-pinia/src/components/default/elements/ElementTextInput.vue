<template>
  <input
    type="number"
    class="text-input"
    :value="props.value"
    @input="emits('update:value', ($event.target as HTMLInputElement).value)"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ElementTextInput",
});
</script>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const props = defineProps<{
  value: number;
}>();

const emits = defineEmits(["update:value"]);
</script>
<style lang="scss" scoped>
.text-input {
  width: 100%;
  padding: 5px 15px;
  font-size: 18px;
}
</style>
