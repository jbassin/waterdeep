/* eslint-disable no-param-reassign */
const state = {
  currentState: 'normal',
};

const mutations = {
  SET_STATE: (store, payload) => {
    store.currentState = payload.state;
  },
};

const actions = {
  setState: (context, payload) => {
    context.commit({
      type: 'SET_STATE',
      state: payload.state,
    });
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
