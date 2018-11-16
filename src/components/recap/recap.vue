<template>
  <div class="container animated fadeInLeft">
    <div class="notification is-primary">
      <p class="title is-4">
        The Story So Far:
      </p>
      <ccEntry v-for="(entry, index) in entries"
               :key="index"
               :entry="entry.text"
               :date="`The ${entry.day}${entry.day >= 4 ? 'th' : entry.day === 3 ? 'rd' : entry.day === 2 ? 'nd' : 'st'} of ${calendar.months[entry.month - 1]}, ${calendar.year} A.S.`"/>
    </div>
  </div>
</template>

<script>
import ccEntry from './entry.vue';

export default {
  name: 'ccRecap',
  components: {
    ccEntry,
  },
  data() {
    return {
      calendar: {},
      entries: [],
    };
  },
  methods: {
    loadRecapFromDisk() {
      this.calendar = require('../../data/recap.json').calendar;
      this.entries = require('../../data/recap.json').entries;
    },
  },
  created() {
    this.loadRecapFromDisk();
  },
};
</script>

<style scoped>

</style>
