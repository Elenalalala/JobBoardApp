import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./counterSlice";

export default configureStore({
  reducer: {
    jobCollection: jobReducer,
  },
});
