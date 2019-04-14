import { fromJS } from 'immutable'
import {
  FETCH_TODO_FULFILLED,
  INITIAL_STATE,
} from './constants'

const initialState = fromJS(INITIAL_STATE)

/**
 * Merge Tasks into the global application state
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_FULFILLED:
      return {...state, todos: action.payload.reduce((todoList, todo) => todoList[todo.id] = todo , {})}
    default:
      return state
  }
}
