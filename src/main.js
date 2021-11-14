import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin, ToastPlugin } from 'bootstrap-vue'
import './theme.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'
import store from './store'

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(ToastPlugin);

import { TonClient } from '@tonclient/core';
import { libWeb } from '@tonclient/lib-web';

TonClient.useBinaryLibrary(libWeb);
console.log("Network:" + process.env.VUE_APP_EVERSCALE_URL);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
