import { Fruit } from '../type/fruit';

export type SortFunction = (oldState: Fruit[]) => Fruit[];

export const sortByKcal: SortFunction = (list: Fruit[]): Fruit[] => {
  return [...list].sort((a, b) => (a.kcal < b.kcal ? 1 : -1));
};

export const sortByWater: SortFunction = (list: Fruit[]): Fruit[] => {
  return [...list].sort((a, b) => (a.water < b.water ? 1 : -1));
};

export const sortAlphabetically: SortFunction = (list: Fruit[]): Fruit[] => {
  return [...list].sort((a, b) => (a.name < b.name ? 1 : -1));
};

export const sortByEmoji: SortFunction = (list: Fruit[]): Fruit[] => {
  return [...list].sort((a, b) => (a.emoji < b.emoji ? 1 : -1));
};

export const reverseSort: SortFunction = (list: Fruit[]): Fruit[] => {
  return [...list].reverse();
};
