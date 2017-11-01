import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "redux-zero/react";

import "./index.css";

import App from "./App";
import createStore from "redux-zero";
import { initApi } from "./api";

initApi(api => {
  const initialValue = api.field.getValue();
  const initialState = isEmpty(initialValue)
    ? { components: [] }
    : initialValue;
  const store = createStore(initialState);
  api.window.startAutoResizer();
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});

function isEmpty(obj) {
  if (!obj) return true;
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
