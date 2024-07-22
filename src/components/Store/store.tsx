import { configureStore } from '@reduxjs/toolkit';
import saveReducer from './slice';

const store = configureStore({
	reducer: {
		card: saveReducer
	},
});
export default store;
