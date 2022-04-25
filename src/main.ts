import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

const token = localStorage.getItem('token');
const headerName = 'Authorization';
if (token) {
  Vue.prototype.$http.defaults.headers.common[headerName] = token;
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
