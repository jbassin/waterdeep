<template>
  <div class="container has-text-centered animated fadeInDown">
    <div class="notification is-primary">
      <nav class="level">
        <div class="level-item">
          <a class="button"
             :class="[pathfinder === 'tavern' ? 'is-light' : 'is-primary']"
             @click="goto('tavern')">
            Tavern Status
          </a>
        </div>
        <div class="level-item">
          <a class="button"
             :class="[pathfinder === 'factions' ? 'is-light' : 'is-primary']"
             @click="goto('factions')">
            Faction Reputation
          </a>
        </div>
        <div class="level-item">
          <a class="button"
             :class="[pathfinder === 'recap' ? 'is-light' : 'is-primary']"
             @click="goto('recap')">
            The Story So Far
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ccLinks',
  data() {
    return {
      currentTab: 'tavern',
    };
  },
  methods: {
    goto(path) {
      this.currentTab = path;
      this.$router.replace({
        path,
      });
    },
  },
  computed: {
    pathfinder() {
      return this.currentTab;
    },
  },
};
</script>

<style scoped>

</style>
