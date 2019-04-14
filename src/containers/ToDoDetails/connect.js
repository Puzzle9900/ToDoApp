import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Component from './ToDoDetails'
import { fetchToDoCollection } from 'redux/ToDo'

const mapStateToProps = (state) => ({
  toDoCollection:   state.todo.todos,
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchToDoCollection
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
