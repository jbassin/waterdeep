<template>
  <div>
    <p class="title is-4 has-text-centered">
      {{ title }}
    </p>
    <div v-for="(paragraph, paragraphIndex) in currentEntry.entry"
         :key="paragraphIndex"
         :class="color">
      <div v-if="paragraph.visible"
           class="no-whitespace">
        <p class="subtitle is-5"
           v-if="paragraph.title !== ' '">
          {{ paragraph.title }}
        </p>
        <div class="margin-hack-parent">
          <ccSegment v-for="(segment, segmentIndex) in paragraph.text"
                     :key="segmentIndex"
                     :segment="segment"
                     class="subtitle is-6 margin-hack"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
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
  computed: {
    title() {
      const returnTitle = [];
      this.$_.each(this.currentEntry.title.split(' '), (item) => {
        returnTitle.push(item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
      });
      return returnTitle.join(' ');
    },
    state() {
      return this.$store.state.theme_change.currentState;
    },
    color() {
      switch (this.state) {
        default:
          return 'horizontal-rule';
        case 'skullport':
          return 'skullport-horizontal-rule';
      }
    },
  },
};
</script>

<style scoped>
  .margin-hack {
    display: inline;
    margin: 0;
    padding: 0;
  }
  .horizontal-rule {
    border: 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .skullport-horizontal-rule {
    border: 0;
    border-bottom: 1px solid #FDD555;
    padding-bottom: 10px;
    padding-top: 10px;
  }
</style>
