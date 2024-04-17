import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 99,
  },
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
  },
});

export const { inc } = counterSlice.actions;

export default counterSlice.reducer;
