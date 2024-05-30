
import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CartSlice";
export default configureStore({
  reducer: {
    Card: CardReducer,
  },
});
