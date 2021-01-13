import { PLAYER_O, PLAYER_X, TURN } from '../helpers/actionsTypes';

export function selectXPlayerAction(player) {
  return {
    type: PLAYER_X,
    player,
  };
}

export function selectOPlayerAction(player) {
  return {
    type: PLAYER_O,
    player,
  };
}

export function toggleTurnAction() {
  return {
    type: TURN,
  };
}
