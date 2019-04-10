import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import VueMouseParallax from "vue-mouse-parallax";
import axios from "axios";
import VueAxios from "vue-axios";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Routes from "./routes";

Vue.use(Vuetify, {
  iconfont: "mdi"
});
Vue.use(VueRouter);
Vue.use(VueMouseParallax);
Vue.use(VueAxios, axios);

const router = new VueRouter({
  routes: Routes
});

// new Vue({
//   el: "#bookSearchApp",
//   data() {
//     return {
//       searchTerm: "",
//       searchResults: []
//     };
//   },
//   methods: {
//     search() {
//       axios
//         .get(`https://www.googleapis.com/books/v1/volumes?q=` + this.searchTerm)
//         .then(response => {
//           this.searchResults = response.data;
//         })
//         .catch(e => {
//           e;
//         });
//     },

//     bookAuthors(book) {
//       let authors = book.volumeInfo.authors;
//       if (authors.length < 3) {
//         authors = authors.join(" and ");
//       } else if (authors.length > 2) {
//         let lastAuthor = " and " + authors.slice(-1);
//         authors.pop();
//         authors = authors.join(", ");
//         authors += lastAuthor;
//       }
//       return authors;
//     }
//   },
//   render: h => h(Search)
// });

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
