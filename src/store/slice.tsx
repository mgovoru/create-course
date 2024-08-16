import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormD, FormData } from '../types';

const initialState: FormD = {
  forms: []
//   formData: {
//     name: '',
//     age:0,
//     email: '',
//     password: '',
//     passwordR: '',
//     gender: '',
//     accept: false,
//     upload: {name:'', size: 0},
//     country: '',
//   },
 };

const saveSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // update: (state, action: PayloadAction<Partial<FormData>>) => {
    //   const {
    //     name,
    //     age,
    //     email,
    //     password,
    //     passwordR,
    //     gender,
    //     accept,
    //     upload,
    //     country,
    //   } = action.payload;
    //   if (name !== undefined) state.formData.name = name;
    //   if (age !== undefined) state.formData.age = age;
    //   if (email !== undefined) state.formData.email = email;
    //   if (password !== undefined) state.formData.password = password;
    //   if (passwordR !== undefined) state.formData.passwordR = passwordR;
    //   if (gender !== undefined) state.formData.gender = gender;
    //   if (accept !== undefined) state.formData.accept = accept;
    //   if (upload !== undefined) state.formData.upload = upload;
    //   if (country !== undefined) state.formData.country = country;
    // }
    addForm: (state, action: PayloadAction<FormData>) => {
      state.forms.push(action.payload);
    }
  }
})

export const { addForm } = saveSlice.actions;

export default saveSlice.reducer;
