import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)

import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);

import {DataTable} from "simple-datatables"
import 'simple-datatables/src/css/style.css';

Vue.prototype.$DataTable = DataTable;


import 'vue-phone-number-input/dist/vue-phone-number-input.css';

// Vue.component('vue-phone-number-input', VuePhoneNumberInput);

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2, options);

/* URL API */
axios.defaults.baseURL = 'http://localhost:8000/api'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
