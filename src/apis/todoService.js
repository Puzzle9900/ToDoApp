import servicesEmulator from './servicesEmulator'


export default {
  list : () => new Promise((resolve, rejects)=> {
      const todos = servicesEmulator.instance().todos
      resolve(todos)
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
