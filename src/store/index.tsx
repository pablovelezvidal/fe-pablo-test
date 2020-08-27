import { allNumbersReducer } from "./reducers";
import { createStore, applyMiddleware } from "redux";

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
  return applyMiddleware(consoleMessages)(createStore)(
    allNumbersReducer,
    initialState
  );
};
