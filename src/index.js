import React from 'react';
import{ createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Store';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
  root.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
