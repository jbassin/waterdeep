import Api from './api';

export default {
  fetchEntry(title) {
    return Api().get('entries', {
      params: {
        title,
      },
    });
  },
  fetchEntryList() {
    return Api().get('entry_list');
  },
};
