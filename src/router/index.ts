import MainLayout from "@/layouts/MainLayout.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,

  routes: [
    {
      path: "",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
      ],
    },
  ],
});

export default router;
