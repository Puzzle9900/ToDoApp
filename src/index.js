import React from 'react'
import {render } from 'react-dom';
import configureStore from 'redux-config'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'normalize.css';
import "typeface-roboto";
import AppRouter from 'routes/AppRouter'

const store = configureStore()

render(
    <Provider store={store}>
      <AppRouter />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
