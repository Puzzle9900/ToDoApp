import React from 'react'
import {render } from 'react-dom';
import configureStore from 'redux-config'
import { Provider } from 'react-redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router } from 'react-router-dom'
// import App from 'components/App'

import AppRouter from 'components/AppRouter'


const store = configureStore()

render(
    <Provider store={store}>
        {/* <Router>
            <App />3
        </Router> */}
        <AppRouter/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
