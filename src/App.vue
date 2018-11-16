<template>
  <div id="app">
    <ccHeader class="spaced"/>
    <ccLinks class="spaced"/>
    <router-view/>
  </div>
</template>

<script>
import ccHeader from './components/misc/header/header.vue';
import ccLinks from './components/misc/links/links.vue';

export default {
  name: 'app',
  components: { ccHeader, ccLinks },
};
</script>

<style>
@import "~bulmaswatch/flatly/bulmaswatch.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~animate.css/animate.min.css";

  .spaced {
    margin-bottom: 10px;
  }
</style>
