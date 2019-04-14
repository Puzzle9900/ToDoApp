import React, {useState, useCallback} from "react";
import PropTypes from 'prop-types';
import Card from 'components/Card'
import TextInput from 'components/TextInput'
import IconButton from 'components/IconButton'
import Icon from 'components/Icon'
import {Colors, Dimensions} from 'themes'
import styled from 'styled-components'


function ToDoForm({
    toDo,
    upsertTodo,
    deleteTodo,
    ...other
}) {
  const [newToDo, setToDo] = useState(toDo)

  const changeDesc = useCallback(
    (e) => {
      setToDo({...newToDo, description: e.target.value})
    },
  )

  const {
    description,
    createdAt,
    label,
    done,
  } = newToDo

  return (
      <Card
        elevation={8}
        color={'secondary'}
        {...other}>
        <TextInput
          value={description}
          placeholder={'Add a to-do...'}
          typography={'body2'}
          onChange={changeDesc} />
        <IconButton>
          <Icon iconName={'delete_outline'} size={'sm'} color={'primary'}/>
        </IconButton>
      </Card>
  );
}

ToDoForm.propTypes = {
  toDo: PropTypes.shape({
    description: PropTypes.string,
    done: false,
    label: PropTypes.string,
    createdAt: PropTypes.object,
  }),
  upsertTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
}

ToDoForm.defaultProps = {
  toDo: {
    description: '',
    done: false,
    label: '',
    createdAt: null,
  }
}

export default ToDoForm;
