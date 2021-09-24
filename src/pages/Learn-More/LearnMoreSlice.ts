import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface LearnMoreState {
  searchValue: string;
}

const initialState: LearnMoreState = {
  searchValue: '',
};

export const learnMoreSlice = createSlice({
  name: 'learnMore',
  initialState,
  reducers: {
    clearValue: (state: LearnMoreState): void => {
      state.searchValue = '';
    },
    updateValue: (state: LearnMoreState, action: PayloadAction<string>): void => {
      state.searchValue = action.payload;
    },
  },
});

export const { clearValue, updateValue } = learnMoreSlice.actions;

export default learnMoreSlice.reducer;
