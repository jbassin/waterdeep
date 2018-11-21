<template>
  <nav class="breadcrumb has-arrow-separator is-right">
    <ul>
      <li v-for="(path, index) in currentRoute"
          :key="index"
          :class="{ 'is-active': path.isActive }">
        <a @click="go(path.path)">
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
};
</script>

<style scoped>

</style>
