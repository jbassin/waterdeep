<template>
  <div class="container animated fadeInRight">
    <div class="notification is-primary">
      <div class="tile is-ancestor"
           v-for="(faction, index) in sortedFactions"
           :key="index">
        <div class="tile is-vertical is-4">
          <div class="tile is-parent">
            <div class="tile is-child">
              <strong>{{ faction.name }}</strong>
            </div>
            <div class="tile is-child">
              {{ faction.contact }}
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child">
            <progress class="progress"
                      :class="[setProgressColor(parseInt(faction.rep))]"
                      :value="parseInt(faction.rep)"
                      max="100">{{ faction.rep }}%</progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */

export default {
  name: 'ccFactions',
  data() {
    return {
      factions: [],
    };
  },
  methods: {
    loadFactionsFromDisk() {
      this.factions = require('../../data/factions.json');
    },
    setProgressColor(value) {
      switch (true) {
        case (value < 25):
          return 'is-danger';
        case (value < 50):
          return 'is-warning';
        case (value < 75):
          return 'is-link';
        default:
          return 'is-success';
      }
    },
  },
  computed: {
    sortedFactions() {
      const copy = this.$_.map(this.factions, this.$_.clone);
      return copy.sort((a, b) => b.rep - a.rep);
    },
  },
  created() {
    this.loadFactionsFromDisk();
  },
};
</script>

<style scoped>

</style>
