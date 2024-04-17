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
    thero(state) {
      state.value = 0;
    },
  },
});

export const { inc, dec, thero } = counterSlice.actions;

export default counterSlice.reducer;
