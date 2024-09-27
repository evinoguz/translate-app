import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk("languages/getLanguages", async () => {
  const res = await api.get("/getLanguages");
  return res.data.data.languages;
});

export const translateText = createAsyncThunk("translate", async (payload) => {
  const params = new FormData();
  params.append("source_language", payload.sourceLang.value);
  params.append("target_language", payload.targetLang.value);
  params.append("text", payload.text);
  const res = await api.post("/translate", params);
  return res.data.data;
});
