<template>
  <div class="container animated fadeIn">
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
import RecapsApi from '../../services/recaps';
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
    async loadRecapFromDisk() {
      this.calendar = {
        months: [
          'Dawn',
          'Starfall',
          'Windswrath',
          'Rainswrath',
          'Skyrest',
          'Midyear',
          'Heatswrath',
          'Sicklefall',
          'Deepsun',
          'Harvest',
          'Dusk',
          'Godsnight',
        ],
        year: 214,
      };
      const response = await RecapsApi.fetchRecaps();
      this.entries = response.data.recaps;
    },
  },
  created() {
    this.loadRecapFromDisk();
  },
};
</script>

<style scoped>

</style>
