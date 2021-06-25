import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyDetails: [],
  setPopup: false,
  modalName: "",
  companyId: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
   register: (state, action) => {
      state.companyDetails.push(action.payload);
    },
    popup: (state, action) => {
      state.setPopup = !state.setPopup;
      state.modalName = action.payload;
    },
    deletename: (state, action) => {
      const deleteName = action.payload.companyName;
      const newCompanyDetails = state.companyDetails.filter(
        (name) => name.companyName != deleteName
      );
      return { ...state, companyDetails: newCompanyDetails };
    },
    companyname: (state, action) => {
      state.companyId = action.payload.companyName;
    },
  },
});

export const {register, popup, deletename, companyname } = loginSlice.actions;
export default loginSlice.reducer;
