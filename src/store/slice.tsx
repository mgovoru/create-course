import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../types';

const initialState = {
  formData: {
    name: '',
    email: '',
  },
};

const saveSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
    update: (state, action: PayloadAction<Partial<FormData>>) => {
      const { name, email } = action.payload;
			state.formData.name = name as string;
			state.formData.email = email as string;
    }
    }
})

export const { save } = saveSlice.actions;

export default saveSlice.reducer;
