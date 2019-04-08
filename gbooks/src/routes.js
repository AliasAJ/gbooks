import HelloWorld from "./components/HelloWorld.vue";
import Search from "./components/Search.vue";

export default [
  { path: "/", component: HelloWorld },
  { path: "/books", component: Search }
];
