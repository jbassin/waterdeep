import Vue from 'vue';
import _ from 'lodash';
import Router from 'vue-router';
import ccTavern from '../components/tavern/tavern.vue';
import ccFactions from '../components/factions/factions.vue';
import ccRecap from '../components/recap/recap.vue';
import ccUndermountain from '../components/undermountain/undermountain.vue';

Object.defineProperty(Vue.prototype, '$_', { value: _ });

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/tavern',
    },
    {
      path: '/tavern',
      name: 'tavern',
      component: ccTavern,
    },
    {
      path: '/factions',
      name: 'factions',
      component: ccFactions,
    },
    {
      path: '/recap',
      name: 'recap',
      component: ccRecap,
    },
    {
      path: '/undermountain',
      name: 'undermountain',
      component: ccUndermountain,
    },
  ],
});
