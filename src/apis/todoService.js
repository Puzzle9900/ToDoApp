import serviceEmulator from './serviceEmulator'


export default {
  list : () => new Promise((resolve, rejects)=> {
      const todos = serviceEmulator.instance().todos
      resolve(todos)
  }),
  upsert : (newToDo) => new Promise((resolve, rejects)=> {
      const res = serviceEmulator.instance().upsertToDo(newToDo)
      resolve(res)
  }),
  delete : (id) => new Promise((resolve, rejects)=> {
    const res = serviceEmulator.instance().delete(id)
    resolve(res)
  })
}
