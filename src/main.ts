import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import "uno.css";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: () => import("@/pages/index.vue") }],
});

app.use(router);

app.mount("#app");
