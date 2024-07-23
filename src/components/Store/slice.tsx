import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonPage, saveState } from '../../types';



const initialState: saveState = {
	value: [],
};

const saveSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		save: (state, action: PayloadAction<PersonPage>) => {
			state.value.push(action.payload)
		},
		remove: (state, action: PayloadAction<PersonPage>) => {
			state.value = state.value.filter(el => el.value.name !== action.payload.value.name)
		},
		toggleChecked(state) {
			state.value.forEach(el => {
				if (el.checked) {
					el.checked = !el.checked;
				}
			});
		}
	}
});

export const { save, remove, toggleChecked } = saveSlice.actions

export default saveSlice.reducer;
