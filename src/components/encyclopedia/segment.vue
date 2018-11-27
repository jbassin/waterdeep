<template>
  <div v-if="segment.type === 'link'" @click="go"><a>{{ segment.text }}</a></div>
  <div v-else-if="segment.type === 'bold'"><b>{{ segment.text }}</b></div>
  <div v-else-if="segment.type === 'italics'"><i>{{ segment.text }}</i></div>
  <div v-else-if="segment.type === 'obfuscated'"><ccObfuscate :input="segment.text"/></div>
  <div v-else>{{ segment.text }}</div>
</template>

<script>
/* eslint-disable no-await-in-loop */
import EntryApi from '../../services/entries';
import ccObfuscate from './obfuscate.vue';

export default {
  name: 'ccSegment',
  components: {
    ccObfuscate,
  },
  props: {
    segment: { required: true },
  },
  methods: {
    async go() {
      let currentEntry = null;
      let currentPath = this.segment.text.replace(/ /g, '_').toLowerCase();
      const currentPathArray = [currentPath];
      while (currentPath !== '') {
        currentEntry = await EntryApi.fetchEntry(currentPath.toLowerCase());
        currentPath = currentEntry.data.entries[0].parent;
        currentPathArray.push(currentEntry.data.entries[0].parent.replace(/ /g, '_').toLowerCase());
      }
      this.$router.replace({
        path: `/encyclopedia${currentPathArray.reverse().join('/')}`,
      });
    },
  },
};
</script>

<style scoped>

</style>
