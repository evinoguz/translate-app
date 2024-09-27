import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";
const initialState = {
  isLoading: false,
  isError: null,
  answer: "",
};
const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setUpdateText: (state, action) => {
      state.answer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
      state.answer = "";
    }),
      builder.addCase(translateText.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      }),
      builder.addCase(translateText.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.answer = action.payload.translatedText;
      });
  },
});
export const { setUpdateText } = translateSlice.actions;
export default translateSlice.reducer;
