import React from 'react';
import PropTypes from 'prop-types';
import { ColorItem, Line, HelpItem, LineOldColors } from '../gameBoardStyle';

const OlderChosenColors = ({ userOlderTry, helpIndications }) => {
  return userOlderTry.map((colors, index) => (
    <LineOldColors key={index}>
      <Line>
        {colors.map((color, index) => (
          <ColorItem key={index} color={color} />
        ))}
      </Line>
      <Line>
        {helpIndications[index].map(
          (state, index) => state && <HelpItem key={index} state={state} />
        )}
      </Line>
    </LineOldColors>
  ));
};

OlderChosenColors.propTypes = {
  userOlderTry: PropTypes.array.isRequired,
  helpIndications: PropTypes.array.isRequired,
};

export default OlderChosenColors;
