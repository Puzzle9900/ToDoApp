import React from "react";
import PropTypes from 'prop-types';
import ToDoForm from 'components/ToDoForm'
import styled from 'styled-components'

const SListContainer = styled.div`
  width: 50%;
  & > * {
    margin: 4px 0px 16px 0px;
}
`

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
    }
  }

  componentDidMount(){
    this.props.fetchToDoCollection()
  }

  render() {
    const {
      toDoCollection,
      upsertToDo,
      removeToDo,
      match,
      ...other
    } = this.props

    return (
      <SListContainer {...other}>
        {
          Object.values(toDoCollection)
          .map(toDo =>(
              <ToDoForm
                key={toDo.id}
                toDo={toDo}
                upsertToDo={upsertToDo}
                removeToDo={removeToDo}
              />
            )
          )
        }
      </SListContainer>
    )
  }
}

ToDoList.propTypes = {
    // List of ToDo
    toDoCollection: PropTypes.object,
    // Fetch ToDo list
    fetchToDoCollection: PropTypes.func,
    // Insert or Update a toDo
    upsertToDo: PropTypes.func,
    // Remove a toDo
    removeToDo: PropTypes.func,
}

ToDoList.defaultProps = {
  toDoList: {}
}

export default ToDoList;
