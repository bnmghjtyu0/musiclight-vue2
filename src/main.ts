import axios from "axios";
import { PiniaVuePlugin } from "pinia";
import Vue from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router";

Vue.use(PiniaVuePlugin);

// Request interceptor
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = JSON.parse(token);
  }
  return config;
});

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // Handle the response here
    return response;
  },
  (error) => {
    // Handle errors here
    console.error(error);
    return Promise.reject(error);
  }
);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
