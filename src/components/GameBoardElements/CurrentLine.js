import React from 'react';
import PropTypes from 'prop-types';
import { NB_ITEMS_TO_GUESS } from '../../utils/constantes';

import {
  ColorItem,
  CurrentColorsBtn,
  Line,
  CurrentColor,
} from '../gameBoardStyle';

const CurrentLine = ({
  userCurrentTry,
  resetUserCurrentTry,
  validateColors,
  isWin,
}) => {
  const currentChosenColors = userCurrentTry.map((color, index) => (
    <ColorItem key={index} color={color} />
  ));
  const currentColorsBtn = (
    <CurrentColorsBtn>
      <button onClick={resetUserCurrentTry}>Reset line</button>
      <button
        onClick={validateColors}
        disabled={userCurrentTry.length !== NB_ITEMS_TO_GUESS}
      >
        Try
      </button>
    </CurrentColorsBtn>
  );
  return (
    !isWin && (
      <CurrentColor>
        <Line>{currentChosenColors}</Line>
        {currentColorsBtn}
      </CurrentColor>
    )
  );
};

CurrentLine.propTypes = {
  userCurrentTry: PropTypes.array.isRequired,
  resetUserCurrentTry: PropTypes.func.isRequired,
  validateColors: PropTypes.func.isRequired,
  isWin: PropTypes.bool.isRequired,
};

export default CurrentLine;
