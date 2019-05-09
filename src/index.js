import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import "./index.css";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById("root")
);
