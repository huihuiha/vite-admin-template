import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";

console.log(routes, "00000000");

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
