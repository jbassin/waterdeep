<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'index',
  computed: {
    isActive() {
      return this.$store.state.global_information.activeTab;
    },
  },
};
</script>

<style scoped>

</style>
