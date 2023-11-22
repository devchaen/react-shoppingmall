import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: localStorage.getItem("allProducts")
    ? JSON.parse(localStorage.getItem("allProducts"))
    : [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      localStorage.setItem("allProducts", JSON.stringify(payload));
      return { ...state, products: payload };
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
