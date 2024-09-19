import Vue from "vue";
import { PiniaVuePlugin } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

Vue.use(PiniaVuePlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
