<template>
  <div class="container animated fadeIn">
    <div class="notification is-primary">
      <p class="title is-4">
        Faction Reputations
      </p>
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
  name: 'ccReputations',
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
          return 'is-info';
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
