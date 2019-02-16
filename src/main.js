// The Vues build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import vueRouter from "vue-router";

import Users from "./components/Users";

//added=vueresorce dependancy
import vueResource from "vue-resource";
Vue.config.productionTip = false;

Vue.use(vueResource);
Vue.use(vueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [{ path: "/", component: Users }]
});

/* eslint-disable no-new */
new Vue({
  //  el: "#app",
  //  components: { App },
  //  template: "<App/>"
  router,
  template: `
    <div id="app">
    <ul>
      <li><router.link to="/">Users</router-link></li>
    </ul>
  <router-view></router-view>
  </div>`
}).$mount("#app");
