import {
  FETCH_TODO,
  UPSERT_TODO,
  REMOVE_TODO
} from './constants'

import {
  fetchToDos,
  upsertToDo,
  removeToDo,
} from './thunks'


export const fetchToDoCollection = (filterObject) => (dispatch) => {
  dispatch({
    type:    FETCH_TODO,
    payload: fetchToDos(filterObject || {}),
  })
}

export const upsert = (newTodo) => (dispatch) => {
  const {description, label, id} = newTodo
  if(!description && !label){
    if(id){
      remove(id)(dispatch)
    }
  }
  else{
    dispatch({
      type:    UPSERT_TODO,
      payload: upsertToDo(newTodo),
    })
  }
}
export const remove = (id) => (dispatch) => {
  dispatch({
    type:    REMOVE_TODO,
    payload: removeToDo(id),
  })
}
