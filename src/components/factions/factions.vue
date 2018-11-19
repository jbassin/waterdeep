<template>
  <div>
    <ccReputations/>
    <ccRelationships/>
  </div>
</template>

<script>
import ccReputations from './reputations.vue';
import ccRelationships from './relationships.vue';

export default {
  name: 'factions',
  components: {
    ccReputations, ccRelationships,
  },
};
</script>

<style scoped>

</style>
