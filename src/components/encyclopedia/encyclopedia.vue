<template>
  <div class="container animated fadeIn">
    <div class="notification is-primary"
         v-if="loaded">
      <div class="has-text-centered">
        <p class="title is-4">
          Encyclopedia
        </p>
      </div>
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="field">
              <p class="control has-icons-left">
                <input class="input is-rounded has-background-dark has-text-light"
                       type="search"
                       placeholder="search"
                       v-model="search"
                       @keyup="searchPress">
                <span class="icon is-small is-left">
                  <i class="fas fa-search"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="level-item">
        </div>
        <div class="level-right">
          <div class="level-item">
            <ccBreadcrumb :current-route="currentRoute()"></ccBreadcrumb>
          </div>
        </div>
      </nav>
      <div class="notification is-dark">
        <ccEntry :current-route="currentRoute()"
                 :current-entry="info"/>
        <ccTree :root="info.title"
                :root-path="`/encyclopedia${currentRoute().slice(-1)[0].path}`"
                v-if="showTree()"/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle,prefer-destructuring,no-await-in-loop */
import EntryApi from '../../services/entries';
import ccBreadcrumb from './breadcrumb.vue';
import ccEntry from './entry.vue';
import ccTree from './tree.vue';

export default {
  name: 'ccEncyclopedia',
  components: {
    ccBreadcrumb, ccEntry, ccTree,
  },
  data() {
    return {
      info: null,
      loaded: false,
      search: '',
    };
  },
  methods: {
    async loadEncyclopediaFromDisk() {
      const response = await EntryApi.fetchEntry(this.currentRoute().slice(-1)[0].header.toLowerCase());
      const info = response.data.entries;
      this.$_.each(info, (page, pageIndex) => {
        this.$_.each(page.entry, (entry, entryIndex) => {
          info[pageIndex].entry[entryIndex].text = JSON.parse(info[pageIndex].entry[entryIndex].text);
        });
      });
      this.info = info[0];
    },
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
    async searchPress(e) {
      if (e.keyCode === 13) {
        const stringSimilarity = require('string-similarity');
        const response = await EntryApi.fetchEntryList();
        const entries = [];
        this.$_.each(response.data.entries, (entry) => {
          entries.push(entry.title);
        });
        const match = stringSimilarity.findBestMatch(this.search, entries).bestMatch.target;
        console.log(match);
        let currentEntry = null;
        let currentPath = match.replace(/ /g, '_').toLowerCase();
        const currentPathArray = [currentPath];
        while (currentPath !== '') {
          currentEntry = await EntryApi.fetchEntry(currentPath.toLowerCase());
          currentPath = currentEntry.data.entries[0].parent;
          currentPathArray.push(currentEntry.data.entries[0].parent.replace(/ /g, '_').toLowerCase());
        }
        this.$router.replace({
          path: `/encyclopedia${currentPathArray.reverse().join('/')}`,
        });
        this.search = '';
      }
    },
    showTree() {
      switch (this.info.title) {
        default:
          return false;
        case 'index':
        case 'bestiary':
          return true;
      }
    },
  },
  async mounted() {
    this.loaded = false;
    await this.loadEncyclopediaFromDisk();
    this.loaded = true;
  },
  watch: {
    async $route() {
      this.loaded = false;
      await this.loadEncyclopediaFromDisk();
      this.loaded = true;
    },
  },
};
</script>

<style scoped>

</style>
