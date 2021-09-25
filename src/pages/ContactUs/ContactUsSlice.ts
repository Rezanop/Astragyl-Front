import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface ContactUsState {
  isFormActive: boolean;
  title: string;
  subject: string;
  email: string;
  name: string;
  content: string;
}

enum ContactUsFormProperty {
  title = 'title',
  subject = 'subject',
  email = 'email',
  name = 'name',
  content = 'content',
}

const initialState: ContactUsState = {
  isFormActive: false,
  title: '',
  subject: '',
  email: '',
  name: '',
  content: '',
};

export const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    resetForm: (state: ContactUsState) => {
      state = initialState;
    },
    sendForm: (state: ContactUsState) => {
      console.log('Send Email');
    },
    updateValue: (
      state: ContactUsState,
      action: PayloadAction<{ key: ContactUsFormProperty; value: string }>
    ) => {
      const propertyName = action.payload.key;
      if (state.hasOwnProperty(propertyName)) {
        const propertyValue = action.payload.value;
        state[propertyName] = propertyValue;
      }
    },
    enableForm: (state: ContactUsState) => {
      state.isFormActive = true;
    },
    disableForm: (state: ContactUsState) => {
      state.isFormActive = false;
    },
  },
});

export const { resetForm, sendForm, updateValue, enableForm, disableForm } = contactUsSlice.actions;

export const selectContactUsState = (state: RootState): ContactUsState => state.contactUs;

export default contactUsSlice.reducer;
