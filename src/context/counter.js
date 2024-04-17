import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 99,
  },
  reducers: {
    inc: (state, actions) => {
      state.value += actions.payload;
    },
    dec(state, actions) {
      state.value -= actions.payload;
    },
  },
});

export const { inc, dec } = counterSlice.actions;

export default counterSlice.reducer;
