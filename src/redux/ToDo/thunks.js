import API from 'apis/todoService'

/**
 * Tasks to perform async Fetch ToDo
 */
export const fetchToDos = (filterObject) => (
  new Promise((resolve, reject) => API.list(filterObject)
    .then((response) => {
      resolve(response)
    })
  )
)

/**
 * Tasks to perform async update or create toDo
 */
export const upsertToDo = (newToDo) => (
  new Promise((resolve, reject) => API.upsert(newToDo)
    .then((response) => {
      resolve(response)
    })
  )
)

/**
 * Tasks to perform async delete toDo
 */
export const removeToDo = (id) => (
  new Promise((resolve, reject) => API.delete(id)
    .then((response) => {
      resolve(response)
    })
  )
)
