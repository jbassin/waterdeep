import Api from './api';

export default {
  login(username, password) {
    return Api().get('login', {
      params: {
        username,
        password,
      },
    });
  },
  checkUsername(username) {
    return Api().get('user_check', {
      params: {
        username,
      },
    });
  },
  register(username, password) {
    return Api().post('register', {
      username,
      password,
    });
  },
};
