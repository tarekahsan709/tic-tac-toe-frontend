import { DRAW_O, DRAW_X } from '../helpers/actionsTypes';

export function drawXAction(cellIndex) {
  return (dispatch) => {
    return new Promise((resolve) => {
      dispatch({
        type: DRAW_X,
        cellIndex,
      });
      resolve();
    });
  };
}

export function drawOAction(cellIndex) {
  return (dispatch) => {
    return new Promise((resolve) => {
      dispatch({
        type: DRAW_O,
        cellIndex,
      });
      resolve();
    });
  };
}
