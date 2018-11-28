<template>
  <div class="container has-text-centered animated fadeInDown">
    <div class="notification"
         :class="color">
      <p class="title is-1">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ccHeader',
  computed: {
    state() {
      return this.$store.state.theme_change.currentState;
    },
    title() {
      switch (this.state) {
        default:
          return 'Waterdeep: Keys of the Mad Mage';
        case 'skullport':
          return 'GLORY TO SKULLPORT! GLORY TO LORD MONDAY!';
      }
    },
    color() {
      switch (this.state) {
        default:
          return 'is-primary';
        case 'skullport':
          return 'is-danger skullport has-text-warning';
      }
    },
  },
};
</script>

<style scoped>
  .container {
    margin-top: 30px;
  }
  .skullport {
    font-family: 'Righteous', cursive;
  }
</style>
