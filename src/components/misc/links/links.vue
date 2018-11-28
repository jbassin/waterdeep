<template>
  <div class="container has-text-centered animated fadeInDown">
    <div class="notification"
         :class="color">
      <nav class="level">
        <div class="level-item">
          <a class="button is-rounded"
             :class="[tab === '/tavern' ? 'has-background-light has-text-dark' : color]"
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
          <a class="button is-rounded"
             :class="[tab === '/reputations' ? 'has-background-light has-text-dark' : color]"
             @click="goto('/reputations')">
            Faction Reputations
          </a>
        </div>
        <div class="level-item">
          <a class="button is-rounded"
             :class="[tab === '/recap' ? 'has-background-light has-text-dark' : color]"
             @click="goto('/recap')">
            The Story So Far
          </a>
        </div>
        <div class="level-item">
          <a class="button is-rounded"
             :class="[tab === '/undermountain' ? 'has-background-light has-text-dark' : color]"
             @click="goto('/undermountain')">
            The Undermountain
          </a>
        </div>
        <div class="level-item">
          <a class="button is-rounded"
             :class="[tab === '/encyclopedia' ? selectedColor : color]"
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
  methods: {
    goto(path) {
      this.currentTab = path;
      this.$router.replace({
        path,
      });
    },
  },
  computed: {
    tab() {
      return `/${this.$store.state.global_information.activeTab}`;
    },
    state() {
      return this.$store.state.theme_change.currentState;
    },
    color() {
      switch (this.state) {
        default:
          return 'is-primary';
        case 'skullport':
          return 'is-danger skullport has-text-warning';
      }
    },
    selectedColor() {
      switch (this.state) {
        default:
          return 'has-background-light has-text-dark';
        case 'skullport':
          return 'has-background-warning has-text-danger';
      }
    },
  },
  watch: {
  },
};
</script>

<style scoped>
  .skullport {
    font-family: 'Righteous', cursive;
  }
</style>
