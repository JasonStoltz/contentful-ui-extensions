import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "redux-zero/react"

import './index.css';

import App from './App';
import createStore from "redux-zero";

const init = (process.env.NODE_ENV === 'development') ?
  (callback) => {
    const stubApi = {
      window: {
        startAutoResizer: () => {},
      },
      field: {
        getValue: () => {
          return {}
        }
      }
    };
    callback(stubApi)
  } :
  (callback) => {
    var cfExt = window.contentfulExtension || window.contentfulWidget;
    cfExt.init(function (api) {
      callback(api);
    });
  };

init((api) => {
  const initialValue = api.field.getValue();
  const initialState = (isEmpty(initialValue)) ? {components: []} : initialValue;
  const store = createStore(initialState);
  api.window.startAutoResizer();
  ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
    ),
    document.getElementById('root'));
});

function isEmpty(obj) {
  if (!obj) return true;
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}