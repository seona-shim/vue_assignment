import { createRouter, createWebHashHistory, Router } from "vue-router";
import CounterDefault from "@/views/CounterDefault.vue";

const routes = [
  {
    path: "/",
    name: "default",
    component: CounterDefault,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
