import { createAction, createReducer, Reducer } from '@reduxjs/toolkit';
import { Fruit } from '../type/fruit';

export type FilterState = {
  isTrueFruit: boolean[];
  canBeEatenRaw: boolean[];
};

export interface AvailableFilters
  extends Record<
    keyof FilterState,
    (list: Fruit, filterValue: boolean[]) => boolean
  > {
  isTrueFruit: (list: Fruit, filterValue: boolean[]) => boolean;
  canBeEatenRaw: (list: Fruit, filterValue: boolean[]) => boolean;
}

export type FilterName = keyof FilterState;

export type CheckboxAction = {
  name: FilterName;
  value: boolean;
  checked: boolean;
};

const initialState: FilterState = {
  isTrueFruit: [false, true],
  canBeEatenRaw: [false, true],
};

export const changeCheckboxFilter =
  createAction<CheckboxAction>('filter/change');
export const resetFilter = createAction('filter/reset');

const removeDuplicates = <T>(array: T[]): T[] => {
  return array.filter((elm, index, array) => array.indexOf(elm) === index);
};

const changeFilter = <T>(filterArray: T[], value: T, checked: boolean): T[] => {
  return checked
    ? removeDuplicates([...filterArray, value])
    : filterArray.filter((elm) => elm !== value);
};

export const filterReducer: Reducer<FilterState> = createReducer(
  initialState,
  (builder) =>
    builder
      .addCase(resetFilter, () => ({ ...initialState }))
      .addCase(changeCheckboxFilter, (state, { payload }) => {
        const output = {
          ...state,
          [payload.name]: changeFilter(
            state[payload.name],
            payload.value,
            payload.checked
          ),
        };
        return output;
      })
);

/*
export const setFilter = createAction<FilterName, BooleanInclusive>(
  'filter/change'
);

export const filterReducer: Reducer<FilterState> = createReducer(
  initialState,
  (builder) => builder.addCase(setFilter, (state, { payload }) => ({...state, payload[0]}))
);
*/

/* TODO
  FAI UNA POLICY DI FILTRAGGIO BASATA SU FILTRI COSTANTI, PARAMETRI VARIABILI

  TESTA SE VA

  AUTOSUBMIT
*/
