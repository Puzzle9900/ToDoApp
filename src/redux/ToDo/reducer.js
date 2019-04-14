import {
  FETCH_TODO_FULFILLED,
  UPSERT_TODO_FULFILLED,
  REMOVE_TODO_FULFILLED,
  INITIAL_STATE,
} from './constants'

/**
 * Merge Tasks into the global application state
 */
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TODO_FULFILLED:{
      return {...state, todos: action.payload}
    }
    case UPSERT_TODO_FULFILLED:{
      const newToDo = action.payload
      const todos = {...state.todos, [newToDo.id]: {...newToDo}}
      return {...state, todos}
    }
    case REMOVE_TODO_FULFILLED:{
      const todos = {...state.todos}
      delete todos[action.payload.id]
      return {...state, todos}
    }
    default:
      return state
  }
}
