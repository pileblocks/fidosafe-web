import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin, ToastPlugin } from 'bootstrap-vue'
import './theme.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import router from './router'
import store from './store'
import { TonClient } from '@tonclient/core';
import { libWeb } from '@tonclient/lib-web';
import { Everscale } from "./api/Everscale";
import { BigNumber } from "bignumber.js";
import { Utils } from "./api/Utils";

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(ToastPlugin);
Vue.use(Everscale);

TonClient.useBinaryLibrary(libWeb);
BigNumber.set({ DECIMAL_PLACES: 4 });
console.log("Network:" + process.env.VUE_APP_EVERSCALE_URL);


Vue.filter('short', function (value) {
  return value.slice(0, 8) + '...' + value.slice(-8);
});

Vue.filter('formatDate', function (value) {
  return Utils.showDate(value);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');