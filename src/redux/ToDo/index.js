import {
  FETCH_TODO,
} from './constants'

import {
  fetchToDos,
} from './thunks'


export const fetchToDoCollection = () => (
  {
    type:    FETCH_TODO,
    payload: fetchToDos(),
  }
)
