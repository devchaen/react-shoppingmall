import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  cartProducts: cartReducer,
  user: userReducer,
});

export default reducers;
