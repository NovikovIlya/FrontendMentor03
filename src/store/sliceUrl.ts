import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
  "get/getData",
  async (obj: { text: string; copyText: string }) => {
    const { data } = await axios.get(
      `https://tinyurl.com/api-create.php?url=${obj.text}`
    );
    return { text: data, copyText: obj.copyText };
  }
);
export type initalStateType = {
  shortUrls: any[];
  isLoad: boolean;
  isError: boolean;
  copyText: any[];
};
const initialState: initalStateType = {
  copyText: [],
  shortUrls: [],
  isLoad: true,
  isError: false,
};

export const sliceData = createSlice({
  name: "sliceData",
  initialState,
  reducers: {
    addCopyText: (state, action) => {
      state.copyText = [...state.copyText, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoad = true;
      state.isError = false;
    });
    builder.addCase(getData.fulfilled, (state, action: any) => {
      state.shortUrls = [
        { text: action.payload.text, copyText: action.payload.copyText },
        ...state.shortUrls,  
      ];
      state.isLoad = false;
      state.isError = false;
    });
    builder.addCase(getData.rejected, (state) => {
      state.isLoad = false;
      state.isError = true;
    });
  },
});

export const { addCopyText } = sliceData.actions;
export default sliceData.reducer;
