import { START_LOADING, DONE_LOADING } from "../types";
import lodash from "lodash";

const initialState = {
  loadingRequests: [],
};

const loadingReducer = (state = initialState, action) => {
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
  if (listOfLoadingRequest.includes(requestName)) return listOfLoadingRequest;
  return lodash.remove(
    [...listOfLoadingRequest],
    requestNameInList => requestNameInList == requestName
  );
};

export default loadingReducer;
