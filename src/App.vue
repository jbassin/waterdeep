<template>
  <div id="app">
    <ccHeader class="spaced"/>
    <ccLinks class="spaced"/>
    <router-view class="footer-spaced"/>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars,no-underscore-dangle */
import Granim from 'granim';

import ccHeader from './components/misc/header/header.vue';
import ccLinks from './components/misc/links/links.vue';

export default {
  name: 'app',
  components: { ccHeader, ccLinks },
  created() {
    this.$router.beforeEach((to, from, next) => {
      const pathArray = to.path.split('/');
      this.$store.dispatch({
        type: 'global_information/setActiveTab',
        tab: pathArray[1],
      })
        .then(() => {
          if (this.$_.last(pathArray) === 'skullport') {
            this.$store.dispatch({
              type: 'theme_change/setState',
              state: 'skullport',
            })
              .then(() => {
                next();
              });
          } else if (this.state === 'skullport') {
            this.$store.dispatch({
              type: 'theme_change/setState',
              state: 'normal',
            })
              .then(() => {
                next();
              });
          } else {
            next();
          }
        });
    });
    const granimInstance = new Granim({
      element: '#gradient-background',
      direction: 'radial',
      isPausedWhenNotInView: true,
      states: {
        'default-state': {
          gradients: [
            ['#f2f2f2', '#a6a6a6'],
            ['#cccccc', '#f2f2f2'],
            ['#a6a6a6', '#f2f2f2'],
          ],
        },
      },
    });
  },
  computed: {
    state() {
      return this.$store.state.theme_change.currentState;
    },
  },
};
</script>

<style>
@import "~bulmaswatch/lux/bulmaswatch.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~animate.css/animate.min.css";
@import url('https://fonts.googleapis.com/css?family=Righteous');

  .spaced {
    margin-bottom: 10px;
  }
  .footer-spaced {
    margin-bottom: 45px;
  }
</style>
