<template>
  <div class="container animated fadeIn">
    <div class="notification is-primary">
      <p class="title is-4">
        Login
      </p>
      <div class="columns bottom-margin">
        <div class="column is-3"></div>
        <div class="column">
          <div class="notification is-danger"
               v-if="error">
            Error in username/password. Check your spelling and try again.
          </div>
          <div class="field">
            <label class="label has-text-light">Username</label>
            <div class="control has-icons-left">
              <input class="input is-rounded has-background-dark has-text-light" :class="status.usernameColor" type="text" @keyup="checkStatus" @keypress="enterPress" v-model="username">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <p class="help" :class="status.usernameColor">{{ status.usernameText }}</p>
            </div>
          </div>
          <div class="field">
            <label class="label has-text-light">Password</label>
            <div class="control has-icons-left">
              <input class="input is-rounded has-background-dark has-text-light" :class="status.passwordColor" type="password" @keyup="checkStatus" @keypress="enterPress" v-model="password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
              <p class="help" :class="status.passwordColor">{{ status.passwordText }}</p>
            </div>
          </div>
          <div class="field is-grouped is-grouped-right">
            <div class="control">
              <button class="button is-link is-rounded"
                      @click="register">Register</button>
            </div>
            <div class="control">
              <button class="button is-link is-rounded"
                      @click="submit">Login</button>
            </div>
          </div>
        </div>
        <div class="column is-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-async-in-computed-properties */

import UserApi from '../../services/users';

export default {
  name: 'ccRegister',
  data() {
    return {
      username: '',
      password: '',
      usernameEntered: false,
      passwordEntered: false,
      status: {
        usernameColor: '',
        usernameText: '',
      },
      error: false,
    };
  },
  computed: {
    passwordHash() {
      return this.$sha(this.password)
        .toString();
    },
  },
  methods: {
    async checkStatus() {
      let statusIsGood = true;
      this.passwordEntered = this.passwordEntered || this.password.length > 0;
      this.usernameEntered = this.usernameEntered || this.username.length > 0;
      let password = {};
      if (this.password.length > 0) {
        password = {
          color: 'is-success',
          text: '',
        };
      } else if (this.passwordEntered) {
        password = {
          color: 'is-danger',
          text: 'Password cannot be empty',
        };
        statusIsGood = false;
      } else {
        password = {
          color: '',
          text: '',
        };
        statusIsGood = false;
      }
      if (this.username === '') {
        if (this.usernameEntered) {
          this.status = {
            usernameColor: 'is-danger',
            passwordColor: password.color,
            usernameText: 'Username cannot be empty',
            passwordText: password.text,
          };
          statusIsGood = false;
        } else {
          this.status = {
            usernameColor: '',
            passwordColor: password.color,
            usernameText: '',
            passwordText: password.text,
          };
          statusIsGood = false;
        }
      } else {
        this.status = {
          usernameColor: 'is-success',
          passwordColor: password.color,
          usernameText: '',
          passwordText: password.text,
        };
      }
      return statusIsGood;
    },
    async submit() {
      const statusIsGood = await this.checkStatus();
      if (!statusIsGood) {
        return;
      }
      const response = await UserApi.login(this.username, this.passwordHash);
      if (response.data.status === 'OK') {
        this.$store.dispatch({
          type: 'global_information/setUserInfo',
          userInfo: {
            username: this.username,
            password: this.passwordHash,
          },
        })
          .then(() => {
            this.$router.replace({
              path: '/user/info',
            });
          });
      } else {
        this.error = true;
      }
    },
    register() {
      this.$router.replace({
        path: '/user/register',
      });
    },
    enterPress(e) {
      if (e.keyCode === 13) {
        this.submit();
      }
    },
  },
};
</script>

<style scoped>
  .bottom-margin {
    margin-bottom: 15px;
  }
</style>
