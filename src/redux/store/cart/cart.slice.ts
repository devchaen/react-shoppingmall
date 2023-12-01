import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../product/product.slice";

const cartString = localStorage.getItem("cartProducts");
const initialState: TProduct[] = cartString ? JSON.parse(cartString) : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      if (state.some((item) => item.id === payload.id)) {
        alert("이미 장바구니에 담긴 상품입니다.");
      } else {
        state.push(payload);
        localStorage.setItem("cartProducts", JSON.stringify(state));
      }
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
