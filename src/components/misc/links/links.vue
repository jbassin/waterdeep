<template>
  <div class="container has-text-centered animated fadeInDown">
    <div class="notification is-primary">
      <nav class="level">
        <div class="level-item">
          <a class="button"
             :class="[pathfinder === '/tavern' ? 'is-light' : 'is-primary']"
             @click="goto('/tavern')">
            Tavern Status
          </a>
        </div>
        <!--<div class="level-item">-->
          <!--<a class="button"-->
             <!--:class="[pathfinder === '/relationships' ? 'is-light' : 'is-primary']"-->
             <!--@click="goto('/relationships')">-->
            <!--Relationships-->
          <!--</a>-->
        <!--</div>-->
        <div class="level-item">
          <a class="button"
             :class="[pathfinder === '/reputations' ? 'is-light' : 'is-primary']"
             @click="goto('/reputations')">
            Faction Reputations
          </a>
        </div>
        <div class="level-item">
          <a class="button"
             :class="[pathfinder === '/recap' ? 'is-light' : 'is-primary']"
             @click="goto('/recap')">
            The Story So Far
          </a>
        </div>
        <div class="level-item">
          <a class="button"
             :class="[pathfinder === '/undermountain' ? 'is-light' : 'is-primary']"
             @click="goto('/undermountain')">
            The Undermountain
          </a>
        </div>
        <div class="level-item">
          <a class="button"
             :class="[pathfinder === '/encyclopedia' ? 'is-light' : 'is-primary']"
             @click="goto('/encyclopedia/index')">
            Encyclopedia
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
      currentTab: this.$router.currentRoute.name,
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
  watch: {
    $route(to) {
      this.currentTab = to.name;
    },
  },
};
</script>

<style scoped>

</style>
