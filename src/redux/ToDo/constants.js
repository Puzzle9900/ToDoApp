/**
 * Tasks constants
 */
/* eslint-disable no-multi-spaces */
const PREFIX = 'TODO'

export const FETCH_TODO           = `${PREFIX}/FETCH_TODO`
export const FETCH_TODO_FULFILLED = `${PREFIX}/FETCH_TODO_FULFILLED`

export const UPSERT_TODO           = `${PREFIX}/UPSERT_TODO`
export const UPSERT_TODO_FULFILLED = `${PREFIX}/UPSERT_TODO_FULFILLED`

export const REMOVE_TODO           = `${PREFIX}/REMOVE_TODO`
export const REMOVE_TODO_FULFILLED = `${PREFIX}/REMOVE_TODO_FULFILLED`


export const INITIAL_STATE = {
  todos: {},
}
