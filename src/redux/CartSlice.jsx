

import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "Card",
  initialState: {
    quantities: {}, // Use an object to store quantities for each card
  },
  reducers: {
    savealldata: (state, action) => {
      return action.payload;
    },
    increment: (state, action) => {
      let { id } = action.payload;
      // Increment the quantity for the specific card id
      state.quantities[id] = (state.quantities[id] || 0) + 1;
    },
    decrement: (state, action) => {
      let { id } = action.payload;
      // Decrement the quantity for the specific card id
      if (state.quantities[id] && state.quantities[id] > 0) {
        state.quantities[id] -= 1;
      }
    },
  },
});

export const { savealldata, increment, decrement } = CartSlice.actions;
export default CartSlice.reducer;