import Api from './api';

export default {
  fetchLevels() {
    return Api().get('levels');
  },
};
