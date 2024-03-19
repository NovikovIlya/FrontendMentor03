import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


export const getData = createAsyncThunk('get/getData', async (text:string) => {
  const { data } = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`);
  return data;
});
export type initalStateType = {
    shortUrls : string[],
    isLoad:boolean,
    isError:boolean
}
const initialState: initalStateType = {
  shortUrls: [],
  isLoad: true,
  isError: false,
};

export const sliceData = createSlice({
  name: 'sliceData',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
        
        state.isLoad = true;
        state.isError = false;
      });
      builder.addCase(getData.fulfilled, (state, action:PayloadAction<string, string>) => {
        state.shortUrls = [...state.shortUrls,action.payload]
        state.isLoad = false;
        state.isError = false;
      });
      builder.addCase(getData.rejected, (state) => {
      
        state.isLoad = false;
        state.isError = true;
      });
  },
});

export const {  } = sliceData.actions;
export default sliceData.reducer;