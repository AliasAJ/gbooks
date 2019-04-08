import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Routes from "./routes";

Vue.use(Vuetify, {
  iconfont: "mdi"
});
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
