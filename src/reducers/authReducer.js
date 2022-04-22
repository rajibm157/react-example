import Action from "../utils/ActionsTypes";

const authReducer = (
  state = {
    user: {},
    isLoggedIn: false,
    logInChecked: false,
    error: {},
  },
  action
) => {
  switch (action.type) {
    case Action.CHECK_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
        logInChecked: true,
      };
    case Action.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case Action.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    case Action.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
