import Api from './api';

export default {
  fetchEmployees() {
    return Api().get('tavern_employees');
  },
  fetchMoneyflows() {
    return Api().get('tavern_moneyflow');
  },
  fetchProspects() {
    return Api().get('tavern_prospects');
  },
};
