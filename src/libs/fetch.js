const BASE_URL = 'http://127.0.0.1:5000/';
 

async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
 
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
 
  return data;
}
 
const api = {
  users: {
    list() {
      /* throw new Error('Not Found') */
      return callApi('/all/');
    },
    create(transactions) {
      return callApi(`/new/`, {
        method: 'POST',
        body: JSON.stringify(transactions),
      });
    },
    read(transactionsId) {
      return callApi(`/_id:${transactionsId}/`);
    },
    update(transactionsId, updates) {
      return callApi(`/_id:${transactionsId}/`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(transactionsId) {
      return callApi(`/_id:${transactionsId}/`, {
        method: 'DELETE',
      });
    },
  },
};
 
export default api;