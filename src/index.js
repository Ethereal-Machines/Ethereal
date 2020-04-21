/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// importing all the Redux related dependencies
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// imporing the Reducers for the application

import App from './app.jsx';
import './styles/index.css';
import './index.css';    
import rootReducer from './store/reducer'
import registerServiceWorker from './registerServiceWorker';

console.log("-----------------------Changes By Shreyas kannur 100% tested-----------------------");

// Adding the Redux Dev Tool setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
// Creating store for the application
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker(); 