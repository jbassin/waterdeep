import _ from 'lodash';
import Vue from 'vue';
import SHA256 from 'crypto-js/sha256';
import Granim from 'granim';
import 'vue-cytoscape/dist/vue-cytoscape.css';
import { ObserveVisibility } from 'vue-observe-visibility';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.directive('observe-visibility', ObserveVisibility);
Object.defineProperty(Vue.prototype, '$_', { value: _ });
Object.defineProperty(Vue.prototype, '$sha', { value: SHA256 });
Object.defineProperty(Vue.prototype, '$granim', {
  value: new Granim({
    element: '#gradient-background',
    direction: 'radial',
    isPausedWhenNotInView: true,
    defaultStateName: 'default-state',
    states: {
      'default-state': {
        gradients: [
          ['#f2f2f2', '#a6a6a6', '#f2f2f2', '#a6a6a6', '#cccccc'],
          ['#cccccc', '#f2f2f2', '#cccccc', '#f2f2f2', '#a6a6a6'],
          ['#a6a6a6', '#cccccc', '#a6a6a6', '#cccccc', '#f2f2f2'],
          ['#cccccc', '#f2f2f2', '#cccccc', '#f2f2f2', '#a6a6a6'],
        ],
        transitionSpeed: 5000,
        loop: true,
      },
      'skullport-state': {
        gradients: [
          ['#3f0f0e', '#ffff1a', '#3f0f0e', '#3f0f0e', '#3f0f0e'],
          ['#3f0f0e', '#3f0f0e', '#ffff1a', '#3f0f0e', '#3f0f0e'],
          ['#3f0f0e', '#3f0f0e', '#3f0f0e', '#ffff1a', '#3f0f0e'],
          ['#3f0f0e', '#3f0f0e', '#ffff1a', '#3f0f0e', '#3f0f0e'],
        ],
        transitionSpeed: 3000,
        loop: true,
      },
    },
  }),
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
