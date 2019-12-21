import Vue from 'vue';
import VueObserveVisibility from 'vue-observe-visibility';
import Modal from 'vue-js-modal';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueObserveVisibility);
Vue.use(Modal);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
