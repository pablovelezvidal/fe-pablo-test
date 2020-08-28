import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { allNumbersReducer } from "./reducers";

export const sagaMiddleware = createSagaMiddleware();

export interface myState {
  allNums: number[];
  oddNums: number[];
  evenNums: number[];
  feedback: {
    isEvenVal: boolean;
    isOddVal: boolean;
  };
}

const consoleMessages = (store: any) => (next: any) => (action: any) => {
  let result;
  console.groupCollapsed(`dispatching action => ${action.type}`);
  result = next(action);
  let { allNums, evenNums, oddNums, feedback } = store.getState();
  console.log(`
		All nums: ${allNums}
		Even Numbers: ${evenNums}
    Odd Numbers: ${oddNums}
    Feedback: ${JSON.stringify(feedback)}
	`);
  console.groupEnd();
  return result;
};

export default (initialState: myState | {} = {}) => {
  return applyMiddleware(consoleMessages, sagaMiddleware)(createStore)(
    allNumbersReducer,
    initialState
  );
};
