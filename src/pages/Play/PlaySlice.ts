import { createSlice } from '@reduxjs/toolkit';

interface PlayState {
  isGameActive: boolean;
}

const initialState: PlayState = { isGameActive: false };

export const playSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    enableGame: (state: PlayState) => {
      state.isGameActive = true;
    },
    disableGame: (state: PlayState) => {
      state.isGameActive = false;
    },
  },
});

export const { enableGame, disableGame } = playSlice.actions;

export default playSlice.reducer;
