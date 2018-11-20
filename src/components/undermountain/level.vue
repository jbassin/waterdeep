<template>
  <article class="message is-info">
    <div class="message-header"
         @click="open">
      <p>{{ level.locked ? `Level ${index + 1}` : level.name }}</p>
      <a class="is-info">
        <span class="icon animated"
              :class="[shake]">
          <i :class="[level.locked ?
                      'fas fa-lock' :
                      expanded ?
                      'fas fa-arrow-up' :
                      'fas fa-arrow-down']"></i>
        </span>
      </a>
    </div>
    <div class="message-body animated fadeIn"
         v-if="expanded">
      <figure class="image is-16by9">
        <img :src="level.image">
      </figure>
      <br>
      <i>{{ level.flavor.text }}</i>
      <div class="has-text-right">
        <i>-- {{ level.flavor.author }}</i>
      </div>
      <br>
      {{ level.text }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'ccLevel',
  props: {
    index: { required: true },
    level: { required: true },
  },
  data() {
    return {
      expanded: false,
      shake: '',
    };
  },
  methods: {
    open() {
      if (this.level.locked) {
        this.shake = 'shake';
        setTimeout(() => {
          this.shake = '';
        }, 500);
      } else {
        this.expanded = !this.expanded;
      }
    },
  },
};
</script>

<style scoped>

</style>
