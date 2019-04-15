import servicesEmulator from './servicesEmulator'


export default {
  list : ({pattern}) => new Promise((resolve, rejects)=> {
      const todos = servicesEmulator.instance().todos
      if(!pattern) return resolve(todos)

      const result = {}
      pattern = pattern.toLowerCase()
      Object.values(todos).forEach(todo => {
        const searchInto = `${todo.description} ${todo.label}`.toLowerCase()
        if(searchInto.includes(pattern)) {
          result[todo.id] = todo
        }
      })
      resolve(result)
  }),
  upsert : (newToDo) => new Promise((resolve, rejects)=> {
      const res = servicesEmulator.instance().upsertToDo(newToDo)
      resolve(res)
  }),
  delete : (id) => new Promise((resolve, rejects)=> {
    const res = servicesEmulator.instance().deleteToDo(id)
    resolve(res)
  })
}
