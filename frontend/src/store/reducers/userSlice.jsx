import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState, 
  reducers: {
    loadcart: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { loadcart } = userSlice.actions;
