<template>
  <div>
    <ccTavern class="separated"/>
    <ccFactions class="separated"/>
  </div>
</template>

<script>
import ccTavern from '../components/tavern/tavern.vue';
import ccFactions from '../components/factions/factions.vue';

export default {
  name: 'index',
  components: {
    ccTavern, ccFactions,
  },
  computed: {
    isActive() {
      return this.$store.state.global_information.activeTab;
    },
  },
};
</script>

<style scoped>
  .separated {
    margin-top: 10px;
  }
</style>
