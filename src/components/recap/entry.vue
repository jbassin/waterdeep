<template>
  <article class="message is-link">
    <div class="message-header"
         @click="expanded = !expanded">
      <p>{{ date }}</p>
      <a class="button is-link"
         @click="expanded = !expanded">
        <span class="icon">
          <i :class="[expanded ?
                      'fas fa-arrow-up' :
                      'fas fa-arrow-down']"></i>
        </span>
      </a>
    </div>
    <div class="message-body animated fadeIn"
         v-if="expanded">
      {{ entry }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'ccEntry',
  props: {
    entry: { required: true },
    date: { required: true },
  },
  data() {
    return {
      expanded: true,
    };
  },
};
</script>

<style scoped>

</style>
