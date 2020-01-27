import request from 'axios';

/*
  About actions.js
  The actions used by vuex in order to communicate with the server. I am using
  axios as our promise based HTTP client of choice. One should only commit
  changes to the client side vuex store when the server sends a response of 200.
  Never update the vuex store without using the commit function.
*/

export const getLicenses = function (commit) {
  return request.get('/api/licenses').then((response) => {
    if (response.statusText === 'OK') {
      commit('LICENSES_LIST', response.data);
    }
  }).catch((error) => {
    console.log(error);
  });
};

export const selectLicense = function ({ commit, state }, license) {
  commit('SELECT_LICENSE', license);
};

export const updateQuatity = function ({ commit, state }, quantity) {
  commit('UPDATE_QUANTITY', quantity);
};
