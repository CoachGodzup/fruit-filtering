import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from '../reducer/filterReducer';
import { fruitReducer } from '../reducer/listReducer';

const rootReducer = combineReducers({
  fruit: fruitReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
