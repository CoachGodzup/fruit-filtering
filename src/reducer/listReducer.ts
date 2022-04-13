import { createAction, createReducer, Reducer } from '@reduxjs/toolkit';
import fruitInitialState from '../data/fruitInitialState.json';
import { SortFunction } from '../data/sort';
import { Fruit } from '../type/fruit';
import { FilterState } from './filterReducer';

export type FruitState = {
  list: Fruit[];
};

const initialState: FruitState = {
  list: fruitInitialState.list,
};

export const sort = createAction<SortFunction>('fruit/sort');
export const filter = createAction<FilterState>('fruit/filter');

export const fruitReducer: Reducer<FruitState> = createReducer(
  initialState,
  (builder) =>
    builder
      .addCase(sort, (state, { payload }) => ({
        ...state,
        list: payload(state.list),
      }))
      .addCase(filter, (state, { payload }) => {
        console.log('@@@ submit received! filtering...', payload);
        const newList = initialState.list
          .filter((fruit) => payload.isTrueFruit.includes(fruit.isTrueFruit))
          .filter((fruit) =>
            payload.canBeEatenRaw.includes(fruit.canBeEatenRaw)
          );
        /*
        const filterNames: (keyof FilterState)[] = Object.keys(
          payload
        ) as Array<keyof FilterState>;
        const filterFunctions = filterNames
          .map((name) => ({
            name,
            value: payload[name],
          }))
          .filter((elm) => elm.value.sort() !== [false, true]);

        const newList: Fruit[] = state.list.filter((fruit) =>
          filterFunctions.every((filter) =>
            filter.value.includes(fruit[filter.name])
          )
        );*/
        console.log('new list', newList);
        return {
          ...state,
          list: newList,
        };
      })
);
