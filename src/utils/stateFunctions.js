import { getHelpIndications } from './helpFunctions';
import { NB_ITEMS_TO_GUESS, COLORS } from './constantes';

export const generateColorsToGuess = (colors = []) => {
  const newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  if (colors.length === NB_ITEMS_TO_GUESS - 1) {
    return [...colors, newColor];
  }
  return generateColorsToGuess([...colors, newColor]);
};

export const addColor = color => ({ userCurrentTry }) => ({
  userCurrentTry: [...userCurrentTry, color],
});

export const addInOlderTry = ({ userCurrentTry, userOlderTry }) => ({
  userOlderTry: [...userOlderTry, userCurrentTry],
});

export const addHelp = ({
  userCurrentTry,
  colorsToGuess,
  helpIndications,
}) => ({
  helpIndications: [
    ...helpIndications,
    getHelpIndications(userCurrentTry, colorsToGuess),
  ],
});
