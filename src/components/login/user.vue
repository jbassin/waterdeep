<template>
  <ccRegister v-if="$route.params.state === 'register'"/>
  <ccLogin v-else-if="$route.params.state === 'login'"/>
  <ccInfo v-else-if="$route.params.state === 'info'"/>
</template>

<script>
import ccRegister from './register.vue';
import ccLogin from './login.vue';
import ccInfo from './info.vue';

export default {
  name: 'ccUser',
  components: {
    ccRegister, ccLogin, ccInfo,
  },
  computed: {
    userInfo() {
      return this.$store.state.global_information.userInfo;
    },
  },
  methods: {
    redirect() {
      if (this.$route.params.state === 'redirect') {
        let path = '/user/info';
        if (this.userInfo == null || this.userInfo.username === '') {
          path = '/user/login';
        }
        this.$router.replace({
          path,
        });
      }
    },
  },
  mounted() {
    this.redirect();
  },
  updated() {
    this.redirect();
  },
};
</script>

<style scoped>

</style>
