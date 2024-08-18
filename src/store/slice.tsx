import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormD, FormValues } from '../types';

const initialState: FormD = {
  forms: [],
  countries: [
      'USA',
      'Canada',
      'Mexico',
      'Russia',
      'China',
      'India',
    ]
};

const saveSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action: PayloadAction<FormValues>) => {
      state.forms.push(action.payload);
    },
    setCountries(state, action) {
      state.countries.push(action.payload);
    },
  },
});

export const { addForm, setCountries } = saveSlice.actions;

export default saveSlice.reducer;
