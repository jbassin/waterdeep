import Vue from 'vue';
import _ from 'lodash';
import Router from 'vue-router';
import ccTavern from '../components/tavern/tavern.vue';
import ccReputations from '../components/factions/reputations.vue';
import ccRelationships from '../components/factions/relationships.vue';
import ccRecap from '../components/recap/recap.vue';
import ccUndermountain from '../components/undermountain/undermountain.vue';
import ccEncyclopedia from '../components/encyclopedia/encyclopedia.vue';
import cc404 from '../components/misc/404/404.vue';

Object.defineProperty(Vue.prototype, '$_', { value: _ });

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/tavern',
    }, {
      path: '/tavern',
      name: 'tavern',
      component: ccTavern,
    }, {
      path: '/404',
      name: '404',
      component: cc404,
    }, {
      path: '/relationships',
      name: 'relationships',
      component: ccRelationships,
    }, {
      path: '/reputations',
      name: 'reputations',
      component: ccReputations,
    }, {
      path: '/recap',
      name: 'recap',
      component: ccRecap,
    }, {
      path: '/undermountain',
      name: 'undermountain',
      component: ccUndermountain,
    }, {
      path: '/encyclopedia',
      component: ccEncyclopedia,
      alias: '/encyclopedia/index',
      children: [
        {
          path: '',
          alias: '/encyclopedia/index',
        }, {
          path: '*',
          alias: '/encyclopedia',
        },
      ],
    },
  ],
});
