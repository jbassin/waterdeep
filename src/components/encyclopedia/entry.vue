<template>
  <div class="columns">
    <div class="column is-4">
    </div>
    <div class="column notification is-dark">
      <p class="title is-4 has-text-centered">
        {{ currentEntry.title.charAt(0).toUpperCase() + currentEntry.title.slice(1).toLowerCase() }}
      </p>
      <div v-for="(paragraph, paragraphIndex) in currentEntry.entry"
           :key="paragraphIndex">
        <div v-if="paragraph.visible"
             class="no-whitespace">
          <p class="subtitle is-5">
            {{ paragraph.title }}
          </p>
          <ccSegment v-for="(segment, segmentIndex) in paragraph.text"
                     :key="segmentIndex"
                     :segment="segment"
                     class="subtitle is-6 margin-hack"/>
        </div>
        <br><br>
      </div>
    </div>
  </div>
</template>

<script>
import ccSegment from './segment.vue';

export default {
  name: 'ccEntry',
  components: {
    ccSegment,
  },
  props: {
    currentRoute: { required: true },
    currentEntry: { required: true },
  },
};
</script>

<style scoped>
  .margin-hack {
    display: inline;
  }
</style>
