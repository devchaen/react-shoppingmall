import { ActionTypes } from "../constants/action-types";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_SIGNUP:
      console.log(payload);
      return [{ ...payload }];
    case ActionTypes.USER_LOGIN:
      return state;
    default:
      return state;
  }
};
