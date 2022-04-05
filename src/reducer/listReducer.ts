import { createAction, createReducer, Reducer } from '@reduxjs/toolkit';
import fruitInitialState from '../data/fruitInitialState.json';
import { SortFunction } from '../data/sort';
import { Fruit } from '../type/fruit';

export type FruitState = {
  list: Fruit[];
};

const initialState: FruitState = {
  list: fruitInitialState.list,
};

export const sort = createAction<SortFunction>('fruit/sort');
export const addFilter = createAction('fruit/addFilter');
export const removeFilter = createAction('fruit/removeFilter');
export const resetFilter = createAction('fruit/resetFilter');

export const fruitReducer: Reducer<FruitState> = createReducer(
  initialState,
  (builder) =>
    builder
      .addCase(resetFilter, () => ({ ...initialState }))
      .addCase(sort, (state, { payload }) => {
        return {
          ...state,
          list: payload(state.list),
        };
      })
);
