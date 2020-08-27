import C from "../constants";
import { Action } from "../actions";

export const allNumbersReducer = (state: any, action: Action) => {
  const newState: any = { ...state };

  switch (action.type) {
    case C.ADD_ALL:
      newState.allNums.push(action.payload.num);

      newState.oddNums = newState.oddNums.filter(
        (num: number) => num !== action.payload.num
      );
      newState.evenNums = newState.evenNums.filter(
        (num: number) => num !== action.payload.num
      );
      return newState;

    case C.ADD_EVEN:
      newState.evenNums.push(action.payload.num);

      newState.oddNums = newState.oddNums.filter(
        (num: number) => num !== action.payload.num
      );
      newState.allNums = newState.allNums.filter(
        (num: number) => num !== action.payload.num
      );
      return newState;

    case C.ADD_ODD:
      newState.oddNums.push(action.payload.num);

      newState.allNums = newState.allNums.filter(
        (num: number) => num !== action.payload.num
      );
      newState.evenNums = newState.evenNums.filter(
        (num: number) => num !== action.payload.num
      );
      return newState;

    default:
      return state;
  }
};
