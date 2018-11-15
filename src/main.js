import _ from 'lodash';
import Vue from 'vue';
import { ObserveVisibility } from 'vue-observe-visibility';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.directive('observe-visibility', ObserveVisibility);
Object.defineProperty(Vue.prototype, '$_', { value: _ });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
