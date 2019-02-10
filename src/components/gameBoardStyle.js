import styled from 'styled-components';
import { CORRECT_COLOR, CORRECT_PLACEMENT } from '../utils/constantes';

export const Board = styled.div`
  display: inline-block;
  width: 15%;
  min-width: 350px;
  padding: 20px;
  background-color: #c8baaf;
  border-radius: 5px;
`;

export const ColorItem = styled.div`
  width: 30px;
  height: 30px;
  box-shadow: 0px 0px 2px 1px #0000004a;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 5px;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
`;

export const LineOldColors = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HelpItem = styled.div`
  width: 20px;
  height: 20px;
  box-shadow: 0px 0px 2px 1px #0000004a;
  border-radius: 50%;
  background-color: ${props =>
    (props.state === CORRECT_PLACEMENT && 'black') ||
    (props.state === CORRECT_COLOR && 'white')};
  margin: 5px;
`;

export const ColorBtn = styled.button`
  width: 30px;
  height: 30px;
  box-shadow: 0px 0px 2px 1px #0000004a;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 20px 5px 0px 5px;
  border: none;
`;

export const CurrentColor = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 40px;
`;

export const CurrentColorsBtn = styled.div`
  display: flex;
`;
