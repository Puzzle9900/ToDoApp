import React from "react";
import PropTypes from 'prop-types';
import ToDoForm from 'components/ToDoForm'
import ToDoList from 'containers/ToDoList'
import styled from 'styled-components'

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SFormContainer = styled.div`
  width: 40%;
  margin: 24px 24px 24px 24px;

  @media (max-width: 800px) {
    width: 85%;
  }

  @media (min-width: 800px) and (max-width: 1200px) {
    width: 60%;
  }

`

class ToDoDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
    }
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
        <ToDoList />
      </SContainer>
      )
  }
}

ToDoDetails.propTypes = {
    // Insert or Update a toDo
    upsertToDo: PropTypes.func,
}

ToDoDetails.defaultProps = {
  toDoList: {}
}

export default ToDoDetails;
