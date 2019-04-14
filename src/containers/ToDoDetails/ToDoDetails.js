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
  width: 60%;
  margin: 24px 24px 24px 24px;
`

const SListContainer = styled.div`
  width: 80%;
  & > * {
    margin: 16px 0;
}
`


class ToDoDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
        value : "Test"
    }
  }

  render() {
    const {
        value
    } = this.state

    return (
      <SContainer>
        <SFormContainer>
          <ToDoForm />
        </SFormContainer>
        <SListContainer>
          <ToDoForm />
          <ToDoForm />
          <ToDoForm />
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
}

ToDoDetails.defaultProps = {
  toDoList: {}
}

export default ToDoDetails;