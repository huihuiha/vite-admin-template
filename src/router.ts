import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

export default router;
