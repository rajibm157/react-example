import { push } from "connected-react-router";
import { toastr } from "react-redux-toastr";
import Action from "../utils/ActionsTypes";
//import * as API from "../api";

export const showLoading = () => {
  return {
    type: Action.SHOW_LOADING,
    payload: true,
  };
};

export const checkLogin = () => {
  return async (dispatch) => {
    let token = localStorage.getItem("token");
    if (token != null) {
      dispatch({
        type: Action.CHECK_LOGIN,
        payload: true,
      });
      toastr.success("Success", "You have success fully login");
    } else {
      dispatch({
        type: Action.CHECK_LOGIN,
        payload: false,
      });
      toastr.warning("Warning", "Please login first");
    }
  };
};

export const login = (params) => {
  return async (dispatch) => {
    //let result = await API.signIn(params);
    if (params.email) {
      localStorage.setItem("token", params.email);
      dispatch({
        type: Action.LOGIN,
        payload: params,
      });
      toastr.success("Success", "You have success fully login");
      dispatch(push("/"));
    } else {
      dispatch({
        type: Action.ERROR,
        payload: "Login Error",
      });
    }
  };
};

export const signup = (params) => {
  return async (dispatch) => {
    let result = params.email;
    if (result != null) {
      dispatch({
        type: Action.SIGNUP,
        payload: result,
      });
      dispatch(push("/login"));
    } else {
      dispatch({
        type: Action.ERROR,
        payload: "signup error",
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
      type: Action.LOGOUT,
    });
    dispatch(push("/login"));
  };
};
