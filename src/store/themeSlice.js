import { createSlice } from '@reduxjs/toolkit';
/* eslint no-param-reassign: off */
export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light',
  },
  reducers: {
    toggleMode: (state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
      } else {
        state.mode = 'light';
      }
    },
    setMode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleMode, setMode } = themeSlice.actions;

export default themeSlice.reducer;
