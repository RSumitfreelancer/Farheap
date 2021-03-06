import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const defaultState = {
  licenses: [],
  quantity: 1,
  selectedLicense: { },
};

const inBrowser = typeof window !== 'undefined';

const state = (inBrowser && window.__INITIAL_STATE__) || defaultState;

const mutations = {
  LICENSES_LIST: (storeState, licenses) => {
    storeState.licenses = licenses;
  },
  SELECT_LICENSE: (storeState, license) => {
    storeState.selectedLicense = license;
    storeState.quantity = 1;
  },
  UPDATE_QUANTITY: (storeState, quantity) => {
    storeState.quantity = quantity;
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
