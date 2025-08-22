import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState, 
  reducers: {
    loadcart: (state, action) => {
      state.product = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { loadcart } = productSlice.actions;
