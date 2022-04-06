const availableFruits = [
  '🍎',
  '🍌',
  '🥝',
  '🍇',
  '🍊',
  '🍍',
  '🥑',
  '🫐',
  '🍓',
  '🌰',
  '🌶️',
  '🍉',
  '🍋',
  '🍒',
  '🍑',
  '🍐',
];

export type fruit = typeof availableFruits[number];

export type Fruit = {
  name: string;
  emoji: fruit;
  isTrueFruit: boolean;
  canBeEatenRaw: boolean;
  kcal: number;
  water: number;
  kJ: number;
};
