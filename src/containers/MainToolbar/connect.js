import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Component from './MainToolbar'
import _ from 'lodash'
import {
  fetchToDoCollection as filterToDo
} from 'redux/ToDo'

const mapStateToProps = (state) => ({
  toDoCollection:   _.get(state, 'todos.todos', {}),
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    filterToDo
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
