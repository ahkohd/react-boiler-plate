import store from "redux/store";

/**
 * A method to check if a request is loading.
 * @param {string} requestName Name of request.
 * @returns {boolean} `True` if the request is loading otherwise `False`.
 */

const isLoading = requestName => {
  return store.getState().loadingRequests.includes(requestName);
};

export default isLoading;
