import Vue from 'vue';
import VueObserveVisibility from 'vue-observe-visibility';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueObserveVisibility);


Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
