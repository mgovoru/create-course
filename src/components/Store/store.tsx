import { configureStore } from '@reduxjs/toolkit'
import saveReducer from './slice'
import { heroesApi } from '../Api'

const store = configureStore({
  reducer: {
    card: saveReducer,
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heroesApi.middleware),
})

export default store
