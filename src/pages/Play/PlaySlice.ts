import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
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

export const selectPlayState = (state: RootState): PlayState => state.play;

export default playSlice.reducer;
