import { ActionTypes } from "../constants/action-types";

const initialState = {
  cartProducts: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_CART:
      if (state.cartProducts.some((item) => item.id === payload.id)) {
        alert("이미 장바구니에 담긴 상품입니다.");
        return state;
      } else {
        localStorage.setItem(
          "cartProducts",
          JSON.stringify([...state.cartProducts, payload])
        );
        return { cartProducts: [...state.cartProducts, payload] };
      }
    default:
      return state;
  }
};
