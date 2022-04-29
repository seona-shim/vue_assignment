import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import testPlugin from "./plugins/TestPlugin";

const app = createApp(App);

app.use(store);
app.use(testPlugin);
app.mount("#app");
