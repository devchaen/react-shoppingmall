import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/product.slice";
import userReducer from "./user/user.slice";
import cartReducer from "./cart/cart.slice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
    cartProducts: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
