export const BEGIN = 'BEGIN';
export const PLAY = 'PLAY';

export const NB_ITEMS_TO_GUESS = 5;

export const COLORS = [
  'blue',
  'red',
  'orange',
  'green',
  'purple',
  'yellow',
  'pink',
  'cyan',
];

export const RESET_STATE_GAMEBOARD = {
  colorsToGuess: [],
  userCurrentTry: [],
  userOlderTry: [],
  helpIndications: [],
  isWin: false,
};

export const CORRECT_COLOR = 'correctColor';
export const CORRECT_PLACEMENT = 'correctPlacement';
