import { createApp } from "vue";
import App from "./App.vue";
import plugins from "./plugins/plugins";
import store from "./store";

const app = createApp(App);

app.use(store);
app.use(plugins);
app.mount("#app");
