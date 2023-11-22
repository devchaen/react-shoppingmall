import axios from "../../api/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get("/products");

  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};
