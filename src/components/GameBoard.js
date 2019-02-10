import React, { PureComponent } from 'react';

import _ from 'lodash';

import OlderChosenColors from './GameBoardElements/OlderChoosenColors';
import CurrentLine from './GameBoardElements/CurrentLine';

import {
  NB_ITEMS_TO_GUESS,
  COLORS,
  RESET_STATE_GAMEBOARD,
} from '../utils/constantes';

import { Board, ColorBtn } from './gameBoardStyle';

import {
  generateColorsToGuess,
  addColor,
  addInOlderTry,
  addHelp,
} from '../utils/stateFunctions';

export default class GameBoard extends PureComponent {
  state = RESET_STATE_GAMEBOARD;

  componentDidMount() {
    this.getColorsToGuess();
  }

  getColorsToGuess = () => {
    this.setState({
      colorsToGuess: generateColorsToGuess(),
    });
  };

  chooseColor = color => {
    if (this.state.userCurrentTry.length < NB_ITEMS_TO_GUESS) {
      this.setState(addColor(color));
    }
  };

  validateColors = () => {
    if (this.state.userCurrentTry.length === NB_ITEMS_TO_GUESS) {
      if (this.isWin()) {
        this.setState({
          isWin: true,
        });
      }
      this.setState(addHelp);
      this.setState(addInOlderTry, this.resetUserCurrentTry);
    }
  };

  isWin = () => {
    const { userCurrentTry, colorsToGuess } = this.state;
    return _.isEqual(userCurrentTry, colorsToGuess);
  };

  resetUserCurrentTry = () => {
    this.setState({
      userCurrentTry: [],
    });
  };

  playAgain = () => {
    this.setState(RESET_STATE_GAMEBOARD, this.getColorsToGuess);
  };

  render() {
    const { userCurrentTry, userOlderTry, helpIndications, isWin } = this.state;

    const colorsBtn = COLORS.map(color => (
      <ColorBtn
        key={color}
        onClick={this.chooseColor.bind(this, color)}
        color={color}
      />
    ));

    const winStateOrButtons = !isWin ? (
      colorsBtn
    ) : (
      <div>
        <p>You win !</p>
        <button onClick={this.playAgain}>Play again</button>
      </div>
    );

    return (
      <div>
        <Board>
          <div>
            <OlderChosenColors
              userOlderTry={userOlderTry}
              helpIndications={helpIndications}
            />
          </div>
          <CurrentLine
            userCurrentTry={userCurrentTry}
            resetUserCurrentTry={this.resetUserCurrentTry}
            validateColors={this.validateColors}
            isWin={isWin}
          />
        </Board>
        <div>{winStateOrButtons}</div>
      </div>
    );
  }
}
