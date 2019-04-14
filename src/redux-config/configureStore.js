import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware, promiseMiddleware]
  if (process.env === 'development') {
    // middlewares.push( someSecretMiddleware)
  }
  const middlewareEnhancer = applyMiddleware(...middlewares)


  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  if (process.env === 'development') {
    // middlewares.push( someSecretEnhancers)
  }
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  // Enable hot reloading of Redux store
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
