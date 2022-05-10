<template>
  <ion-app>
    <ion-content>
      <ion-card>option</ion-card>
      <ion-card>counter</ion-card>
      <ion-card>result</ion-card>
    </ion-content>
  </ion-app>
</template>
<script lang="ts">
import { IonApp, IonContent, IonCard } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CounterIonic",
  components: { IonApp, IonContent, IonCard },
});
</script>

<style lang="scss"></style>
