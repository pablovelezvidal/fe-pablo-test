import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import storeFactory, { sagaMiddleware } from "./store";
import { Provider } from "react-redux";
import mySaga from "./sagas";
import { myState } from "./store/index";

const initialState: myState = {
  allNums: [],
  oddNums: [],
  evenNums: [],
  feedback: {
    isOddVal: false,
    isEvenVal: false,
  },
};

const store = storeFactory(initialState);
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
