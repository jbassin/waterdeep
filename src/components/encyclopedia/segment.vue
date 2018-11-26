<template>
  <div v-if="segment.type === 'link'">
    <a>{{ segment.text }}</a>
  </div>
  <div v-else-if="segment.type === 'bold'">
    <b>{{ segment.text }}</b>
  </div>
  <div v-else-if="segment.type === 'italics'">
    <i>{{ segment.text }}</i>
  </div>
  <div v-else-if="segment.type === 'obfuscated'">
    <ccObfuscate :input="segment.text"/>
  </div>
  <div v-else>
    {{ segment.text }}
  </div>
</template>

<script>
import ccObfuscate from './obfuscate.vue';

export default {
  name: 'ccSegment',
  components: {
    ccObfuscate,
  },
  props: {
    segment: { required: true },
  },
};
</script>

<style scoped>

</style>
