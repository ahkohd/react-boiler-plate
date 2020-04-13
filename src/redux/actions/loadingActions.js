import { _startLoading, _doneLoading } from "./creators/loading";

export const startLoading = (dispatch, requestName) =>
  dispatch(_startLoading(requestName));

export const doneLoading = (dispatch, requestName) =>
  dispatch(_doneLoading(requestName));
