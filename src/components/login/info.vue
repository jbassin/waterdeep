<template>
  <div class="container animated fadeIn">
    <div class="notification is-primary">
      <p class="title is-4">
        User Info
      </p>
      <div class="notification is-dark">
        <nav class="level">
          <div class="level-left">
            <div class="level-item subtitle is-5">
              Currently logged in as: {{ userInfo.username }}
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="field is-grouped is-grouped-right">
                <div class="control">
                  <button class="button is-link is-rounded"
                          @click="logout">Log Out</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ccInfo',
  methods: {
    logout() {
      this.$store.dispatch({
        type: 'global_information/setUserInfo',
        userInfo: {
          username: '',
          password: '',
        },
      })
        .then(() => {
          this.$router.replace({
            path: '/user/login',
          });
        });
    },
  },
  computed: {
    userInfo() {
      return this.$store.state.global_information.userInfo;
    },
  },
};
</script>

<style scoped>

</style>
