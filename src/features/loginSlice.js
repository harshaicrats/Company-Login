import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyDetails: [],
  setPopup: false,
  modalName: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.companyDetails.push(action.payload);
    },
    popup: (state, action) => {
      state.setPopup = !state.setPopup;
      state.modalName = action.payload;
    },
  },
});

export const { login, popup } = loginSlice.actions;
export default loginSlice.reducer;
