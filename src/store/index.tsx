import { allNumbersReducer } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

const consoleMessages = (store: any) => (next: any) => (action: any) => {
  let result;

  console.groupCollapsed(`dispatching action => ${action.type}`);
  result = next(action);

  let { allNums, evenNums, oddNums } = store.getState();

  console.log(`
		All nums: ${allNums}
		Even Numbers: ${evenNums}
		Odd Numbers: ${oddNums}
	`);

  console.groupEnd();

  return result;
};

export default (initialState = {}) => {
  return applyMiddleware(consoleMessages, sagaMiddleware)(createStore)(
    allNumbersReducer,
    initialState
  );
};
