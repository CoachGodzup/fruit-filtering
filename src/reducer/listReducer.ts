import { createAction, createReducer, Reducer } from '@reduxjs/toolkit';
import fruitInitialState from '../data/fruitInitialState.json';
import {
  reverseSort,
  SortableProp,
  sortAlphabetically,
  sortByEmoji,
  sortByKcal,
  sortByWater,
  SortFunction,
} from '../data/sort';
import { Fruit } from '../type/fruit';
import { AvailableFilters, FilterState } from './filterReducer';

export type FruitState = {
  list: Fruit[];
};

const initialState: FruitState = {
  list: fruitInitialState.list,
};

export const sortBy = createAction<SortableProp>('fruit/sort');
export const filter = createAction<FilterState>('fruit/filter');

const availableFilters: AvailableFilters = {
  isTrueFruit: (elm, value) => {
    const fn = value.includes(elm.isTrueFruit);
    return fn;
  },
  canBeEatenRaw: (elm, value) => {
    return value.includes(elm.canBeEatenRaw);
  },
};

const sortByPropName = (prop: SortableProp): SortFunction => {
  switch (prop) {
    case 'kcal':
      return sortByKcal;
    case 'water':
      return sortByWater;
    case 'name':
      return sortAlphabetically;
    case 'emoji':
      return sortByEmoji;
    case 'reverse':
    default:
      return reverseSort;
  }
};

export const fruitReducer: Reducer<FruitState> = createReducer(
  initialState,
  (builder) =>
    builder
      .addCase(sortBy, (state, { payload }) => ({
        ...state,
        list: sortByPropName(payload)(state.list),
      }))
      .addCase(filter, (state, { payload }) => {
        let newListState = initialState.list;
        Object.entries(payload).forEach(([key, value]) => {
          newListState = newListState.filter((elm) =>
            availableFilters[key as keyof AvailableFilters](elm, value)
          );
        });
        return {
          ...state,
          list: newListState,
        };
      })
);
