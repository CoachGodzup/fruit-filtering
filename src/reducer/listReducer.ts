import { createAction, createReducer, Reducer } from '@reduxjs/toolkit';
import fruitInitialState from '../data/fruitInitialState.json';
import { SortFunction } from '../data/sort';
import { Fruit } from '../type/fruit';

export type FilterPayload = {
  name: keyof Fruit;
  value: (string | boolean)[];
};

export type FruitState = {
  list: Fruit[];
  filter: FilterPayload[];
};

const initialState: FruitState = {
  list: fruitInitialState.list,
  filter: [
    {
      name: 'isTrueFruit',
      value: [false, true],
    },
  ],
};

export const sort = createAction<SortFunction>('fruit/sort');

export const fruitReducer: Reducer<FruitState> = createReducer(
  initialState,
  (builder) =>
    builder.addCase(sort, (state, { payload }) => {
      return {
        ...state,
        list: payload(state.list),
      };
    })
);
