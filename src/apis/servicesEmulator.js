const COLLECTIONS_STORAGE_KEY = 'COLLECTIONS_STORAGE_KEY'

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
}

class ServiceEmulator {

  constructor () {
    this.loadEntities = this.loadEntities.bind()

    let entities = this.loadEntities
    try{
      entities = (entities && JSON.parse(entities)) || {}
    } catch(e){
      throw new Error('Invalid data.')
    }

    this.todos = entities.todos || []
  }

  upsertToDo(newToDo) {
    let id = newToDo.id
    if(!id){
      id = uuidv4()
    }

    this.todos[id] = {...newToDo, id: id }
    this.saveEntities()
    return newToDo
  }

  deleteToDo(id) {
    if(!id) throw new Error('You are trying to delete invalid ToDo')

    const deletedToDo = this.todos[id]
    delete this.todos[id]
    return deletedToDo
  }

  saveEntities(){
    const entities = {
      todos: this.todos
    }
    localStorage.setItem(COLLECTIONS_STORAGE_KEY, JSON.stringify(entities))
  }

  loadEntities(){
    return localStorage.getItem(COLLECTIONS_STORAGE_KEY)
  }

}

let serviceInstance = null
export default {
  instance: () => {
    if(!serviceInstance) serviceInstance = new ServiceEmulator()
    return serviceInstance
  }
}
