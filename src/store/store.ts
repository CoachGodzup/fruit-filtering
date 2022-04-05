import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { fruitReducer } from '../reducer/listReducer';

const rootReducer = combineReducers({
  fruit: fruitReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
