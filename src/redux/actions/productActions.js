import axios from "../../api/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

// fetchProducts : axios request를 보내는 비동기 thunk 함수를 반환한다
export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get("/products");

  // Response가 오면 이를 Action으로 dispatch한다.
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};
