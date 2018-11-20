<template>
  <div id="app">
    <ccHeader class="spaced"/>
    <ccLinks class="spaced"/>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Granim from 'granim';

import ccHeader from './components/misc/header/header.vue';
import ccLinks from './components/misc/links/links.vue';

export default {
  name: 'app',
  components: { ccHeader, ccLinks },
  created() {
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
};
</script>

<style>
@import "~bulmaswatch/lux/bulmaswatch.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~animate.css/animate.min.css";

  .spaced {
    margin-bottom: 10px;
  }
</style>
