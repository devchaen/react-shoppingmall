import { ActionTypes } from "../constants/action-types";

export const addCart = (product) => {
  return {
    type: ActionTypes.ADD_CART,
    payload: product,
  };
};
