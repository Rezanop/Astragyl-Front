import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface HomeState {
  scrollPosition: string;
}

const initialState: HomeState = {
  scrollPosition: '',
};

const homeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    clearScrollPosition: (state: HomeState) => {
      state.scrollPosition = '';
    },
    updateScrollPosition: (state: HomeState, action: PayloadAction<string>) => {
      state.scrollPosition = action.payload;
    },
  },
});

export const { clearScrollPosition, updateScrollPosition } = homeSlice.actions;

export const selectHomeState = (state: RootState): HomeState => state.home;

export default homeSlice.reducer;
