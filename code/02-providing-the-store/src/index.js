import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; //z kniznice react redux zoberem Provider

import './index.css';
import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //componentu provider podsunieme store
  //preto sa to obaluje tu na vrchu, nad App. Cize takto reactu podsunieme nas redux store
  <Provider store={store}>
    <App />
  </Provider>
);
