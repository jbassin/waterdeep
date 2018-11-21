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
        <ccEntry :current-route="currentRoute"
                 :current-entry="currentEntry"/>
      </div>
    </keep-alive>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
import ccBreadcrumb from './breadcrumb.vue';
import ccEntry from './entry.vue';

export default {
  name: 'ccEncyclopedia',
  components: {
    ccBreadcrumb, ccEntry,
  },
  data() {
    return {
      info: [],
    };
  },
  methods: {
    loadEncyclopediaFromDisk() {
      const info = require('../../data/encyclopedia.json');
      const formattedInfo = [];
      this.$_.each(info, (page, pageIndex) => {
        formattedInfo.push(page);
        this.$_.each(page.entry, (entry, entryIndex) => {
          const entryArray = [];
          this.$_.each(entry.text.split('|'), (text) => {
            switch (text.charAt(0)) {
              case '@':
                entryArray.push({
                  type: 'link',
                  text: text.substr(1),
                });
                break;
              case '*':
                entryArray.push({
                  type: 'bold',
                  text: text.substr(1),
                });
                break;
              case '_':
                entryArray.push({
                  type: 'italics',
                  text: text.substr(1),
                });
                break;
              case '%':
                entryArray.push({
                  type: 'obfuscated',
                  text: text.substr(1),
                });
                break;
              default:
                entryArray.push({
                  type: 'normal',
                  text,
                });
                break;
            }
          });
          formattedInfo[pageIndex].entry[entryIndex].text = entryArray;
        });
      });
      this.info = formattedInfo;
    },
  },
  computed: {
    currentRoute() {
      const routeArray = [];
      this.$_.each(this.$route.params['0'] ? this.$route.params['0'].split('/') : ['index'], (item, index) => {
        routeArray.push({
          header: item.toLowerCase(),
          path: routeArray[index - 1] ? `${routeArray[index - 1].path}/${item.toLowerCase()}` : `/${item.toLowerCase()}`,
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
  created() {
    this.loadEncyclopediaFromDisk();
  },
};
</script>

<style scoped>

</style>
