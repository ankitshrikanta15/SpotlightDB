import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: null,
}

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    
    loadPerson: (state, action) => {
      state.information = action.payload;
    },
    removePerson: (state, action) => {
      state.information = null;
    },



  },
});

export const { loadPerson, removePerson } = personSlice.actions;

export default personSlice.reducer;