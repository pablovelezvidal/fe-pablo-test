import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import storeFactory from "./store";
import { Provider } from "react-redux";

const initialState = localStorage["redux-store"]
  ? JSON.parse(localStorage["redux-store"])
  : {
      allNums: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
      ],
      oddNums: [],
      evenNums: [],
      feedback: {
        isOddVal: false,
        isEvenVal: false,
      },
    };

const saveState = () =>
  (localStorage["redux-store"] = JSON.stringify(store.getState()));

const store = storeFactory(initialState);
store.subscribe(saveState);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
