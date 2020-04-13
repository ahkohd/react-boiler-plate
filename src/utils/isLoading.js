import store from '../redux/store';

/**
 * A method to check if a request is loading.
 * @param {string} requestName Name of request.
 * @param {Store} _store Redux store to read from.
 * @returns {boolean} `True` if the request is loading otherwise `False`.
 */

const isLoading = (requestName, _store = store) => {
  return _store.getState().loadingRequests.includes(requestName);
};

export default isLoading;
