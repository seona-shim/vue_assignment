import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

import { IonicVue } from "@ionic/vue";

const app = createApp(App);

app.use(createPinia());
app.use(Quasar, quasarUserOptions);
app.use(router);

app.use(IonicVue);
app.mount("#app");
