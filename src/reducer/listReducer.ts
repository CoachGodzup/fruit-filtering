import { createAction, createReducer, Reducer } from '@reduxjs/toolkit';
import fruitInitialState from '../data/fruitInitialState.json';
import { SortFunction } from '../data/sort';
import { Fruit } from '../type/fruit';
import { AvailableFilters, FilterState } from './filterReducer';

export type FruitState = {
  list: Fruit[];
};

const initialState: FruitState = {
  list: fruitInitialState.list,
};

export const sort = createAction<SortFunction>('fruit/sort');
export const filter = createAction<FilterState>('fruit/filter');

export const newfilter = createAction<FilterState>('fruit/newfilter');

const availableFilters: AvailableFilters = {
  isTrueFruit: (elm, value) => {
    const fn = value.includes(elm.isTrueFruit);
    console.log('@@@@@ - filter', elm, value, fn);
    return fn;
  },
  canBeEatenRaw: (elm, value) => {
    return value.includes(elm.canBeEatenRaw);
  },
};

export const fruitReducer: Reducer<FruitState> = createReducer(
  initialState,
  (builder) =>
    builder
      .addCase(sort, (state, { payload }) => ({
        ...state,
        list: payload(state.list),
      }))
      .addCase(newfilter, (state, { payload }) => {
        console.log('@@@@ newFilterReducer');
        let newListState = initialState.list;
        Object.entries(payload).forEach(([key, value]) => {
          newListState = newListState.filter((elm) =>
            availableFilters[key as keyof AvailableFilters](elm, value)
          );
        });

        console.log('@@@@ filtered', newListState);

        return {
          ...state,
          list: newListState,
        };
      })

      .addCase(filter, (state, { payload }) => {
        /*
          passi un array di funzioni filtro, come nel sort
          ti cicli il payload e le applichi

          f(x, y)

          g(P) => f(x, P) 

          f(x) 

          mul(x, y)
          double(x) => mul(x, 2)


          payload = {
            (payload2) => (fruit) => payload2.isTrueFruit.includes(fruit.isTrueFruit)), [false, true]
            (payload2) => (fruit) => payload2.canBeEatenRaw.includes(fruit.canBeEatenRaw), [true]
          }


          initialState.list.filter(payload[0](payload))

        */

        const newList = initialState.list
          .filter((fruit) => payload.isTrueFruit.includes(fruit.isTrueFruit))
          .filter((fruit) =>
            payload.canBeEatenRaw.includes(fruit.canBeEatenRaw)
          );
        return {
          ...state,
          list: newList,
        };
      })
);
