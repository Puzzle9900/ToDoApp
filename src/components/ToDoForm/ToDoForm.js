import React, {useState, useCallback} from "react";
import PropTypes from 'prop-types';
import Card from 'ui-core/Card'
import TextInput from 'ui-core/TextInput'
import IconButton from 'ui-core/IconButton'
import Icon from 'ui-core/Icon'
import Done from 'ui-core/Done'
import styled from 'styled-components'


const emptyToDo = {
  id: null,
  description: '',
  done: false,
  label: '',
  createdAt: null,
}

const STextInput = styled(TextInput)`
  margin: 0px 8px 0px 8px;
`

function ToDoForm({
    toDo,
    upsertToDo,
    removeToDo,
    ...other
}) {
  const [newToDo, setToDo] = useState(toDo)


  const changeDesc = (description) => setToDo(prevToDo => ({...prevToDo, description }))
  const changeDone = (done) => setToDo(prevToDo => {
    const newTodo = { ...prevToDo, done }
    upsertToDo(newTodo)
    return newTodo
  })
  const upsertCurrentToDo = () =>  setToDo(prevToDo => {
    if(toDo !== prevToDo) {
      upsertToDo(prevToDo)
    }
    return prevToDo.createdAt ? prevToDo : {...emptyToDo}
  })

  const onChange = useCallback((e) => changeDesc(e.target.value))
  const onKeyPressed = useCallback(
    (e) => { if(e.key === 'Enter') upsertCurrentToDo() },
    [upsertToDo]
  )
  const onBlur = useCallback(upsertCurrentToDo,[upsertToDo])

  const {
    id,
    description,
    createdAt,
    done,
  } = newToDo

  return (
      <Card
        elevation={createdAt ? 0: 8}
        color={'secondary'}
        onBlur={onBlur}
        {...other}>
        {createdAt &&
          <Done
            checked={done}
            onChange={(e)=> changeDone(e.target.checked)}
          />
        }
        <STextInput
          value={description}
          placeholder={'Add a to-do...'}
          typography={'body2'}
          onChange={onChange}
          onKeyDown={onKeyPressed}
        />
        {createdAt ?
          <IconButton onClick={() => removeToDo(id)}>
            <Icon iconName={'delete_outline'} size={'sm'} color={'paleSky'}/>
          </IconButton> : null
        }
      </Card>
  );
}

ToDoForm.propTypes = {
  // ToDo Object
  toDo: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    done: false,
    createdAt: PropTypes.string,
  }),
  // Create or update a ToDo
  upsertToDo: PropTypes.func,
  // Delete a ToDo
  removeToDo: PropTypes.func,
}

ToDoForm.defaultProps = {
  toDo: emptyToDo,
  upsertToDo: ()=>{},
  removeToDo: ()=>{},
}

export default ToDoForm;
