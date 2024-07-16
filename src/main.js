import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';
import PrimeVue from 'primevue/config'; // Import PrimeVue config
import ToastService from 'primevue/toastservice';

// import 'primevue/resources/themes/saga-blue/theme.css'; // Choose your theme
// import 'primevue/resources/primevue.min.css';          // Core CSS
import 'primeicons/primeicons.css';   

import VueCookies from 'vue-cookies';
createApp(App).
use(store).
use(router).
use(VueCookies).
use(PrimeVue).
use(ToastService).
mount('#app')
