import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Component from './ToDoDetails'
import _ from 'lodash'
import {
  upsert as upsertToDo,
} from 'redux/ToDo'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    upsertToDo,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
