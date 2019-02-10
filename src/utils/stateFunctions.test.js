import { addColor, addInOlderTry, addHelp } from './stateFunctions';

import * as Help from './helpFunctions';

import { CORRECT_COLOR, CORRECT_PLACEMENT } from './constantes';
test('addColor', () => {
  expect(addColor('blue')({ userCurrentTry: ['red'] })).toEqual({
    userCurrentTry: ['red', 'blue'],
  });
});

test('addInOlderTry', () => {
  expect(
    addInOlderTry({
      userCurrentTry: ['blue'],
      userOlderTry: [['red'], ['orange']],
    })
  ).toEqual({ userOlderTry: [['red'], ['orange'], ['blue']] });
});

test('addHelp', () => {
  expect(
    addHelp({
      userCurrentTry: ['blue'],
      colorsToGuess: ['blue'],
      helpIndications: [],
    })
  ).toEqual({ helpIndications: [[CORRECT_PLACEMENT]] });
});

test('addHelp', () => {
  expect(
    addHelp({
      userCurrentTry: ['blue', 'red', 'green'],
      colorsToGuess: ['blue', 'orange', 'red'],
      helpIndications: [[CORRECT_PLACEMENT, CORRECT_PLACEMENT]],
    })
  ).toEqual({ helpIndications: [[CORRECT_PLACEMENT, CORRECT_PLACEMENT], [CORRECT_PLACEMENT, CORRECT_COLOR, null]] });
});

test('should getHelpIndications should be called when addHelp', () => {
  const helpSpy = jest.spyOn(Help, 'getHelpIndications');
  addHelp({
    userCurrentTry: ['blue'],
    colorsToGuess: ['blue'],
    helpIndications: [],
  });
  expect(helpSpy).toHaveBeenCalled();
});

test('should getHelpIndications should be called with correct params when addHelp', () => {
  const helpSpy = jest.spyOn(Help, 'getHelpIndications');
  addHelp({
    userCurrentTry: ['blue'],
    colorsToGuess: ['red'],
    helpIndications: [],
  });
  expect(helpSpy).toHaveBeenCalledWith(['blue'], ['red']);
  helpSpy.mockRestore();
});
