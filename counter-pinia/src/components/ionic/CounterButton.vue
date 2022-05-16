<template>
  <ion-button shape="round" class="button"><slot /></ion-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton } from "@ionic/vue";
export default defineComponent({
  name: "CounterButton",
  components: {
    IonButton,
  },
});
</script>
<script setup lang="ts"></script>
<style scoped>
.button.plus {
  --background: lightpink;
  --color: deeppink;
}
.button.minus {
  --background: skyblue;
  --color: blue;
}
.button.random {
  --background: plum;
  --color: purple;
}
</style>
