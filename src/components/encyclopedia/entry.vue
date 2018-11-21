<template>
  <div class="columns">
    <div class="column is-4">
    </div>
    <div class="column notification is-dark">
      <p class="title is-4 has-text-centered">
        {{ currentEntry.charAt(0).toUpperCase() + currentEntry.slice(1).toLowerCase() }}
      </p>
      <ccObfuscate input="Hello there, my name is carl"/>
    </div>
  </div>
</template>

<script>
import ccObfuscate from './obfuscate.vue';

export default {
  name: 'ccEntry',
  components: {
    ccObfuscate,
  },
  props: {
    currentRoute: { required: true },
    currentEntry: { required: true },
  },
};
</script>

<style scoped>

</style>
