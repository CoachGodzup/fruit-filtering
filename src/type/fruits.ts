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

export type fruitEmoji = typeof availableFruits[number];

export type Fruit = {
  name: string;
  emoji: fruitEmoji;
  isTrueFruit: boolean;
  water: number;
  kcal: number;
};
