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

    case C.SET_FEEDBACK_ODD:
      newState.feedback = {
        isOddVal: true,
        isEvenVal: state.feedback.isEvenVal,
      };
      return newState;

    case C.SET_FEEDBACK_EVEN:
      newState.feedback = {
        isOddVal: state.feedback.isOddVal,
        isEvenVal: true,
      };
      return newState;

    case C.REMOVE_FEEDBACK:
      newState.feedback = {
        isOddVal: false,
        isEvenVal: false,
      };
      return newState;

    case C.RECEIVE_API_DATA:
      debugger;
      newState.allNums = action.payload.data;
      return newState;

    default:
      return state;
  }
};
