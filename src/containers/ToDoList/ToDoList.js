import React, { memo } from "react";
import PropTypes from 'prop-types';
import ToDoForm from 'components/ToDoForm'
import TextLabel from 'ui-core/TextLabel'
import styled from 'styled-components'

const SListContainer = styled.div`
  width: 50%;

  @media (max-width: 800px) {
    width: 95%;
  }

  @media (min-width: 800px) and (max-width: 1200px) {
    width: 70%;
  }

  & > * {
    margin: 4px 0px 16px 0px;
  }
`

const STextLabel = styled(TextLabel)`
  margin-left: 8px;
`


const RenderList = memo(({toDoCollection, upsertToDo, removeToDo}) => {
  const list = Object.values(toDoCollection)
  const sorted = list.sort((a,b)=> a.createdAt <= b.createdAt ? -1 : 1 )
  const pending = sorted.filter(todo => !todo.done)
  const done = sorted.filter(todo => todo.done)
  return (
    <>
      {!!pending.length && <STextLabel value={'Pending'} typography={'title1'} color={'fadedBlack'}/>}
      {
        pending.map(toDo =>(
            <ToDoForm
              key={toDo.id}
              toDo={toDo}
              upsertToDo={upsertToDo}
              removeToDo={removeToDo}
            />
          )
        )
      }
      {!!done.length && <STextLabel value={'Done'} typography={'title1'} color={'fadedBlack'}/>}
      {
        done.map(toDo => (
            <ToDoForm
              key={toDo.id}
              toDo={toDo}
              upsertToDo={upsertToDo}
              removeToDo={removeToDo}
            />
          )
        )
      }
    </>
  )
})

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
        <RenderList
          toDoCollection={toDoCollection}
          upsertToDo={upsertToDo}
          removeToDo={removeToDo}
        />
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
