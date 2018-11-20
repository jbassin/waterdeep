<template>
  <div class="container animated fadeIn">
    <div class="notification is-primary">
      <p class="title is-4">
        Encyclopedia
      </p>
      {{ currentRoute }}
    </div>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */

export default {
  name: 'ccEncyclopedia',
  computed: {
    currentRoute() {
      return this.$route.params['0'] ? this.$route.params['0'].split('/') : ['index'];
    },
  },
};
</script>

<style scoped>

</style>
