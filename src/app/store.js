import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice";

export const store = configureStore({
  reducer: {
    register: loginSlice,
    popup:loginSlice,
    deletename:loginSlice,
    companyname:loginSlice
  },
});
