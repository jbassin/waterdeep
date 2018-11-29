/* eslint-disable no-param-reassign */
const state = {
  activeTab: 'tavern',
  userInfo: {
    username: '',
    password: '',
  },
};

const mutations = {
  SET_ACTIVE_TAB: (store, payload) => {
    store.activeTab = payload.tab;
  },
  SET_USER_INFO: (store, payload) => {
    store.userInfo.username = payload.userInfo.username;
    store.userInfo.password = payload.userInfo.password;
  },
};

const actions = {
  setActiveTab: (context, payload) => {
    context.commit({
      type: 'SET_ACTIVE_TAB',
      tab: payload.tab,
    });
  },
  setUserInfo: (context, payload) => {
    if (payload.userInfo === null) {
      payload.userInfo = {
        username: '',
        password: '',
      };
    }
    localStorage.setItem('userInfo', JSON.stringify(payload.userInfo));
    context.commit({
      type: 'SET_USER_INFO',
      userInfo: payload.userInfo,
    });
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
