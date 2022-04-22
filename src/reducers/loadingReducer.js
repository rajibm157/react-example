import Action from "../utils/ActionsTypes";

const loadingReducer = (
  state = {
    isLoading: true,
  },
  action
) => {
  switch (action.type) {
    case Action.SHOW_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Action.CHECK_LOGIN:
      return {
        ...state,
        isLoading: false,
      };
    case Action.LOGIN:
      return {
        ...state,
        isLoading: false,
      };
    case Action.SIGNUP:
      return {
        ...state,
        isLoading: false,
      };
    case Action.LOGOUT:
      return {
        ...state,
        isLoading: false,
      };
    case Action.ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
