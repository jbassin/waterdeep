import Api from './api';

export default {
  fetchFactions() {
    return Api().get('factions');
  },
};
