import { CORRECT_COLOR, CORRECT_PLACEMENT } from './constantes';

export const countColors = colors =>
  colors.reduce(
    (result, color) =>
      result[color]
        ? { ...result, [color]: result[color] + 1 }
        : { ...result, [color]: 1 },
    {}
  );

export const isMoreOccurrenceThatInSolution = (color, userTry, solution) => {
  const userTryColors = countColors(userTry);
  const solutionColors = countColors(solution);
  return userTryColors[color] > solutionColors[color];
};

export const getHelpIndications = (userTry, solution) =>
  userTry.map((color, index) => {
    if (color === solution[index]) {
      return CORRECT_PLACEMENT;
    }
    if (
      solution.includes(color) &&
      !isMoreOccurrenceThatInSolution(color, userTry, solution)
    ) {
      return CORRECT_COLOR;
    }
    return null;
  });
