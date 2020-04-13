import { START_LOADING, DONE_LOADING } from '../types';

export const loadingInitialState = {
  loadingRequests: [],
};

const loadingReducer = (state = loadingInitialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loadingRequests: addRequest(action.requestName, state.loadingRequests),
      };
    case DONE_LOADING:
      return {
        ...state,
        loadingRequests: removeRequest(
          action.requestName,
          state.loadingRequests
        ),
      };
    default:
      return state;
  }
};

const addRequest = (requestName, listOfLoadingRequest) => {
  if (listOfLoadingRequest.includes(requestName)) return listOfLoadingRequest;
  return [...listOfLoadingRequest, requestName];
};

const removeRequest = (requestName, listOfLoadingRequest) => {
  return listOfLoadingRequest.filter(
    requestNameInList => requestNameInList !== requestName
  );
};

export default loadingReducer;
