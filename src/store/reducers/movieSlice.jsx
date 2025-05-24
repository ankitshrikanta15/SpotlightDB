import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: null,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    
    loadMovie: (state, action) => {
      state.information = action.payload;
    },
    removeMovie: (state, action) => {
      state.information = null;
    },



  },
});

export const { loadMovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;