import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: null,
}

export const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    
    loadTv: (state, action) => {
      state.information = action.payload;
    },
    removeTv: (state, action) => {
      state.information = null;
    },



  },
});

export const { loadTv, removeTv } = tvSlice.actions;

export default tvSlice.reducer;