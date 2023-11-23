import { ActionTypes } from "../constants/action-types";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_SIGNUP:
      return [{ ...payload }];
    case ActionTypes.USER_LOGIN:
      localStorage.setItem("user", JSON.stringify(payload));
      return [{ ...payload }];
    case ActionTypes.USER_LOGOUT:
      localStorage.removeItem("user");
      return [];
    default:
      return state;
  }
};
