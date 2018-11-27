<template>
  <div v-if="loaded"
       class="content">
    <ccBranch :item="tree"
              :path="rootPath"/>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
import EntryApi from '../../services/entries';
import ccBranch from './branch.vue';

export default {
  name: 'ccTree',
  components: {
    ccBranch,
  },
  props: {
    root: { default: 'index' },
    rootPath: { default: '/encyclopedia/index' },
  },
  data() {
    return {
      tree: {},
      loaded: false,
    };
  },
  methods: {
    async createTree() {
      const response = await EntryApi.fetchEntryList();
      let entries = [];
      this.$_.each(response.data.entries, (entry) => {
        entries.push({
          title: entry.title,
          parent: entry.parent,
        });
      });
      entries = this.$_.sortBy(entries, 'title');
      this.tree = {
        title: this.root,
        children: this.getChildren(entries, this.root),
      };
    },
    getChildren(dataSet, parent) {
      const children = [];
      this.$_.each(dataSet, (data) => {
        if (data.parent === parent) {
          children.push({
            title: data.title,
            children: this.getChildren(dataSet, data.title),
          });
        }
      });
      return children;
    },
  },
  async created() {
    this.loaded = false;
    await this.createTree();
    this.loaded = true;
  },
};
</script>

<style scoped>
  ul {
    list-style-type: disc;
  }
</style>
