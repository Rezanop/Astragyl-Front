import React, { ComponentType } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const MOUNTING_NODE = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  MOUNTING_NODE
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
