import uuidv4 from './uuidv4'
import initial_data from './initial_data'
const COLLECTIONS_STORAGE_KEY = 'COLLECTIONS_STORAGE_KEY'



class ServiceEmulator {

  constructor () {
    this.loadEntities = this.loadEntities.bind()
    this.saveEntities = this.saveEntities.bind()

    let entities = this.loadEntities()
    try{
      entities = (entities && JSON.parse(entities)) || {}

    } catch(e){
      throw new Error('Invalid data.')
    }

    this.todos = entities.todos || {}
  }

  upsertToDo(newToDo) {
    let {id, createdAt } = newToDo
    if(!id){
      id = uuidv4()
      createdAt = new Date().toDateString()
    }

    this.todos[id] = {...newToDo, id , createdAt}
    this.saveEntities()
    return this.todos[id]
  }

  deleteToDo(id) {
    if(!id) throw new Error('You are trying to delete invalid ToDo')

    const deletedToDo = this.todos[id]
    delete this.todos[id]
    this.saveEntities()
    return deletedToDo
  }

  saveEntities(){
    const entities = {
      todos: this.todos
    }
    localStorage.setItem(COLLECTIONS_STORAGE_KEY, JSON.stringify(entities))
  }

  loadEntities(){
    let entities = localStorage.getItem(COLLECTIONS_STORAGE_KEY)
    if(!entities){
      // Initialize collection with Taks done to complete this assessment
      const initialData = {}
      initial_data.forEach(data => initialData[data.id] = data )
      localStorage.setItem(COLLECTIONS_STORAGE_KEY, JSON.stringify({todos: initialData}))
      entities = localStorage.getItem(COLLECTIONS_STORAGE_KEY)
    }
    return entities
  }

}

let serviceInstance = null
export default {
  instance: () => {
    if(!serviceInstance) serviceInstance = new ServiceEmulator()
    return serviceInstance
  }
}
