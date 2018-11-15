import Vue from 'vue';
import _ from 'lodash';
import Router from 'vue-router';
import Index from '../views/Index.vue';

Object.defineProperty(Vue.prototype, '$_', { value: _ });

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
  ],
});
