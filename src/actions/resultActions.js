import { O_WINS, TIE, X_WINS } from '../helpers/actionsTypes';
import { checkVictory } from '../helpers/resultHelper';

export function checkResult(board) {
  console.log(board);
  
  if (checkVictory(board, "X")) {
    return {
      type: X_WINS,
    };
  } else if (checkVictory(board, "O")) {
    return {
      type: O_WINS,
    };
  } else {
    const check = board.filter((symbol) => symbol === null);
    if (check.length === 0) {
      return {
        type: TIE,
      };
    } else {
      return {
        type: "RANDOM",
      };
    }
  }
}
