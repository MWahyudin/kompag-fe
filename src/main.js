/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import App from "./App.vue";

//bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//loader overlay
import "vue-loading-overlay/dist/vue-loading.css";

// Vuesax Component Framework
import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css"; //Material Icons
import "vuesax/dist/vuesax.css"; // Vuesax
Vue.use(Vuesax);

//Vue progress bar
import VueProgressBar from "vue-progressbar";
const options = {
  color: "#bffaf3",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  },
  autoRevert: true,
  location: "left",
  inverse: false
};

Vue.use(VueProgressBar, options);

// axios
import axios from "./axios.js";
Vue.prototype.$http = axios;

//nProgress
import NProgress from 'vue-nprogress'
Vue.use(NProgress)

const nprogress = new NProgress()

// Theme Configurations
import "../themeConfig.js";

// Globally Registered Components
import "./globalComponents.js";

// Styles: SCSS
import "./assets/scss/main.scss";

// Tailwind
import "@/assets/css/main.css";

// Vue Router
import router from "./router";

// Vuex Store
import store from "./store/store";

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from "vue2-hammer";
Vue.use(VueHammer);

// PrismJS
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Feather font icon
require("./assets/css/iconfont.css");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  nprogress,
  render: h => h(App)
}).$mount("#app");
