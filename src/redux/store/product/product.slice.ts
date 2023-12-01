import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../api/fakeStoreApi";

export type TRating = {
  rate: number;
  count: number;
};
export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TRating;
  quantity: number;
  total: number;
};

const allProductsString = localStorage.getItem("allProducts");

const initialState: TProduct[] = allProductsString
  ? JSON.parse(allProductsString)
  : [];

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    const response = await axios.get("/products");
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      localStorage.setItem("allProducts", JSON.stringify(action.payload));
      state.push(...action.payload);
    });
  },
});

export default productSlice.reducer;
