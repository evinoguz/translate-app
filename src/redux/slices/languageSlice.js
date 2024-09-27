import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions";
const initialState = {
  isLoading: false,
  isError: null,
  languages: [],
};
const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLanguages.pending, (state) => {
        state.isLoading = true;
    }),
    builder.addCase(getLanguages.rejected, (state, action) =>{
        state.isLoading = false;
        state.isError = action.error.message;
    }),
    builder.addCase(getLanguages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.languages = action.payload;
    })
  }
});

export default languageSlice.reducer;