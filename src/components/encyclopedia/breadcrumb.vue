<template>
  <nav class="breadcrumb has-arrow-separator is-right">
    <ul>
      <li v-for="(path, index) in currentRoute"
          :key="index"
          :class="{ 'is-active': path.isActive }">
        <a @click="go(path.path)"
           :class="color">
          {{ path.header }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ccBreadcrumb',
  props: {
    currentRoute: { required: true },
  },
  methods: {
    go(path) {
      this.$router.replace({
        path: `/encyclopedia${path}`,
      });
    },
  },
  computed: {
    state() {
      return this.$store.state.theme_change.currentState;
    },
    color() {
      switch (this.state) {
        default:
          return '';
        case 'skullport':
          return 'has-text-warning';
      }
    },
  },
};
</script>

<style scoped>

</style>
