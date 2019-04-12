/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux'

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default combineReducers({
  // nav:            require('redux/Navigation/reducer').reducer,
})
