import API from 'apis/todoService'

/**
 * Tasks to perform async Fetch ToDo
 */
export const fetchToDos = () => (
  new Promise((resolve, reject) => API.todo.list()
    .then((response) => {
      resolve(response)
    })
  )
)

/**
 * Tasks to perform async update or create toDo
 */
export const upsertToDo = (newToDo) => (
  new Promise((resolve, reject) => API.todo.upsert(newToDo)
    .then((response) => {
      resolve(response)
    })
  )
)

/**
 * Tasks to perform async delete toDo
 */
export const deleteToDo = (id) => (
  new Promise((resolve, reject) => API.todo.delete(id)
    .then((response) => {
      resolve(response)
    })
  )
)
