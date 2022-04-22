import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as toastrReducer } from "react-redux-toastr";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    loading: loadingReducer,
    auth: authReducer,
    toastr: toastrReducer,
  });

export default createRootReducer;
