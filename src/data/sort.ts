import { Fruit } from '../type/fruit';

const sortByProp = <T>(a: T, b: T, prop: keyof T) => {
  return a[prop] === b[prop] ? 0 : a[prop] < b[prop] ? -1 : 1;
};

export type SortFunction = (oldState: Fruit[]) => Fruit[];

export const sortByKcal: SortFunction = (list: Fruit[]): Fruit[] => {
  return [...list].sort((a, b) => sortByProp(a, b, 'kcal'));
};

export const sortByWater: SortFunction = (list: Fruit[]): Fruit[] => {
  return [...list].sort((a, b) => sortByProp(a, b, 'water'));
};

export const sortAlphabetically: SortFunction = (list: Fruit[]): Fruit[] => {
  return [...list].sort((a, b) => sortByProp(a, b, 'name'));
};

export const sortByEmoji: SortFunction = (list: Fruit[]): Fruit[] => {
  return [...list].sort((a, b) => sortByProp(a, b, 'emoji'));
};

export const reverseSort: SortFunction = (list: Fruit[]): Fruit[] => {
  return [...list].reverse();
};
