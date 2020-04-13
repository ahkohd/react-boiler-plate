import { combineReducers } from "redux";
import auth from "./authReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  auth,
  loadingReducer,
});
