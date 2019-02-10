import {
  countColors,
  isMoreOccurrenceThatInSolution,
  getHelpIndications,
} from './helpFunctions';

import { CORRECT_COLOR, CORRECT_PLACEMENT } from './constantes';

test('countColors with ["blue", "red"] should equal {blue:1, red:1}', () => {
  expect(countColors(['blue', 'red'])).toEqual({ blue: 1, red: 1 });
});

test('countColors with ["blue", "blue","red"] should equal {blue:2, red:1}', () => {
  expect(countColors(['blue', 'blue', 'red'])).toEqual({
    blue: 2,
    red: 1,
  });
});

test('isMoreOccurrenceThatInSolution with ["blue"] and ["blue"] should be false', () => {
  expect(isMoreOccurrenceThatInSolution('blue', ['blue'], ['blue'])).toBeFalsy;
});

test('isMoreOccurrenceThatInSolution with blue, ["blue", "blue"] and ["blue", "red"] should be truth', () => {
  expect(
    isMoreOccurrenceThatInSolution('blue', ['blue', 'blue'], ['blue', 'red'])
  ).toBeTruthy;
});

test('getHelpIndications with ["blue", "red", "orange"] and ["blue", "red", "orange"] should equal ["p","p","p"]', () => {
  expect(
    getHelpIndications(['blue', 'red', 'orange'], ['blue', 'red', 'orange'])
  ).toEqual([CORRECT_PLACEMENT, CORRECT_PLACEMENT, CORRECT_PLACEMENT]);
});

test('getHelpIndications with ["blue", "red", "orange"] and ["orange", "blue", "red"] should equal ["c","c","c"]', () => {
  expect(
    getHelpIndications(['blue', 'red', 'orange'], ['orange', 'blue', 'red'])
  ).toEqual([CORRECT_COLOR, CORRECT_COLOR, CORRECT_COLOR]);
});

test('getHelpIndications with ["blue", "orange", "green"] and ["blue", "red", "orange"] should equal ["p","c",null]', () => {
  expect(
    getHelpIndications(['blue', 'orange', 'green'], ['blue', 'red', 'orange'])
  ).toEqual([CORRECT_PLACEMENT, CORRECT_COLOR, null]);
});
