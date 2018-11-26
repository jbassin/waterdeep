import Api from './api';

export default {
  fetchRecaps() {
    return Api().get('recaps');
  },
};
