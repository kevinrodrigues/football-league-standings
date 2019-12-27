import Vue from 'vue';
import VueObserveVisibility from 'vue-observe-visibility';
import Modal from 'vue-js-modal';
import LogRocket from 'logrocket';
import * as Sentry from '@sentry/browser';
import App from './App.vue';
import router from './router';
import store from './store';

LogRocket.init('stmphc/tnf-football-league-app');
Sentry.init({ dsn: 'https://4ab7edf50137487a8c6b697ed7893b78@sentry.io/1867285' });

Vue.use(VueObserveVisibility);
Vue.use(Modal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
