import {createApp} from 'vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import BootstrapVueNext from "bootstrap-vue-next";
import router from './router/router';
import store from './store/store';
import helpers from './utils/helpers';

import App from './App.vue'

const app = createApp(App);
app.use(BootstrapVueNext)
app.use(store);
app.use(router);
app.use(helpers);
app.mount('#app')
