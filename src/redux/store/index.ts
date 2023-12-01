import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/product.slice";
import userReducer from "./user/user.slice";
import cartReducer from "./cart/cart.slice";

const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
    cartProducts: cartReducer,
  },
});

export default store;
