<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Dungeons & Dashboards
          </p>
          <p class="subtitle">
            A Control Center for your Campaign
          </p>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <ccTab title="Campaign"/>
              <ccTab title="Bank"/>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import ccTab from './header-components/tab.vue';

export default {
  name: 'ccHeader',
  components: {
    ccTab,
  },
};
</script>

<style scoped>

</style>
