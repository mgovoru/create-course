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
		},
		removeAll: (state) => {
			state.value.length = 0
		},
	}
});

export const { save, remove, toggleChecked, removeAll } = saveSlice.actions

export default saveSlice.reducer;
