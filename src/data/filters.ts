import { Fruit } from '../type/fruit';

export type FilterFunction = (oldState: Fruit[]) => Fruit[];

const WATER_THRESHOLD = 85;

export const isTrueFruit: FilterFunction = (list: Fruit[]): Fruit[] => {
  return list.filter((elm) => elm.isTrueFruit);
};

export const isFalseFruit: FilterFunction = (list: Fruit[]): Fruit[] => {
  return list.filter((elm) => !elm.isTrueFruit);
};

export const canBeEatenRaw: FilterFunction = (list: Fruit[]): Fruit[] => {
  return list.filter((elm) => elm.canBeEatenRaw);
};

export const canNotBeEatenRaw: FilterFunction = (list: Fruit[]): Fruit[] => {
  return list.filter((elm) => !elm.canBeEatenRaw);
};

export const isRichInWater: FilterFunction = (list: Fruit[]): Fruit[] => {
  return list.filter((elm) => elm.water > WATER_THRESHOLD);
};
