<template>
  <div class="container animated fadeIn">
    <div class="notification is-primary">
      <p class="title is-4">
        The Undermountain:
      </p>
      <ccLevel v-for="(level, index) in undermountain"
                       :key="index"
                       :level="level"
                       :index="index"/>
    </div>
  </div>
</template>

<script>
import LevelsApi from '../../services/levels';
import ccLevel from './level.vue';

export default {
  name: 'ccUndermountain',
  components: {
    ccLevel,
  },
  data() {
    return {
      undermountain: [],
    };
  },
  methods: {
    async loadUndermountainFromDisk() {
      const response = await LevelsApi.fetchLevels();
      this.undermountain = response.data.levels;
    },
  },
  created() {
    this.loadUndermountainFromDisk();
  },
};
</script>

<style scoped>

</style>
