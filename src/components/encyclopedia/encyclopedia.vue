<template>
  <div class="container animated fadeIn">
    <keep-alive>
      <div class="notification is-primary">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="title is-4">
                Encyclopedia
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <ccBreadcrumb :current-route="currentRoute"></ccBreadcrumb>
            </div>
          </div>
        </nav>

      </div>
    </keep-alive>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
import ccBreadcrumb from './breadcrumb.vue';

export default {
  name: 'ccEncyclopedia',
  components: {
    ccBreadcrumb,
  },
  computed: {
    currentRoute() {
      const routeArray = [];
      this.$_.each(this.$route.params['0'] ? this.$route.params['0'].split('/') : ['index'], (item, index) => {
        routeArray.push({
          header: item,
          path: routeArray[index - 1] ? `${routeArray[index - 1].path}/${item}` : `/${item}`,
          isActive: false,
        });
      });
      routeArray.slice(-1)[0].isActive = true;
      return routeArray;
    },
    currentEntry() {
      return this.currentRoute.slice(-1)[0].header;
    },
  },
};
</script>

<style scoped>

</style>
