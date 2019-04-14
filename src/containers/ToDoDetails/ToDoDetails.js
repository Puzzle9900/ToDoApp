import React from "react";
import PropTypes from 'prop-types';
import {Colors} from 'themes'
import ToDoForm from 'components/ToDoForm'
import styled from 'styled-components'

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SFormContainer = styled.div`
  width: 40%;
  margin: 24px 24px 24px 24px;
`

const SListContainer = styled.div`
  width: 50%;
  & > * {
    margin: 4px 0px 16px 0px;
}
`


class ToDoDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
        value : "Test"
    }
  }

  componentDidMount(){
    this.props.fetchToDoCollection()
  }

  toDoList = () => {
    const {
      toDoCollection,
      upsertToDo,
      removeToDo
    } = this.props
    return Object.values(toDoCollection)
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

  render() {
    const {
      upsertToDo
    } = this.props

    return (
      <SContainer>
        <SFormContainer>
          <ToDoForm
            upsertToDo={upsertToDo}
          />
        </SFormContainer>
        <SListContainer>
          {this.toDoList()}
        </SListContainer>
      </SContainer>
      )
  }
}

ToDoDetails.propTypes = {
    // List of ToDo
    toDoCollection: PropTypes.object,
    // Fetch ToDo list
    fetchToDoCollection: PropTypes.func,
    // Insert or Update a toDo
    upsertToDo: PropTypes.func,
    // Remove a toDo
    removeToDo: PropTypes.func,
}

ToDoDetails.defaultProps = {
  toDoList: {}
}

export default ToDoDetails;
