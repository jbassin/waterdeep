<template>
  <div class="container has-text-centered animated fadeInDown">
    <div class="notification"
         :class="color">
      <nav class="level">
        <div class="level-item">
          <a class="button is-rounded"
             :class="[tab === '/tavern' ? 'has-background-light has-text-dark' : color]"
             @click="goto('/tavern')">
            {{ tabNames.tavern }}
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
            {{ tabNames.faction }}
          </a>
        </div>
        <div class="level-item">
          <a class="button is-rounded"
             :class="[tab === '/recap' ? 'has-background-light has-text-dark' : color]"
             @click="goto('/recap')">
            {{ tabNames.recap }}
          </a>
        </div>
        <div class="level-item">
          <a class="button is-rounded"
             :class="[tab === '/undermountain' ? 'has-background-light has-text-dark' : color]"
             @click="goto('/undermountain')">
            {{ tabNames.undermountain }}
          </a>
        </div>
        <div class="level-item">
          <a class="button is-rounded"
             :class="[tab === '/encyclopedia' ? selectedColor : color]"
             @click="goto('/encyclopedia/index')">
            {{ tabNames.encyclopedia }}
          </a>
        </div>
        <div class="level-item">
          <a class="button is-rounded"
             :class="[tab === '/user' ? selectedColor : color]"
             @click="goto('/user/redirect')">
            {{ tabNames.user }}
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
    tabNames() {
      switch (this.state) {
        default:
          return {
            tavern: 'Tavern Status',
            faction: 'Faction Reputations',
            recap: 'The Story So Far',
            undermountain: 'The Undermountain',
            encyclopedia: 'Encyclopedia',
            user: 'Login/Register/Info',
          };
        case 'skullport':
          return {
            tavern: 'Pitiful Alehouse',
            faction: 'Petty Squabbles',
            recap: 'Unnecessary Details',
            undermountain: 'The Scourge\'s Source',
            encyclopedia: 'Grand Font of Knowledge',
            user: 'Personal Drivel',
          };
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
