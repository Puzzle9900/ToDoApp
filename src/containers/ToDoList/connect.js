import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Component from './ToDoList'
import { withRouter } from "react-router";
import _ from 'lodash'
import {
  fetchToDoCollection,
  upsert as upsertToDo,
  remove as removeToDo,
} from 'redux/ToDo'

const mapStateToProps = (state) => ({
  toDoCollection:   _.get(state, 'todos.todos', {}),
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchToDoCollection,
    upsertToDo,
    removeToDo,
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component))
