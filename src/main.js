import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';

import VueMask from '@devindex/vue-mask';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Configurando opções do VueSweetalert2
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

// Configurando URL base do Axios
axios.defaults.baseURL = 'https://slow.inexpay.com.br/api'; 

// Criando a aplicação Vue
const app = createApp(App);

// Adicionando Axios ao prototype do Vue
app.config.globalProperties.$http = axios;
app.config.globalProperties.storage = 'http://localhost:8000/storage';

// Configurações e plugins
app.use(store);
app.use(router);
// app.use(BootstrapVue3);
app.use(VueSweetalert2, options);
app.use(VueMask);
// Montando a aplicação
app.mount('#app');
