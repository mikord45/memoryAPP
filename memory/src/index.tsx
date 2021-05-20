import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import reportWebVitals from './reportWebVitals';

import rootReducer from "./reducers/index" 

import './index.css';
import App from './App';

export type RootState = ReturnType<typeof store.getState>

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();