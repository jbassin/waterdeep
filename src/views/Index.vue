<template>
  <div>
    <ccTavern class="separated"/>
  </div>
</template>

<script>
import ccTavern from '../components/tavern/tavern.vue';

export default {
  name: 'index',
  components: {
    ccTavern,
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
    margin-top: 40px;
  }
</style>
